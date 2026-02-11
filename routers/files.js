import { randomUUID } from 'crypto';

async function filesRoutes(fastify, options) {
    const { prisma } = options;

    /**
     * Generate a unique object key for MinIO storage
     * Format: {entityType}/{entityId}/{timestamp}-{uuid}-{filename}
     */
    function generateObjectKey(filename, entityType = 'general', entityId = 0) {
        const timestamp = Date.now();
        const uuid = randomUUID();
        const sanitizedFilename = filename.replace(/[^a-zA-Z0-9.-]/g, '_');
        return `${entityType}/${entityId}/${timestamp}-${uuid}-${sanitizedFilename}`;
    }

    // POST upload single file
    fastify.post("/files/upload", {
        preHandler: [fastify.authenticate],
        schema: {
            tags: ['Files'],
            summary: 'Upload a single file',
            description: 'Upload a file to MinIO storage with optional entity association',
            security: [{ bearerAuth: [] }],
            querystring: {
                type: 'object',
                properties: {
                    entityType: { type: 'string', description: 'Entity type (e.g., product, contract, invoice)' },
                    entityId: { type: 'integer', description: 'Entity ID to associate the file with' }
                }
            },
            consumes: ['multipart/form-data'],
            response: {
                201: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer' },
                        filename: { type: 'string' },
                        objectKey: { type: 'string' },
                        mimetype: { type: 'string' },
                        size: { type: 'integer' },
                        entityType: { type: 'string' },
                        entityId: { type: 'integer' },
                        uploadedBy: { type: 'string' },
                        createdAt: { type: 'string' }
                    }
                }
            }
        }
    }, async (request, reply) => {
        try {
            const data = await request.file();
            
            if (!data) {
                return reply.code(400).send({ error: 'No file provided' });
            }

            const { entityType, entityId } = request.query;
            const filename = data.filename;
            const mimetype = data.mimetype;
            
            // Generate unique object key
            const objectKey = generateObjectKey(
                filename,
                entityType || 'general',
                entityId || 0
            );

            // Collect file buffer for size and upload
            const chunks = [];
            for await (const chunk of data.file) {
                chunks.push(chunk);
            }
            const fileBuffer = Buffer.concat(chunks);
            const size = fileBuffer.length;

            // Upload to MinIO
            await fastify.minio.uploadFile(objectKey, fileBuffer, size, mimetype);

            // Save metadata to database
            const file = await prisma.file.create({
                data: {
                    filename,
                    objectKey,
                    mimetype,
                    size,
                    entityType: entityType || null,
                    entityId: entityId ? parseInt(entityId) : null,
                    uploadedBy: request.user?.id || null
                }
            });

            reply.code(201).send(file);
        } catch (error) {
            fastify.log.error(error);
            reply.code(500).send({ error: 'Failed to upload file', message: error.message });
        }
    });

    // POST upload multiple files
    fastify.post("/files/upload-multiple", {
        preHandler: [fastify.authenticate],
        schema: {
            tags: ['Files'],
            summary: 'Upload multiple files',
            description: 'Upload multiple files to MinIO storage with optional entity association',
            security: [{ bearerAuth: [] }],
            querystring: {
                type: 'object',
                properties: {
                    entityType: { type: 'string', description: 'Entity type (e.g., product, contract, invoice)' },
                    entityId: { type: 'integer', description: 'Entity ID to associate the files with' }
                }
            },
            consumes: ['multipart/form-data'],
            response: {
                201: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            id: { type: 'integer' },
                            filename: { type: 'string' },
                            objectKey: { type: 'string' },
                            mimetype: { type: 'string' },
                            size: { type: 'integer' },
                            entityType: { type: 'string' },
                            entityId: { type: 'integer' },
                            uploadedBy: { type: 'string' },
                            createdAt: { type: 'string' }
                        }
                    }
                }
            }
        }
    }, async (request, reply) => {
        try {
            const parts = request.parts();
            const { entityType, entityId } = request.query;
            const uploadedFiles = [];

            for await (const part of parts) {
                if (part.type === 'file') {
                    const filename = part.filename;
                    const mimetype = part.mimetype;

                    // Generate unique object key
                    const objectKey = generateObjectKey(
                        filename,
                        entityType || 'general',
                        entityId || 0
                    );

                    // Collect file buffer
                    const chunks = [];
                    for await (const chunk of part.file) {
                        chunks.push(chunk);
                    }
                    const fileBuffer = Buffer.concat(chunks);
                    const size = fileBuffer.length;

                    // Upload to MinIO
                    await fastify.minio.uploadFile(objectKey, fileBuffer, size, mimetype);

                    // Save metadata to database
                    const file = await prisma.file.create({
                        data: {
                            filename,
                            objectKey,
                            mimetype,
                            size,
                            entityType: entityType || null,
                            entityId: entityId ? parseInt(entityId) : null,
                            uploadedBy: request.user?.id || null
                        }
                    });

                    uploadedFiles.push(file);
                }
            }

            if (uploadedFiles.length === 0) {
                return reply.code(400).send({ error: 'No files provided' });
            }

            reply.code(201).send(uploadedFiles);
        } catch (error) {
            fastify.log.error(error);
            reply.code(500).send({ error: 'Failed to upload files', message: error.message });
        }
    });

    // GET list files with filters
    fastify.get("/files", {
        preHandler: [fastify.authenticate],
        schema: {
            tags: ['Files'],
            summary: 'List all files',
            description: 'Get a list of all files with optional filtering',
            security: [{ bearerAuth: [] }],
            querystring: {
                type: 'object',
                properties: {
                    entityType: { type: 'string', description: 'Filter by entity type' },
                    entityId: { type: 'integer', description: 'Filter by entity ID' },
                    active: { type: 'boolean', description: 'Filter by active status' },
                    limit: { type: 'integer', default: 50, description: 'Number of results to return' },
                    offset: { type: 'integer', default: 0, description: 'Number of results to skip' }
                }
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        files: {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    id: { type: 'integer' },
                                    filename: { type: 'string' },
                                    objectKey: { type: 'string' },
                                    mimetype: { type: 'string' },
                                    size: { type: 'integer' },
                                    entityType: { type: 'string' },
                                    entityId: { type: 'integer' },
                                    uploadedBy: { type: 'string' },
                                    createdAt: { type: 'string' },
                                    active: { type: 'boolean' }
                                }
                            }
                        },
                        total: { type: 'integer' }
                    }
                }
            }
        }
    }, async (request, reply) => {
        const { entityType, entityId, active, limit = 50, offset = 0 } = request.query;

        const where = {};
        if (entityType) where.entityType = entityType;
        if (entityId) where.entityId = parseInt(entityId);
        if (active !== undefined) where.active = active;

        const [files, total] = await Promise.all([
            prisma.file.findMany({
                where,
                take: parseInt(limit),
                skip: parseInt(offset),
                orderBy: { createdAt: 'desc' }
            }),
            prisma.file.count({ where })
        ]);

        return { files, total };
    });

    // GET file metadata by ID
    fastify.get("/files/:id", {
        preHandler: [fastify.authenticate],
        schema: {
            tags: ['Files'],
            summary: 'Get file metadata',
            description: 'Get metadata for a specific file by ID',
            security: [{ bearerAuth: [] }],
            params: {
                type: 'object',
                properties: {
                    id: { type: 'integer', description: 'File ID' }
                },
                required: ['id']
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer' },
                        filename: { type: 'string' },
                        objectKey: { type: 'string' },
                        mimetype: { type: 'string' },
                        size: { type: 'integer' },
                        entityType: { type: 'string' },
                        entityId: { type: 'integer' },
                        uploadedBy: { type: 'string' },
                        createdAt: { type: 'string' },
                        active: { type: 'boolean' }
                    }
                }
            }
        }
    }, async (request, reply) => {
        const { id } = request.params;
        const file = await prisma.file.findUnique({
            where: { id: parseInt(id) }
        });

        if (!file) {
            return reply.code(404).send({ error: 'File not found' });
        }

        return file;
    });

    // GET download file
    fastify.get("/files/:id/download", {
        preHandler: [fastify.authenticate],
        schema: {
            tags: ['Files'],
            summary: 'Download a file',
            description: 'Download a file by ID (streams from MinIO)',
            security: [{ bearerAuth: [] }],
            params: {
                type: 'object',
                properties: {
                    id: { type: 'integer', description: 'File ID' }
                },
                required: ['id']
            }
        }
    }, async (request, reply) => {
        try {
            const { id } = request.params;
            const file = await prisma.file.findUnique({
                where: { id: parseInt(id) }
            });

            if (!file) {
                return reply.code(404).send({ error: 'File not found' });
            }

            if (!file.active) {
                return reply.code(410).send({ error: 'File has been deleted' });
            }

            const stream = await fastify.minio.getFileStream(file.objectKey);

            reply
                .header('Content-Type', file.mimetype)
                .header('Content-Disposition', `attachment; filename="${file.filename}"`)
                .header('Content-Length', file.size);

            return reply.send(stream);
        } catch (error) {
            fastify.log.error(error);
            return reply.code(500).send({ error: 'Failed to download file', message: error.message });
        }
    });

    // GET view file inline (for images, PDFs, etc.)
    fastify.get("/files/:id/view", {
        preHandler: [fastify.authenticate],
        schema: {
            tags: ['Files'],
            summary: 'View file inline',
            description: 'View a file inline in the browser (for images, PDFs, etc.)',
            security: [{ bearerAuth: [] }],
            params: {
                type: 'object',
                properties: {
                    id: { type: 'integer', description: 'File ID' }
                },
                required: ['id']
            }
        }
    }, async (request, reply) => {
        try {
            const { id } = request.params;
            const file = await prisma.file.findUnique({
                where: { id: parseInt(id) }
            });

            if (!file) {
                return reply.code(404).send({ error: 'File not found' });
            }

            if (!file.active) {
                return reply.code(410).send({ error: 'File has been deleted' });
            }

            const stream = await fastify.minio.getFileStream(file.objectKey);

            reply
                .header('Content-Type', file.mimetype)
                .header('Content-Disposition', `inline; filename="${file.filename}"`)
                .header('Content-Length', file.size);

            return reply.send(stream);
        } catch (error) {
            fastify.log.error(error);
            return reply.code(500).send({ error: 'Failed to retrieve file', message: error.message });
        }
    });

    // GET files by entity
    fastify.get("/files/entity/:type/:entityId", {
        preHandler: [fastify.authenticate],
        schema: {
            tags: ['Files'],
            summary: 'Get files by entity',
            description: 'Get all files associated with a specific entity',
            security: [{ bearerAuth: [] }],
            params: {
                type: 'object',
                properties: {
                    type: { type: 'string', description: 'Entity type' },
                    entityId: { type: 'integer', description: 'Entity ID' }
                },
                required: ['type', 'entityId']
            },
            response: {
                200: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            id: { type: 'integer' },
                            filename: { type: 'string' },
                            objectKey: { type: 'string' },
                            mimetype: { type: 'string' },
                            size: { type: 'integer' },
                            entityType: { type: 'string' },
                            entityId: { type: 'integer' },
                            uploadedBy: { type: 'string' },
                            createdAt: { type: 'string' },
                            active: { type: 'boolean' }
                        }
                    }
                }
            }
        }
    }, async (request, reply) => {
        const { type, entityId } = request.params;

        const files = await prisma.file.findMany({
            where: {
                entityType: type,
                entityId: parseInt(entityId),
                active: true
            },
            orderBy: { createdAt: 'desc' }
        });

        return files;
    });

    // DELETE soft delete file
    fastify.delete("/files/:id", {
        preHandler: [fastify.authenticate],
        schema: {
            tags: ['Files'],
            summary: 'Soft delete a file',
            description: 'Mark a file as inactive (soft delete). File remains in storage.',
            security: [{ bearerAuth: [] }],
            params: {
                type: 'object',
                properties: {
                    id: { type: 'integer', description: 'File ID' }
                },
                required: ['id']
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        message: { type: 'string' },
                        id: { type: 'integer' }
                    }
                }
            }
        }
    }, async (request, reply) => {
        const { id } = request.params;

        const file = await prisma.file.findUnique({
            where: { id: parseInt(id) }
        });

        if (!file) {
            return reply.code(404).send({ error: 'File not found' });
        }

        await prisma.file.update({
            where: { id: parseInt(id) },
            data: { active: false }
        });

        return { message: 'File deleted successfully', id: parseInt(id) };
    });

    // DELETE permanent delete file
    fastify.delete("/files/:id/permanent", {
        preHandler: [fastify.authenticate],
        schema: {
            tags: ['Files'],
            summary: 'Permanently delete a file',
            description: 'Permanently delete a file from storage and database',
            security: [{ bearerAuth: [] }],
            params: {
                type: 'object',
                properties: {
                    id: { type: 'integer', description: 'File ID' }
                },
                required: ['id']
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        message: { type: 'string' },
                        id: { type: 'integer' }
                    }
                }
            }
        }
    }, async (request, reply) => {
        try {
            const { id } = request.params;

            const file = await prisma.file.findUnique({
                where: { id: parseInt(id) }
            });

            if (!file) {
                return reply.code(404).send({ error: 'File not found' });
            }

            // Delete from MinIO
            await fastify.minio.deleteFile(file.objectKey);

            // Delete from database
            await prisma.file.delete({
                where: { id: parseInt(id) }
            });

            return { message: 'File permanently deleted', id: parseInt(id) };
        } catch (error) {
            fastify.log.error(error);
            return reply.code(500).send({ error: 'Failed to delete file', message: error.message });
        }
    });

    // GET presigned URL for direct download (optional - useful for large files)
    fastify.get("/files/:id/presigned-url", {
        preHandler: [fastify.authenticate],
        schema: {
            tags: ['Files'],
            summary: 'Get presigned URL',
            description: 'Get a temporary presigned URL for direct file access',
            security: [{ bearerAuth: [] }],
            params: {
                type: 'object',
                properties: {
                    id: { type: 'integer', description: 'File ID' }
                },
                required: ['id']
            },
            querystring: {
                type: 'object',
                properties: {
                    expiry: { type: 'integer', default: 3600, description: 'URL expiry time in seconds' }
                }
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        url: { type: 'string' },
                        expiresIn: { type: 'integer' }
                    }
                }
            }
        }
    }, async (request, reply) => {
        try {
            const { id } = request.params;
            const { expiry = 3600 } = request.query;

            const file = await prisma.file.findUnique({
                where: { id: parseInt(id) }
            });

            if (!file) {
                return reply.code(404).send({ error: 'File not found' });
            }

            if (!file.active) {
                return reply.code(410).send({ error: 'File has been deleted' });
            }

            const url = await fastify.minio.getPresignedUrl(file.objectKey, parseInt(expiry));

            return { url, expiresIn: parseInt(expiry) };
        } catch (error) {
            fastify.log.error(error);
            return reply.code(500).send({ error: 'Failed to generate presigned URL', message: error.message });
        }
    });

    // PUT restore soft-deleted file
    fastify.put("/files/:id/restore", {
        preHandler: [fastify.authenticate],
        schema: {
            tags: ['Files'],
            summary: 'Restore a deleted file',
            description: 'Restore a soft-deleted file by setting active to true',
            security: [{ bearerAuth: [] }],
            params: {
                type: 'object',
                properties: {
                    id: { type: 'integer', description: 'File ID' }
                },
                required: ['id']
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        message: { type: 'string' },
                        file: {
                            type: 'object',
                            properties: {
                                id: { type: 'integer' },
                                filename: { type: 'string' },
                                active: { type: 'boolean' }
                            }
                        }
                    }
                }
            }
        }
    }, async (request, reply) => {
        const { id } = request.params;

        const file = await prisma.file.findUnique({
            where: { id: parseInt(id) }
        });

        if (!file) {
            return reply.code(404).send({ error: 'File not found' });
        }

        const updatedFile = await prisma.file.update({
            where: { id: parseInt(id) },
            data: { active: true }
        });

        return { message: 'File restored successfully', file: updatedFile };
    });
}

export default filesRoutes;











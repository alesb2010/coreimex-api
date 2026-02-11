import fp from 'fastify-plugin';
import * as Minio from 'minio';

async function minioPlugin(fastify, options) {
    // Validate required environment variables
    const requiredEnvVars = ['MINIO_ENDPOINT', 'MINIO_ACCESS_KEY', 'MINIO_SECRET_KEY'];
    for (const envVar of requiredEnvVars) {
        if (!process.env[envVar]) {
            throw new Error(`${envVar} environment variable is required for MinIO.`);
        }
    }

    const bucketName = process.env.MINIO_BUCKET || 'coreimex-files';

    // Initialize MinIO client
    const minioClient = new Minio.Client({
        endPoint: process.env.MINIO_ENDPOINT,
        port: parseInt(process.env.MINIO_PORT || '9000'),
        useSSL: process.env.MINIO_USE_SSL === 'true',
        accessKey: process.env.MINIO_ACCESS_KEY,
        secretKey: process.env.MINIO_SECRET_KEY
    });

    // Ensure bucket exists
    try {
        const bucketExists = await minioClient.bucketExists(bucketName);
        if (!bucketExists) {
            await minioClient.makeBucket(bucketName);
            fastify.log.info(`MinIO bucket "${bucketName}" created successfully`);
        } else {
            fastify.log.info(`MinIO bucket "${bucketName}" already exists`);
        }
    } catch (error) {
        fastify.log.error(`Failed to initialize MinIO bucket: ${error.message}`);
        throw error;
    }

    /**
     * Upload a file to MinIO
     * @param {string} objectKey - The key/path for the object in the bucket
     * @param {Buffer|Stream} data - The file data
     * @param {number} size - The size of the file in bytes
     * @param {string} mimetype - The MIME type of the file
     * @returns {Promise<{etag: string, versionId: string|null}>}
     */
    async function uploadFile(objectKey, data, size, mimetype) {
        const metaData = {
            'Content-Type': mimetype
        };
        return await minioClient.putObject(bucketName, objectKey, data, size, metaData);
    }

    /**
     * Get a readable stream for a file from MinIO
     * @param {string} objectKey - The key/path of the object in the bucket
     * @returns {Promise<Stream>}
     */
    async function getFileStream(objectKey) {
        return await minioClient.getObject(bucketName, objectKey);
    }

    /**
     * Get file statistics/metadata from MinIO
     * @param {string} objectKey - The key/path of the object in the bucket
     * @returns {Promise<Object>}
     */
    async function getFileStat(objectKey) {
        return await minioClient.statObject(bucketName, objectKey);
    }

    /**
     * Delete a file from MinIO
     * @param {string} objectKey - The key/path of the object in the bucket
     * @returns {Promise<void>}
     */
    async function deleteFile(objectKey) {
        return await minioClient.removeObject(bucketName, objectKey);
    }

    /**
     * Generate a presigned URL for downloading a file
     * @param {string} objectKey - The key/path of the object in the bucket
     * @param {number} expirySeconds - URL expiry time in seconds (default: 1 hour)
     * @returns {Promise<string>}
     */
    async function getPresignedUrl(objectKey, expirySeconds = 3600) {
        return await minioClient.presignedGetObject(bucketName, objectKey, expirySeconds);
    }

    /**
     * Generate a presigned URL for uploading a file (for direct uploads)
     * @param {string} objectKey - The key/path of the object in the bucket
     * @param {number} expirySeconds - URL expiry time in seconds (default: 1 hour)
     * @returns {Promise<string>}
     */
    async function getPresignedUploadUrl(objectKey, expirySeconds = 3600) {
        return await minioClient.presignedPutObject(bucketName, objectKey, expirySeconds);
    }

    /**
     * List objects in the bucket with optional prefix
     * @param {string} prefix - The prefix to filter objects (e.g., "products/")
     * @param {boolean} recursive - Whether to list recursively
     * @returns {Promise<Array>}
     */
    async function listObjects(prefix = '', recursive = true) {
        return new Promise((resolve, reject) => {
            const objects = [];
            const stream = minioClient.listObjects(bucketName, prefix, recursive);
            
            stream.on('data', (obj) => objects.push(obj));
            stream.on('error', reject);
            stream.on('end', () => resolve(objects));
        });
    }

    /**
     * Copy an object within the bucket
     * @param {string} sourceKey - Source object key
     * @param {string} destKey - Destination object key
     * @returns {Promise<Object>}
     */
    async function copyFile(sourceKey, destKey) {
        const conds = new Minio.CopyConditions();
        return await minioClient.copyObject(bucketName, destKey, `/${bucketName}/${sourceKey}`, conds);
    }

    // Decorate fastify with MinIO utilities
    fastify.decorate('minio', {
        client: minioClient,
        bucketName,
        uploadFile,
        getFileStream,
        getFileStat,
        deleteFile,
        getPresignedUrl,
        getPresignedUploadUrl,
        listObjects,
        copyFile
    });

    fastify.log.info('MinIO plugin initialized successfully');
}

export default fp(minioPlugin);











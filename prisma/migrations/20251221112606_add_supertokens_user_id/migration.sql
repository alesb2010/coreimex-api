/*
  Warnings:

  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[superTokensUserId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `superTokensUserId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "password",
ADD COLUMN     "superTokensUserId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_superTokensUserId_key" ON "User"("superTokensUserId");

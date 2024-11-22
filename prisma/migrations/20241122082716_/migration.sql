/*
  Warnings:

  - You are about to drop the column `tags` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "tags";

-- DropEnum
DROP TYPE "PostTag";

-- CreateTable
CREATE TABLE "PostTag" (
    "id" TEXT NOT NULL,
    "red" BOOLEAN NOT NULL,
    "green" BOOLEAN NOT NULL,
    "blue" BOOLEAN NOT NULL,
    "yellow" BOOLEAN NOT NULL,
    "postId" TEXT NOT NULL,

    CONSTRAINT "PostTag_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PostTag_postId_key" ON "PostTag"("postId");

-- AddForeignKey
ALTER TABLE "PostTag" ADD CONSTRAINT "PostTag_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the `PostTag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PostTag" DROP CONSTRAINT "PostTag_postId_fkey";

-- DropTable
DROP TABLE "PostTag";

-- CreateTable
CREATE TABLE "PostTags" (
    "id" TEXT NOT NULL,
    "red" BOOLEAN NOT NULL,
    "green" BOOLEAN NOT NULL,
    "blue" BOOLEAN NOT NULL,
    "yellow" BOOLEAN NOT NULL,
    "postId" TEXT NOT NULL,

    CONSTRAINT "PostTags_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PostTags_postId_key" ON "PostTags"("postId");

-- AddForeignKey
ALTER TABLE "PostTags" ADD CONSTRAINT "PostTags_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

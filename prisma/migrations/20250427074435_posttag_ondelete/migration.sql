-- DropForeignKey
ALTER TABLE "PostTags" DROP CONSTRAINT "PostTags_postId_fkey";

-- AddForeignKey
ALTER TABLE "PostTags" ADD CONSTRAINT "PostTags_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

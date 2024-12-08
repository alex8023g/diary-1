/*
  Warnings:

  - You are about to drop the column `purple` on the `PostTags` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PostTags" DROP COLUMN "purple",
ADD COLUMN     "fuchsia" BOOLEAN NOT NULL DEFAULT false;

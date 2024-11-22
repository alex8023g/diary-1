/*
  Warnings:

  - The primary key for the `PostTags` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `PostTags` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PostTags" DROP CONSTRAINT "PostTags_pkey",
DROP COLUMN "id";

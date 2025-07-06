/*
  Warnings:

  - The `status` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('active', 'pending', 'error');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "status",
ADD COLUMN     "status" "UserStatus" NOT NULL DEFAULT 'active';

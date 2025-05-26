-- CreateEnum
CREATE TYPE "AuthType" AS ENUM ('google', 'github');

-- CreateEnum
CREATE TYPE "ProjectStatus" AS ENUM ('published', 'draft');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "authType" TEXT NOT NULL,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "institute" TEXT,
    "class" TEXT,
    "subject" TEXT,
    "total_marks" INTEGER NOT NULL,
    "status" "ProjectStatus" NOT NULL,
    "version" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "marks" INTEGER NOT NULL,
    "chapter" TEXT,
    "difficulty" TEXT,
    "type" TEXT,
    "answer" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "keywords" TEXT[],

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - The primary key for the `Messages` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Messages` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `portfolioId` on the `Messages` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `Portfolio` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Portfolio` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `Projects` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Projects` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `portfolioId` on the `Projects` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `Skills` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Skills` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `portfolioId` on the `Skills` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Messages" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "portfolioId" INTEGER NOT NULL,
    CONSTRAINT "Messages_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "Portfolio" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Messages" ("email", "id", "message", "name", "portfolioId") SELECT "email", "id", "message", "name", "portfolioId" FROM "Messages";
DROP TABLE "Messages";
ALTER TABLE "new_Messages" RENAME TO "Messages";
CREATE TABLE "new_Portfolio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "job" TEXT NOT NULL,
    "image" TEXT NOT NULL
);
INSERT INTO "new_Portfolio" ("id", "image", "job", "name") SELECT "id", "image", "job", "name" FROM "Portfolio";
DROP TABLE "Portfolio";
ALTER TABLE "new_Portfolio" RENAME TO "Portfolio";
CREATE TABLE "new_Projects" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "githubUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "portfolioId" INTEGER NOT NULL,
    CONSTRAINT "Projects_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "Portfolio" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Projects" ("description", "githubUrl", "id", "image", "name", "portfolioId", "url") SELECT "description", "githubUrl", "id", "image", "name", "portfolioId", "url" FROM "Projects";
DROP TABLE "Projects";
ALTER TABLE "new_Projects" RENAME TO "Projects";
CREATE TABLE "new_Skills" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "rate" INTEGER NOT NULL,
    "portfolioId" INTEGER NOT NULL,
    CONSTRAINT "Skills_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "Portfolio" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Skills" ("id", "name", "portfolioId", "rate") SELECT "id", "name", "portfolioId", "rate" FROM "Skills";
DROP TABLE "Skills";
ALTER TABLE "new_Skills" RENAME TO "Skills";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

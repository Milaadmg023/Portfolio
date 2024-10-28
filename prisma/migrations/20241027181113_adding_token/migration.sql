/*
  Warnings:

  - Added the required column `token` to the `Portfolio` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Portfolio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "job" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "token" TEXT NOT NULL
);
INSERT INTO "new_Portfolio" ("id", "image", "job", "name", "password", "username") SELECT "id", "image", "job", "name", "password", "username" FROM "Portfolio";
DROP TABLE "Portfolio";
ALTER TABLE "new_Portfolio" RENAME TO "Portfolio";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

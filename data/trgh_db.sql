BEGIN;

DROP TABLE
    IF EXISTS "Members",
    "Genres",
    "Editors",
    "Developers",
    "Collections",
    "Platforms",
    "Games",
    "Games_Platforms",
    "Games_Editors",
    "Games_Genres",
    "Games_Developers",
    "Collections_Games",
    "Collections_Platforms" CASCADE;

CREATE TABLE
    "Members" (
        "id" INT GENERATED ALWAYS AS IDENTITY,
        "nickname" VARCHAR(255) UNIQUE NOT NULL,
        "email" VARCHAR(255) UNIQUE NOT NULL,
        "role" INTEGER NOT NULL,
        "password" VARCHAR(255) NOT NULL,
        "confirmUseConditions" BOOLEAN NOT NULL,
        "isActive" BOOLEAN,
        "activationToken" VARCHAR(255) NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY ("id")
    );

CREATE TABLE
    "Genres" (
        "id" INT GENERATED ALWAYS AS IDENTITY,
        "name" VARCHAR(255) NOT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY ("id")
    );

CREATE TABLE
    "Editors" (
        "id" INT GENERATED ALWAYS AS IDENTITY,
        "name" VARCHAR(255) NOT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY ("id")
    );

CREATE TABLE
    "Developers" (
        "id" INT GENERATED ALWAYS AS IDENTITY,
        "name" VARCHAR(255) NOT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY ("id")
    );

CREATE TABLE
    "Collections" (
        "id" INT GENERATED ALWAYS AS IDENTITY,
        "name" VARCHAR(255) NOT NULL,
        "MemberId" INT NOT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY ("id"),
        FOREIGN KEY ("MemberId") REFERENCES "Members" ("id")
    );

CREATE TABLE
    "Platforms" (
        "id" INT GENERATED ALWAYS AS IDENTITY,
        "title" VARCHAR(255) NOT NULL,
        "price" DECIMAL(10, 2) NOT NULL,
        "releaseDate" DATE NOT NULL,
        "state" VARCHAR(255) NOT NULL,
        "manufacturer" VARCHAR(255) NOT NULL,
        "cover" VARCHAR(255) NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY ("id")
    );

CREATE TABLE
    "Games" (
        "id" INT GENERATED ALWAYS AS IDENTITY,
        "title" VARCHAR(255) NOT NULL,
        "description" TEXT NOT NULL,
        "price" DECIMAL(10, 2) NOT NULL,
        "releaseDate" DATE NOT NULL,
        "state" VARCHAR(255) NOT NULL,
        "note" FLOAT NOT NULL,
        "location" VARCHAR(255) NOT NULL,
        "cover" VARCHAR(255) NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY ("id")
    );

CREATE TABLE
    "Games_Platforms" (
        "id" INT GENERATED ALWAYS AS IDENTITY,
        "games_id" INT NULL,
        "platforms_id" INT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY ("id"),
        FOREIGN KEY ("games_id") REFERENCES "Games" ("id"),
        FOREIGN KEY ("platforms_id") REFERENCES "Platforms" ("id")
    );

CREATE TABLE
    "Games_Editors" (
        "id" INT GENERATED ALWAYS AS IDENTITY,
        "games_id" INT NULL,
        "editors_id" INT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY ("id"),
        FOREIGN KEY ("games_id") REFERENCES "Games" ("id"),
        FOREIGN KEY ("editors_id") REFERENCES "Editors" ("id")
    );

CREATE TABLE
    "Games_Genres" (
        "id" INT GENERATED ALWAYS AS IDENTITY,
        "games_id" INT NULL,
        "genres_id" INT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY ("id"),
        FOREIGN KEY ("games_id") REFERENCES "Games" ("id"),
        FOREIGN KEY ("genres_id") REFERENCES "Genres" ("id")
    );

CREATE TABLE
    "Games_Developers" (
        "id" INT GENERATED ALWAYS AS IDENTITY,
        "games_id" INT NULL,
        "developers_id" INT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY ("id"),
        FOREIGN KEY ("games_id") REFERENCES "Games" ("id"),
        FOREIGN KEY ("developers_id") REFERENCES "Developers" ("id")
    );

CREATE TABLE
    "Collections_Games" (
        "id" INT GENERATED ALWAYS AS IDENTITY,
        "collections_id" INT NULL,
        "games_id" INT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY ("id"),
        FOREIGN KEY ("collections_id") REFERENCES "Collections" ("id"),
        FOREIGN KEY ("games_id") REFERENCES "Games" ("id")
    );

CREATE TABLE
    "Collections_Platforms" (
        "id" INT GENERATED ALWAYS AS IDENTITY,
        "collections_id" INT NULL,
        "platforms_id" INT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY ("id"),
        FOREIGN KEY ("collections_id") REFERENCES "Collections" ("id"),
        FOREIGN KEY ("platforms_id") REFERENCES "Platforms" ("id")
    );

COMMIT;
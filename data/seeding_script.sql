BEGIN;

INSERT INTO
    Platforms (
        title,
        price,
        releaseDate,
        state,
        manufacturer,
        cover
    )
VALUES (
        'NES',
        200.0,
        '1983-07-15',
        'discontinued',
        'Nintendo',
        'https://example.com/nes-cover.jpg'
    );

INSERT INTO
    Platforms (
        title,
        price,
        releaseDate,
        state,
        manufacturer,
        cover
    )
VALUES (
        'SNES',
        200.0,
        '1990-11-21',
        'discontinued',
        'Nintendo',
        'https://example.com/snes-cover.jpg'
    );

INSERT INTO
    Platforms (
        title,
        price,
        releaseDate,
        state,
        manufacturer,
        cover
    )
VALUES (
        'Nintendo 64',
        200.0,
        '1996-06-23',
        'discontinued',
        'Nintendo',
        'https://example.com/n64-cover.jpg'
    );

INSERT INTO
    Platforms (
        title,
        price,
        releaseDate,
        state,
        manufacturer,
        cover
    )
VALUES (
        'GameCube',
        200.0,
        '2001-09-14',
        'discontinued',
        'Nintendo',
        'https://example.com/gamecube-cover.jpg'
    );

INSERT INTO
    Platforms (
        title,
        price,
        releaseDate,
        state,
        manufacturer,
        cover
    )
VALUES (
        'Wii',
        200.0,
        '2006-11-19',
        'discontinued',
        'Nintendo',
        'https://example.com/wii-cover.jpg'
    );

INSERT INTO Genres (name) VALUES ('Platformer');

INSERT INTO Genres (name) VALUES ('RPG');

INSERT INTO Genres (name) VALUES ('Action');

INSERT INTO Genres (name) VALUES ('Adventure');

INSERT INTO Genres (name) VALUES ('Simulation');

INSERT INTO Genres (name) VALUES ('Strategy');

INSERT INTO Genres (name) VALUES ('Sports');

INSERT INTO Genres (name) VALUES ('Puzzle');

INSERT INTO Genres (name) VALUES ('Racing');

INSERT INTO Genres (name) VALUES ('Fighting');

INSERT INTO Genres (name) VALUES ('Shooter');

INSERT INTO Editors (name) VALUES ('Nintendo');

INSERT INTO Editors (name) VALUES ('Square Enix');

INSERT INTO Editors (name) VALUES ('Capcom');

INSERT INTO Editors (name) VALUES ('Konami');

INSERT INTO Editors (name) VALUES ('Ubisoft');

INSERT INTO Editors (name) VALUES ('Electronic Arts');

INSERT INTO Editors (name) VALUES ('Activision');

INSERT INTO Editors (name)
VALUES (
        'Sony Interactive Entertainment'
    );

INSERT INTO Editors (name) VALUES ('Microsoft Studios');

INSERT INTO Editors (name) VALUES ('Sega');

INSERT INTO Developers (name) VALUES ('Nintendo');

INSERT INTO Developers (name) VALUES ('Square Enix');

INSERT INTO Developers (name) VALUES ('Capcom');

INSERT INTO Developers (name) VALUES ('Konami');

INSERT INTO Developers (name) VALUES ('Ubisoft');

INSERT INTO Developers (name) VALUES ('Electronic Arts');

INSERT INTO Developers (name) VALUES ('Activision');

INSERT INTO Developers (name)
VALUES (
        'Sony Interactive Entertainment'
    );

INSERT INTO Developers (name) VALUES ('Microsoft Studios');

INSERT INTO Developers (name) VALUES ('Sega');

INSERT INTO
    Games (
        title,
        description,
        price,
        releaseDate,
        state,
        note,
        location,
        cover
    )
VALUES (
        'Super Mario Bros.',
        'A classic platformer where Mario saves Princess Peach.',
        59.99,
        '1985-09-13',
        'used',
        9.2,
        'Tokyo, Japan',
        'https://example.com/super-mario-cover.jpg'
    );

INSERT INTO
    Games (
        title,
        description,
        price,
        releaseDate,
        state,
        note,
        location,
        cover
    )
VALUES (
        'Super Mario Bros. 2',
        'A classic platformer where Mario saves Princess Peach.',
        59.99,
        '1988-10-09',
        'used',
        9.2,
        'Tokyo, Japan',
        'https://example.com/super-mario-cover.jpg'
    );

INSERT INTO
    Games (
        title,
        description,
        price,
        releaseDate,
        state,
        note,
        location,
        cover
    )
VALUES (
        'Super Mario Bros. 3',
        'A classic platformer where Mario saves Princess Peach.',
        59.99,
        '1990-02-12',
        'used',
        9.2,
        'Tokyo, Japan',
        'https://example.com/super-mario-cover.jpg'
    );

INSERT INTO
    Games (
        title,
        description,
        price,
        releaseDate,
        state,
        note,
        location,
        cover
    )
VALUES (
        'Super Mario World',
        'A classic platformer where Mario saves Princess Peach.',
        59.99,
        '1991-11-21',
        'used',
        9.2,
        'Tokyo, Japan',
        'https://example.com/super-mario-cover.jpg'
    );

INSERT INTO
    Games (
        title,
        description,
        price,
        releaseDate,
        state,
        note,
        location,
        cover
    )
VALUES (
        'Super Mario 64',
        'A classic platformer where Mario saves Princess Peach.',
        59.99,
        '1996-06-23',
        'used',
        9.2,
        'Tokyo, Japan',
        'https://example.com/super-mario-cover.jpg'
    );

INSERT INTO
    Games (
        title,
        description,
        price,
        releaseDate,
        state,
        note,
        location,
        cover
    )
VALUES (
        'Super Mario Sunshine',
        'A classic platformer where Mario saves Princess Peach.',
        59.99,
        '2002-07-19',
        'used',
        9.2,
        'Tokyo, Japan',
        'https://example.com/super-mario-cover.jpg'
    );

INSERT INTO
    Games (
        title,
        description,
        price,
        releaseDate,
        state,
        note,
        location,
        cover
    )
VALUES (
        'Super Mario Galaxy',
        'A classic platformer where Mario saves Princess Peach.',
        59.99,
        '2007-11-01',
        'used',
        9.2,
        'Tokyo, Japan',
        'https://example.com/super-mario-cover.jpg'
    );

INSERT INTO
    Games (
        title,
        description,
        price,
        releaseDate,
        state,
        note,
        location,
        cover
    )
VALUES (
        'Super Mario Galaxy 2',
        'A classic platformer where Mario saves Princess Peach.',
        59.99,
        '2010-05-27',
        'used',
        9.2,
        'Tokyo, Japan',
        'https://example.com/super-mario-cover.jpg'
    );

INSERT INTO
    Games (
        title,
        description,
        price,
        releaseDate,
        state,
        note,
        location,
        cover
    )
VALUES (
        'Super Mario 3D World',
        'A classic platformer where Mario saves Princess Peach.',
        59.99,
        '2013-11-21',
        'used',
        9.2,
        'Tokyo, Japan',
        'https://example.com/super-mario-cover.jpg'
    );

INSERT INTO
    Games (
        title,
        description,
        price,
        releaseDate,
        state,
        note,
        location,
        cover
    )
VALUES (
        'Super Mario Odyssey',
        'A classic platformer where Mario saves Princess Peach.',
        59.99,
        '2017-10-27',
        'used',
        9.2,
        'Tokyo, Japan',
        'https://example.com/super-mario-cover.jpg'
    );

INSERT INTO
    Games (
        title,
        description,
        price,
        releaseDate,
        state,
        note,
        location,
        cover
    )
VALUES (
        'The Legend of Zelda',
        'A classic platformer where Mario saves Princess Peach.',
        59.99,
        '1986-02-21',
        'used',
        9.2,
        'Tokyo, Japan',
        'https://example.com/super-mario-cover.jpg'
    );

INSERT INTO
    Games (
        title,
        description,
        price,
        releaseDate,
        state,
        note,
        location,
        cover
    )
VALUES (
        'The Legend of Zelda: A Link to the Past',
        'A classic platformer where Mario saves Princess Peach.',
        59.99,
        '1991-11-21',
        'used',
        9.2,
        'Tokyo, Japan',
        'https://example.com/super-mario-cover.jpg'
    );

INSERT INTO
    Games (
        title,
        description,
        price,
        releaseDate,
        state,
        note,
        location,
        cover
    )
VALUES (
        'The Legend of Zelda: Link Awakening',
        'A classic platformer where Mario saves Princess Peach.',
        59.99,
        '1993-06-06',
        'used',
        9.2,
        'Tokyo, Japan',
        'https://example.com/super-mario-cover.jpg'
    );

INSERT INTO
    Games (
        title,
        description,
        price,
        releaseDate,
        state,
        note,
        location,
        cover
    )
VALUES (
        'The Legend of Zelda: Ocarina of Time',
        'A classic platformer where Mario saves Princess Peach.',
        59.99,
        '1998-11-21',
        'used',
        9.2,
        'Tokyo, Japan',
        'https://example.com/super-mario-cover.jpg'
    );

COMMIT;
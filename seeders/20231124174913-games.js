"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Games", [
      {
        title: "Diablo 2",
        description:
          " DIABLO 2 a été développé par Blizzard Entertainment et édité par Blizzard Entertainment. DIABLO 2 est un jeu de type Action, RPG. Il a été commercialisé pour la première fois en 2021. Le jeu est disponible sur PC.",
        price: 40,
        releaseDate: "2021-09-23",
        state: "new",
        note: 4.5,
        location: "Paris",
        cover:
          "https://image.jeuxvideo.com/medias-sm/163293/1632926824-300-jaquette-avant.gif",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Final fantasy 4",
        description:
          " FINAL FANTASY 4 a été développé par Square Enix et édité par Square Enix. FINAL FANTASY 4 est un jeu de type RPG. Il a été commercialisé pour la première fois en 2021. Le jeu est disponible sur PC.",
        price: 40,
        releaseDate: "2021-09-23",
        state: "new",
        note: 4.5,
        location: "Paris",
        cover:
          "https://image.jeuxvideo.com/medias-sm/163293/1632926824-300-jaquette-avant.gif",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Mario64",
        description:
          " MARIO64 a été développé par Nintendo et édité par Nintendo. MARIO64 est un jeu de type Action, Plateforme. Il a été commercialisé pour la première fois en 2021. Le jeu est disponible sur PC.",
        price: 40,
        releaseDate: "2021-09-23",
        state: "new",
        note: 4.5,
        location: "Paris",
        cover:
          "https://image.jeuxvideo.com/medias-sm/163293/1632926824-300-jaquette-avant.gif",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Zelda",
        description:
          " ZELDA a été développé par Nintendo et édité par Nintendo. ZELDA est un jeu de type Action, RPG. Il a été commercialisé pour la première fois en 2021. Le jeu est disponible sur PC.",
        price: 40,
        releaseDate: "2021-09-23",
        state: "new",
        note: 4.5,
        location: "Paris",
        cover:
          "https://image.jeuxvideo.com/medias-sm/163293/1632926824-300-jaquette-avant.gif",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Pokemon",
        description:
          " POKEMON a été développé par Nintendo et édité par Nintendo. POKEMON est un jeu de type Action, RPG. Il a été commercialisé pour la première fois en 2021. Le jeu est disponible sur PC.",
        price: 40,
        releaseDate: "2021-09-23",
        state: "new",
        note: 4.5,
        location: "Paris",
        cover:
          "https://image.jeuxvideo.com/medias-sm/163293/1632926824-300-jaquette-avant.gif",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Sonic",
        description:
          " SONIC a été développé par Nintendo et édité par Nintendo. SONIC est un jeu de type Action, RPG. Il a été commercialisé pour la première fois en 2021. Le jeu est disponible sur PC.",
        price: 40,
        releaseDate: "2021-09-23",
        state: "new",
        note: 4.5,
        location: "Paris",
        cover:
          "https://image.jeuxvideo.com/medias-sm/163293/1632926824-300-jaquette-avant.gif",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Mario",
        description:
          " MARIO a été développé par Nintendo et édité par Nintendo. MARIO est un jeu de type Action, RPG. Il a été commercialisé pour la première fois en 2021  . Le jeu est disponible sur PC.",
        price: 40,
        releaseDate: "2021-09-23",
        state: "new",
        note: 4.5,
        location: "Paris",
        cover:
          "https://image.jeuxvideo.com/medias-sm/163293/1632926824-300-jaquette-avant.gif",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Donkey Kong",
        description:
          " DONKEY KONG a été développé par Nintendo et édité par Nintendo. DONKEY KONG est un jeu de type Action, RPG. Il a été commercialisé pour la première fois en 2021. Le jeu est disponible sur PC.",
        price: 40,
        releaseDate: "2021-09-23",
        state: "new",
        note: 4.5,
        location: "Paris",
        cover:
          "https://image.jeuxvideo.com/medias-sm/163293/1632926824-300-jaquette-avant.gif",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Street Fighter",
        description:
          " STREET FIGHTER a été développé par Nintendo et édité par Nintendo. STREET FIGHTER est un jeu de type Action, RPG. Il a été commercialisé pour la première fois en 2021. Le jeu est disponible sur PC.",
        price: 40,
        releaseDate: "2021-09-23",
        state: "new",
        note: 4.5,
        location: "Paris",
        cover:
          "https://image.jeuxvideo.com/medias-sm/163293/1632926824-300-jaquette-avant.gif",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Games", null, {});
  },
};

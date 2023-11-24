"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Games", [
      {
        title: "The Legend of Zelda: Breath of the Wild",
        description:
          "The Legend of Zelda: Breath of the Wild est un jeu vidéo d'action-aventure en monde ouvert développé par Nintendo EPD avec l'aide de Monolith Soft et édité par Nintendo. Il est sorti mondialement sur Nintendo Switch et Wii U le 3 mars 2017.",
        price: 59.99,
        releaseDate: "2017-03-03",
        state: "Neuf",
        note: 18,
        location: "Paris",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Super Mario Odyssey",
        description:
          "Super Mario Odyssey est un jeu de plateforme développé et édité par Nintendo pour la Nintendo Switch, sorti le 27 octobre 2017. Le jeu suit Mario dans une aventure à travers divers mondes pour sauver la Princesse Peach des griffes de Bowser.",
        price: 49.99,
        releaseDate: "2017-10-27",
        state: "Neuf",
        note: 18,
        location: "Lyon",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Red Dead Redemption 2",
        description:
          "Red Dead Redemption 2 est un jeu vidéo d'action-aventure et de western développé par Rockstar Games. Il a été publié en octobre 2018 pour PlayStation 4 et Xbox One, et en novembre 2019 pour Microsoft Windows.",
        price: 59.99,
        releaseDate: "2018-10-26",
        state: "Neuf",
        note: 17,
        location: "Marseille",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "The Witcher 3: Wild Hunt",
        description:
          "The Witcher 3: Wild Hunt est un jeu vidéo de rôle développé par CD Projekt RED, sorti en 2015. Le jeu se déroule dans un monde médiéval fantastique et suit l'histoire de Geralt de Riv, un chasseur de monstres.",
        price: 39.99,
        releaseDate: "2015-05-19",
        state: "Occasion",
        note: 18,
        location: "Nice",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Grand Theft Auto V",
        description:
          "Grand Theft Auto V est un jeu vidéo d'action-aventure en monde ouvert développé par Rockstar North et édité par Rockstar Games. Sorti en 2013, il se déroule dans l'état fictif de San Andreas, basé sur la Californie du Sud.",
        price: 29.99,
        releaseDate: "2013-09-17",
        state: "Neuf",
        note: 18,
        location: "Toulouse",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Minecraft",
        description:
          "Minecraft est un jeu vidéo de type sandbox développé par le studio suédois Mojang. Permettant aux joueurs de construire avec une variété de blocs dans un monde 3D, il a été l'un des jeux les plus vendus au monde.",
        price: 24.99,
        releaseDate: "2011-11-18",
        state: "Occasion",
        note: 16,
        location: "Bordeaux",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Fortnite",
        description:
          "Fortnite est un jeu vidéo en ligne développé par Epic Games, lancé en 2017. Il est disponible en trois versions de jeu distinctes, mais partageant le même gameplay général et le même moteur de jeu.",
        price: 0.0,
        releaseDate: "2017-07-25",
        state: "Neuf",
        note: 15,
        location: "Nantes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "God of War",
        description:
          "God of War est un jeu vidéo d'action-aventure développé par Santa Monica Studio et édité par Sony Interactive Entertainment. Sorti en 2018, il est le huitième épisode de la série God of War et suit Kratos et son fils Atreus.",
        price: 49.99,
        releaseDate: "2018-04-20",
        state: "Neuf",
        note: 19,
        location: "Strasbourg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Animal Crossing: New Horizons",
        description:
          "Animal Crossing: New Horizons est un jeu vidéo de simulation de vie développé et édité par Nintendo pour la Nintendo Switch. Il permet aux joueurs de créer et gérer leur propre île paradisiaque.",
        price: 59.99,
        releaseDate: "2020-03-20",
        state: "Neuf",
        note: 17,
        location: "Montpellier",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Cyberpunk 2077",
        description:
          "Cyberpunk 2077 est un jeu vidéo de rôle développé et édité par CD Projekt. Se déroulant dans le monde ouvert de la métropole de Night City, il est sorti en 2020 et est connu pour son récit profond et son univers futuriste.",
        price: 59.99,
        releaseDate: "2020-12-10",
        state: "Neuf",
        note: 16,
        location: "Lille",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Final Fantasy VII Remake",
        description:
          "Final Fantasy VII Remake est un jeu vidéo de rôle développé et édité par Square Enix. Sorti en 2020, c'est une réinterprétation du jeu original de 1997, avec un gameplay modernisé et des graphismes améliorés.",
        price: 59.99,
        releaseDate: "2020-04-10",
        state: "Neuf",
        note: 18,
        location: "Lyon",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Games", null, {});
  },
};

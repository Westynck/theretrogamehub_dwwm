"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Editors",
      [
        {
          name: "Activision",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Blizzard",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Capcom",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Electronic Arts",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Epic Games",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Konami",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Microsoft",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nintendo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rockstar Games",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sony",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Square Enix",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ubisoft",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Valve",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Warner Bros",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Autre",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Editors", null, {});
  },
};

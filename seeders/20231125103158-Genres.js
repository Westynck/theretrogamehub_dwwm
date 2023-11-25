"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Genres",
      [
        {
          name: "Action",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Aventure",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Combat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Course",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "FPS",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Horreur",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "MMORPG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Plateforme",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Puzzle",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "RPG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sport",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Stratégie",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Survie",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tir",
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
    await queryInterface.bulkDelete("Genres", null, {});
  },
};

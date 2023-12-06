"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Collections_Platforms", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      platforms_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Platforms",
          key: "id",
        },
      },
      collections_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Collections",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Collections_Platforms");
  },
};

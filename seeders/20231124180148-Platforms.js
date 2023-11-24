"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Platforms", [
      {
        title: "Playstation 5",
        price: 499.99,
        releaseDate: "2020-11-12",
        state: "new",
        manufacturer: "Sony",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Xbox Series X",
        price: 499.99,
        releaseDate: "2020-11-10",
        state: "new",
        manufacturer: "Microsoft",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Playstation 4",
        price: 399.99,
        releaseDate: "2013-11-15",
        state: "used",
        manufacturer: "Sony",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Xbox One",
        price: 499.99,
        releaseDate: "2013-11-22",
        state: "used",
        manufacturer: "Microsoft",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Nintendo Switch",
        price: 299.99,
        releaseDate: "2017-03-03",
        state: "new",
        manufacturer: "Nintendo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Nintendo Switch Lite",
        price: 199.99,
        releaseDate: "2019-09-20",
        state: "new",
        manufacturer: "Nintendo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Platforms", null, {});
  },
};

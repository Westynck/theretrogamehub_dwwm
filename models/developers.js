"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Developers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    //!! Methode pour créer un développeur
    static async addDeveloperToDatabase(developerData) {
      try {
        const developer = await Developers.create({
          ...developerData,
        });
        return developer;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour récupérer un développeur
    static async getDeveloperToDatabase(developerData) {
      try {
        const developer = await Developers.findOne({
          where: {
            codeDevelopers: developerData.codeDevelopers,
          },
        });
        return developer;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour récupérer un développeur par son id
    static async getDeveloperByIdToDatabase(developerData) {
      try {
        const developer = await Developers.findOne({
          where: {
            id: developerData.id,
          },
        });
        return developer;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour récupérer tous les développeurs
    static async getAllDevelopersToDatabase() {
      try {
        const developers = await Developers.findAll();
        return developers;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour récupérer tous les developpeurs d'un jeu
    static async getAllGamesFromDeveloperToDatabase(developerData) {
      try {
        const games = await Games.findAll({
          where: {
            developerId: developerData.id,
          },
        });
        return games;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour mettre à jour un développeur
    static async updateDeveloperToDatabase(developerData) {
      try {
        const developer = await Developers.update(
          {
            ...developerData,
          },
          {
            where: {
              codeDevelopers: developerData.codeDevelopers,
            },
          }
        );
        return developer;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour supprimer un développeur
    static async deleteDeveloperToDatabase(developerData) {
      try {
        const developer = await Developers.destroy({
          where: {
            codeDevelopers: developerData.codeDevelopers,
          },
        });
        return developer;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    static associate(models) {
      // define association here
      //
      Developers.belongsToMany(models.Games, {
        through: "GamesDevelopers",
        foreignKey: "codeDevelopers",
        otherKey: "codeGames",
        as: "games",
      });
    }
  }
  Developers.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Developers",
    }
  );
  return Developers;
};

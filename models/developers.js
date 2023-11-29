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
    static async getDeveloper(name) {
      try {
        const developer = await Developers.findOne({
          where: {
            name,
          },
        });
        return developer;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour récupérer un développeur par son id
    static async getDeveloperById(id) {
      try {
        const developer = await Developers.findByPk(id);
        return developer;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour récupérer tous les développeurs
    static async getAllDevelopers() {
      try {
        const developers = await Developers.findAll();
        return developers;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour mettre à jour un développeur
    static async updateDeveloper(id, developerData) {
      try {
        const developer = await Developers.update(
          {
            ...developerData,
          },
          {
            where: {
              id,
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
    static async deleteDeveloper(id) {
      try {
        const developer = await Developers.destroy({
          where: {
            id,
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
        foreignKey: "developers_id",
        otherKey: "games_id",
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

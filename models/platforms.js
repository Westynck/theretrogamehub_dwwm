"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Platforms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    //!! Methode pour créer une plateforme
    static async addPlatformToDatabase(platformData) {
      try {
        const platform = await Platforms.create({
          ...platformData,
        });
        return platform;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour récupérer une plateforme
    static async getPlatformToDatabase(platformData) {
      try {
        const platform = await Platforms.findOne({
          where: {
            title: platformData.title,
          },
        });
        return platform;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour récupérer une plateforme par son id
    static async getPlatformById(id) {
      try {
        const platform = await Platforms.findByPk(id);

        return platform;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour récupérer toutes les plateformes
    static async getAllPlatforms() {
      try {
        const platforms = await Platforms.findAll();
        return platforms;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour récupérer toutes les plateformes d'un jeu
    static async getAllPlatformsOfGameToDatabase(platformData) {
      try {
        const platforms = await Platforms.findAll({
          where: {
            platforms_id: platformData.platforms_id,
          },
        });
        return platforms;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour récupérer toutes les plateformes d'une collection
    static async getAllPlatformsOfCollectionToDatabase(platformData) {
      try {
        const platforms = await Platforms.findAll({
          where: {
            platforms_id: platformData.platforms_id,
          },
        });
        return platforms;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour mettre à jour une plateforme
    static async updatePlatformToDatabase(platformData) {
      try {
        const platform = await Platforms.update(
          {
            ...platformData,
          },
          {
            where: {
              platforms_id: platformData.platforms_id,
            },
          }
        );
        return platform;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour supprimer une plateforme
    static async deletePlatform(id) {
      try {
        const platform = await Platforms.destroy({ where: { id: id } });
        return platform;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    static associate(models) {
      // define association here
      // une plateforme appartient au minimum à aucun jeu et au maximum à un jeu (belongsToMany) 0:n
      models.Platforms.belongsToMany(models.Games, {
        through: "Game_has_Platforms",
        foreignKey: "platforms_id",
        otherKey: "games_id",
        as: "games",
      });
      // une plateforme appartient au minimum à aucune collection et au maximum à plusieurs collections (belongsToMany) 0:n
      models.Platforms.belongsToMany(models.Collections, {
        through: "Game_has_Platforms",
        foreignKey: "platforms_id",
        otherKey: "collections_id",
        as: "collections",
      });
    }
  }
  Platforms.init(
    {
      title: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      releaseDate: DataTypes.DATE,
      state: DataTypes.STRING,
      manufacturer: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Platforms",
    }
  );
  return Platforms;
};

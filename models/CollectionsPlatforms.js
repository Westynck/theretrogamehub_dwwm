"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class CollectionsPlatforms extends Model {
    //!! Methode pour vérifier si une plateforme fait partie d'une collection
    static async checkPlatformInCollection(collectionId, platformId) {
      try {
        const platform = await CollectionsPlatforms.findOne({
          where: {
            collections_id: collectionId,
            platforms_id: platformId,
          },
        });
        return platform;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour ajouter une plateforme à une collection
    static async addPlatformToCollection(collectionId, platformId) {
      try {
        const platform = await CollectionsPlatforms.create({
          collections_id: collectionId,
          platforms_id: platformId,
        });
        return platform;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour supprimer une plateforme d'une collection
    static async removePlatformFromCollection(collectionId, platformId) {
      try {
        const platform = await CollectionsPlatforms.destroy({
          where: {
            collections_id: collectionId,
            platforms_id: platformId,
          },
        });
        return platform;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    static associate(models) {
      // define association here
    }
  }
  CollectionsPlatforms.init(
    {
      collections_id: DataTypes.INTEGER,
      platforms_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "CollectionsPlatforms",
      tableName: "Collections_Platforms",
    }
  );
  return CollectionsPlatforms;
};

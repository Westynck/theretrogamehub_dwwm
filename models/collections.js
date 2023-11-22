"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Collections extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    //!! Methode pour créer une collection
    static async addCollectionToDatabase(collectionData) {
      try {
        const collection = await Collections.create({
          ...collectionData,
        });
        return collection;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour récupérer une collection
    static async getCollectionToDatabase(collectionData) {
      try {
        const collection = await Collections.findOne({
          where: {
            name: collectionData.name,
          },
        });
        return collection;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour récupérer une collection par son id
    static async getCollectionByIdToDatabase(collectionData) {
      try {
        const collection = await Collections.findOne({
          where: {
            id: collectionData.id,
          },
        });
        return collection;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour récupérer toutes les collections d'un membre
    static async getAllCollectionsFromMemberToDatabase(memberData) {
      try {
        const collections = await Collections.findAll({
          where: {
            id: memberData.id,
          },
        });
        return collections;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //! Methode pour modifier le nom d'une collection
    static async updateCollectionToDatabase(collectionData) {
      try {
        const collection = await Collections.update(
          {
            name: collectionData.name,
          },
          {
            where: {
              id: collectionData.id,
            },
          }
        );
        return collection;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //! Methode pour supprimer une collection
    static async deleteCollectionToDatabase(collectionData) {
      try {
        const collection = await Collections.destroy({
          where: {
            id: collectionData.id,
          },
        });
        return collection;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    static associate(models) {
      // define association
      // une collection appartient au moins à un membre et au maximum à un membre (belongsTo) 1:1
      models.Collections.belongsTo(models.Members, {
        foreignKey: {
          allowNull: false,
        },
      });
      //une Collection appartient au minimum à aucune plateforme et au maximum à plusieurs plateformes (belongsToMany) 0:n
      models.Collections.belongsToMany(models.Platforms, {
        through: "GamesPlatforms",
        foreignKey: "collections_id",
        otherKey: "platforms_id",
        as: "platforms",
      });
      //une Collection appartient au minimum à aucun jeu et au maximum à plusieurs jeux (belongsToMany) 0:n
      models.Collections.belongsToMany(models.Games, {
        through: "GamesPlatforms",
        foreignKey: "collections_id",
        otherKey: "games_id",
        as: "games",
      });
    }
  }
  Collections.init(
    {
      codeCollections: DataTypes.INTEGER,
      name: DataTypes.STRING,
      codeMembers: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Collections",
    }
  );
  return Collections;
};

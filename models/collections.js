"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Collections extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //!! Methode pour récupérer toutes les collections d'un membre
    static async getAllCollectionsFromMember(MemberId) {
      try {
        const collections = await Collections.findAll({
          where: {
            MemberId,
          },
        });
        return collections;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour créer une collection
    static async addCollection(MemberId, collectionData) {
      try {
        const collection = await Collections.create({
          ...collectionData,
          MemberId,
        });

        return collection;
      } catch (error) {
        console.error("Error in addCollection:", error);
        return false;
      }
    }

    //!! Methode pour ajouter un jeu à une collection
    static async addGameToCollection(id, gameData) {
      try {
        const collection = await Collections.findOne({
          where: {
            id: id,
          },
          include: ["games"],
        });
        const game = await collection.addGames(gameData.gameId);
        return game;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour supprimer un jeu d'une collection
    static async removeGameFromCollection(id, gameData) {
      try {
        const collection = await Collections.findOne({
          where: {
            id: id,
          },
          include: ["games"],
        });
        const game = await collection.removeGames(gameData.gameId);
        return game;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //! Methode pour modifier le nom d'une collection
    static async updateCollectionName(id, collectionData) {
      try {
        const collection = await Collections.update(
          {
            name: collectionData.name,
          },
          {
            where: {
              id: id,
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
          name: "MemberId",
          allowNull: false,
        },
      });
      //une Collection appartient au minimum à aucune plateforme et au maximum à plusieurs plateformes (belongsToMany) 0:n
      models.Collections.belongsToMany(models.Platforms, {
        through: "Collections_Platforms",
        foreignKey: "collections_id",
        otherKey: "platforms_id",
        as: "platforms",
      });
      //une Collection appartient au minimum à aucun jeu et au maximum à plusieurs jeux (belongsToMany) 0:n
      models.Collections.belongsToMany(models.Games, {
        through: "Collections_Games",
        foreignKey: "collections_id",
        otherKey: "games_id",
        as: "games",
      });
    }
  }
  Collections.init(
    {
      name: DataTypes.STRING,
      MemberId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Collections",
    }
  );
  return Collections;
};

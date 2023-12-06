"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CollectionsGames extends Model {
    // !! Methode pour vérifier si un jeu fait partie d'une collection
    static async checkGameInCollection(collectionId, gameId) {
      try {
        const game = await CollectionsGames.findOne({
          where: {
            collections_id: collectionId,
            games_id: gameId,
          },
        });
        return game;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour ajouter un jeu à une collection
    static async addGameToCollection(collectionId, gameId) {
      try {
        const game = await CollectionsGames.create({
          collections_id: collectionId,
          games_id: gameId,
        });
        return game;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour supprimer un jeu d'une collection
    static async removeGameFromCollection(collectionId, gameId) {
      try {
        const game = await CollectionsGames.destroy({
          where: {
            collections_id: collectionId,
            games_id: gameId,
          },
        });
        return game;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    static associate(models) {
      // define association here
    }
  }
  CollectionsGames.init(
    {
      collections_id: DataTypes.INTEGER,
      games_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "CollectionsGames",
      tableName: "Collections_Games",
    }
  );
  return CollectionsGames;
};

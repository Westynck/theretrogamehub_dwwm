"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Games extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    //!! Methode pour créer un jeu
    static async addGameToDatabase(gameData) {
      try {
        const game = await Games.create({
          ...gameData,
        });
        return game;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour récupérer un jeu
    static async getGameToDatabase(gameData) {
      try {
        const game = await Games.findOne({
          where: {
            codeGames: gameData.codeGames,
          },
        });
        return game;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour récupérer un jeu par son id
    static async getGameByIdToDatabase(gameData) {
      try {
        const game = await Games.findOne({
          where: {
            id: gameData.id,
          },
        });
        return game;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour récupérer tous les jeux
    static async getAllGamesToDatabase() {
      try {
        const games = await Games.findAll();
        return games;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour récupérer tous les jeux d'une collection
    static async getAllGamesFromCollectionToDatabase(collectionData) {
      try {
        const games = await Games.findAll({
          where: {
            title: collectionData.title,
          },
        });
        return games;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour récupérer tous les jeux d'un éditeur
    static async getAllGamesFromEditorToDatabase(editorData) {
      try {
        const games = await Games.findAll({
          where: {
            title: editorData.title,
          },
        });
        return games;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour récupérer tous les jeux d'un développeur
    static async getAllGamesFromDeveloperToDatabase(developerData) {
      try {
        const games = await Games.findAll({
          where: {
            title: developerData.title,
          },
        });
        return games;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour récupérer tous les jeux d'un genre
    static async getAllGamesFromGenreToDatabase(genreData) {
      try {
        const games = await Games.findAll({
          where: {
            title: genreData.title,
          },
        });
        return games;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour mettre à jour un jeu
    static async updateGameToDatabase(gameData) {
      try {
        const game = await Games.update(
          {
            ...gameData,
          },
          {
            where: {
              codeGames: gameData.codeGames,
            },
          }
        );
        return game;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour supprimer un jeu
    static async deleteGameToDatabase(gameData) {
      try {
        const game = await Games.destroy({
          where: {
            codeGames: gameData.codeGames,
          },
        });
        return game;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour récupérer un jeu par ses  éditeurs, genres, développeurs
    static async findGameAllCollections(gameData) {
      try {
        const game = await Games.findAll({
          where: {
            title: gameData.title,
          },
          include: ["platforms", "editors", "genres", "developers"],
        });
        return game;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour ajouter un jeu à la collection
    static async addGameToCollection(gameData) {
      try {
        const game = await Games.findByPk(gameData.id);
        return game;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour retirer un jeu de la collection
    static async removeGameToCollection(gameData) {
      try {
        const game = await Games.findbyPk(gameData.id);
        return game;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    static associate(models) {
      // define association here
      // un jeu appartient au minimum à aucune plateforme et au maximum à plusieurs plateformes (belongsToMany) 0:n
      models.Games.belongsToMany(models.Platforms, {
        through: "GamesPlatforms",
        foreignKey: "codeGames",
        otherKey: "codePlatforms",
        as: "platforms",
      });
      // un jeu appartient au minimum à aucune collection et au maximum à plusieurs collections (belongsToMany) 0:n
      models.Games.belongsToMany(models.Collections, {
        through: "GamesPlatforms",
        foreignKey: "codeGames",
        otherKey: "codeCollections",
        as: "collections",
      });
      // un jeu appartient au minimum à aucun éditeur et au maximum à plusieurs éditeurs (belongsToMany) 0:n
      models.Games.belongsToMany(models.Editors, {
        through: "GamesEditors",
        foreignKey: "codeGames",
        otherKey: "codeEditors",
        as: "editors",
      });
      // un jeu appartient au minimum à aucun genre et au maximum à plusieurs genres (belongsToMany) 0:n
      models.Games.belongsToMany(models.Genres, {
        through: "GamesGenres",
        foreignKey: "codeGames",
        otherKey: "codeGenres",
        as: "genres",
      });
      model.Games.belongsToMany(models.Developers, {
        through: "GamesDevelopers",
        foreignKey: "codeGames",
        otherKey: "codeDevelopers",
        as: "developers",
      });
    }
  }
  Games.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.DECIMAL,
      releaseDate: DataTypes.DATE,
      state: DataTypes.STRING,
      note: DataTypes.FLOAT,
      location: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Games",
    }
  );
  return Games;
};

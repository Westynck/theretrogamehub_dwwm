"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Genres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //!! Methode pour créer un genre
    static async addGenreToDatabase(genreData) {
      try {
        const genre = await Genres.create({
          ...genreData,
        });
        return genre;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour récupérer un genre
    static async getGenreToDatabase(genreData) {
      try {
        const genre = await Genres.findOne({
          where: {
            codeGenres: genreData.codeGenres,
          },
        });
        return genre;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour récupérer un genre par son id
    static async getGenreByIdToDatabase(genreData) {
      try {
        const genre = await Genres.findOne({
          where: {
            id: genreData.id,
          },
        });
        return genre;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour récupérer tous les genres
    static async getAllGenresToDatabase() {
      try {
        const genres = await Genres.findAll();
        return genres;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour récupérer tous les genres d'un jeu
    static async getAllGenresOfGameToDatabase(gameData) {
      try {
        const genres = await Genres.findAll({
          include: [
            {
              model: Games,
              where: {
                codeGames: gameData.codeGames,
              },
            },
          ],
        });
        return genres;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour récupérer tous les jeux d'un genre
    static async getAllGamesOfGenreToDatabase(genreData) {
      try {
        const games = await Games.findAll({
          include: [
            {
              model: Genres,
              where: {
                genres_id: genreData.genres_id,
              },
            },
          ],
        });
        return games;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour mettre à jour un genre
    static async updateGenreToDatabase(genreData) {
      try {
        const genre = await Genres.update(
          {
            ...genreData,
          },
          {
            where: {
              genres_id: genreData.genres_id,
            },
          }
        );
        return genre;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour supprimer un genre
    static async deleteGenreToDatabase(genreData) {
      try {
        const genre = await Genres.destroy({
          where: {
            genres_id: genreData.genres_id,
          },
        });
        return genre;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    static associate(models) {
      // define association here
      // un genre appartient au minimum à aucun jeu et au maximum à plusieurs jeux (belongsToMany) 0:n
      models.Genres.belongsToMany(models.Games, {
        through: "Game_has_Genres",
        foreignKey: "genres_id",
        otherKey: "games_id",
        as: "games",
      });
    }
  }
  Genres.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Genres",
    }
  );
  return Genres;
};

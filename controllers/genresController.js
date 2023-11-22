const { Genres } = require("../models");

const genresController = {
  findGenre: async (req, res) => {
    const { name } = req.params;
    try {
      const genre = await Genres.getGenreToDatabase(name);
      res.json(genre);
    } catch (error) {
      console.error(error);
      res.status(500).json(error.message);
    }
  },

  getAllGenres: async (req, res) => {
    try {
      const genres = await Genres.getAllGenresToDatabase();
      res.json(genres);
    } catch (error) {
      console.error(error);
      res.status(500).json(error.message);
    }
  },

  getGenreById: async (req, res) => {
    const { id } = req.params;
    try {
      const genre = await Genres.getGenreByIdToDatabase(id);
      if (!genre) {
        res.status(400).json({ error: "Genre not found" });
      } else {
        res.status(200).json(genre);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = genresController;

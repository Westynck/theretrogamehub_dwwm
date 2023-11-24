const { Games } = require("../models");

const gamesController = {
  getAllGames: async (req, res) => {
    try {
      const games = await Games.getAllGames();
      res.json(games);
    } catch (error) {
      console.error(error);
      res.status(500).json(error.message);
    }
  },

  findGame: async (req, res) => {
    const { title } = req.params;
    try {
      const game = await Games.getGameToDatabase(title);
      res.json(game);
    } catch (error) {
      console.error(error);
      res.status(500).json(error.message);
    }
  },

  findGameByCategory: async (req, res) => {
    const { title } = req.params;
    try {
      const game = await Games.getGameByCategories(title);
      res.json(game);
    } catch (error) {
      console.error(error);
      res.status(500).json(error.message);
    }
  },

  getAllGamesFromCollection: async (req, res) => {
    const { title } = req.params;
    try {
      const game = await Games.getAllGamesFromCollectionToDatabase(title);
      res.json(game);
    } catch (error) {
      console.error(error);
      res.status(500).json(error.message);
    }
  },

  getGameById: async (req, res) => {
    const { id } = req.params;
    try {
      const game = await Games.getGameById(id);
      if (!game) {
        res.status(400).json({ error: "Game not found" });
      } else {
        res.status(200).json(game);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = gamesController;

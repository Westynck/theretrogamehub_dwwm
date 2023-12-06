const { Games } = require("../models");
const { Collections } = require("../models");
const { CollectionsGames } = require("../models");

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

  addGameToCollection: async (req, res) => {
    const collectionId = req.params.id;
    const gameId = req.body.games_id;

    try {
      // Vérifier si la collection existe
      const collection = await Collections.checkCollection(collectionId);
      if (!collection) {
        return res.status(404).json({ error: "la collection n'existe pas" });
      }

      // Vérifier si le jeu existe
      const game = await Games.getGameById(gameId);
      if (!game) {
        return res.status(404).json({ error: "le jeu n'existe pas" });
      }

      //Vérifier si le jeu est déjà dans la collection
      const gameInCollection = await CollectionsGames.checkGameInCollection(
        collectionId,
        gameId
      );
      if (gameInCollection) {
        return res
          .status(400)
          .json({ error: "le jeu est déjà dans la collection" });
      }

      //!! Ajouter le jeu à la collection
      const addedGame = await CollectionsGames.addGameToCollection(
        collectionId,
        gameId
      );

      // Réponse en cas de succès
      res.status(200).json({
        message: "le jeu a bien été ajouté à la collection",
        addedGame,
      });
    } catch (error) {
      // Gestion des erreurs
      res.status(500).json({ error: error.message });
    }
  },

  removeGameFromCollection: async (req, res) => {
    const collectionId = req.params.id;
    const gameId = req.body.games_id;
    try {
      const collection = await Collections.checkCollection(collectionId);
      if (!collection) {
        return res.status(404).json({ error: "la collection n'existe pas" });
      }

      const game = await Games.getGameById(gameId);
      if (!game) {
        return res.status(404).json({ error: "le jeu n'existe pas" });
      }

      const gameInCollection = await CollectionsGames.checkGameInCollection(
        collectionId,
        gameId
      );
      if (!gameInCollection) {
        return res
          .status(404)
          .json({ error: "le jeu n'est pas dans la collection" });
      }

      const removedGame = await CollectionsGames.removeGameFromCollection(
        collectionId,
        gameId
      );
      res.status(200).json({
        message: "le jeu a bien été supprimé de la collection",
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
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

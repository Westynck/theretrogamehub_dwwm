const { Collections } = require("../models");

const collectionsController = {
  addControllerToMember: async (req, res) => {
    const { id } = req.params;
    const collectionData = req.body;
    try {
      const newCollection = await Collections.addCollectionToMember(
        id,
        collectionData
      );
      if (newCollection) {
        res.status(200).json(newCollection);
      } else {
        res.status(400).json({ error: "Failed to add collection" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  addGameToCollection: async (req, res) => {
    const { id } = req.params;
    const gameData = req.body;
    try {
      const newGame = await Collections.addGameToCollection(id, gameData);
      if (newGame) {
        res.status(200).json(newGame);
      } else {
        res.status(400).json({ error: "Failed to add game" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  removeGameFromCollection: async (req, res) => {
    const { id } = req.params;
    const gameData = req.body;
    try {
      const game = await Collections.removeGameFromCollection(id, gameData);
      if (game) {
        res.status(200).json(game);
      } else {
        res.status(400).json({ error: "Failed to remove game" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  addPlatformToCollection: async (req, res) => {
    const { id } = req.params;
    const platformData = req.body;
    try {
      const newPlatform = await Collections.addPlatformToCollection(
        id,
        platformData
      );
      if (newPlatform) {
        res.status(200).json(newPlatform);
      } else {
        res.status(400).json({ error: "Failed to add platform" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  removePlatformFromCollection: async (req, res) => {
    const { id } = req.params;
    const platformData = req.body;
    try {
      const platform = await Collections.removePlatformFromCollection(
        id,
        platformData
      );
      if (platform) {
        res.status(200).json(platform);
      } else {
        res.status(400).json({ error: "Failed to remove platform" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = collectionsController;

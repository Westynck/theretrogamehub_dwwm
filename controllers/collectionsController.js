const { Collections } = require("../models");

const collectionsController = {
  getAllCollectionsFromMember: async (req, res) => {
    const { memberId } = req.params;
    try {
      const collections = await Collections.getAllCollectionsFromMember(
        memberId
      );
      if (collections) {
        res.status(200).json(collections);
      } else {
        res.status(400).json({ error: "Failed to get collections" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  addCollection: async (req, res) => {
    const { memberId } = req.params;
    const collectionData = req.body;

    try {
      const newCollection = await Collections.addCollection(
        memberId,
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

  updateCollectionName: async (req, res) => {
    const { id } = req.params;
    const collectionData = req.body;
    try {
      const collection = await Collections.updateCollectionName(
        id,
        collectionData
      );
      if (collection) {
        res.status(200).json(collection);
      } else {
        res.status(400).json({ error: "Failed to update collection name" });
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

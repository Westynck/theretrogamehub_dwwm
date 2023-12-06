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

  getOneCollectionFromMember: async (req, res) => {
    const { memberId, collectionId } = req.params;
    try {
      const collection = await Collections.getOneCollectionFromMember(
        memberId,
        collectionId
      );
      res.json(collection);
    } catch (error) {
      console.error(error);
      res.status(500).json(error.message);
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

  deleteCollection: async (req, res) => {
    const { id } = req.params;

    try {
      const collection = await Collections.deleteCollection(id);
      if (collection) {
        res.status(200).json(collection);
      } else {
        res.status(400).json({ error: " Echec de la suppression" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = collectionsController;

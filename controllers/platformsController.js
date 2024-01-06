const { Platforms } = require("../models");
const { Collections } = require("../models"); // Modèle de la collection
const { CollectionsPlatforms } = require("../models"); // Modèle d'association entre les plateformes et les collections

const platformsController = {
  getAllPlatforms: async (req, res) => {
    try {
      const platforms = await Platforms.getAllPlatforms();
      res.json(platforms);
    } catch (error) {
      console.error(error);
      res.status(500).json(error.message);
    }
  },

  findPlatform: async (req, res) => {
    const { title } = req.params;
    try {
      const platform = await Platforms.getPlatformToDatabase(title);
      res.json(platform);
    } catch (error) {
      console.error(error);
      res.status(500).json(error.message);
    }
  },

  getPlatformById: async (req, res) => {
    const { id } = req.params;
    try {
      const platform = await Platforms.getPlatformByIdToDatabase(id);
      if (!platform) {
        res.status(400).json({ error: "Platform not found" });
      } else {
        res.status(200).json(platform);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  addPlatformToCollection: async (req, res) => {
    const collectionId = req.params.id;
    const platformId = req.body.platforms_id;

    try {
      // Vérifier si la collection existe
      const collection = await Collections.checkCollection(collectionId);
      if (!collection) {
        return res.status(404).json({ error: "la collection n'existe pas" });
      }

      // Vérifier si la plateforme existe
      const platform = await Platforms.getPlatformById(platformId);
      if (!platform) {
        return res.status(404).json({ error: "la plateforme n'existe pas" });
      }

      // Vérifier si la plateforme est déjà dans la collection
      const platformInCollection =
        await CollectionsPlatforms.checkPlatformInCollection(
          collectionId,
          platformId
        );

      if (platformInCollection) {
        return res
          .status(400)
          .json({ error: "la plateforme est déjà dans la collection" });
      }

      // Ajouter la plateforme à la collection
      const addedPlatform = await CollectionsPlatforms.addPlatformToCollection(
        collectionId,
        platformId
      );

      // Reponse encas de succès
      res
        .status(200)
        .json({ message: "La plateforme a bien été ajoutée", addedPlatform });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  removePlatformFromCollection: async (req, res) => {
    const collectionId = req.params.id;
    const platformId = req.body.platforms_id;

    try {
      const collection = await Collections.checkCollection(collectionId);
      if (!collection) {
        return res.status(404).json({ error: "la collection n'existe pas" });
      }

      const platform = await Platforms.getPlatformById(platformId);
      if (!platform) {
        return res.status(404).json({ error: "la plateforme n'existe pas" });
      }

      const platformInCollection =
        await CollectionsPlatforms.checkPlatformInCollection(
          collectionId,
          platformId
        );
      if (!platformInCollection) {
        return res
          .status(404)
          .json({ error: "la plateforme n'est pas dans la collection" });
      }

      const removedPlatform =
        await CollectionsPlatforms.removePlatformFromCollection(
          collectionId,
          platformId
        );

      res.status(200).json({ message: "La plateforme a bien été supprimée" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = platformsController;

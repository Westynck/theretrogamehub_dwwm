const { Platforms } = require("../models");

const platformsController = {
  getAllPlatforms: async (req, res) => {
    try {
      const platforms = await Platforms.getAllPlatformsToDatabase();
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
};

module.exports = platformsController;

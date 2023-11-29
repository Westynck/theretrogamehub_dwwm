const { Developers } = require("../models");

const developersController = {
  findDeveloper: async (req, res) => {
    const { name } = req.params;
    try {
      const developer = await Developers.getDeveloper(name);
      res.json(developer);
    } catch (error) {
      console.error(error);
      res.status(500).json(error.message);
    }
  },

  getAllDevelopers: async (req, res) => {
    try {
      const developers = await Developers.getAllDevelopers();
      res.json(developers);
    } catch (error) {
      console.error(error);
      res.status(500).json(error.message);
    }
  },

  getDeveloperById: async (req, res) => {
    const { id } = req.params;
    try {
      const developer = await Developers.getDeveloperById(id);
      if (!developer) {
        res.status(400).json({ error: "Developer not found" });
      } else {
        res.status(200).json(developer);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = developersController;

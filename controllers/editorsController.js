const { Editors } = require("../models");

const editorsController = {
  findEditor: async (req, res) => {
    const { name } = req.params;
    try {
      const editor = await Editors.getEditorToDatabase(name);
      res.json(editor);
    } catch (error) {
      console.error(error);
      res.status(500).json(error.message);
    }
  },

  getAllEditors: async (req, res) => {
    try {
      const editors = await Editors.getAllEditorsToDatabase();
      res.json(editors);
    } catch (error) {
      console.error(error);
      res.status(500).json(error.message);
    }
  },

  getEditorById: async (req, res) => {
    const { id } = req.params;
    try {
      const editor = await Editors.getEditorByIdToDatabase(id);
      if (!editor) {
        res.status(400).json({ error: "Editor not found" });
      } else {
        res.status(200).json(editor);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = editorsController;

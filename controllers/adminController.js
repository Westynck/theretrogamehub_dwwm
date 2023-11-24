const { Games } = require("../models");
const { Platforms } = require("../models");
const { Members } = require("../models");
const { Editors } = require("../models");
const { Developers } = require("../models");
const { Genres } = require("../models");

const adminController = {
  getAllGames: async (req, res) => {
    try {
      const games = await Games.getAllGames();
      if (!games) {
        res.status(400).json({ error: "Failed to get games" });
      } else {
        res.status(200).json(games);
      }
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

  createGame: async (req, res) => {
    const gameData = req.body;
    try {
      const game = await Games.addGameToDatabase(gameData);
      if (!game) {
        res.status(400).json({ error: "Failed to create game" });
      } else {
        res.status(201).json({ message: "Game created successfully" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateGame: async (req, res) => {
    const { id } = req.params;
    const gameData = req.body;
    try {
      const game = await Games.updateGameToDatabase(id, gameData);
      if (!game) {
        res.status(400).json({ error: "Failed to update game" });
      } else {
        res.status(200).json({ message: "Game updated successfully" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteGame: async (req, res) => {
    const { id } = req.params;
    try {
      const game = await Games.deleteGameToDatabase(id);
      if (!game) {
        res.status(400).json({ error: "Failed to delete game" });
      } else {
        res.status(200).json({ message: "Game deleted successfully" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllPlatforms: async (req, res) => {
    try {
      const platforms = await Platforms.getAllPlatforms();
      if (!platforms) {
        res.status(400).json({ error: "Failed to get platforms" });
      } else {
        res.status(200).json(platforms);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getPlatformById: async (req, res) => {
    const { id } = req.params;
    try {
      const platform = await Platforms.getPlatformById(id);
      if (!platform) {
        res.status(400).json({ error: "Platform not found" });
      } else {
        res.status(200).json(platform);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createPlatform: async (req, res) => {
    const platformData = req.body;
    try {
      const platform = await Platforms.addPlatformToDatabase(platformData);
      if (!platform) {
        res.status(400).json({ error: "Failed to create platform" });
      } else {
        res.status(201).json({ message: "Platform created successfully" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updatePlatform: async (req, res) => {
    const { id } = req.params;
    const platformData = req.body;
    try {
      const platform = await Platforms.updatePlatform(id, platformData);
      if (!platform) {
        res.status(400).json({ error: "Failed to update platform" });
      } else {
        res.status(200).json({ message: "Platform updated successfully" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deletePlatform: async (req, res) => {
    const { id } = req.params;
    try {
      const platform = await Platforms.deletePlatform(id);
      if (!platform) {
        res.status(400).json({ error: "Failed to delete platform" });
      } else {
        res.status(200).json({ message: "Platform deleted successfully" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllMembers: async (req, res) => {
    try {
      const members = await Members.getAllMembers();
      if (!members) {
        res.status(400).json({ error: "Failed to get members" });
      } else {
        res.status(200).json(members);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  memberDetails: async (req, res) => {
    const { id } = req.params;
    try {
      const member = await Members.getMemberDetails(id);
      if (!member) {
        res.status(400).json({ error: "Member not found" });
      } else {
        res.status(200).json(member);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getMemberById: async (req, res) => {
    const { id } = req.params;
    try {
      const member = await Members.getMemberById(id);
      if (!member) {
        res.status(400).json({ error: "Member not found" });
      } else {
        res.status(200).json(member);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getMemberByNickname: async (req, res) => {
    const { nickname } = req.params;
    try {
      const member = await Members.getMemberByNickname(nickname);
      if (!member) {
        res.status(400).json({ error: "Member not found" });
      } else {
        res.status(200).json(member);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  blockMember: async (req, res) => {
    const { id } = req.params;
    try {
      const member = await Members.blockMember(id);
      if (!member) {
        res.status(400).json({ error: "Failed to block member" });
      } else {
        res.status(200).json({ message: "Member blocked successfully" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  unblockMember: async (req, res) => {
    const { id } = req.params;
    try {
      const member = await Members.unblockMember(id);
      if (!member) {
        res.status(400).json({ error: "Failed to unblock member" });
      } else {
        res.status(200).json({ message: "Member unblocked successfully" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteMember: async (req, res) => {
    const { id } = req.params;
    try {
      const member = await Members.deleteMember(id);
      if (!member) {
        res.status(400).json({ error: "Failed to delete member" });
      } else {
        res.status(200).json({ message: "Member deleted successfully" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllEditors: async (req, res) => {
    try {
      const editors = await Editors.getAllEditors();
      if (!editors) {
        res.status(400).json({ error: "Failed to get editors" });
      } else {
        res.status(200).json(editors);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getEditorById: async (req, res) => {
    const { id } = req.params;
    try {
      const editor = await Editors.getEditorById(id);
      if (!editor) {
        res.status(400).json({ error: "Editor not found" });
      } else {
        res.status(200).json(editor);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createEditor: async (req, res) => {
    const editorData = req.body;
    try {
      const editor = await Editors.createEditor(editorData);
      if (!editor) {
        res.status(400).json({ error: "Failed to create editor" });
      } else {
        res.status(201).json({ message: "Editor created successfully" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateEditor: async (req, res) => {
    const { id } = req.params;
    const editorData = req.body;
    try {
      const editor = await Editors.updateEditor(id, editorData);
      if (!editor) {
        res.status(400).json({ error: "Failed to update editor" });
      } else {
        res.status(200).json({ message: "Editor updated successfully" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteEditor: async (req, res) => {
    const { id } = req.params;
    try {
      const editor = await Editors.deleteEditor(id);
      if (!editor) {
        res.status(400).json({ error: "Failed to delete editor" });
      } else {
        res.status(200).json({ message: "Editor deleted successfully" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllDevelopers: async (req, res) => {
    try {
      const developers = await Developers.getAllDevelopers();
      if (!developers) {
        res.status(400).json({ error: "Failed to get developers" });
      } else {
        res.status(200).json(developers);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
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

  createDeveloper: async (req, res) => {
    const developerData = req.body;
    try {
      const developer = await Developers.createDeveloper(developerData);
      if (!developer) {
        res.status(400).json({ error: "Failed to create developer" });
      } else {
        res.status(201).json({ message: "Developer created successfully" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateDeveloper: async (req, res) => {
    const { id } = req.params;
    const developerData = req.body;
    try {
      const developer = await Developers.updateDeveloper(id, developerData);
      if (!developer) {
        res.status(400).json({ error: "Failed to update developer" });
      } else {
        res.status(200).json({ message: "Developer updated successfully" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteDeveloper: async (req, res) => {
    const { id } = req.params;
    try {
      const developer = await Developers.deleteDeveloper(id);
      if (!developer) {
        res.status(400).json({ error: "Failed to delete developer" });
      } else {
        res.status(200).json({ message: "Developer deleted successfully" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllGenres: async (req, res) => {
    try {
      const genres = await Genres.getAllGenres();
      if (!genres) {
        res.status(400).json({ error: "Failed to get genres" });
      } else {
        res.status(200).json(genres);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getGenreById: async (req, res) => {
    const { id } = req.params;
    try {
      const genre = await Genres.getGenreById(id);
      if (!genre) {
        res.status(400).json({ error: "Genre not found" });
      } else {
        res.status(200).json(genre);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createGenre: async (req, res) => {
    const genreData = req.body;
    try {
      const genre = await Genres.createGenre(genreData);
      if (!genre) {
        res.status(400).json({ error: "Failed to create genre" });
      } else {
        res.status(201).json({ message: "Genre created successfully" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateGenre: async (req, res) => {
    const { id } = req.params;
    const genreData = req.body;
    try {
      const genre = await Genres.updateGenre(id, genreData);
      if (!genre) {
        res.status(400).json({ error: "Failed to update genre" });
      } else {
        res.status(200).json({ message: "Genre updated successfully" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteGenre: async (req, res) => {
    const { id } = req.params;
    try {
      const genre = await Genres.deleteGenre(id);
      if (!genre) {
        res.status(400).json({ error: "Failed to delete genre" });
      } else {
        res.status(200).json({ message: "Genre deleted successfully" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = adminController;

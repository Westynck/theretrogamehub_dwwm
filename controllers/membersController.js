const { Members } = require("../models");

require("dotenv").config();

const memberController = {
  getMemberByNickname: async (req, res) => {
    const { nickname } = req.params;
    try {
      const member = await Members.getMemberbyNickname(nickname);
      if (!member) {
        res.status(400).json({ error: "Member not found" });
      } else {
        res.status(200).json(member);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllMembers: async (req, res) => {
    try {
      const members = await Members.getAllMembers();
      res.json(members);
    } catch (error) {
      console.error(error);
      res.status(500).json(error.message);
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

  updateProfile: async (req, res) => {
    const { id } = req.params;
    const memberData = req.body;
    try {
      const updatedMember = await Members.updateProfile(id, memberData);
      if (updatedMember) {
        res.status(200).json(updatedMember);
      } else {
        res.status(400).json({ error: "Failed to update member profile" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteAccount: async (req, res) => {
    const { id } = req.params;
    console.log(
      "🚀 ~ file: memberController.js:56 ~ deleteAccount: ~ user_id:",
      id
    );

    try {
      const deleteSuccess = await Members.deleteAccount(id);
      if (deleteSuccess) {
        res
          .status(200)
          .json({ message: "Member account deleted successfully" });
      } else {
        res.status(400).json({ error: "Failed to delete member account" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = memberController;

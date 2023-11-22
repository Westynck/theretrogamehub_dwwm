const { Members } = require("../models");
const jwt = require("jsonwebtoken");

const authController = {
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const member = await Members.login(email, password);

      if (member.isActive === true) {
        const token = jwt.sign({ id: member.id }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        res.status(200).json({ token, member });
      } else {
        res.status(400).json({ error: "member account is not activated" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  register: async (req, res) => {
    const memberData = req.body;

    try {
      const member = await Members.register(memberData);
      if (!member) {
        res.status(400).json({ error: "Failed to register member" });
      } else {
        res.status(201).json({ message: "Member registered successfully" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  activateAccount: async (req, res) => {
    const { activationToken } = req.params;

    try {
      if (!activationToken) {
        return res.status(400).json({ error: "Missing activation token" });
      }

      const member = await Members.confirmAccount(activationToken);

      if (!member) {
        return res
          .status(400)
          .json({ error: "Failed to activate member account" });
      }

      return res.status(200).json({ message: "Member account activated" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

module.exports = authController;

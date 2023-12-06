const authenticate = require("../middleware/authenticate");
require("dotenv").config();

// Middleware pour vérifier un membre
const verifyMember = [
  authenticate,
  (req, res, next) => {
    console.log("ROLECHECK - REQ.ROLE : ", req.user.role);
    console.log("ROLECHECK - AUTHROLES : ", process.env.MEMBER);

    if (req.user.role === Number(process.env.MEMBER)) {
      next();
    } else {
      res.status(403).json({ message: "Accès refusé, réservé aux membres." });
    }
  },
];

module.exports = verifyMember;

const authenticate = require("../middleware/authenticate");
require("dotenv").config();

const verifyMember = [
  authenticate, // Vérifie si l'utilisateur est connecté
  (req, res, next) => {
    console.log("ROLECHECK - REQ.ROLE : ", req.user.role);
    console.log("ROLECHECK - AUTHROLES : ", process.env.MEMBER);

    //la condition est vérifiée si le role de l'utilisateur est égal au role membre
    if (req.user.role === Number(process.env.MEMBER)) {
      next();
    } else {
      res.status(403).json({ message: "Accès refusé, réservé aux membres." });
    }
  },
];

module.exports = verifyMember;

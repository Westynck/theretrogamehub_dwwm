const authenticate = require("../middleware/authenticate");
require("dotenv").config();

// Middleware pour vérifier un administrateur
const verifyAdmin = [
  authenticate, // on vérifie que le token est valide et on récupère les données du token dans req.user
  (req, res, next) => {
    console.log("ROLECHECK - REQ.ROLE : ", req.user.role);
    console.log("ROLECHECK - AUTHROLES : ", process.env.ADMIN);

    if (req.user.role === Number(process.env.ADMIN)) {
      // on vérifie que le role du token est bien celui d'un administrateur
      next(); // si oui, on passe à la suite
    } else {
      res
        .status(403)
        .json({ message: "Accès refusé, réservé aux administrateurs." });
    }
  },
];

module.exports = verifyAdmin;

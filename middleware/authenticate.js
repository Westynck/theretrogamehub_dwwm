require("dotenv").config({ path: "../.env" });

const jwt = require("jsonwebtoken");

//Middleware pour vérifier le token

//!! on vérifie si le token est présent dans le header de la requête
const authenticate = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "pas de bearer dans l'en tête" });
  }

  //!! on split le token pour récupérer la partie qui nous intéresse (le token)
  const token = req.headers.authorization.split(" ")[1];

  //!! si le token n'est pas présent, on renvoie une erreur
  if (!token) {
    return res.status(401).json({ message: "Token non fourni" });
  }

  //!! sinon on vérifie le token avec la clé secrète et on récupère les données du token (id, role, nickname) dans decoded
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; //!! on stocke les données du token dans req.user
    req.role = decoded;

    next();
  } catch (err) {
    return res.status(401).json({ message: "Token non valide" });
  }
};

module.exports = authenticate;

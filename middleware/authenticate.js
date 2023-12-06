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

  //!! sinon on vérifie le token avec la clé secrète et on récupère les données du token (id, email, isAdmin) dans decoded et on les stocke dans req.user pour les utiliser dans les routes qui en ont besoin
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    req.role = decoded;

    next();
  } catch (err) {
    return res.status(401).json({ message: "Token non valide" });
  }
};

module.exports = authenticate;

//on les modules dont on a besoin
const express = require("express");
const gameController = require("../controllers/game");
const router = express.Router();

router.get("/game", gameController.findGame); //cette route permet de récupérer un jeu par son nom

router.get("/games/:id", gameController.getGameById); //cette route permet de récupérer un jeu par son id

router.get("/games", gameController.getAllGames); //cette route permet de récupérer tous les jeux

module.exports = router;

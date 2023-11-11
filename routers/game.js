//on les modules dont on a besoin
const express = require("express");
const gamesController = require("../controllers/game");
const router = express.Router();

router.get("/game", gamesController.findGame); //cette route permet de récupérer un jeu par son nom

router.get("/games/:id", gamesController.getGameById); //cette route permet de récupérer un jeu par son id

router.get("/games", gamesController.getAllGames); //cette route permet de récupérer tous les jeux

module.exports = router;

const express = require("express");
const platformsController = require("../controllers/platformsController");
const router = express.Router();

router.get("/platform ", platformsController.findPlatform); //cette route permet de récupérer une plateforme par son nom

router.get("/platforms", platformsController.getAllPlatforms); //cette route permet de récupérer toutes les plateformes

router.get("/platforms/:id", platformsController.getPlatformById); //cette route permet de récupérer une plateforme par son id

module.exports = router;

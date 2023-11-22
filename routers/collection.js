//on imprte les modules dont on a besoin
const express = require("express");
const collectionsController = require("../controllers/collectionsController");
const platformsController = require("../controllers/platforms");
const gamesContoller = require("../controllers/gamesController");

const router = express.Router();

router.post("/collection/add/:id", collectionsController.addControllerToMember); //cette route permet d'ajouter une collection à un membre

router.post(
  "/collection/add/game/:id",
  collectionsController.addGameToCollection
); //cette route permet d'ajouter un jeu à une collection

router.delete(
  "/collection/remove/game/:id",
  collectionsController.removeGameFromCollection
); //cette route permet de supprimer un jeu d'une collection

router.post(
  //cette route permet d'ajouter une plateforme à une collection
  "/collection/add/platform/:id",
  collectionsController.addPlatformToCollection
);

router.delete(
  //cette route permet de supprimer une plateforme d'une collection
  "/collection/remove/platform/:id",
  collectionsController.removePlatformFromCollection
);

module.exports = router;

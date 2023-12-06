//on imprte les modules dont on a besoin
const express = require("express");
const collectionsController = require("../controllers/collectionsController");
const gamesController = require("../controllers/gamesController");
const platformsController = require("../controllers/platformsController");
const router = express.Router();
const verifyMember = require("../middleware/verifyMember");

router.get(
  "/collection/:memberId",
  verifyMember,
  collectionsController.getAllCollectionsFromMember
); //cette route permet de récupérer toutes les collections d'un membre

router.post(
  "/collection/add/:memberId",
  verifyMember,
  collectionsController.addCollection
); //cette route permet d'ajouter une collection à un membre

router.get(
  "/collection/:memberId/:collectionId",
  verifyMember,
  collectionsController.getOneCollectionFromMember
); //cette route permet de récupérer une collection d'un membre

router.patch(
  "/collection/edit/:id",
  verifyMember,
  collectionsController.updateCollectionName
); //cette route permet de modifier une collection

router.delete(
  "/collection/remove/:id",
  verifyMember,
  collectionsController.deleteCollection
); //cette route permet de supprimer une collection

router.post(
  "/collection/add/game/:id",
  verifyMember,
  gamesController.addGameToCollection
); //cette route permet d'ajouter un jeu à une collection

router.delete(
  "/collection/remove/game/:id",
  verifyMember,
  gamesController.removeGameFromCollection
); //cette route permet de supprimer un jeu d'une collection

router.post(
  "/collection/add/platform/:id",
  verifyMember,
  platformsController.addPlatformToCollection
); //cette route permet d'ajouter une plateforme à une collection

router.delete(
  "/collection/remove/platform/:id",
  verifyMember,
  platformsController.removePlatformFromCollection
); //cette route permet de supprimer une plateforme d'une collection

module.exports = router;

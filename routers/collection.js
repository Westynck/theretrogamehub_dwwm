//on imprte les modules dont on a besoin
const express = require("express");
const collectionsController = require("../controllers/collectionsController");
const router = express.Router();

router.post("/collection/add/:memberId", collectionsController.addCollection); //cette route permet d'ajouter une collection à un membre

router.get(
  "/collection/:memberId",
  collectionsController.getAllCollectionsFromMember
); //cette route permet de récupérer toutes les collections d'un membre

router.post("/collection/edit/:id", collectionsController.updateCollectionName); //cette route permet de modifier une collection

router.post(
  "/collection/add/game/:id",
  collectionsController.addGameToCollection
); //cette route permet d'ajouter un jeu à une collection

router.delete(
  "/collection/remove/game/:id",
  collectionsController.removeGameFromCollection
); //cette route permet de supprimer un jeu d'une collection

router.post(
  "/collection/add/platform/:id",
  collectionsController.addPlatformToCollection
); //cette route permet d'ajouter une plateforme à une collection

router.delete(
  "/collection/remove/platform/:id",
  collectionsController.removePlatformFromCollection
); //cette route permet de supprimer une plateforme d'une collection

module.exports = router;

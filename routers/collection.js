//on imprte les modules dont on a besoin
const express = require("express");
const collectionsController = require("../controllers/collections");
const router = express.Router();

router.post(
  "/member/add/collection",
  collectionController.addCollectionToMember
); //cette route permet d'ajouter une collection à un membre

router.post("/collection/add/game/:id", gamesContoller.addGameToCollection); //cette route permet d'ajouter un jeu à une collection

router.post("/collection/add/game/:id", gamesContoller.addGameToCollection); // ajoute un jeu (par son id) à la collection du membre connecté

router.delete(
  "/collection/remove/game/:id",
  gamesContoller.removeGameFromCollection
); // supprime un jeu (par son id) de la collection du membre connecté

router.post(
  "/collection/add/platform/:id",
  platformsController.addPlatformToCollection
); // ajoute une plateforme (par son id) à la collection du membre connecté

router.delete(
  "/collection/remove/platform/:id",
  platformsController.removePlatformFromCollection
); // supprime une plateforme (par son id) de la collection du membre connecté

module.exports = router;

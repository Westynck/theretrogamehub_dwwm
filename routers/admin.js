// on importe les modules dont on a besoin
const express = require("express");
const gamesController = require("../controllers/games");
const platformsController = require("../controllers/platforms");
const membersController = require("../controllers/members");
const editorsController = require("../controllers/editors");
const router = express.Router();

//les routes admin pour les jeux
router.get("/admin/games", gamesController.getAllGames); //cette route permet de récupérer tous les jeux

router.get("/admin/games/:id", gamesController.getGameById); //cette route permet de récupérer un jeu par son id

router.post("/admin/games", gamesController.createGame); //cette route permet de créer un jeu

router.patch("/admin/games/:id", gamesController.updateGame); //cette route permet de modifier un jeu

router.delete("/admin/games/:id", gamesController.deleteGame); //cette route permet de supprimer un jeu

//les routes admin pour les plateformes
router.get("/admin/platforms", platformsController.getAllPlatforms); //cette route permet de récupérer toutes les plateformes

router.get("/admin/platforms/:id", platformsController.getPlatformById); //  cette route permet de récupérer une plateforme par son id

router.post("/admin/platforms", platformsController.createPlatform); //cette route permet de créer une plateforme

router.patch("/admin/platforms/:id", platformsController.updatePlatform); // cette route permet de modifier une plateforme

router.delete("/admin/platforms/:id", platformsController.deletePlatform); //cette route permet de supprimer une plateforme

//les routes admin pour la gestion des membres
router.get("/admin/members", membersController.getAllMembers); //cette route permet de récupérer tous les membres

router.get("/admin/members/:id", membersController.getMemberById); //cette route permet de récupérer un membre par son id

router.get("/admin/members/:nickname", membersController.getMemberByNickname); //cette route permet de récupérer un membre par son nickname

router.post("/admin/members", membersController.blockMember); //cette route permet de bloquer un membre

router.delete("/admin/members/:id", membersController.deleteMember); //cette route permet de supprimer un membre

//les routes admin pour la gestion des éditeurs
router.get("/admin/editors", editorsController.getAllEditors); //cette route permet de récupérer tous les éditeurs
router.get("/admin/editors/:id", editorsController.getEditorById); //cette route permet de récupérer un éditeur par son id
router.post("/admin/editors", editorsController.createEditor); //cette route permet de créer un éditeur
router.patch("/admin/editors/:id", editorsController.updateEditor); //cette route permet de modifier un éditeur
router.delete("/admin/editors/:id", editorsController.deleteEditor); //cette route permet de supprimer un éditeur

module.exports = router;

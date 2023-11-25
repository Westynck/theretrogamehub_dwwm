// on importe les modules dont on a besoin
const express = require("express");
const adminController = require("../controllers/adminController");
const router = express.Router();

//les routes admin pour les jeux
router.get("/admin/games", adminController.getAllGames); //cette route permet de récupérer tous les jeux

router.get("/admin/games/:id", adminController.getGameById); //cette route permet de récupérer un jeu par son id

router.post("/admin/games", adminController.createGame); //cette route permet de créer un jeu

router.patch("/admin/games/:id", adminController.updateGame); //cette route permet de modifier un jeu

router.delete("/admin/games/:id", adminController.deleteGame); //cette route permet de supprimer un jeu

//les routes admin pour les plateformes
router.get("/admin/platforms", adminController.getAllPlatforms); //cette route permet de récupérer toutes les plateformes

router.get("/admin/platforms/:id", adminController.getPlatformById); //  cette route permet de récupérer une plateforme par son id

router.post("/admin/platforms", adminController.createPlatform); //cette route permet de créer une plateforme

router.patch("/admin/platforms/:id", adminController.updatePlatform); // cette route permet de modifier une plateforme

router.delete("/admin/platforms/:id", adminController.deletePlatform); //cette route permet de supprimer une plateforme

//les routes admin pour la gestion des membres
router.get("/admin/members", adminController.getAllMembers); //cette route permet de récupérer tous les membres

router.get("/admin/members/:id", adminController.memberDetails); //cette route permet de récupérer un membre par son id

router.get(
  "/admin/members/nickname/:nickname",
  adminController.getMemberByNickname
); //cette route permet de récupérer un membre par son nickname

router.post("/admin/members/block/:id", adminController.blockMember); //cette route permet de bloquer un membre

router.post("/admin/members/unblock/:id", adminController.unblockMember); //cette route permet de débloquer un membre

router.delete("/admin/members/:id", adminController.deleteMember); //cette route permet de supprimer un membre

//les routes admin pour la gestion des éditeurs
router.get("/admin/editors", adminController.getAllEditors); //cette route permet de récupérer tous les éditeurs

router.get("/admin/editors/:id", adminController.getEditorById); //cette route permet de récupérer un éditeur par son id

router.post("/admin/editors", adminController.createEditor); //cette route permet de créer un éditeur

router.patch("/admin/editors/:id", adminController.updateEditor); //cette route permet de modifier un éditeur

router.delete("/admin/editors/:id", adminController.deleteEditor); //cette route permet de supprimer un éditeur

//les routes admin pour la gestion des développeurs

router.get("/admin/developers", adminController.getAllDevelopers); //cette route permet de récupérer tous les développeurs

router.get("/admin/developers/:id", adminController.getDeveloperById); //cette route permet de récupérer un développeur par son id

router.post("/admin/developers", adminController.createDeveloper); //cette route permet de créer un développeur

router.patch("/admin/developers/:id", adminController.updateDeveloper); //cette route permet de modifier un développeur

router.delete("/admin/developers/:id", adminController.deleteDeveloper); //cette route permet de supprimer un développeur

//les routes admin pour la gestion des genres

router.get("/admin/genres", adminController.getAllGenres); //cette route permet de récupérer tous les genres

router.get("/admin/genres/:id", adminController.getGenreById); //cette route permet de récupérer un genre par son id

router.post("/admin/genres", adminController.createGenre); //cette route permet de créer un genre

router.patch("/admin/genres/:id", adminController.updateGenre); //cette route permet de modifier un genre

router.delete("/admin/genres/:id", adminController.deleteGenre); //cette route permet de supprimer un genre

module.exports = router;

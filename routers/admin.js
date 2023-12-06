// on importe les modules dont on a besoin
const express = require("express");
const adminController = require("../controllers/adminController");
const router = express.Router();
const verifyAdmin = require("../middleware/verifyAdmin");

//!! les routes admin pour les jeux
router.get("/admin/games", verifyAdmin, adminController.getAllGames); //cette route permet de récupérer tous les jeux

router.get("/admin/games/:id", verifyAdmin, adminController.getGameById); //cette route permet de récupérer un jeu par son id

router.post("/admin/games", verifyAdmin, adminController.createGame); //cette route permet de créer un jeu

router.patch("/admin/games/:id", verifyAdmin, adminController.updateGame); //cette route permet de modifier un jeu

router.delete("/admin/games/:id", verifyAdmin, adminController.deleteGame); //cette route permet de supprimer un jeu

//!! les routes admin pour les plateformes
router.get("/admin/platforms", verifyAdmin, adminController.getAllPlatforms); //cette route permet de récupérer toutes les plateformes

router.get(
  "/admin/platforms/:id",
  verifyAdmin,
  adminController.getPlatformById
); //  cette route permet de récupérer une plateforme par son id

router.post("/admin/platforms", verifyAdmin, adminController.createPlatform); //cette route permet de créer une plateforme

router.patch(
  "/admin/platforms/:id",
  verifyAdmin,
  adminController.updatePlatform
); // cette route permet de modifier une plateforme

router.delete(
  "/admin/platforms/:id",
  verifyAdmin,
  adminController.deletePlatform
); //cette route permet de supprimer une plateforme

//!! les routes admin pour la gestion des membres
router.get("/admin/members", verifyAdmin, adminController.getAllMembers); //cette route permet de récupérer tous les membres

router.get("/admin/members/:id", verifyAdmin, adminController.memberDetails); //cette route permet de récupérer un membre par son id

router.get(
  "/admin/members/nickname/:nickname",
  verifyAdmin,
  adminController.getMemberByNickname
); //cette route permet de récupérer un membre par son nickname

router.post(
  "/admin/members/block/:id",
  verifyAdmin,
  adminController.blockMember
); //cette route permet de bloquer un membre

router.post(
  "/admin/members/unblock/:id",
  verifyAdmin,
  adminController.unblockMember
); //cette route permet de débloquer un membre

router.delete("/admin/members/:id", verifyAdmin, adminController.deleteMember); //cette route permet de supprimer un membre

//!! les routes admin pour la gestion des éditeurs
router.get("/admin/editors", verifyAdmin, adminController.getAllEditors); //cette route permet de récupérer tous les éditeurs

router.get("/admin/editors/:id", verifyAdmin, adminController.getEditorById); //cette route permet de récupérer un éditeur par son id

router.post("/admin/editors", verifyAdmin, adminController.createEditor); //cette route permet de créer un éditeur

router.patch("/admin/editors/:id", verifyAdmin, adminController.updateEditor); //cette route permet de modifier un éditeur

router.delete("/admin/editors/:id", verifyAdmin, adminController.deleteEditor); //cette route permet de supprimer un éditeur

//!! les routes admin pour la gestion des développeurs

router.get("/admin/developers", verifyAdmin, adminController.getAllDevelopers); //cette route permet de récupérer tous les développeurs

router.get(
  "/admin/developers/:id",
  verifyAdmin,
  adminController.getDeveloperById
); //cette route permet de récupérer un développeur par son id

router.post("/admin/developers", verifyAdmin, adminController.createDeveloper); //cette route permet de créer un développeur

router.patch(
  "/admin/developers/:id",
  verifyAdmin,
  adminController.updateDeveloper
); //cette route permet de modifier un développeur

router.delete(
  "/admin/developers/:id",
  verifyAdmin,
  adminController.deleteDeveloper
); //cette route permet de supprimer un développeur

//!! les routes admin pour la gestion des genres

router.get("/admin/genres", verifyAdmin, adminController.getAllGenres); //cette route permet de récupérer tous les genres

router.get("/admin/genres/:id", verifyAdmin, adminController.getGenreById); //cette route permet de récupérer un genre par son id

router.post("/admin/genres", verifyAdmin, adminController.createGenre); //cette route permet de créer un genre

router.patch("/admin/genres/:id", verifyAdmin, adminController.updateGenre); //cette route permet de modifier un genre

router.delete("/admin/genres/:id", verifyAdmin, adminController.deleteGenre); //cette route permet de supprimer un genre

module.exports = router;

//on importe les modules dont on a besoin
const express = require("express");
const membersController = require("../controllers/membersController");
const router = express.Router();

router.get("/members/:id", membersController.memberDetails); //cette route permet de récupérer les informations d'un membre

router.patch("/members/:id", membersController.updateProfile); //cette route permet de modifier un membre

router.delete("/members/:id", membersController.deleteAccount); //cette route permet de supprimer un membre

module.exports = router;

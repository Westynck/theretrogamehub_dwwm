//on importe les modules dont on a besoin
const express = require("express");
const membersController = require("../controllers/member");
const router = express.Router();

router.get("/members", membersController.getAllMembers); //cette route permet de récupérer tous les membres

router.get("/members/:id", membersController.getMemberById); //cette route permet de récupérer un membre par son id

router.get("/members/:nickname", membersController.getMemberByNickname); //cette route permet de récupérer un membre par son nickname

router.post("/members", membersController.createMember); //cette route permet de créer un membre

router.patch("/members/:id", membersController.updateMember); //cette route permet de modifier un membre

router.delete("/members/:id", membersController.deleteMember); //cette route permet de supprimer un membre

module.exports = router;

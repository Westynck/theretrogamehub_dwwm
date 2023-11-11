//on importe les modules dont on a besoin
const express = require("express");
const memberController = require("../controllers/member");
const router = express.Router();

router.get("/members", memberController.getAllMembers); //cette route permet de récupérer tous les membres

router.get("/members/:id", memberController.getMemberById); //cette route permet de récupérer un membre par son id

router.get("/members/:nickname", memberController.getMemberByNickname); //cette route permet de récupérer un membre par son nickname

router.post("/members", memberController.createMember); //cette route permet de créer un membre

router.patch("/members/:id", memberController.updateMember); //cette route permet de modifier un membre

router.delete("/members/:id", memberController.deleteMember); //cette route permet de supprimer un membre

module.exports = router;

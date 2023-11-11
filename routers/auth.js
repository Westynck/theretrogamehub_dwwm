//on importe les modules dont on a besoin
const express = require("express");
const authController = require("../controllers/auth");
const router = express.Router();

router.post("/login", authController.createMember); //cette route permet de se connecter

router.get("/confirm/:activation_token", authController.activateAccount); //cette route permet d'activer son compte

router.post("/register", authController.LoginMember); //cette route permet de s'enregistrer

module.exports = router;

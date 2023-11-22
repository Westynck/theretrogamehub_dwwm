//on importe les modules dont on a besoin
const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();

router.post("/login", authController.login); //cette route permet de se connecter à l'application

router.get("/confirm/:activationToken", authController.activateAccount); //cette route permet d'activer son compte

router.post("/register", authController.register); //cette route permet de créer un membre

module.exports = router;

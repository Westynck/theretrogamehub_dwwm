//on importe les modules dont on a besoin
const express = require("express");
const developersController = require("../controllers/developersController");

const router = express.Router();

router.get("/developer/:name", developersController.findDeveloper); //cette route permet de récupérer un développeur par son nom

router.get("/developers", developersController.getAllDevelopers); //cette route permet de récupérer tous les développeurs

router.get("/developers/:id", developersController.getDeveloperById); //cette route permet de récupérer un développeur par son id

module.exports = router;

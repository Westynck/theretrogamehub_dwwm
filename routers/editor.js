const express = require("express");
const editorsController = require("../controllers/editorsController");

router.get("/editor", editorsController.findEditor); //cette route permet de récupérer un éditeur par son nom

router.get("/editors", editorsController.getAllEditors); //cette route permet de récupérer tous les éditeurs

router.get("/editors/:id", editorsController.getEditorById); //cette route permet de récupérer un éditeur par son id

module.exports = router;

// Path: routers/genre.js

const express = require("express");
const genresController = require("../controllers/genres");
const router = express.Router();

router.get("/genres", genresController.getAllGenres); //cette route permet de récupérer tous les genres

router.get("/genres/:id", genresController.getGenreById); //cette route permet de récupérer un genre par son id

module.exports = router;

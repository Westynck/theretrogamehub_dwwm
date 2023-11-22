const express = require("express");
const app = express();
require("dotenv").config();
const DB = require("./database");
const adminRoutes = require("./routers/admin");
const authRoutes = require("./routers/auth");
const gameRoutes = require("./routers/game");
const memberRoutes = require("./routers/member");
const platformRoutes = require("./routers/platform");
const genreRoutes = require("./routers/genre");
const developerRoutes = require("./routers/developer");
const editorRoutes = require("./routers/editor");

const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(adminRoutes);
app.use(authRoutes);
app.use(gameRoutes);
app.use(memberRoutes);
app.use(platformRoutes);
app.use(genreRoutes);
app.use(developerRoutes);
app.use(editorRoutes);

app.get("/", (req, res) => {
  res.send("Hello World! 👋 ");
});

app.get("*", (req, res) => {
  res.status(501).send("Not Implemented");
});

DB.authenticate()
  .then(() => {
    console.log("🚀 database connected 🚀");
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(` App listening at http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(
      "Erreur en essayant de se connecter à la base de données",
      error
    );
  });

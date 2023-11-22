const express = require("express");
const app = express();
require("dotenv").config();
const DB = require("./database");
const {
  auth,
  admin,
  member,
  collection,
  game,
  editor,
  developer,
  genre,
  platform,
} = require("./routers");

const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(auth); // auth routes
app.use(admin); // admin routes
app.use(member); // member routes
app.use(collection); // collection routes
app.use(game); // game routes
app.use(editor); // editor routes
app.use(developer); // developer routes
app.use(genre); // genre routes
app.use(platform); // platform routes

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

const express = require("express");
const app = express();
require("dotenv").config();
const DB = require("./database");
// const router = require("./routers/routers");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("*", (req, res) => {
  res.status(501).send("Not Implemented");
});

DB.authenticate()
  .then(() => {
    console.log("database connected");
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`App listening at http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(
      "Erreur en essayant de se connecter à la base de données",
      error
    );
  });

const express = require("express");
const app = express();
const PORT = 8000;
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

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

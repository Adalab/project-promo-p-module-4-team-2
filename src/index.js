const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");
const { v4: uuidv4 } = require("uuid");
uuidv4();

const server = express();

server.use(cors());
server.use(
  express.json({
    limit: "10mb",
  })
);

server.set("view engine", "ejs");

const serverPort = process.env.PORT || 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

const db = new Database("./src/db/cards.db", {
  verbose: console.log,
});
const staticServerPathWeb = "./src/public-react";
server.use(express.static(staticServerPathWeb));

const staticServerPathStyles = "./src/public-css";
server.use(express.static(staticServerPathStyles));

server.post("/card", (req, res) => {
  const requestData =
    req.body.palette !== "" &&
    req.body.name !== "" &&
    req.body.job !== "" &&
    req.body.photo !== "" &&
    req.body.email !== "" &&
    req.body.linkedin !== "" &&
    req.body.github !== "";
  req.body.uuid !== "";
  if (requestData) {
    const newCard = { ...req.body, id: uuidv4() };
    const query = db.prepare(
      "INSERT INTO card (palette, name, job, email, phone, linkedin, github, photo, uuid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ? )"
    );
    const result = query.run(
      newCard.palette,
      newCard.name,
      newCard.job,
      newCard.email,
      newCard.phone,
      newCard.linkedin,
      newCard.github,
      newCard.photo,
      newCard.id
    );

    const responseSucess = {
      success: true,
      cardURL: `http://localhost:4000/card/${newCard.id}`,
    };
    res.json(responseSucess);
  } else {
    const responseError = {
      success: false,
      error: "Faltan parámetros",
    };
    res.json(responseError);
  }
});

server.get("/card/:id", (req, res) => {
  const query = db.prepare("SELECT * FROM card where uuid=?");
  const userCard = query.get(req.params.id);
  res.render("card", userCard);
});

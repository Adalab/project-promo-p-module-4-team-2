// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
uuidv4();

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(
  express.json({
    limit: "10mb",
  })
);

server.set("view engine", "ejs");

// Arrancamos el servidor en el puerto 3000
const serverPort = process.env.PORT || 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

const staticServerPathWeb = "./src/public-react";
server.use(express.static(staticServerPathWeb));

const staticServerPathStyles = "./src/public-css";
server.use(express.static(staticServerPathStyles));

const savedCards = [];
// Escribimos los endpoints que queramos
server.post("/card", (req, res) => {
  const requestData =
    req.body.name !== "" &&
    req.body.job !== "" &&
    req.body.photo !== "" &&
    req.body.email !== "" &&
    req.body.linkedin !== "" &&
    req.body.github !== "";
  if (requestData) {
    const newCard = { ...req.body, id: uuidv4() };
    savedCards.push(newCard);

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
  const userCard = savedCards.find((card) => card.id === req.params.id);
  console.log(req.params.id);
  res.render("card", userCard);
  //res.json({ result: 'tarjeta creada' });
});

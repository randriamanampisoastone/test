const express = require("express");
const cors = require("cors");
const path = require("path");

let port = process.env.PORT || 3000;

let data = {
  id: 2545855542512221221,
  send: 21512334313121323121,
  message: "Ndao ifamono",
};

const app = express();

// Définir le dossier public comme répertoire statique
app.use(express.static(path.join(__dirname, "FrontEnd")));

// Utiliser le middleware CORS avec des options spécifiques
app.use(cors());
// Middleware pour traiter le JSON
app.use(express.json());

// ------------- EVENEMENT ------------- //

app.get("/", (req, res) => {
  // Envoyer le fichier HTML manuellement
  res.sendFile(path.join(__dirname, "FrontEnd", "index.html"));
});
app.get("/donnee", (req, res) => {
  console.log("Iny fa nisu nikitika !");
  res.json(data);
});
// ------------- ********* ------------- //

app.listen(port, () => {
  console.log(`Le serveur est demarrer sur le port ${port}`);
});

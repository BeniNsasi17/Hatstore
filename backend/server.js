const express = require("express");
const cors = require("cors");
require('dotenv').config();

const app = express();

// Configuration CORS
const corsOptions = {
  origin: process.env.CLIENT_ORIGIN || "http://localhost:5002"
};

app.use(cors(corsOptions));

// Parser les requêtes de type application/json
app.use(express.json());

// Parser les requêtes de type application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Route simple
app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur l'API de HatStore." });
});

// Importer les routes produits
require("./routes/product.routes")(app);

// Initialiser la base de données
const db = require("./models");
db.sequelize.sync({ force: process.env.DB_FORCE_RESYNC === 'true' })
  .then(() => {
    console.log("Synchronisation de la base de données réussie.");
    if (process.env.DB_FORCE_RESYNC === 'true') {
      console.log("La base de données a été réinitialisée.");
    }
  })
  .catch(err => {
    console.log("Erreur lors de la synchronisation de la base de données : ", err);
  });

// Définir le port et démarrer le serveur
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${PORT}.`);
}); 

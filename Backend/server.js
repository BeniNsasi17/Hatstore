const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5000;

const app = express();

// connexion à la DB
connectDB();

//Middleware qui permet de traiter les données de la Request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/auth", require("./routes/auth.routes"));   // login/register classiques
app.use("/api/auth", require("./routes/oauth.routes"));  // Google login

// Lancer le serveur
app.listen(port, () => console.log("Le serveur a démarré au port " + port));



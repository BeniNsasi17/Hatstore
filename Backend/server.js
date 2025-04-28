const express = require("express");
const dotenv = require("dotenv").config();
const pool = require("./config/db");
const port = 5001;
const app = express();

//Middleware qui permet de traiter les données de la Request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/auth", require("./routes/auth.routes"));   // login/register classiques

// Lancer le serveur
app.listen(port, () => console.log("Le serveur a démarré au port " + port));

// Test DB connection before starting server
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Database connection failed:', err);
    process.exit(1);
  } else {
    console.log('Database connected successfully at:', res.rows[0].now);
    
    // Start server only if DB is connected
    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => console.log(`Auth service running on port ${PORT}`));
  }
});






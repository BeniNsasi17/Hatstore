const express = require("express");
const router = express.Router();
const axios = require("axios");

const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL;

router.post("/login", async (req, res) => {
  try {
    const response = await axios.post(`${AUTH_SERVICE_URL}/login`, req.body);
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({
      message: err.response?.data?.message || "Erreur côté auth-service",
    });
  }
});

router.post("/register", async (req, res) => {
  try {
    const response = await axios.post(`${AUTH_SERVICE_URL}/register`, req.body);
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({
      message: err.response?.data?.message || "Erreur côté auth-service",
    });
  }
});

// Ajoute d'autres routes d'auth si besoin

module.exports = router;

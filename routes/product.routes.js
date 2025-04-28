const express = require("express");
const router = express.Router();
const axios = require("axios");

const PRODUCT_SERVICE_URL = process.env.PRODUCT_SERVICE_URL;

// Liste tous les produits
router.get("/", async (req, res) => {
  try {
    const response = await axios.get(`${PRODUCT_SERVICE_URL}`);
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({
      message: err.response?.data?.message || "Erreur côté product-service",
    });
  }
});

// Détail d’un produit
router.get("/:id", async (req, res) => {
  try {
    const response = await axios.get(`${PRODUCT_SERVICE_URL}/${req.params.id}`);
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({
      message: err.response?.data?.message || "Erreur côté product-service",
    });
  }
});

// Créer un produit
router.post("/", async (req, res) => {
  try {
    const response = await axios.post(`${PRODUCT_SERVICE_URL}`, req.body);
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({
      message: err.response?.data?.message || "Erreur côté product-service",
    });
  }
});

// Modifier un produit
router.put("/:id", async (req, res) => {
  try {
    const response = await axios.put(`${PRODUCT_SERVICE_URL}/${req.params.id}`, req.body);
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({
      message: err.response?.data?.message || "Erreur côté product-service",
    });
  }
});

// Supprimer un produit
router.delete("/:id", async (req, res) => {
  try {
    const response = await axios.delete(`${PRODUCT_SERVICE_URL}/${req.params.id}`);
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({
      message: err.response?.data?.message || "Erreur côté product-service",
    });
  }
});

module.exports = router;

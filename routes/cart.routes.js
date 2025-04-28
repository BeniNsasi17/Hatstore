const express = require("express");
const axios = require("axios");
const router = express.Router();

const CART_SERVICE_URL = process.env.CART_SERVICE_URL;

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(`${CART_SERVICE_URL}`);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || { error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const response = await axios.post(`${CART_SERVICE_URL}`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || { error: error.message });
  }
});

router.patch("/", async (req, res) => {
  try {
    const response = await axios.patch(`${CART_SERVICE_URL}`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || { error: error.message });
  }
});

router.delete("/:product_id", async (req, res) => {
  try {
    const response = await axios.delete(`${CART_SERVICE_URL}/${req.params.product_id}`);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || { error: error.message });
  }
});

module.exports = router;

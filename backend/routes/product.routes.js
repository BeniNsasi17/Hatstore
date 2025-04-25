module.exports = app => {
  const products = require("../controllers/product.controller.js");
  const router = require("express").Router();

  // Créer un nouveau produit
  router.post("/", products.create);

  // Récupérer tous les produits
  router.get("/", products.findAll);

  // Récupérer un produit par son id
  router.get("/:id", products.findOne);

  // Mettre à jour un produit par son id
  router.put("/:id", products.update);

  // Supprimer un produit par son id
  router.delete("/:id", products.delete);

  // Supprimer tous les produits
  router.delete("/", products.deleteAll);

  app.use("/api/products", router);
}; 
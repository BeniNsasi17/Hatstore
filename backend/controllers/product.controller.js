const db = require("../models");
const Product = db.products;
const Op = db.Sequelize.Op;

// Créer et sauvegarder un nouveau produit
exports.create = (req, res) => {
  // Valider la requête
  if (!req.body.name || !req.body.price) {
    res.status(400).send({
      message: "Le nom et le prix du produit sont obligatoires !"
    });
    return;
  }

  // Créer un produit
  const product = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    imageUrl: req.body.imageUrl,
    stock: req.body.stock,
    isAvailable: req.body.isAvailable !== undefined ? req.body.isAvailable : true,
    sizes: req.body.sizes || [],
    colors: req.body.colors || []
  };

  // Sauvegarder le produit dans la base de données
  Product.create(product)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Une erreur est survenue lors de la création du produit."
      });
    });
};

// Récupérer tous les produits de la base de données
exports.findAll = (req, res) => {
  const name = req.query.name;
  const category = req.query.category;
  
  let condition = {};
  
  if (name) {
    condition.name = { [Op.iLike]: `%${name}%` };
  }
  
  if (category) {
    condition.category = { [Op.eq]: category };
  }

  Product.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Une erreur est survenue lors de la récupération des produits."
      });
    });
};

// Récupérer un produit par son id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Product.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Produit avec id=${id} non trouvé.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erreur lors de la récupération du produit avec id=${id}`
      });
    });
};

// Mettre à jour un produit par son id
exports.update = (req, res) => {
  const id = req.params.id;

  Product.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Le produit a été mis à jour avec succès."
        });
      } else {
        res.send({
          message: `Impossible de mettre à jour le produit avec id=${id}. Le produit n'a pas été trouvé ou req.body est vide !`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erreur lors de la mise à jour du produit avec id=${id}`
      });
    });
};

// Supprimer un produit par son id
exports.delete = (req, res) => {
  const id = req.params.id;

  Product.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Le produit a été supprimé avec succès !"
        });
      } else {
        res.send({
          message: `Impossible de supprimer le produit avec id=${id}. Le produit n'a peut-être pas été trouvé !`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erreur lors de la suppression du produit avec id=${id}`
      });
    });
};

// Supprimer tous les produits de la base de données
exports.deleteAll = (req, res) => {
  Product.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} produits ont été supprimés avec succès !` });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Une erreur est survenue lors de la suppression de tous les produits."
      });
    });
}; 
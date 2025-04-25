const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.DIALECT,
  operatorsAliases: 0,
  pool: {
    max: dbConfig.POOL.max,
    min: dbConfig.POOL.min,
    acquire: dbConfig.POOL.acquire,
    idle: dbConfig.POOL.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importer les modèles
db.products = require("./product.model.js")(sequelize, Sequelize);

module.exports = db; 
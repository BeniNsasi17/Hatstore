module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT
    },
    price: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
    },
    category: {
      type: Sequelize.STRING
    },
    imageUrl: {
      type: Sequelize.STRING
    },
    stock: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    isAvailable: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    },
    sizes: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      defaultValue: []
    },
    colors: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      defaultValue: []
    }
  });

  return Product;
}; 
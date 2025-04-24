const { Model, DataTypes } = require("sequelize");
const sequelize = require("./dbconnection");

class Producto extends Model {}

Producto.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Producto",
    tableName: "productos",
    timestamps: true,
  }
);

module.exports = Producto;

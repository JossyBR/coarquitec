const { Model, DataTypes } = require("sequelize");
const sequelize = require('./dbconnection')

class Producto extends Model {

}

Producto.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title:{
        type:DataTypes.STRING(50),
        allowNull: false,
    },
    description:{
        type:DataTypes.TEXT,
        allowNull: false,
    },
    // image:{
    //     type: DataTypes.TEXT,
    //     allowNull: false,
    //     defaultValue:
    //       "https://st2.depositphotos.com/1310390/5294/v/950/depositphotos_52942549-stock-illustration-set-of-black-silhouette-food.jpg",
    //   },
},
{
    sequelize,
    modelName: "Producto",
    tableName: "productos",
    timestamps:true
}
);

module.exports = Producto;

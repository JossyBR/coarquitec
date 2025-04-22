require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());

const routes = require("./api.routes");
app.use("/coarquitec/", routes);

//Cargar archivos de conexion de base de datos
const sequelize = require('./src/models/dbconnection')

//Sincronizar los modelos con la base de datos
require('./src/models/sync_tables')

app.listen(process.env.PORT, async () => {
  console.log(process.env.BIENVENIDA, process.env.PORT);
  try {

    //Conectarse a la base de datos
    await sequelize.authenticate();
    console.log("Conexión establecida con éxito a la base de datos!!!")
    
    //Crea las tablas sino existen, y actualiza cambios
    await sequelize.sync({alter: true})
    console.log('Tablas sincronizadas')
} catch (error) {
    console.error("Error conectado a la base de datos", error)
}
});

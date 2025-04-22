const Producto = require("../models/producto.models");

const { Op } = require("sequelize");

const index = async (req, res) => {
  // try {
  //   console.log("Hola estas creando un producto");
  //   res.send("Ruta de productos funcionando");
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).send("Error en el servidor");
  // }
  try {
    const productos = await Producto.findAll();

    if(!productos || productos.length == 0){
        return res.status(404).json({
            status: false,
            msg: "No existen productos en la base de datos",
            data: null,
        });
    } else{
        return res.status(200).json({
            msg: "Listado de productos obtenido correctamente",
            data: productos,
        });
    }

   
  } catch (error) {
    return res.status(500).json({
        status: false,
        msg:`Error al obtener el listado ${error.message}`,
        data: null,
    });
  }
};

const create = async (req, res) => {
  try {
      const { title, description } = req.body;

      if(!title || !description) {
        return res.status(400).json({
          message: "Title y description son requeridos."
        });
      }

      const nuevoProducto = await Producto.create({
        title,
        description,
      });

      res.status(201).json({
        message: "Producto creado exitosamente",
        data: nuevoProducto,
      })

  } catch (error) {
    console.error("Error al crear producto:", error);
    res.status(500).json({ message: "Error del servidor" });
  }

};

module.exports = {  
  index,
  create,
};

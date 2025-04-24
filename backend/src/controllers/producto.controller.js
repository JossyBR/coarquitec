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

    if (!productos || productos.length == 0) {
      return res.status(404).json({
        status: false,
        msg: "No existen productos en la base de datos",
        data: null,
      });
    } else {
      return res.status(200).json({
        msg: "Listado de productos obtenido correctamente",
        data: productos,
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: false,
      msg: `Error al obtener el listado ${error.message}`,
      data: null,
    });
  }
};

const create = async (req, res) => {
  try {
    const { title, description, image } = req.body;

    if (!title || !description || !image) {
      return res.status(400).json({
        message: "Title y description son requeridos.",
      });
    }

    const nuevoProducto = await Producto.create({
      title,
      description,
      image,
    });

    res.status(201).json({
      message: "Producto creado exitosamente",
      data: nuevoProducto,
    });
  } catch (error) {
    console.error("Error al crear producto:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

const update = async (req, res) => {
  try {
    const idProducto = req.params.id;
    const producto = await Producto.findByPk(idProducto);

    if (!producto) {
      return res.status(404).json({
        msg: `Producto a actualizar con el id: ${idProducto}, no encontrado en base de datos.`,
        data: null,
      });
    }

    const productoUpdate = await Producto.update(req.body, {
      where: { id: idProducto },
    });

    const productoUpdated = await Producto.findByPk(idProducto);

    return res.status(200).json({
      msg: `Producto con el id ${idProducto}, actualizado de forma correcta`,
      data: productoUpdated,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      msg: `Error al actualizar un producto: ${error.message}`,
      data: null,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const idProducto = req.params.id;
    console.log("ID:", idProducto);
    const producto = await Producto.findByPk(idProducto);

    if (!producto) {
      return res.status(404).json({
        status: false,
        msg: `Producto a eliminar con el id: ${idProducto}, no encontrado en base de datos.`,
        data: null,
      });
    }
    await producto.destroy();

    return res.status(200).json({
      status: true,
      msg: `Producto con el id: ${idProducto}, eliminado de forma correcta`,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      msg: `Error al eliminar un producto: ${error.message}`,
    });
  }
};

const show = async (req, res) => {
  try {
    const id = req.params.id;

    const producto = await Producto.findByPk(id);
    if (!producto) {
      return res.status(404).json({
        status: false,
        msg: `Producto con el id: ${id}, no encontrado en base de datos.`,
        data: null,
      });
    }

    return res.status(200).json({
      status: true,
      msg: "Producto encontrado de forma correcta",
      data: producto,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      msg: `Error al consultar un usuario: ${error.message}`,
      data: null,
    });
  }

  // try {
  //     res.status(200).json({message: "Ingreso al controlador de show"})
  // } catch (error) {
  //     res.status(400).json({message: "Ruta no encontrada"})
  // }
};

module.exports = {
  index,
  create,
  update,
  destroy,
  show,
};

const express = require("express");

const router = express.Router();

//Se importa el controlador
const productoController = require("../controllers/producto.controller.js");
const { update } = require("../models/producto.models.js");

//Se crean las rutas

router.get("/", productoController.index);
router.post('/', productoController.create)
router.put('/:id', productoController.update)
router.delete('/:id', productoController.destroy)
router.get('/:id', productoController.show)
router.get("/images/:image", productoController.getimage);

module.exports = router;

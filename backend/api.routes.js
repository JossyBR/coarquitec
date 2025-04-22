const express = require("express");

const router = express.Router();

const productoRouter = require("./src/routes/producto.routes.js");

router.use("/productos", productoRouter);

module.exports = router;

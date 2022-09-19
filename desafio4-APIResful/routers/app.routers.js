const express = require("express");
const router = express("routers");

const productsRoutes = require("./productos/productos.routes");
router.use("/products", productsRoutes);
module.exports = router;

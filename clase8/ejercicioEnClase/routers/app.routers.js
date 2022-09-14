const express = require("express");
const productsRoutes = require("./products/products.routes");
const usersRoutes = require("./users/users.routes");
const authorizer = require("../middlewares/authorizer");
const logger = require("../middlewares/logger");
const router = express.Router();

const middleware = [logger, authorizer];
//Middlewares
router.use([middleware]);
router.use("/products", productsRoutes);
router.use("/users", usersRoutes);
//Routes

module.exports = router;

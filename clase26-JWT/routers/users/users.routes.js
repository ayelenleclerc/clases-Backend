const express = require("express");
const router = express.Router();
const userController = require("../../controllers/users.controller");

router.post("/data", userController.getUserData);

module.exports = router;

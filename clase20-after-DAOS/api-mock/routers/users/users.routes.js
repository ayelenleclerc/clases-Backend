const { Router } = require("express");
const UsersController = require("../../controllers/users.controller");

const router = Router();

router.get("/", UsersController.getUsers);
router.get("/:id", UsersController.getUserById);
router.post("/", UsersController.saveUser);
router.put("/:id", UsersController.updateUser);
router.delete("/:id", UsersController.deleteUser);
router.post("/populate", UsersController.populate);

module.exports = router;

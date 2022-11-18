const HTTP_STATUS = require("../constants/api.constants");
// const MockContainer = require("../models/mock.container");
const { successResponse } = require("../utils/api.utils");
const { UsersDao } = require("../models/daos/app.daos");
// const userModel = new MockContainer("user");

const userDaos = new UsersDao();
class UsersController {
  async getUsers(req, res, next) {
    try {
      const users = await userDaos.getAll();
      const response = successResponse(users);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async getUserById(req, res, next) {
    const { id } = req.params;
    try {
      const user = await userDaos.getById(id);
      const response = successResponse(user);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async saveUser(req, res, next) {
    try {
      const newUser = await userDaos.save(req.body);
      const response = successResponse(newUser);
      res.status(HTTP_STATUS.CREATED).json(response);
    } catch (error) {
      next(error);
    }
  }

  async updateUser(req, res, next) {
    const { id } = req.params;
    try {
      const updatedUser = await userDaos.update(id, req.body);
      const response = successResponse(updatedUser);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async deleteUser(req, res, next) {
    const { id } = req.params;
    try {
      const deletedUser = await userDaos.delete(id);
      const response = successResponse(deletedUser);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  populate(req, res, next) {
    const { qty } = req.query;
    try {
      const user = userDaos.populate(qty);
      const response = successResponse(user);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new UsersController();

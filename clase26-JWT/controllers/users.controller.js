const UserDao = require("../models/daos/Users.dao");
const { HTTP_STATUS } = require("../constants/api.constants");
const { successResponse } = require("../utils/api.utils");

const UserModel = new UserDao();

const getUserData = async (req, res, next) => {
  try {
    const user = await UserModel.getByUsername(req.user.username);
    user.visits++;
    await UserModel.update(user._id, user);
    return res.json(successResponse(user));
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getUserData,
};

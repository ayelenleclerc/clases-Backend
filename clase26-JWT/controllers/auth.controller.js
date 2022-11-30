const bcrypt = require("bcrypt");
const UserDao = require("../models/daos/Users.dao");
const { HTTP_STATUS } = require("../constants/api.constants");
const { successResponse } = require("../utils/api.utils");
const { generateToken } = require("../middlewares/jwt.middleware.js");

const UserModel = new UserDao();

const salt = () => bcrypt.genSaltSync(10);
const createHash = (password) => bcrypt.createHashSync(password, salt);
const isValidPassword = (user, password) =>
  bcrypt.compareSync(password, user.password);

const register = async (req, res, next) => {
  try {
    const { username, password, address } = req.body;
    const baseUser = {
      username,
      address,
      visits: 0,
    };
    const userDB = {
      ...baseUser,
      password: createHash(password),
    };
    await UserModel.createUser(userDB);
    const token = generateToken(baseUser);
    return res.json({ access_token: token });
  } catch (error) {
    console.log(error);
    next(error);
  }
  res.redirect("/profile");
};

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await UserModel.getByUsername(username);
    if (!isValidPassword(user, password)) {
      throw new HttpError(
        HTTP_STATUS.BAD_REQUEST,
        "Wrong username or password"
      );
    }
    const baseUser = {
      username: user.username,
      address: user.address,
      visits: user.visits,
    };
    const token = generateToken(baseUser);
    return res.json(successResponse({ access_token: token }));
  } catch (error) {
    console.log(error);
    next(error);
  }
  res.redirect("/profile");
};

module.exports = {
  login,
  register,
};

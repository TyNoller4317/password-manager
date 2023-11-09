const AsyncHandler = require("express-async-handler");
const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//@description Get All Users
//@route GET /api/users
//@access public
const getAllUsers = AsyncHandler(async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ msg: "Cannot get users!" });
  }
});

//@description Get User by ID
//@route GET /api/users/:id
//@access public
const getUserById = AsyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ msg: "Cannot find user!" });
  }
});

//@description Create/Register a user
//@route POST /api/users/register
//@access public
const createUser = AsyncHandler(async (req, res) => {
  try {
    const { username, password } = req.body;

    hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      password: hashedPassword,
    });

    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ msg: "Cannot Create User!" });
  }
});

//@description Delete a user
//@route DELETE /api/users
//@access public
const deleteUser = AsyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400).json({ msg: "User has not been found!" });
  }

  await User.deleteOne({ _id: req.params.id });

  res.status(200).json(user, { msg: "User has been deleted!" });
});

//@description Login a User
//@route POST /api/users/login
//@access public
const loginUser = AsyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ msg: "All fields must be entered!" });
  }

  const user = await User.findOne({ username });

  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          password: user.password,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "60m" }
    );
    res.status(200).json({ accessToken, username, password });
  } else {
    res.status(400).json({ msg: "Email password is not valid!" });
  }

  res.json({ msg: "User has been logged in!" });
});

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  deleteUser,
  loginUser,
};

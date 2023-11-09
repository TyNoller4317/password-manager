const AsyncHandler = require("express-async-handler");
const PasswordModel = require("../models/PasswordModel");

//@description Get all shiftlogs but edited
//@route GET /api/passwords
//@access public
const getAllPasswords = AsyncHandler(async (req, res) => {
  const pass = await PasswordModel.find();

  res.status(200).json(pass);
});

//@description Get all shiftlogs but edited
//@route GET /api/passwords
//@access public
const getPasswordById = AsyncHandler(async (req, res) => {});

//@description Create password
//@route POST /api/passwords
//@access public
const createPassword = AsyncHandler(async (req, res) => {
  const { destination, username, password } = req.body;

  if (!destination || !username || !password) {
    res.status(400).json({ msg: "All Fields Must Be Entered!!" });
  }

  const pass = await PasswordModel.create({
    user_id: req.user.id,
    destination,
    username,
    password,
  });

  res.status(200).json(pass);
});

//@description Get all shiftlogs but edited
//@route GET /api/passwords
//@access public
const updatePassword = AsyncHandler(async (req, res) => {
  const pass = await PasswordModel.find();

  res.status(200).json(pass);
});

//@description Get all shiftlogs but edited
//@route GET /api/passwords
//@access public
const deletePassword = AsyncHandler(async (req, res) => {
  const pass = await PasswordModel.findById(req.params.id);

  await PasswordModel.deleteOne({ _id: req.params.id });

  res.status(200).json(pass);
});

module.exports = {
  getAllPasswords,
  getPasswordById,
  createPassword,
  updatePassword,
  deletePassword,
};

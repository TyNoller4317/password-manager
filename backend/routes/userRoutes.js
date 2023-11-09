const express = require("express");
const {
  createUser,
  getUserById,
  getAllUsers,
  deleteUser,
  loginUser,
} = require("../controllers/userControllers");
const router = express.Router();

//get all users
router.get("/", getAllUsers);

//get user by id
router.get("/:id", getUserById);

//create user
router.post("/register", createUser);

//login user
router.post("/login", loginUser);

//delete user
router.delete("/:id", deleteUser);

module.exports = router;

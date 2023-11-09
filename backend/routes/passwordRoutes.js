const express = require("express");
const router = express.Router();
const {
  getAllPasswords,
  getPasswordById,
  createPassword,
  updatePassword,
  deletePassword,
} = require("../controllers/passwordController");

//get passwords
router.get("/", getAllPasswords);

//get password by id
router.get("/:id", getPasswordById);

//create password
router.post("/", createPassword);

//update password
router.put("/:id", updatePassword);

//delete password
router.delete("/:id", deletePassword);

module.exports = router;

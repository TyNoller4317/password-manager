const express = require("express");
const router = express.Router();
const {
  getAllNotes,
  createNote,
  deleteNote,
  updateNote,
  getNoteById,
} = require("../controllers/notesController");

//get all notes
router.get("/", getAllNotes);

router.get("/:id", getNoteById);

//create a note
router.post("/", createNote);

//update a note
router.put("/:id", updateNote);

//deletea  note
router.delete("/:id", deleteNote);

module.exports = router;

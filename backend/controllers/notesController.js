const AsyncHandler = require("express-async-handler");
const NoteModel = require("../models/NotesModel");

//@description Get all notes
//@route GET /api/notes
//@access private
const getAllNotes = AsyncHandler(async (req, res) => {
  const notes = await NoteModel.find({ user_id: req.user.id });

  res.status(200).json(notes);
});

//@description Get note by id
//@route GET /api/notes/:id
//@access private

const getNoteById = AsyncHandler(async (req, res) => {
  const note = await NoteModel.findById(req.params.id);

  res.status(200).json(note);
});

//@description Create a Note
//@route POST /api/notes
//@access private

const createNote = AsyncHandler(async (req, res) => {
  const { note } = req.body;

  if (!note) {
    res.status(400).json({ msg: "All fields must be entered!" });
  }

  const newNote = await NoteModel.create({ note, user_id: req.user.id });

  res.status(200).json(newNote);
});

//@description Update a current note
//@route PUT /api/notes/:id
//@access private
const updateNote = AsyncHandler(async (req, res) => {
  const currentNote = await NoteModel.findById(req.params.id);

  if (!currentNote) {
    throw new Error("Could not find note!");
  }

  const newNote = await NoteModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(newNote);
});

//@description Delete a Note
//@route DELETE /api/notes/:id
//@access private
const deleteNote = AsyncHandler(async (req, res) => {
  const note = await NoteModel.findById(req.params.id);

  if (!note) {
    throw new Error("Could not Find note!");
  }

  await NoteModel.deleteOne(note);

  res.status(200).json({ msg: "Note Deleted!" });
});

module.exports = {
  getAllNotes,
  createNote,
  deleteNote,
  updateNote,
  getNoteById,
};

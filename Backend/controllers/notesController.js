const Note = require("../models/Note");

// CREATE
const createNote = async (req, res) => {
  try {
    const note = await Note.create(req.body);
    res.json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ALL
const getNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ONE
const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    res.json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
const updateNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
const deleteNote = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote,
};
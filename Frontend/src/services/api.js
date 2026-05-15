import axios from "axios";

const API_BASE_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:5000' 
  : 'https://notesapp-backend-4acz.onrender.com';

const API = axios.create({
  baseURL: API_BASE_URL, // Use the variable here
});

export const getNotes = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return []; // Safety check if user isn't logged in yet
  const res = await API.get(`/notes?userId=${user.id}`);
  return res.data;
};

export const createNote = async (note) => {
  const res = await API.post("/notes", note);
  return res.data;
};

export const getNoteById = async (id) => {
  const res = await API.get(`/notes/${id}`);
  return res.data;
};

export const updateNote = async (id, note) => {
  const res = await API.put(`/notes/${id}`, note);
  return res.data;
};

export const deleteNote = async (id) => {
  const res = await API.delete(`/notes/${id}`);
  return res.data;
};

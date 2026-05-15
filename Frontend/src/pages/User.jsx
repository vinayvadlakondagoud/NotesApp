import { useEffect, useState } from "react";
import { getNotes, deleteNote } from "../services/api";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import NoteCard from "../components/NoteCard";

export default function User() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        setLoading(true);
        const data = await getNotes();
        setNotes(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this note?")) return;

    try {
      await deleteNote(id);
      setNotes((prev) => prev.filter((n) => n._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const filtered = notes.filter(
    (n) =>
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.content.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-gray-400 text-lg">
          Loading your notes...
        </div>
      </div>
    );
  }

  return (
  <div className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-50 to-purple-100">

    <div className="max-w-5xl mx-auto pt-12 px-4">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-2">
          Your Notes 📒
        </h1>

        <button
          onClick={() => navigate("/create")}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2.5 rounded-lg shadow hover:scale-105 transition"
        >
          + Create Note
        </button>

      </div>

      <div className="flex justify-center mb-10">
        <div className="w-full max-w-xl">
          <SearchBar search={search} setSearch={setSearch} />
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">

        {filtered.length === 0 ? (
          <div className="col-span-full text-center mt-10">

            <h2 className="text-lg font-semibold text-gray-600 mb-2">
              No Notes Yet ✨
            </h2>

            <p className="text-gray-400 mb-4">
              Start creating your first note
            </p>

            <button
              onClick={() => navigate("/create")}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              Create Note
            </button>

          </div>
        ) : (
          filtered.map((note) => (
            <NoteCard
              key={note._id}
              note={note}
              onDelete={handleDelete}
              navigate={navigate}
            />
          ))
        )}

      </div>

    </div>
  </div>
);
}
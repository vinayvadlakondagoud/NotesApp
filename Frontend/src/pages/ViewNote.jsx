import { useEffect, useState } from "react";
import { getNoteById, deleteNote } from "../services/api";
import { useParams, useNavigate } from "react-router-dom";

export default function ViewNote() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const data = await getNoteById(id);
        setNote(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchNote();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Delete this note?")) return;

    try {
      await deleteNote(id);
      navigate("/notes");
    } catch (err) {
      console.error(err);
    }
  };

  if (!note) {
    return (
      <p className="text-center mt-10 text-gray-500">
        Loading note...
      </p>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center">

      <div className="glass p-8 rounded-2xl max-w-2xl w-full">

        <h1 className="text-3xl font-bold text-indigo-600 mb-4">
          {note.title}
        </h1>

        <p className="text-gray-600 mb-6 whitespace-pre-line">
          {note.content}
        </p>

        <div className="flex justify-between items-center">

          <button
            onClick={() => navigate(`/edit/${note._id}`)}
            className="text-indigo-600 hover:underline"
          >
            ✏️ Edit
          </button>

          <button
            onClick={handleDelete}
            className="text-red-500 hover:underline"
          >
            🗑 Delete
          </button>

        </div>

      </div>
    </div>
  );
}
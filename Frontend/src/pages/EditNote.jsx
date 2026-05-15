import { useEffect, useState } from "react";
import { getNoteById, updateNote } from "../services/api";
import { useParams, useNavigate } from "react-router-dom";

export default function EditNote() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const data = await getNoteById(id);
        setTitle(data.title);
        setContent(data.content);
      } catch (err) {
        console.error(err);
      }
    };

    fetchNote();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      return setError("Title is required");
    }

    try {
      await updateNote(id, { title, content });
      navigate("/notes");
    } catch (err) {
      setError("Update failed");
    }
  };

  return (
    <div className="form-container">
      <div className="form-box">

        <h2 className="text-2xl font-bold mb-6 text-indigo-600">
          Edit Note
        </h2>

        {error && <p className="error-text">{error}</p>}

        <form onSubmit={handleUpdate}>

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="6"
          />

          <button>Update Note</button>

        </form>
      </div>
    </div>
  );
}
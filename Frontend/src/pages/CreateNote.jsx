import { useState } from "react";
import { createNote } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      return setError("Title is required");
    }

    try {
      setLoading(true);

      await createNote({
        title,
        content,
        userId: user.id, // ✅ IMPORTANT
      });

      navigate("/notes");
    } catch (err) {
      setError("Failed to create note");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">

      <div className="form-box">

        <h2 className="text-2xl font-bold mb-6 text-indigo-600">
          Create Note ✨
        </h2>

        {error && <p className="error-text">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* TITLE */}
          <input
            type="text"
            placeholder="Enter title..."
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setError("");
            }}
          />

          <textarea
            placeholder="Write your note..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="6"
          />

          <button disabled={loading}>
            {loading ? "Creating..." : "Create Note"}
          </button>

        </form>

      </div>

    </div>
  );
}
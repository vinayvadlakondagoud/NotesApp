export default function NoteCard({ note, onDelete, navigate }) {
  return (
    <div className="note-card cursor-pointer group">

      <h2 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition">
        {note.title}
      </h2>

      <p className="text-gray-500 text-sm mb-4 line-clamp-3">
        {note.content.slice(0, 120)}...
      </p>

      <div className="flex justify-between text-xs mt-auto opacity-70 group-hover:opacity-100 transition">

        <button
          onClick={() => navigate(`/note/${note._id}`)}
          className="text-indigo-600"
        >
          👁 View
        </button>

        <button
          onClick={() => navigate(`/edit/${note._id}`)}
          className="text-yellow-600"
        >
          ✏️ Edit
        </button>

        <button
          onClick={() => onDelete(note._id)}
          className="text-red-500"
        >
          🗑 Delete
        </button>

      </div>

    </div>
  );
}
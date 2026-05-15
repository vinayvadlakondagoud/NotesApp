export default function NoteForm({
  title,
  setTitle,
  content,
  setContent,
  onSubmit,
  buttonText,
}) {
  return (
    <div className="form-container">

      <div className="form-box">

        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">
          {buttonText}
        </h2>

        <form onSubmit={onSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="✨ Enter title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="📝 Write your thoughts..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="6"
          />

          <button>{buttonText}</button>

        </form>

      </div>

    </div>
  );
}
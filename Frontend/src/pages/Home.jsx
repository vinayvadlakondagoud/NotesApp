import { Link } from "react-router-dom";

export default function Home() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">

      <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        Notes Management System ✨
      </h1>

      <p className="text-gray-600 max-w-xl mb-6">
        Capture your ideas, organize 
        your thoughts, and stay productive with a clean and modern notes experience.
      </p>

      <div className="flex gap-4">
        {user ? (
          <Link to="/notes">
            <button className="btn">Go to Dashboard</button>
          </Link>
        ) : (
          <>
            <Link to="/register">
              <button className="btn">Register</button>
            </Link>
          </>
        )}
      </div>

      <div className="mt-16 grid gap-6 grid-cols-1 md:grid-cols-3 max-w-5xl">

        <div className="glass p-6 rounded-xl">
          <h3 className="font-semibold text-lg mb-2">📝 Create Notes</h3>
          <p className="text-gray-500 text-sm">
            Quickly write and save your ideas anytime.
          </p>
        </div>

        <div className="glass p-6 rounded-xl">
          <h3 className="font-semibold text-lg mb-2">✏️ Edit Easily</h3>
          <p className="text-gray-500 text-sm">
            Modify your notes with a clean editor.
          </p>
        </div>

        <div className="glass p-6 rounded-xl">
          <h3 className="font-semibold text-lg mb-2">🔍 Search Notes</h3>
          <p className="text-gray-500 text-sm">
            Find notes instantly with smart search.
          </p>
        </div>

      </div>

    </div>
  );
}
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/60 border-b border-gray-200 shadow-sm">

      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        <h1
          onClick={() => navigate("/")}
          className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition"
        >
          📝 NotesApp
        </h1>

        <div className="flex items-center gap-4">

          {user ? (
            <>
              <span className="text-sm text-gray-600">
                👋 {user.name}
              </span>

              <button
                onClick={() => {
                  localStorage.removeItem("user");
                  navigate("/login");
                }}
                className="px-4 py-1.5 rounded-lg bg-red-100 text-red-500 hover:bg-red-200 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>

              <Link
                to="/login"
                className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:scale-105 transition shadow"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:scale-105 transition shadow"
              >
                Register
              </Link>
            </>
          )}

        </div>

      </div>
    </nav>
  );
}
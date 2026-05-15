import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import User from "./pages/User";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";
import ViewNote from "./pages/ViewNote";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/notes" element={<User />} />
          <Route path="/create" element={<CreateNote />} />
          <Route path="/edit/:id" element={<EditNote />} />
          <Route path="/note/:id" element={<ViewNote />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
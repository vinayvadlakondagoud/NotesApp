import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const API_BASE_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:5000' 
    : 'https://notesapp-backend-4acz.onrender.com';

export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const validate = () => {
        let err = {};

        if (!form.email.trim()) {
            err.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
            err.email = "Invalid email";
        }

        if (!form.password) {
            err.password = "Password required";
        }

        return err;
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        const v = validate();
        if (Object.keys(v).length) return setErrors(v);

        try {
            setLoading(true);

            const res = await axios.post(`${API_BASE_URL}/login`, form);

            localStorage.setItem("user", JSON.stringify(res.data.user));

            navigate("/notes");
        } catch (err) {
            setErrors({
                api: err.response?.data?.message || "Login failed",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">

            <div className="auth-card">

                <h2 className="auth-title">Welcome Back </h2>

                {errors.api && <p className="error-text">{errors.api}</p>}

                <form onSubmit={handleLogin} className="space-y-4">

                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            className="input"
                            onChange={(e) =>
                                setForm({ ...form, email: e.target.value })
                            }
                        />
                        {errors.email && <p className="error-text">{errors.email}</p>}
                    </div>

                    <div className="relative">
                        <input
                            type={show ? "text" : "password"}
                            placeholder="Password"
                            className="input pr-10"
                            onChange={(e) =>
                                setForm({ ...form, password: e.target.value })
                            }
                        />
                        <span
                            onClick={() => setShow(!show)}
                            className="absolute right-3 top-3 cursor-pointer"
                        >
                            {show ? "🙈" : "👁"}
                        </span>
                        {errors.password && <p className="error-text">{errors.password}</p>}
                    </div>

                    <button disabled={loading} className="btn-primary">
                        {loading ? "Logging in..." : "Login"}
                    </button>

                </form>

                <p className="text-center text-sm text-gray-500 mt-6">
                    Don’t have an account?{" "}
                    <Link
                        to="/register"
                        className="text-indigo-600 font-semibold hover:text-indigo-800 transition"
                    >
                        Register
                    </Link>
                </p>

            </div>
        </div>
    );
}

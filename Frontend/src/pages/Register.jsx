import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const API_BASE_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:5000' 
    : 'https://notesapp-g47d.onrender.com';

export default function Register() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});
    const [show, setShow] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const validate = () => {
        let err = {};

        if (!form.name.trim()) {
            err.name = "Name required";
        }

        if (!form.email.trim()) {
            err.email = "Email required";
        } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
            err.email = "Invalid email";
        }

        if (!form.password) {
            err.password = "Password required";
        } else if (form.password.length < 6) {
            err.password = "Min 6 characters";
        }

        if (form.password !== form.confirmPassword) {
            err.confirmPassword = "Passwords do not match";
        }

        return err;
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        const v = validate();
        if (Object.keys(v).length) return setErrors(v);

        try {
            setLoading(true);

            await axios.post(`${API_BASE_URL}/register`, {
                name: form.name,
                email: form.email,
                password: form.password,
            });

            alert("Registered successfully 🎉");
            navigate("/login");
        } catch (err) {
            setErrors({
                api: err.response?.data?.message || "Registration failed",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">

            <div className="auth-card">

                <h2 className="auth-title">Create Account 🚀</h2>

                {errors.api && <p className="error-text">{errors.api}</p>}

                <form onSubmit={handleRegister} className="space-y-4">

                    <div>
                        <input
                            placeholder="Full Name"
                            className="input"
                            onChange={(e) =>
                                setForm({ ...form, name: e.target.value })
                            }
                        />
                        {errors.name && <p className="error-text">{errors.name}</p>}
                    </div>

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

                    <div className="relative">
                        <input
                            type={showConfirm ? "text" : "password"}
                            placeholder="Confirm Password"
                            className="input pr-10"
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    confirmPassword: e.target.value,
                                })
                            }
                        />
                        <span
                            onClick={() => setShowConfirm(!showConfirm)}
                            className="absolute right-3 top-3 cursor-pointer"
                        >
                            {showConfirm ? "🙈" : "👁"}
                        </span>
                        {errors.confirmPassword && (
                            <p className="error-text">{errors.confirmPassword}</p>
                        )}
                    </div>

                    <button disabled={loading} className="btn-primary">
                        {loading ? "Creating..." : "Register"}
                    </button>

                </form>

                <p className="text-center text-sm text-gray-600 mt-5">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-indigo-600 font-medium hover:underline"
                    >
                        Login
                    </Link>
                </p>

            </div>
        </div>
    );
}

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/AuthSlice";
import { useNavigate, Link } from "react-router-dom";
import AuthWrapper from "./AuthWrapper";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "demo@galaxy.com", password: "force123" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(form));
    setTimeout(() => navigate("/"), 800);
  };

  return (
    <AuthWrapper title="Login">
      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-black/50 border border-blue-400/40 focus:border-red-400 outline-none"
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-black/50 border border-blue-400/40 focus:border-red-400 outline-none"
        />
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-red-500 rounded-lg font-semibold hover:opacity-90"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-blue-300">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-red-400 underline">
          Sign up
        </Link>
      </p>
    </AuthWrapper>
  );
}

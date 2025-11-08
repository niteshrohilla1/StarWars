import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../store/slices/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
import AuthWrapper from "./AuthWrapper";

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(form));
    setTimeout(() => navigate("/login"), 800);
  };

  return (
    <AuthWrapper title="Sign Up">
      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-black/50 border border-blue-400/40 focus:border-red-400 outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-black/50 border border-blue-400/40 focus:border-red-400 outline-none"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-black/50 border border-blue-400/40 focus:border-red-400 outline-none"
          required
        />
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-red-500 rounded-lg font-semibold hover:opacity-90"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-blue-300">
        Already have an account?{" "}
        <Link to="/login" className="text-red-400 underline">
          Login
        </Link>
      </p>
    </AuthWrapper>
  );
}

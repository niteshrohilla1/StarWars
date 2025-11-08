import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, signup } from "../../store/slices/AuthSlice";

export default function AuthModal({ onClose }) {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "login") dispatch(login(form));
    else dispatch(signup(form));
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gradient-to-b from-black/90 to-blue-950/80 rounded-2xl p-8 w-96 border border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.6)] relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-blue-300 hover:text-red-400 text-xl font-bold"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
          {mode === "login" ? "Login" : "Sign Up"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "signup" && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-black/50 border border-blue-400/40 focus:border-red-400 outline-none"
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            defaultValue={mode === "login" ? "demo@galaxy.com" : ""}
            className="w-full p-3 rounded-md bg-black/50 border border-blue-400/40 focus:border-red-400 outline-none"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            defaultValue={mode === "login" ? "force123" : ""}
            className="w-full p-3 rounded-md bg-black/50 border border-blue-400/40 focus:border-red-400 outline-none"
            required
          />
          <button
            type="submit"
            className="w-full py-3 mt-2 bg-gradient-to-r from-blue-500 to-red-500 rounded-lg font-semibold hover:opacity-90 shadow-[0_0_25px_rgba(59,130,246,0.6)]"
          >
            {mode === "login" ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="mt-4 text-center text-blue-300">
          {mode === "login" ? (
            <>
              Don’t have an account?{" "}
              <span
                onClick={() => setMode("signup")}
                className="text-red-400 cursor-pointer"
              >
                Sign up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setMode("login")}
                className="text-blue-400 cursor-pointer"
              >
                Login
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

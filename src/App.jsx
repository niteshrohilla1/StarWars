import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/layout/Header";
import MainLayout from "./components/layout/MainLayout";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import bgImage from "./assets/background.jpg";

export default function App() {
  const user = useSelector((state) => state.auth.user);

  return (
    <Router>
      <div
        className="min-h-screen w-screen text-white font-sans flex flex-col"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header />
        <Routes>
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
          <Route path="/" element={user ? <MainLayout /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

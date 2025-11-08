import { useState, useEffect } from "react";

export default function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const sessionUser = sessionStorage.getItem("user");
    const localUser = localStorage.getItem("user");
    if (sessionUser) setUser(JSON.parse(sessionUser));
    else if (localUser) setUser(JSON.parse(localUser));
  }, []);

  const login = (email, password, remember) => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const found = storedUsers.find(
      (u) => u.email === email && u.password === password
    );

    // Demo Account
    if (email === "demo@galaxy.com" && password === "force123") {
      const demoUser = { name: "Demo User", email };
      sessionStorage.setItem("user", JSON.stringify(demoUser));
      setUser(demoUser);
      return { success: true };
    }

    if (found) {
      if (remember) localStorage.setItem("user", JSON.stringify(found));
      else sessionStorage.setItem("user", JSON.stringify(found));
      setUser(found);
      return { success: true };
    }

    return { success: false, message: "Invalid credentials" };
  };

  const signup = (name, email, password) => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    if (storedUsers.some((u) => u.email === email)) {
      return { success: false, message: "User already exists" };
    }
    const newUser = { name, email, password };
    storedUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(storedUsers));
    return { success: true };
  };

  const logout = () => {
    sessionStorage.removeItem("user");
    localStorage.removeItem("user");
    setUser(null);
  };

  return { user, login, signup, logout };
}

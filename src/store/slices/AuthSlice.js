import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const demoUser = {
  name: "Demo User",
  email: "demo@galaxy.com",
  password: "force123",
};

const localUsers = JSON.parse(localStorage.getItem("users")) || [demoUser];
const sessionUser = JSON.parse(sessionStorage.getItem("sessionUser")) || null;

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    user: sessionUser,
    users: localUsers,
  },
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      const foundUser = state.users.find(
        (u) => u.email === email && u.password === password
      );

      if (foundUser) {
        state.user = foundUser;
        sessionStorage.setItem("sessionUser", JSON.stringify(foundUser));
        toast.success(`Welcome back, ${foundUser.name}!`, {
          style: {
            border: "1px solid #3b82f6",
            background: "#0b0f1a",
            color: "#cbd5e1",
          },
          iconTheme: { primary: "#3b82f6", secondary: "#0b0f1a" },
        });
      } else {
        toast.error("Invalid credentials. Try again or sign up first.", {
          style: {
            border: "1px solid #ef4444",
            background: "#0b0f1a",
            color: "#f87171",
          },
          iconTheme: { primary: "#ef4444", secondary: "#0b0f1a" },
        });
      }
    },
    signup: (state, action) => {
      const newUser = action.payload;
      const exists = state.users.some((u) => u.email === newUser.email);

      if (exists) {
        toast.error("User already exists! Please log in instead.", {
          style: {
            border: "1px solid #ef4444",
            background: "#0b0f1a",
            color: "#f87171",
          },
        });
        return;
      }

      state.users.push(newUser);
      localStorage.setItem("users", JSON.stringify(state.users));
      toast.success("Signup successful! You can now log in.", {
        style: {
          border: "1px solid #3b82f6",
          background: "#0b0f1a",
          color: "#cbd5e1",
        },
      });
    },
    logout: (state) => {
      state.user = null;
      sessionStorage.removeItem("sessionUser");
      toast("Logged out successfully.", {
        style: {
          border: "1px solid #3b82f6",
          background: "#0b0f1a",
          color: "#cbd5e1",
        },
        iconTheme: { primary: "#3b82f6", secondary: "#0b0f1a" },
      });
    },
  },
});

export const { login, signup, logout } = AuthSlice.actions;
export default AuthSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

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
      } else {
        alert("Invalid credentials. Try again or sign up first.");
      }
    },
    signup: (state, action) => {
      const newUser = action.payload;
      const exists = state.users.some((u) => u.email === newUser.email);
      if (exists) {
        alert("User already exists! Please log in instead.");
        return;
      }
      state.users.push(newUser);
      localStorage.setItem("users", JSON.stringify(state.users));
      alert("Signup successful! You can now log in.");
    },
    logout: (state) => {
      state.user = null;
      sessionStorage.removeItem("sessionUser");
    },
  },
});

export const { login, signup, logout } = AuthSlice.actions;
export default AuthSlice.reducer;

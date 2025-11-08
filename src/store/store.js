import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./slices/CharactersSlice";
import authReducer from "./slices/AuthSlice";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    auth : authReducer
  },
});

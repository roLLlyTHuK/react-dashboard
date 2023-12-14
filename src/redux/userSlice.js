import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    auth: {
      login: "",
      password: "",
    },
    isLoggedIn: false,
  },
  reducers: {
    logIn: (state, action) => {
      state.auth = action.payload;

      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.auth = { login: "", password: "" };
      state.isLoggedIn = false;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

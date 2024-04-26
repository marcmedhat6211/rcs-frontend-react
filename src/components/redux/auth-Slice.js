import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { email: "", roles: [], isAuthenticated: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.email = action.payload.email;
      state.roles = action.payload.roles;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.email = "";
      state.roles = [];
    },
  },
});

export const authReduxActions = authSlice.actions;
export default authSlice;

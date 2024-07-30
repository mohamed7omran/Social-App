import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  id: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload; // Set email
    },
    setId: (state, action) => {
      state.id = action.payload; // Set userId
    },
    logout: (state) => {
      state.email = null; // Clear email on logout
      state.id = null; // Clear id on logout
    },
  },
});

export const { setEmail, setId, logout } = authSlice.actions;
export default authSlice.reducer;

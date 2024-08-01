import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  userId: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setGlobalEmail: (state, action) => {
      state.email = action.payload; // Set email
    },
    setGlobalId: (state, action) => {
      state.userId = action.payload; // Set userId
    },
    logout: (state) => {
      state.email = null; // Clear email on logout
      state.userId = null; // Clear id on logout
    },
  },
});

export const { setGlobalEmail, setGlobalId, logout } = authSlice.actions;
export default authSlice.reducer;

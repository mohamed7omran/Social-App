import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  email: 1,
  id: 2,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email += 1;
    },
    setId: (state, action) => {
      state.id;
    },
    logout: (state) => {
      state.email = "";
      state.id = "";
    },
  },
});
export const { setEmail, setId, logout } = authSlice.actions;
export default authSlice.reducer;

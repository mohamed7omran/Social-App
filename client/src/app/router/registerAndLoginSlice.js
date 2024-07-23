import { createSlice } from "@reduxjs/toolkit";
const initialState = { email, password };
export const registerAndLoginSlice = createSlice({
  name: "registerAndLogin",
  initialState,
  reducers: {
    email: (state) => {
      return state.email;
    },
    password: (state) => {
      return state.password;
    },
  },
});
export default registerAndLoginSlice.reducer;
export const { email, password } = registerAndLoginSlice.actions;

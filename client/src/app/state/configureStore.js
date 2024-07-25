"use client";
import { configureStore } from "@reduxjs/toolkit";
import registerAndLoginSlice from "./registerAndLoginSlice";

export const configureStore = configureStore({
  reducer: {
    registerAndLoginSlice: registerAndLoginSlice,
  },
});

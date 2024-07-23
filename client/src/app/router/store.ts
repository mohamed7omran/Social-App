"use client";
import { configureStore } from "@reduxjs/toolkit";
import registerAndLoginSlice from "./registerAndLoginSlice";

export const store = configureStore({
  reducer: {
    registerAndLoginSlice: registerAndLoginSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

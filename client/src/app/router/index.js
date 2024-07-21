import { configureStore } from "@reduxjs/toolkit";
import { CommentSlice } from "./commentSlice";
const store = configureStore({
  reducer: {
    comment: CommentSlice,
  },
});
export default store;

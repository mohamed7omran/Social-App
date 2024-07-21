import { createSlice } from "@reduxjs/toolkit";
const initialState = { numOfComment: 10 };
export const CommentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    commentNum: (state) => {
      return state.numOfComment;
    },
  },
});
export default CommentSlice.reducer;
export const { commentNum } = CommentSlice.actions;

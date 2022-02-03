import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

export const quizSlice = createSlice({
  name: "switchQuiz",
  initialState,
  reducers: {
    Topic: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { open, close } = quizSlice.actions;

export default quizSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const answerSlice = createSlice({
  name: "answer",
  initialState,
  reducers: {
    Answer: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    ResetAnswer: (state) => {
      state.value = [];
    },
  },
});

export const { Answer, ResetAnswer, isCorrect } = answerSlice.actions;

export default answerSlice.reducer;

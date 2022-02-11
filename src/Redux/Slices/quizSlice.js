import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const quizSlice = createSlice({
  name: "switchQuiz",
  initialState,
  reducers: {
    Select: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { Select } = quizSlice.actions;

export default quizSlice.reducer;

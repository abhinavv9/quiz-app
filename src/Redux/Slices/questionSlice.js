import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
  visited: []
};

export const questionSlice = createSlice({
  name: "questionNo",
  initialState,
  reducers: {
    setQuestionNo: (state, action) => {
      state.value = action.payload;
    },
    setVisited: (state, action) => {
      state.visited = [...state.visited, action.payload]
    }
  },
});

// Action creators are generated for each case reducer function
export const { setQuestionNo } = questionSlice.actions;

export default questionSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const topicSlice = createSlice({
  name: "switchTopic",
  initialState,
  reducers: {
    Topic: (state, action) => {
      state.value = action.payload;
    },
  },
});


export const { Topic } = topicSlice.actions;

export default topicSlice.reducer;

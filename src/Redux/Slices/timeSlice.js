import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const timeSlice = createSlice({
  name: "setTime",
  initialState,
  reducers: {
    Time: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { Time } = timeSlice.actions;

export default timeSlice.reducer;

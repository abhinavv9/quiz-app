import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const switchSlice = createSlice({
  name: "switchSection",
  initialState,
  reducers: {
    Switch: (state) => {
      state.value = !state.value;
    },
  },
});


export const { Switch } = switchSlice.actions;

export default switchSlice.reducer;

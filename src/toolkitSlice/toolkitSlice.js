import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    count: 0,
  },
  reducers: {
    increment(state) {
      state.count += 1;
      console.log(11);
    },
    decrement(state) {
      state.count -= 1;
    },
  },
});

export default toolkitSlice.reducer;
export const { increment, decrement } = toolkitSlice.actions;

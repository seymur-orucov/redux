import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = {
  count: 2,
};

const increment = createAction("INCREMENT");
const decrement = createAction("DECREMENT");

export default createReducer(initialState, {
  [increment]: (state) => {
    state.count += 1;
  },
  [decrement]: (state) => {
    state.count -= 1;
  },
});

export { increment, decrement };

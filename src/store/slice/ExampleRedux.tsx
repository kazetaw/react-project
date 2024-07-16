import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const ExampleRedux = createSlice({
  name: "counter1",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = ExampleRedux.actions;
export default ExampleRedux;

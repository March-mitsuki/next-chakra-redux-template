import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type AppModeState = {
  count: number;
};

const initialState: AppModeState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const counterActions = counterSlice.actions;
export type CounterActionsType = ReturnType<
  (typeof counterActions)[keyof typeof counterActions]
>;
const counterReducer = counterSlice.reducer;
export default counterReducer;

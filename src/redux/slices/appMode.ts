import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type AppModeState = {
  isInit: boolean;
};

const initialState: AppModeState = {
  isInit: false,
};

export const appModeSlice = createSlice({
  name: "appMode",
  initialState,
  reducers: {
    changeIsInit: (state, action: PayloadAction<boolean>) => {
      state.isInit = action.payload;
    },
  },
});

export const appModeActions = appModeSlice.actions;
export type appModeActionsType = ReturnType<
  (typeof appModeActions)[keyof typeof appModeActions]
>;
const appModeReducer = appModeSlice.reducer;
export default appModeReducer;

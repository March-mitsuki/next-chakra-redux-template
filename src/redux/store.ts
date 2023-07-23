import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appModeReducer from "./slices/appMode";

const rootReducer = combineReducers({
  appMode: appModeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;

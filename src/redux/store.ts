import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;

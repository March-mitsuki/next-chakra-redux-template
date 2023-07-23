import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer, { CounterActionsType } from "./slices/counter";
import i18nReducer, { I18nActionsType } from "./slices/i18n";
import { loggerMiddleware } from "./middlewares/logger";

const rootReducer = combineReducers({
  counter: counterReducer,
  i18n: i18nReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat([loggerMiddleware]);
  },
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppActionsType = CounterActionsType | I18nActionsType;

export default store;

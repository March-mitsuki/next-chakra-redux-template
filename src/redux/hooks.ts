import {
  shallowEqual,
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppShallowEqualSelector: TypedUseSelectorHook<RootState> = (
  selector
) => {
  return useAppSelector(selector, shallowEqual);
};

export const useAppMode = () => {
  return useAppShallowEqualSelector((state) => state.appMode);
};

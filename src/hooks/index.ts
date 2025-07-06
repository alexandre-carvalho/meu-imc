import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { ApplicationState, ApplicationDispatch } from "store";

export const useAppDispatch: () => ApplicationDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ApplicationState> =
  useSelector;

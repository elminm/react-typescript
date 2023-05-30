import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./usersSlice";
import {useDispatch, useSelector,TypedUseSelectorHook} from "react-redux";
export const store = configureStore({
  reducer: {
    userReducer,
  },
});
export const useAppDispatch:()=> typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> =useSelector;

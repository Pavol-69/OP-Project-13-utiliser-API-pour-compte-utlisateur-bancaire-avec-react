import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { apiSlice } from "../store/slices/apiSlice";
import { userSlice } from "../store/slices/userSlice";
import { authSlice } from "../store/slices/authSlice";

let state = {
  user: {},
  auth: false,
};

export const store = configureStore({
  preloadedState: state,
  reducer: combineReducers({
    api: apiSlice.reducer,
    user: userSlice.reducer,
    auth: authSlice.reducer,
  }),
});

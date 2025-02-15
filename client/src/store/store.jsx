import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { apiSlice } from "../store/slices/apiSlice";
import { userSlice } from "../store/slices/userSlice";

let state = {
  user: {},
};

export const store = configureStore({
  preloadedState: state,
  reducer: combineReducers({
    api: apiSlice.reducer,
    user: userSlice.reducer,
  }),
});

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { apiSlice } from "../store/slices/apiSlice";
import { api } from "../services/api";
import { userSlice } from "../store/slices/userSlice";

let state = {
  user: {},
};

export const store = configureStore({
  preloadedState: state,
  reducer: combineReducers({
    apiSlice: apiSlice.reducer,
    user: userSlice.reducer,
    [api.reducerPath]: api.reducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

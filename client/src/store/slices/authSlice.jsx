import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    userAuth: (currentState, action) => {
      const stateWithNewUserAuth = { ...currentState, auth: action.payload };
      return stateWithNewUserAuth;
    },
  },
});

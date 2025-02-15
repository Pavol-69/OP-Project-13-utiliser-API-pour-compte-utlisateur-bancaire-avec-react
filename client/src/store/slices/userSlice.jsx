import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    saveUserInfo: (currentState, action) => {
      const stateWithNewUserInfo = { ...currentState, user: action.payload };
      return stateWithNewUserInfo;
    },
    cleanUserInfo: (currentState) => {
      const stateWithNoUserInfo = { ...currentState, user: {} };
      return stateWithNoUserInfo;
    },
  },
});

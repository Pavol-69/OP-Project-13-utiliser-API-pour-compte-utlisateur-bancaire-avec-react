import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    saveUserInfo: (currentState, action) => {
      const stateWithNewUserInfo = {
        ...action.payload,
        auth: currentState.auth,
      };
      return stateWithNewUserInfo;
    },
    userAuth: (currentState, action) => {
      const stateWithNewUserAuth = { ...currentState, auth: action.payload };
      return stateWithNewUserAuth;
    },
    userSignOut: () => {
      const stateWithNoUserInfo = { ...{}, auth: false };
      localStorage.removeItem("token");
      return stateWithNoUserInfo;
    },
  },
});

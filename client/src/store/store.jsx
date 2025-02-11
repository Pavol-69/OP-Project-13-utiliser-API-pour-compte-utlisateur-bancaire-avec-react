import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "../store/slices/authSlice";

let state = {
  user: {},
};

/*export const signIn = createAsyncThunk(
  "user/signIn",
  async (email, password, thunkApi) => {
    const response = await axios({
      method: "post",
      url: "http://localhost:3001/api/v1/user/login",
      headers: {},
      data: {
        email: email,
        password: password,
      },
    });

    const parseRes = await response.data.body;
    return new Promise((resolve, reject) => {
      if (parseRes.token) {
        resolve();
      } else {
        reject();
      }
    });
  }
);*/

/*export const getUserInfo = createAsyncThunk("user/getUserInfo", (thunkApi) => {
  try {
  } catch (err) {
    err.message;
  }
});*/

/*export const saveInfoUser = createAction(
  "SAVE_INFO_USER",
  (email, password) => {
    const user = { email: email, password: password };
    return {
      payload: user,
    };
  }
);

export const signOut = createAction("SIGN_OUT", () => {
  return {};
});

const reducer = createReducer(state, {
  [signOut]: (currentState) => {
    console.log("toto");
    return { ...currentState, user: {} };
  },
});*/

export const store = configureStore({
  preloadedState: state,
  reducer: combineReducers({ user: authSlice.reducer }),
});

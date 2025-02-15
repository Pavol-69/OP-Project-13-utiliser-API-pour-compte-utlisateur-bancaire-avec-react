import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { authSlice } from "./authSlice";
import axios from "axios";

export const signIn = createAsyncThunk(
  "user/signIn",
  async ({ user }, thunkApi) => {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3001/api/v1/user/login",
        headers: {},
        data: {
          email: user.email,
          password: user.password,
        },
      });

      const parseRes = await response.data.body;

      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        await thunkApi.dispatch(getUserInfo(parseRes.token));
        return thunkApi.fulfillWithValue("Connexion success");
      } else {
        return thunkApi.rejectWithValue("Connexion error");
      }
    } catch (err) {
      return thunkApi.rejectWithValue(err.response?.data || "Connexion error");
    }
  }
);

export const getUserInfo = createAsyncThunk(
  "user/getInfo",
  async (token, thunkApi) => {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3001/api/v1/user/profile",
        headers: { authorization: `Bearer ${token}` },
        data: {},
      });

      const parseRes = await response.data.body;

      thunkApi.dispatch(userSlice.actions.saveUserInfo(parseRes));
      thunkApi.dispatch(authSlice.actions.userAuth(true));
      return thunkApi.fulfillWithValue("User identified");
    } catch (err) {
      return thunkApi.rejectWithValue(err.response?.data || "Connexion error");
    }
  }
);

export const apiSlice = createSlice({
  name: "api",
  initialState: {},
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(signIn.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(signIn.rejected, (state, action) => {
      console.error(action.payload);
    });
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(getUserInfo.rejected, (state, action) => {
      console.error(action.payload);
    });
  },
});

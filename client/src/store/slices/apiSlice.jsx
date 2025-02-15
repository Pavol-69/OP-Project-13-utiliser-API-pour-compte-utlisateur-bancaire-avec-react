import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
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
      thunkApi.dispatch(userSlice.actions.userAuth(true));
      return thunkApi.fulfillWithValue("User identified");
    } catch (err) {
      return thunkApi.rejectWithValue(err.response?.data || "Connexion error");
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  "user/updateInfo",
  async ({ info }, thunkApi) => {
    try {
      const response = await axios({
        method: "put",
        url: "http://localhost:3001/api/v1/user/profile",
        headers: { authorization: `Bearer ${info.token}` },
        data: { firstName: info.firstName, lastName: info.lastName },
      });

      const parseRes = await response.data.body;

      thunkApi.dispatch(userSlice.actions.saveUserInfo(parseRes));
      return thunkApi.fulfillWithValue("User info updated");
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
    builder.addCase(updateUserInfo.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(updateUserInfo.rejected, (state, action) => {
      console.error(action.payload);
    });
  },
});

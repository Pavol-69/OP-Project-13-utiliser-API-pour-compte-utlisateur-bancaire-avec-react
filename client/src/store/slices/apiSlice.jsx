import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { api } from "../../services/api";

export const signIn = createAsyncThunk(
  "user/signIn",
  async ({ user }, thunkApi) => {
    try {
      const res = await thunkApi
        .dispatch(api.endpoints.signIn.initiate(user))
        .unwrap();

      if (res.token) {
        localStorage.setItem("token", res.token);
        await thunkApi.dispatch(getUserInfo(res.token));
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
      const res = await thunkApi
        .dispatch(api.endpoints.getUserInfo.initiate(token))
        .unwrap();

      thunkApi.dispatch(userSlice.actions.saveUserInfo(res));
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
      const res = await thunkApi
        .dispatch(api.endpoints.updateUserInfo.initiate(info))
        .unwrap();

      thunkApi.dispatch(userSlice.actions.saveUserInfo(res));
      return thunkApi.fulfillWithValue("User info updated");
    } catch (err) {
      return thunkApi.rejectWithValue(err.response?.data || "Connexion error");
    }
  }
);

export const apiSlice = createSlice({
  name: "apiSlice",
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

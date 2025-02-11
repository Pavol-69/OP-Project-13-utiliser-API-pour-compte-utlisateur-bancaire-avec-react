import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
    console.log("toto");
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3001/api/v1/user/profile",
        headers: { token: token },
        data: {},
      });

      const parseRes = await response.data.body;

      console.log(parseRes);

      /*if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
      } else {
        return rejectWithValue("Connexion error");
      }*/
    } catch (err) {
      return thunkApi.rejectWithValue(err.response?.data || "Connexion error");
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(signIn.fulfilled, () => {
      console.log("Fulfilled");
    });
    builder.addCase(signIn.rejected, () => {
      console.log("Rejected");
    });
    builder.addCase(getUserInfo.fulfilled, () => {
      console.log("Fulfilled-info");
    });
    builder.addCase(getUserInfo.rejected, () => {
      console.log("Rejected-info");
    });
  },
});

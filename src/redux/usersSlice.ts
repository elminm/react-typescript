import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { myState, Users } from "../models/Users";
import { Draft } from "immer";

const initialState: myState = {
  loading: true,
  users: undefined,
  error: undefined,
};

export const getUsers = createAsyncThunk<Users[], string, { rejectValue: string }>(
    'get/Users',
    async (thunkApi, { rejectWithValue }) => {
      const res = await axios(thunkApi);
      if (res.status !== 200) {
        return rejectWithValue("Server Error!");
      }

      return res.data;
    }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(getUsers.fulfilled, (state, action: PayloadAction) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action: PayloadAction) => {
      state.loading = false;
      state.error = action.error;
    });
  }
});

export default userSlice.reducer;

type WritableUsers = Draft<Users>;

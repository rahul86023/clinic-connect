import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const url = "http://localhost:5000/readallclients";
export const listOfClientThunk = createAsyncThunk("listOfClients", async () => {
  const response = await axios.get(url, {
    // headers: {
    //   Accept: "application/json",
    //   "content-type": "application/json",
    //   Authorization: localStorage.getItem("token"),
    // },
  });
  console.log(response);
  return response.data;
});

export const listOfClientsSlice = createSlice({
  name: "listClients",
  initialState: {
    list: [],
    status: null,
    loading: false,
  },
  reducers: {
    // Empty
  },
  extraReducers: {
    [listOfClientThunk.pending]: (state) => {
      state.status = "Loading";
      state.loading = false;
    },
    [listOfClientThunk.fulfilled]: (state, action) => {
      state.status = "Success";
      state.loading = true;
      state.list = action.payload;
    },
    [listOfClientThunk.rejected]: (state) => {
      state.status = "Failed";
      state.loading = false;
    },
  },
});

export default listOfClientsSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  isFetching: false,
  isSuccess: false,
  isError: false,
  // errorMessage: "",
};

export const editClientThunk = createAsyncThunk(
  "editClient",
  async ({ id, formValue }) => {
    const url = `https://clinic-connect-backend.onrender.com/api/v1/clients/updateclient/${id}`;
    console.log(formValue);
    console.log(id);
    const response = await axios.put(url, formValue, {
      // headers: {
      //   Accept: "application/json",
      //   "content-type": "application/json",
      //   Authorization: localStorage.getItem("token"),
      // },
    });
    console.log("client is edited");

    return response.data;
  }
);

const editClientSlice = createSlice({
  name: "editClient",
  initialState,
  reducers: {
    //no reducers
  },
  extraReducers: {
    [editClientThunk.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [editClientThunk.rejected]: (state, { payload }) => {
      console.log("payload", payload);
      state.isFetching = false;
      state.isError = true;
      //   state.errorMessage = payload.message;
    },
    [editClientThunk.pending]: (state) => {
      state.isFetching = true;
    },
  },
});

export default editClientSlice.reducer;

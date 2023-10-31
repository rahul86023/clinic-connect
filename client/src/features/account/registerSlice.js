import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
  name: "",
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

export const registerUser = createAsyncThunk(
  "users/register",
  async ({ username, password, name }, thunkAPI) => {
    try {
      console.log("hello");
      const response = await fetch(
        "https://clinic-connect-backend.onrender.com/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,

            password,
            name,
          }),
        }
      );
      let data = await response.json();
      console.log("response", data);
      if (response.status === 200) {
        console.log("geeting token");
        //    localStorage.setItem("token", data.token);

        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    // clearState: (state) => {
    //   state.isError = false;
    //   state.isSuccess = false;
    //   state.isFetching = false;
    //   return state;
    // },
  },
  extraReducers: {
    [registerUser.fulfilled]: (state, { payload }) => {
      state.username = payload.email;
      state.password = payload.password;
      state.name = payload.name;
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [registerUser.rejected]: (state, { payload }) => {
      console.log("payload", payload);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
    [registerUser.pending]: (state) => {
      state.isFetching = true;
    },
  },
});

// export const { clearState } = registerSlice.actions;
export default registerSlice.reducer;

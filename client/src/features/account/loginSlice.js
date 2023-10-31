import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

export const loginUser = createAsyncThunk(
  "users/login",
  async ({ username, password }, thunkAPI) => {
    try {
      console.log("hello");
      const response = await fetch(
        "https://clinic-connect-backend.onrender.com/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,

            password,
          }),
        }
      );
      let data = await response.json();
      console.log("response", data);
      if (response.status === 200) {
        console.log("geeting token");
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", data.user.name);

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

const userSlice = createSlice({
  name: "user",
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
    [loginUser.fulfilled]: (state, action) => {
      state.userData = action.payload.user;

      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [loginUser.rejected]: (state, { payload }) => {
      console.log("payload", payload);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
    [loginUser.pending]: (state) => {
      state.isFetching = true;
    },
  },
});

// export const { clearState } = userSlice.actions;
export default userSlice.reducer;

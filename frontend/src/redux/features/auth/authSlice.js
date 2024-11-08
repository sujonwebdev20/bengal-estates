import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  token: "",
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      return {
        message: action.payload.message,
        token: action.payload.token,
      };
    },
    signout: () => {
      return {
        message: "",
        token: "",
      };
    },
  },
});

export const { setUserInfo, signout } = authSlice.actions;
export default authSlice.reducer;

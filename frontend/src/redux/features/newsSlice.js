import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newsData: [],
};

const newsSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setNewsData: (state, action) => {
      return {
        newsData: action.payload,
      };
    },
  },
});

export const { setNewsData } = newsSlice.actions;
export default newsSlice.reducer;

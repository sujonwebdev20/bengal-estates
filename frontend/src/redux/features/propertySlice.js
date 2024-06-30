import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  propertyData: [],
};

const propertySlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setPropertyData: (state, action) => {
      return {
        propertyData: action.payload,
      };
    },
  },
});

export const { setPropertyData } = propertySlice.actions;
export default propertySlice.reducer;

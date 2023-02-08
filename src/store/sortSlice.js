import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSortOn: false,
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSortOn: (state) => {
      state.isSortOn = true;
    },

    setSortOff: (state) => {
      state.isSortOn = false;
    },
  },
});

export const { setSortOn, setSortOff } = sortSlice.actions;
export const getSortStatus = (state) => state.sort.isSortOn;
export default sortSlice.reducer;

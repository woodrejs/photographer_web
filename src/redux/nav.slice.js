import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "navSlice",
  initialState: {
    isOpen: false,
  },
  reducers: {
    setIsOpen(state, action) {
      const { payload } = action;

      state.isOpen = payload;
    },
  },
});

export const { setIsOpen } = navSlice.actions;
export default navSlice.reducer;

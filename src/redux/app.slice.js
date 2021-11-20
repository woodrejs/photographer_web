import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    error: { message: null, isOpen: false },
  },
  reducers: {
    setError(state, action) {
      const [isOpen, message] = action.payload;

      state.error = { isOpen, message };
    },
  },
});

export const { setError } = appSlice.actions;
export default appSlice.reducer;

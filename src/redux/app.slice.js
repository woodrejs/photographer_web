import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    stage: "mounted",
  },
  reducers: {
    setStage(state, action) {
      const { payload } = action;

      state.stage = payload;
    },
  },
});

export const { setStage } = appSlice.actions;
export default appSlice.reducer;

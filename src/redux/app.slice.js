import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    sessions: {
      list: [],
      loaded: false,
    },
    publications: {
      list: [],
      loaded: false,
    },
  },
  reducers: {
    setList(state, action) {
      const [name, list] = action.payload;

      state[name].list = list;
      state[name].loaded = true;
    },
 
  },
});

export const { setList, } = appSlice.actions;
export default appSlice.reducer;

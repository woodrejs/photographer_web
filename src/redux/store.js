import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./nav.slice";
import appSlice from "./app.slice";

export default configureStore({
  reducer: {
    navSlice: navSlice,
    appSlice: appSlice,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./nav.slice";

export default configureStore({
  reducer: {
    navSlice: navSlice,
  },
});

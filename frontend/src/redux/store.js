import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authslice.js";
const store = configureStore({
  //all slices
  reducer: { auth: authSlice },
});
export default store;

import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: { loading: false },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});
export default authSlice.reducer;
export const { setLoading } = authSlice.actions;

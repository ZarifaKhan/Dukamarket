import { createSlice } from "@reduxjs/toolkit";
const favoriteUISlice = createSlice({
  name: "favoriteUI",
  initialState: { favoriteIsVisible: false },

  reducers: {
    toggle(state) {
      state.favoriteIsVisible = !state.favoriteIsVisible;
    },
  },
});

export const favoriteUIActions = favoriteUISlice.actions;
export default favoriteUISlice;

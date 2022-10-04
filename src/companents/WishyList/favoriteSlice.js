import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.favoriteItems.find(
        (item) => item.id === newItem.id
      );

      state.totalQuantity++;

      if (!existingItem) {
        state.favoriteItems.push({
          id: newItem.id,
          title: newItem.title,
          image01: newItem.image01,
          price: newItem.price,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
      }
    },

    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.favoriteItems.find((item) => item.id === id);
      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.favoriteItems = state.favoriteItems.filter(
          (item) => item.id !== id
        );
      } else {
        existingItem.quantity--;
      }
    },

    deleteItem(state, action) {
      const id = action.payload;
      const existingItem = state.favoriteItems.find((item) => item.id === id);

      if (existingItem) {
        state.favoriteItems = state.favoriteItems.filter(
          (item) => item.id !== id
        );
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }
    },
  },
});

export const favoriteActions = favoriteSlice.actions;

export default favoriteSlice;

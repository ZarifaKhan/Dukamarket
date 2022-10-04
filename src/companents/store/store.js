import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/CartSlice";
import cartUISlice from "./shopping-cart/cartUISlice";
import favoriteSlice from "../WishyList/favoriteSlice";
import favoriteUISlice from "../WishyList/favoriteUiSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUI: cartUISlice.reducer,
    favorite: favoriteSlice.reducer,
    favoriteUI: favoriteUISlice.reducer,
  },
});

export default store;

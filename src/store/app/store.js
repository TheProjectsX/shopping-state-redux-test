import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/products/productsSlice";
import cartSlice from "../features/cart/cartSlice";
import wishlistSlice from "../features/wishlist/wishlistSlice";
import historySlice from "../features/history/historySlice";

const store = configureStore({
    reducer: {
        products: productsSlice,
        cart: cartSlice,
        wishlist: wishlistSlice,
        history: historySlice,
    },
});

export default store;

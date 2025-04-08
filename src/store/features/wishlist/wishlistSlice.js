import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: [],
    reducers: {
        add_product: (state, action) => {
            state.push(action.payload);
        },
        remove_product: (state, action) => {
            const index = state.findIndex(
                (item) => item.id === action.payload.id
            );
            if (index !== -1) state.splice(index, 1);
        },
        move_to_cart: (state, action) => {},
    },
});

export default wishlistSlice.reducer;
export const { add_product, move_to_cart, remove_product } =
    wishlistSlice.actions;

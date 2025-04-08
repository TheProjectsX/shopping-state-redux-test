import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
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
    },
});

export default cartSlice.reducer;
export const { add_product, remove_product } = cartSlice.actions;

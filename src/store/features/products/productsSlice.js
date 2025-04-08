import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAPIProducts } from "./fetchAPI";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
    const products = fetchAPIProducts();
    return products;
});

const productsSlice = createSlice({
    name: "products",
    initialState: {
        isLoading: false,
        isError: false,
        error: null,
        products: [],
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state["isLoading"] = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state["isLoading"] = false;
                state["isError"] = false;

                state["products"] = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state["isLoading"] = false;
                state["isError"] = true;

                state["error"] = action.error?.message ?? "Server Side Error";
            });
    },
});

export default productsSlice.reducer;

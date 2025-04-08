import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
    name: "history",
    initialState: [],
    reducers: {
        add_item: (state, action) => {
            state.push(action.payload);
        },
    },
});

export default historySlice.reducer;
export const { add_item } = historySlice.actions;

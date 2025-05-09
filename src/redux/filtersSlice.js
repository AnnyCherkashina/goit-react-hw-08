import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    filter: " ",
};

const filtersSlice = createSlice({
    name: "filter",
    initialState,
    selectors: {
        selectFilter: (state) => state.filter,
    },
    reducers: {
        changeFilter: (state, { payload }) => {
            state.filter = payload;
        },
    },
});

export const { changeFilter } = filtersSlice.actions;
export const { selectFilter } = filtersSlice.selectors;
export const filtersReducer = filtersSlice.reducer;
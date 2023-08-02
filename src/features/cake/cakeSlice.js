import { createSlice } from "@reduxjs/toolkit";

const cakeSlice = createSlice({
    name: "cake",
    initialState: {
        numOfCakes: 10,
    },
    reducers: {
        ordered: (state) => {
            state.numOfCakes--;
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload;
        },
    },
})

export const cakeActions = cakeSlice.actions;
export const cakeReducer = cakeSlice.reducer;
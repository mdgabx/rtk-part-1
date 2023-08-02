import { createSlice } from "@reduxjs/toolkit"
import { cakeActions } from "../cake/cakeSlice"

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState: {
        numOfIcecreams: 30
    },
    reducers: {
        ordered: (state) => {
            state.numOfIcecreams--
        },
        restocked: (state, action) => {
            state.numOfIcecreams += action.payload
        }
    },
    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //         state.numOfIcecreams--
    //     }
    // }
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state) => {
            state.numOfIcecreams--
        })
    }
})


export const icecreamActions = icecreamSlice.actions
export default icecreamSlice.reducer
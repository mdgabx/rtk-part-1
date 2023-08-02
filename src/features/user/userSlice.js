import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

// generate pending fulfilled and rejected action types

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
    return ( await axios.get('https://jsonplaceholder.typicode.com/users/')
            .then((res) => res.data.map((user) => user)))
})

const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        user: [],
        error: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
            state.user = []
        })
    }
})


export const userActions = userSlice.actions
export const userReducer = userSlice.reducer

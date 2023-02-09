import {createSlice} from "@reduxjs/toolkit";
import {createUser} from "../thunks/app.thunks";
import {AppState} from "../interfaces/app.interfaces";

export const initialState: AppState = {
    isLoadingCreateUser: false
}

export const appSlice = createSlice({
    extraReducers: (builder => {
        builder.addCase(createUser.pending, (state) => {
            state.isLoadingCreateUser = true
        });
        builder.addCase(createUser.fulfilled, (state, {payload}) => {
            state.currentUser = payload;
            state.isLoadingCreateUser = false;
        })
    }),
    initialState,
    name: "app",
    reducers: {}
})

export default appSlice.reducer
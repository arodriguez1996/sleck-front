import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {createUser} from "../thunks/app.thunks";
import {AppState} from "../interfaces/app.interfaces";
import {Message} from "../../shared/infercaces/messages.interfaces";

export const initialState: AppState = {
    isLoadingCreateUser: false,
    messages: []
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
    reducers: {
        updateMessages: (state: AppState, {payload}: PayloadAction<Message[]>) => {
            state.messages = payload;
        }
    },
})

export const {
    updateMessages
} = appSlice.actions

export default appSlice.reducer
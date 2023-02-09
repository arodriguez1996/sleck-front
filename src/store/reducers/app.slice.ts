import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {createUser, getUser} from "../thunks/app.thunks";
import {AppState} from "../interfaces/app.interfaces";
import {Message} from "../../shared/infercaces/messages.interfaces";

export const initialState: AppState = {
    isLoadingCreateUser: false,
    isLoadingGetUser: false,
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
        });
        builder.addCase(getUser.pending, (state) => {
            state.isLoadingGetUser = true
        })
        builder.addCase(getUser.fulfilled, (state, {payload}) => {
            state.searchedUser = payload
            state.isLoadingGetUser = true
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
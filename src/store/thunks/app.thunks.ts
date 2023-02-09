import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {API_ROUTES} from "../../shared/constants/api-routes";
import {CreateUser, User} from "../../shared/infercaces/user.interfaces";

export const getUser = createAsyncThunk<User, { userId: number }>(
    "app/getUser",
    async ({userId}) => {
        const response = await axios.get<User>(
            `${API_ROUTES.users}/${userId}`
        );

        return response.data;
    }
);


export const createUser = createAsyncThunk<User, CreateUser>("app/createUser", async (payload) => {
    const response = await axios.post(API_ROUTES.users, payload);

    return response.data;
})
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {API_ROUTES} from "../../shared/constants/api-routes";
import {CreateUser, User} from "../../shared/infercaces/user.interfaces";

export const createUser = createAsyncThunk<User, CreateUser>("app/createUser", async (payload) => {
    const response = await axios.post(API_ROUTES.users, payload);

    return response.data;
})
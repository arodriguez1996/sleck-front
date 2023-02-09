import {User} from "../../shared/infercaces/user.interfaces";

export interface AppState {
    currentUser?: User;
    isLoadingCreateUser: boolean;
}
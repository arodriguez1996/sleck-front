import {User} from "../../shared/infercaces/user.interfaces";
import {Message} from "../../shared/infercaces/messages.interfaces";

export interface AppState {
    currentUser?: User;
    searchedUser?: User
    isLoadingCreateUser: boolean;
    isLoadingGetUser: boolean,
    messages: Message[]
}
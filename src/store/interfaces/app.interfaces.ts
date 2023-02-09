import {User} from "../../shared/infercaces/user.interfaces";
import {Message} from "../../shared/infercaces/messages.interfaces";

export interface AppState {
    currentUser?: User;
    isLoadingCreateUser: boolean;
    messages: Message[]
}
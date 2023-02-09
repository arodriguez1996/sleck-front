import {useGetMessages} from "../../hooks/useGetMessages.hook";
import {Chat} from "../../components/Chat/Chat";

export const ChatContainer = () => {
    useGetMessages()
    return (
        <Chat/>
    )
}
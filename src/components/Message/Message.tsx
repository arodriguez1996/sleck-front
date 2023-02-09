import {FC} from "react";
import moment from "moment";
import {Message as IMessage} from "../../shared/infercaces/messages.interfaces";
import "./styles.css";

export interface MessageProps {
    message: IMessage,
    isMyMessage: boolean
}

export const Message: FC<MessageProps> = ({message, isMyMessage}: MessageProps) => {

    return (
        <>
            <div className={`message-box${isMyMessage ? " my-message" : ""}`}>
                <div className={"message"}>
                    <span className={"name"}>{message.name}</span>
                    {message.message}
                    <span
                        className={"date"}>{moment(message.timestamp ? message.timestamp.toDate() : new Date()).format('DD/MM/YY HH:mm')}</span>
                </div>
            </div>
        </>
    )
}
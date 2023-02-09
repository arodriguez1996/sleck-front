import {useSelector} from "react-redux";
import {RootState} from "../../store/interfaces/store.interfaces";
import {Message} from "../Message/Message";
import "./styles.css";
import {Form} from "react-bootstrap";
import {ChangeEvent, KeyboardEvent, useState} from "react";
import {useSendMessage} from "../../hooks/useSendMessage.hook";
import {useParams} from "react-router-dom";
import {toNumber} from "lodash"

export const Chat = () => {
    const {messages} = useSelector((state: RootState) => state.app)
    const [text, setText] = useState<string>("")
    const {sentMessage} = useSendMessage();
    const {userId} = useParams()

    const handleOnChange = ((event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    })

    const handleOnKeyPress = async (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && text.length > 0) {
            setText("")
            await sentMessage(text)
        }
    }

    const isMyMessage = (messageUserId: number) => {
        return toNumber(userId) === messageUserId
    }

    return (
        <>
            <div className={"chat"}>
                <div className={"message-container"}>
                    {messages.map((message) => <Message message={message} key={message.id}
                                                        isMyMessage={isMyMessage(message.userId)}/>)}
                </div>
                <Form.Control
                    type="text"
                    placeholder="envia un mensaje"
                    size="lg"
                    onChange={handleOnChange}
                    onKeyPress={handleOnKeyPress}
                    value={text}/>
            </div>
        </>
    )
}
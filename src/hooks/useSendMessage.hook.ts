import {addDoc, collection, serverTimestamp} from "firebase/firestore";
import {database} from "../shared/utils/firebase.utils";
import {useSelector} from "react-redux";
import {RootState} from "../store/interfaces/store.interfaces";

export const useSendMessage = () => {
    const {currentUser} = useSelector((state: RootState) => state.app)
    const sentMessage = async (text: string) => {
        if (currentUser) {
            await addDoc(collection(database, 'chat'), {
                message: text,
                userId: currentUser.id,
                name: currentUser.firstName,
                timestamp: serverTimestamp()
            })
        }
    }

    return {
        sentMessage
    }
}
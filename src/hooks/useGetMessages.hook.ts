import {useEffect} from "react";
import {collection, onSnapshot, orderBy, query} from "firebase/firestore";
import {database} from "../shared/utils/firebase.utils";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store/interfaces/store.interfaces";
import {updateMessages} from "../store/reducers/app.slice";
import {get} from "lodash";
import {Message} from "../shared/infercaces/messages.interfaces";

export const useGetMessages = () => {
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        const q = query(collection(database, 'chat'), orderBy('timestamp'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const newMessages: Message[] = []
            querySnapshot.forEach(doc => {
                const data = doc.data()
                newMessages.push({
                    id: doc.id,
                    message: get(data, "message", ""),
                    name: get(data, "name", ""),
                    userId: get(data, "userId"),
                    timestamp: get(data, "timestamp")
                })
            });
            dispatch(updateMessages(newMessages))
        })
        return () => unsubscribe();
        // eslint-disable-next-line
    }, [])
}
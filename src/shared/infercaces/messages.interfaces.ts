import firebase from "firebase/compat";
import Timestamp = firebase.firestore.Timestamp;

export interface Message {
    id: string;
    name: string;
    message: string;
    userId: number;
    timestamp: Timestamp;
}
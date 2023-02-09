import {Button, Card, Modal, Spinner} from "react-bootstrap";
import {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/interfaces/store.interfaces";
import "./styles.css"
import {getUser} from "../../store/thunks/app.thunks";

export interface ProfileModalProps {
    show: boolean,
    userId: number,

    onHide(): void,
}

export const ProfileModal: FC<ProfileModalProps> = ({show, userId, onHide}: ProfileModalProps) => {
    const {searchedUser} = useSelector((state: RootState) => state.app)
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        if (userId && show)
            dispatch(getUser({userId: userId}))
        // eslint-disable-next-line
    }, [show])


    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                {searchedUser ? (
                    <>
                        <Card.Title className="mb-2">{`${searchedUser.firstName} ${searchedUser.lastName}`}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{searchedUser.position}</Card.Subtitle>
                        <Card.Body>{searchedUser.description}</Card.Body>
                    </>
                ) : <div className={"loading"}><Spinner animation="border"/></div>}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Formik} from "formik"
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/interfaces/store.interfaces";
import {createUser} from "../../store/thunks/app.thunks";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export interface SignUpFormValues {
    firstName: string;
    lastName: string;
    position: string;
    description: string;
}

export const SignUpContainer = () => {
    const dispatch = useDispatch<AppDispatch>()
    const {currentUser, isLoadingCreateUser} = useSelector((state: RootState) => state.app)
    const navigate = useNavigate()

    useEffect(() => {
        if (currentUser) {
            navigate(`chat/${currentUser.id}`)
        }
        // eslint-disable-next-line
    }, [currentUser])

    const handleSubmit = (values: SignUpFormValues) => {
        dispatch(createUser(values))
    }

    return (<Container fluid>
        <Row className="justify-content-md-center mt-5">
            <Col xs={5}>
                <Formik<SignUpFormValues>
                    initialValues={{firstName: '', lastName: '', position: '', description: ''}}
                    validate={values => {
                        const errors: Partial<SignUpFormValues> = {};
                        if (!values.firstName) {
                            errors.firstName = 'firstName is required';
                        }
                        if (!values.lastName) {
                            errors.lastName = 'lastName is required';
                        }
                        if (!values.position) {
                            errors.position = 'position is required';
                        }
                        if (!values.description) {
                            errors.description = 'description is required';
                        }
                        return errors;
                    }}
                    onSubmit={(values, {setSubmitting}) => {
                        handleSubmit(values)
                        setSubmitting(false)
                    }}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                      }) => (
                        <form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter First Name"
                                    name={'firstName'}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.firstName}/>
                                <Form.Text className="text-muted">
                                    {errors.firstName && touched.firstName && errors.firstName}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Last Name"
                                    name="lastName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.lastName}/>
                                <Form.Text className="text-muted">
                                    {errors.lastName && touched.lastName && errors.lastName}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Position</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Position"
                                    name="position"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.position}/>
                                <Form.Text className="text-muted">
                                    {errors.position && touched.position && errors.position}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Description"
                                    name="description"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description}/>
                                <Form.Text className="text-muted">
                                    {errors.description && touched.description && errors.description}
                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit" disabled={isSubmitting || isLoadingCreateUser}>
                                Submit
                            </Button>
                        </form>
                    )}
                </Formik>
            </Col>
        </Row>
    </Container>)
}
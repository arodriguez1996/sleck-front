import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Container, ListGroup} from "react-bootstrap";
import {get} from "lodash";

function App() {

  const [users, setUsers] = useState<any[]>([])

  useEffect(() => {

    (async () => {

      const users = await axios.get(`${process.env.REACT_APP_API_URL}/users`)

      setUsers(users.data)
    })()
  }, [])


  return (
      <Container fluid >
        <ListGroup>
          {users.map((user) => <ListGroup.Item>{get(user, "firstName", "")} {get(user, "lastName", "")}</ListGroup.Item>)}
        </ListGroup>
      </Container>
  );
}

export default App;

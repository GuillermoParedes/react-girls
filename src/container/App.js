import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Alert } from "reactstrap";
import Profile from "../components/Profile";

function App() {
  return (
    <Container>
      <Row className="p-2">
        <Col className="bg-success text-center pt-5 pb-5">
          <Profile
            name="Guillermo Paredes Torrez"
            job="Software Frontend Engineer"
          />
          <hr className="bg-white" />
        </Col>
        <Col className="bg-dark text-center">
          <Alert color="primary">This is a primary alert — check it out!</Alert>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

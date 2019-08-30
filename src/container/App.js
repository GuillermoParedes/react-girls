import React from "react";
import { Container, Row, Col } from "reactstrap";
import Profile from "../components/Profile";
import Feature from "../components/Feature";

function App() {
  return (
    <Container>
      <Row>
        <Col xs="4" className="bg-success text-center pt-5 pb-5">
          <Profile
            name="Guillermo Paredes Torrez"
            job="Software Frontend Engineer"
          />
          <hr className="bg-white" />
          <Feature
            title={"My Background"}
            description="I'm a software development engineer with more 5 years ago of experience."
          />
        </Col>
        <Col xs="8" className="bg-dark text-center"></Col>
      </Row>
    </Container>
  );
}

export default App;

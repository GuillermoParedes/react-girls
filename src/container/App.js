import React from "react";
import { Container, Row, Col } from "reactstrap";
import Profile from "../components/Profile";
import Feature from "../components/Feature";
import FeaturesData from "../api/features.json";
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
          {FeaturesData.map((ele, i) => (
            <Feature key={i} {...ele} />
          ))}
        </Col>
        <Col xs="8" className="bg-dark text-center"></Col>
      </Row>
    </Container>
  );
}

export default App;

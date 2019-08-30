import React from "react";
import { Container, Row, Col } from "reactstrap";
import Profile from "../components/Profile";
import Feature from "../components/Feature";
import Experience from "../components/Experience";
import FeaturesData from "../api/features.json";
import ExperienceData from "../api/experience.json";
function App() {
  return (
    <Container className="d-flex align-items-center">
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
        <Col xs="8" className="bg-light text-center  pt-5 pb-5">
          {ExperienceData.map((ele, i) => (
            <Experience key={i} {...ele} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default App;

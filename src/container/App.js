import React from "react";
import { Container, Row, Col } from "reactstrap";
import Profile from "../components/Profile";
import Feature from "../components/Feature";
import Experience from "../components/Experience";
import FeaturesData from "../api/features.json";
import ExperienceData from "../api/experience.json";

import Skills from "./Skills";
function App() {
  return (
    <Container className="container d-flex h-100">
      <Row className="align-self-center">
        <Col xs="3" className="bg-success text-center pt-5 pb-5">
          <Profile
            name="Guillermo Paredes Torrez"
            job="Software Frontend Engineer"
          />
          <hr className="bg-white" />
          {FeaturesData.map((ele, i) => (
            <Feature key={i} {...ele} />
          ))}
        </Col>
        <Col xs="9" className="bg-light pt-5 pb-5 border border-success">
          {ExperienceData.map((ele, i) => (
            <Experience key={i} {...ele} />
          ))}

          <hr className="bg-white" />
          <Skills />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

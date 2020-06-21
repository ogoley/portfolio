import React from "react";
import ProjectCol from "./ProjectCol";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import statsImg from "../Assets/stats.jpg";
import workImg from "../Assets/work.jpg";
import sunsetImg from "../Assets/sunset.jpg";

export default function Portfolio(props) {
  return (
    <Container className="portfolio">
      <Row className="m-md-4">
        <ProjectCol
          link="https://www.google.com"
          imgUrl={statsImg}
          title="GeomotrY Website"
          text="Use CSS to create 3D geometrical environments"
        />
        <ProjectCol
          link="https://www.google.com"
          imgUrl={workImg}
          title="Quiz App"
          text="A socket.io app that allows people to play a quiz game together"
        />
        <ProjectCol
          link="https://www.google.com"
          imgUrl={statsImg}
          title="Database UI"
          text="This website is a ReactJS front end that allows users to do RDBMS."
        />
      </Row>
    </Container>
  );
}

/*

  <ProjectCol link="https://www.google.com" imgUrl={workImg} title="Test Title" text="This is just a test" />
      <ProjectCol link="https://www.google.com" imgUrl={sunsetImg} title="Test Title" text="This is just a test" />
*/

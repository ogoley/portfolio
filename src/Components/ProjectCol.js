import React from "react";
import { Card, Col, Button } from "react-bootstrap";

export default function ProjectCol(props) {
  console.log(props.link)
  return (
    <Col md={4} sm={6} xs={8}>
    <a href={props.link}>
      <Card className="text-center">
        <Card.Img variant="top" src={props.imgUrl} />
        <Card.ImgOverlay>
          <Card.Body className="text-center">Consulting Website with application</Card.Body>
          <Button variant="primary" className="customBtn">View Website</Button>
        </Card.ImgOverlay>
        
      </Card>
    </a>
    </Col>
  );
}

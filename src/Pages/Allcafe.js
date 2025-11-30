// AllCafePage.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import CoffeeData from "../Components/CoffeData"; // لاحظت صار default export
import { Link } from "react-router-dom";
export default function AllCafePage() {
  
  const allCafes = Object.values(CoffeeData).flat();
  return (
    <Container className="py-5">
      <Row>
        {allCafes.map((cafe) => (
          <Col key={cafe.id + cafe.title} xs={12} sm={6} md={4} className="mb-4">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={cafe.image}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{cafe.title}</Card.Title>
                <Card.Text>{cafe.details}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

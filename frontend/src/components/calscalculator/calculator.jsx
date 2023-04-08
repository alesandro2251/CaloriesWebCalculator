import React, { useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";

function CalsCalculator() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(0);
  let result = 0;

  const handleSubmit = (event) => {
    event.preventDefault();

    let result = 66 + 6.2 * weight + 12.7 * height - 6.76 * age;
  };

  return (
    <Container
      fluid="md"
      style={{
        backgroundColor: "#f8f8f8",
        borderRadius: "10px",
        padding: "20px",
        marginLeft: "30px",
        marginTop: "10px",
      }}
    >
      <Form onSubmit={handleSubmit}>
        <h4>Your Calories per Day</h4>
        <Row>
          <Col>
            <Form.Group controlId="formHeight">
              <Form.Label>Height</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formWeight">
              <Form.Label>Weight(in kgs)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your height"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formHeight">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your height"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </Form.Group>
            <Row>
              <h6 style={{ marginTop: "20px" }}>
                Result :{" "}
                {weight !== 0 && height !== 0 && age !== 0
                  ? (66 + 6.2 * weight + 12.7 * height - 6.76 * age).toFixed(2)
                  : 0}{" "}
                Cals
              </h6>
            </Row>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default CalsCalculator;
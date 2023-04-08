import React, { useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import axios from "axios";

const FoodInsert = () => {
  const [name, setName] = useState("");
  const [protein, setProtein] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [fats, setFats] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://127.0.0.1:8000/foods-add/", {
        name: name,
        protein: protein,
        carbs: carbs,
        fats: fats,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
      <h4>Add Food which isn't in the list</h4>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formProtein">
              <Form.Label>Protein (grams)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter protein"
                value={protein}
                onChange={(e) => setProtein(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formCarbs">
              <Form.Label>Carbs (grams)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter carbs"
                value={carbs}
                onChange={(e) => setCarbs(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formFats">
              <Form.Label>Fats (grams)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter fats"
                value={fats}
                onChange={(e) => setFats(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="d-grid">
        <Button variant="primary" type="submit" style={{ marginTop: "10px" }}>
          Submit
        </Button>
        </div>
      </Form>
    </Container>
  );
};

export default FoodInsert;
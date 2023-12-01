import React, { useState } from "react";
import { Container, Col, Row, Form } from "react-bootstrap";

function CalsCalculator() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(0);
  const [steps, setSteps] = useState(0);
  const [gender, setGender] = useState("");

  console.log(gender);

  function maleCalories(weight, height, age, steps) {
    if (weight !== 0 && height !== 0 && age !== 0) {
      const result = (
        66.47 +
        13.75 * weight +
        5 * height -
        4.67 * age +
        steps * 0.04
      ).toFixed(2);
      return result;
    } else {
      const result = 0;
      return result;
    }
  }

  function femaleCalories(weight, height, age, steps) {
    if (weight !== 0 && height !== 0 && age !== 0) {
      const result = (
        655.1 +
        9.563 * weight +
        1.850 * height -
        4.7 * age +
        steps * 0.04
      ).toFixed(2);
      return result;
    } else {
      const result = 0;
      return result;
    }
  }

  function macrosPerDay(x) {
    const macroses = [];
    const p = (((x / 100) * 30) / 4).toFixed(1);
    const f = (((x / 100) * 25) / 8).toFixed(1);
    const c = (((x / 100) * 45) / 4).toFixed(1);

    macroses.push(p);
    macroses.push(f);
    macroses.push(c);

    return (
      <span>
        ( p: {macroses[0]}g, f: {macroses[1]}g, c: {macroses[2]}g)
      </span>
    );
  }

  function waterPerDay(weight){
    let result = weight * 0.03;

    return <span>{result.toFixed(2)} liters water per day</span>
  }

  return (
    <Container
      fluid="md"
      style={{
        backgroundColor: "#f8f8f8",
        borderRadius: "10px",
        padding: "20px",
        marginLeft: "30px",
        marginTop: "30px",
      }}
    >
      <Form>
        <h4>Your Calories per Day</h4>
        <Row>
          <Form.Group controlId="formGender">
            <Form.Label>Gender:</Form.Label>{" "}
            <Form.Check
              inline
              label="Male"
              type="radio"
              name="gender"
              value="Male"
              checked={gender === "Male"}
              onChange={(e) => setGender(e.target.value)}
            />
            <Form.Check
              inline
              label="Female"
              type="radio"
              name="gender"
              value="Female"
              checked={gender === "Female"}
              onChange={(e) => setGender(e.target.value)}
            />
          </Form.Group>
        </Row>
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
              <Form.Label>Weight (in kgs)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formSteps">
              <Form.Label>Steps per Day</Form.Label>
              <Form.Control
                type="number"
                placeholder="Steps per day"
                value={steps}
                onChange={(e) => setSteps(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <h6 style={{ marginTop: "20px" }}>
            Result :{" "}
            {gender === "Male"
              ? maleCalories(weight, height, age, steps)
              : femaleCalories(weight, height, age, steps)}{" "}
            Cals{" "}
            {gender === "Male"
              ? macrosPerDay(maleCalories(weight, height, age, steps))
              : macrosPerDay(femaleCalories(weight, height, age, steps))}
             {"\n"}{waterPerDay(weight)}
          </h6>
        </Row>
      </Form>
    </Container>
  );
}

export default CalsCalculator;

import React from "react";
import { Col, Row } from "react-bootstrap";
import FoodInsert from "./components/food-insert/food-insert";
import ListOfFoods from "./components/list-of-foods/list-of-foods";
import CalsCalculator from "./components/calscalculator/calculator.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Row className="g-0">
        <Col md={4}>
          <Row>
            <Col md={12}>
              <FoodInsert />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <CalsCalculator />
            </Col>
          </Row>
        </Col>
        <Col md={8}>
          <ListOfFoods />
        </Col>
      </Row>
    </div>
  );
}

export default App;
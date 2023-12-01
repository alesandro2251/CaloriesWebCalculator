import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, ListGroup, Button, Row, Col } from "react-bootstrap";
import "./list-of-foods.css";

function ListOfFoods() {
  const [searchField, setSearchField] = useState("");
  const [data, setData] = useState([]);
  const [dataToSend, setDataToSend] = useState([]);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/foods/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const filteredFoods = data.filter((food) => {
    return food.name.toLocaleLowerCase().includes(searchField);
  });

  const addToDataToSend = (name) => {
    const foodToAdd = data.find((food) => food.name === name);

    if (
      name !== undefined &&
      foodToAdd &&
      !dataToSend.some((item) => item.name === name)
    ) {
      setDataToSend((prevData) => [
        ...prevData,
        {
          name: foodToAdd.name,
          protein: foodToAdd.protein,
          carbs: foodToAdd.carbs,
          fats: foodToAdd.fats,
          quantity: 1,
        },
      ]);
    }
  };

  const onChangeQuantity = (event, index) => {
    const quantity = event.target.value;
    if (quantity > 0) {
      setDataToSend((prevData) =>
        prevData.map((item, i) =>
          i === index ? { ...item, quantity: quantity } : item
        )
      );
    }
  };

  const removeFromList = (index) => {
    setDataToSend((prevData) => prevData.filter((_, i) => i !== index));
  };

  return (
    <Container className="list-of-foods-container g-0" fluid="md">
      <input
        className="search"
        type="search"
        placeholder="Search"
        onChange={onSearchChange}
      />
      <p>(All calories are per 100 grams)</p>
      <Container className="foods-container g-0">
        <ListGroup>
          {filteredFoods.map((data) => (
            <ListGroup.Item key={data.id}>
              <Button
                className="food-item-container"
                variant="light"
                value={data.name}
                onClick={(e) => addToDataToSend(e.target.value)}
              >
                <div className="food-name">{data.name}</div>
                <div className="food-nutrients">
                  <span>Calories:</span>{" "}
                  {data.protein * 4 + data.carbs * 4 + data.fats * 8} Cals,
                  <span> P:</span> {data.protein},<span> C:</span> {data.carbs},
                  <span> F:</span> {data.fats}
                </div>
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
      <Container className="daily-calories-container g-0" fluid="md">
        {dataToSend.map((item, i) => {
          return (
            <ListGroup.Item key={`${item.name}_${i}`} className="item">
              <Row>
                <Col sm={8}>
                  <h5>{item.name}</h5>
                </Col>
                <Col sm={4}>
                  <div className="d-flex justify-content-end g-0">
                    <div className="input-number">
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(event) => onChangeQuantity(event, i)}
                      />
                    </div>
                    <div className="text">
                      <p>
                        Calories{" "}
                        {(
                          (item.protein * 4 + item.carbs * 4 + item.fats * 8) *
                          item.quantity
                        ).toFixed(1)}{" "}
                      </p>
                    </div>
                    <div>
                      <Button
                        className="item-button"
                        onClick={() => removeFromList(i)}
                      >
                        <i>x</i>
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </ListGroup.Item>
          );
        })}
      </Container>
    </Container>
  );
}

export default ListOfFoods;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, ListGroup, Button, Row, Col } from "react-bootstrap";
import "./list-of-foods.css";

function ListOfFoods() {
  const [searchField, setSearchField] = useState("");
  const [data, setData] = useState([]);
  const [dataToSend, setDataToSend] = useState([]);
  const [state, setState] = useState({ value: 10 });

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

  const OnSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const filteredFoods = data.filter((data) => {
    return data["name"].toLocaleLowerCase().includes(searchField);
  });

  function clickedData(event) {
    let name = event.target.value;
    for (let i = 0; i < data.length; i++) {
      if (
        name !== undefined &&
        name === data[i]["name"] &&
        !dataToSend.some((item) => item.name === name)
      ) {
        dataToSend.push({
          name: data[i]["name"],
          protein: data[i]["protein"],
          carbs: data[i]["carbs"],
          fats: data[i]["fats"],
          quantity: 1,
        });
        alert("Item added !");
        console.log(dataToSend);
      }
    }
  }

  const onChangeQuantity = (event, index) => {
    const quantity = event.target.value;
    if (quantity > 0) {
      const DataToSend = [...dataToSend];
      DataToSend[index] = { ...DataToSend[index], quantity: quantity };
      setDataToSend(DataToSend);
    }
  };
  function forceUpdate() {
    setState((prev) => {
      return { ...prev };
    });
  }

  const removeFromList = (x) => {
    delete dataToSend[x];
  };

  return (
    <Container className="list-of-foods-container g-0" fluid="md">
      <input
        className="search"
        type="search"
        placeholder="Search"
        onChange={OnSearchChange}
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
                onClick={clickedData}
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
        {dataToSend.map((index, i) => {
          return (
            <ListGroup.Item key={index.id} className="item">
              <Row>
                <Col sm={8}>
                  {" "}
                  <h5>{index.name}</h5>
                </Col>
                <Col sm={4} >
                  <div className="d-flex justify-content-end g-0">
                    <div className="input-number">
                      <input
                        type="number"
                        value={index.quantity}
                        onChange={(event) => onChangeQuantity(event, i)}
                      />
                    </div>
                    <div className="text">
                      <p>
                        Calories{" "}
                        {(
                          (index.protein * 4 +
                            index.carbs * 4 +
                            index.fats * 8) *
                          index.quantity
                        ).toFixed(1)}{" "}
                      </p>
                    </div>
                    <div>
                      <Button className="item-button"
                        value={i}
                        onClick={(event) => removeFromList(event.target.value)}
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
      <div className="d-grid">
        <Button size="sm" onClick={forceUpdate}>
          Update
        </Button>
      </div>
    </Container>
  );
}

export default ListOfFoods;

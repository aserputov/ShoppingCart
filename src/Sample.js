/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core/";
import Products from "./Products";
import Carousel from "react-bootstrap/Carousel";
function Restaurant(props) {
  const { onAdd, data } = props;
  const [restaurant, setRestaurant] = useState(null);

  useEffect(async () => {
    const response = await fetch(
      `https://agile-eyrie-45739.herokuapp.com/sample/${props.id}`
    );
    const data = await response.json();

    setRestaurant(data);
  }, []);

  if (restaurant) {
    return (
      <div>
        <Row>
          <Col sm={1}></Col>
          <Col sm={10} className="somethingnew">
            <Typography variant="h4">Product</Typography>
            <hr />

            <Row>
              <Col sm={5}>
                <Carousel>
                  <Carousel.Item>
                    <img
                      src={restaurant.Img[0]}
                      alt=""
                      className="responsives"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={restaurant.Img[0]}
                      alt=""
                      className="responsives"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={restaurant.Img[0]}
                      alt=""
                      className="responsives"
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col sm={6} style={{}}>
                <Typography>
                  <strong>
                    <h1>🌶️ {restaurant.Name} 🌶️ </h1>
                  </strong>
                  <hr />

                  <h4>
                    <em>{restaurant.LongDesc}</em>
                  </h4>
                  <hr />
                  <h4>
                    <strong style={{ margin: 20 }}>
                      Quantity in one case:
                    </strong>
                    <em> {restaurant.Quantity} pieces</em>
                  </h4>
                  <br />
                  <h4>
                    <strong style={{ margin: 20 }}>Size:</strong>
                    <em> {restaurant.Size}</em>
                  </h4>
                  <br />
                  <h4>
                    <strong style={{ margin: 20 }}>Category:</strong>
                    <em> {restaurant.Category}</em>
                  </h4>
                  <br />
                  <h4>
                    <strong style={{ margin: 20 }}>Price:</strong>
                    <em> ${restaurant.Price}</em>
                  </h4>
                  <br />
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ marginLeft: 500 }}
                    onClick={() => onAdd(restaurant)}
                  >
                    Add
                  </Button>
                  <hr />
                </Typography>
              </Col>
              <hr />
              <Typography variant="h4" style={{ margin: 20 }}>
                Additional Products
              </Typography>

              <Products data={data} onAdd={onAdd} />
            </Row>
          </Col>
          <Col sm={1}></Col>
        </Row>
      </div>
    );
  } else {
    return (
      <Card.Text>Unable to find Restaurant with id: {props.id} </Card.Text>
    );
  }
}
export default Restaurant;

import React from "react";
// import Allprod from "./Allprod";
import { Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Link, useHistory } from "react-router-dom";
import { Typography } from "@material-ui/core";
const Main = () => {
  // const { data, onAdd } = props;
  const history = useHistory();
  return (
    <>
      <Row className="mainrow">
        <Col sm={5}>
          <Carousel className="something">
            <Carousel.Item>
              <img
                src=""
                alt=""
                className="responsives"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src=""
                alt=""
                className="responsives"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src=""
                alt=""
                className="responsives"
              />
            </Carousel.Item>
          </Carousel>
          <Carousel>
            <Carousel.Item>
              <img
                src=""
                alt=""
                className="responsives"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src=""
                alt=""
                className="responsives"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src=""
                alt=""
                className="responsives"
              />
            </Carousel.Item>
          </Carousel>
        </Col>

        <Col sm={7}>
          <Row>
            <Col sm={5} className="cheese"></Col>
            <Col sm={6} className="cheese"></Col>
          </Row>
          <Row>
            <Col sm={5} className="cheese"></Col>
            <Col sm={6} className="cheese"></Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col sm={1}></Col>
        <Col sm={10} className="somethingnew">
          <Typography variant="h4" style={{ textAlign: "center" }}>
            Main Georgian House
          </Typography>

          <hr />
          <Row>
            <Col sm={2} className="somethingn">
              <Link
                className="top"
                onClick={() => {
                  history.push(`./prod/#lemonades`);
                }}
              >
                <Typography variant="h5">Sparkling Drinks</Typography>
              </Link>
            </Col>
            <Col sm={2} className="somethingn">
            <Link
            className="top"
            onClick={() => {
              history.push(`./prod/#lemonades`);
            }}
          >
            <Typography variant="h5">Compotes</Typography>
          </Link>
            </Col>
            <Col sm={2} className="somethingn">
            <Link
            className="top"
            onClick={() => {
              history.push(`./prod/#lemonades`);
            }}
          >
            <Typography variant="h5">Sauces</Typography>
          </Link>
            </Col>
            <Col sm={2} className="somethingn">
            <Link
            className="top"
            onClick={() => {
              history.push(`./prod/#lemonades`);
            }}
          >
            <Typography variant="h5">Preserves & Jams</Typography>
          </Link>
            </Col>
            <Col sm={2} className="somethingn">
            <Link
            className="top"
            onClick={() => {
              history.push(`./prod/#lemonades`);
            }}
          >
            <Typography variant="h5">Pickles & Ready Meals</Typography>
          </Link>
            </Col>
          </Row>
          <Row>
            <Col sm={2} className="somethingn">
            <Link
            className="top"
            onClick={() => {
              history.push(`./prod/#lemonades`);
            }}
          >
            <Typography variant="h5">Seasonings & Spices</Typography>
          </Link>
            </Col>
            <Col sm={2} className="somethingn">
            <Link
            className="top"
            onClick={() => {
              history.push(`./prod/#lemonades`);
            }}
          >
            <Typography variant="h5">Snacks</Typography>
          </Link>
            </Col>
            <Col sm={2} className="somethingn">
            <Link
            className="top"
            onClick={() => {
              history.push(`./prod/#lemonades`);
            }}
          >
            <Typography variant="h5">Honey</Typography>
          </Link>
            </Col>
            <Col sm={2} className="somethingn">
            <Link
            className="top"
            onClick={() => {
              history.push(`./prod/#lemonades`);
            }}
          >
            <Typography variant="h5">Flour</Typography>
          </Link>
            </Col>
            <Col sm={2} className="somethingn">
            <Link
            className="top"
            onClick={() => {
              history.push(`./prod/#lemonades`);
            }}
          >
            <Typography variant="h5">Cheese</Typography>
          </Link>
            </Col>
          </Row>
          <Row></Row>
        </Col>
        <Col sm={1}></Col>
      </Row>
    </>
  );
};

export default Main;

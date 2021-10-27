import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link, useHistory } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
const Product = (props) => {
  const history = useHistory();
  const { item, onAdd } = props;
  return (
    <Row>
      <Col sm={1}></Col>
      <Col sm={10}>
        <div className="prod">
          <Link
            key={item._id}
            style={{ textDecoration: "none", color: "black", fontSize: 10 }}
            onClick={() => {
              history.push(`./sample/${item._id}`);
            }}
          >
            <Carousel>
              <Carousel.Item>
                <img className="responsive" src={item.Img[0]} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={item.Img[1]} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={item.Img[2]} alt="" />
              </Carousel.Item>
            </Carousel>

            <hr />

            <Typography
              variant="h5"
              style={{ textDecoration: "none", color: "black", fontSize: 20 }}
            >
              {item.Name}
            </Typography>

            <Typography
              variant="h7"
              style={{ textDecoration: "none", color: "black", fontSize: 15 }}
            >
              {item.SmallDesc}
            </Typography>

            <br />

            <Typography
              variant="h7"
              style={{ textDecoration: "none", color: "red", fontSize: 10 }}
            >
              Discount: %{item.Discount}
            </Typography>

            <Typography variant="h6" component="h1">
              ${item.Price}
            </Typography>
          </Link>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => onAdd(item)}
          >
            Add
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default Product;

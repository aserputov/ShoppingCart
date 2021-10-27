import React from "react";
import { Col, Row } from "react-bootstrap";
import Cart from "./Cart";

const CartMain = (props) => {
  const {
    cart,
    handleShow,
    setCart,
    onAdd,
    onRemove,
    setShow,
    show,
    handleClose,
  } = props;
  return (
    
    <Row>
    <br/>

      <Col sm={2}></Col>
      <Col sm={8} class="somethingnew">
        <Cart
          cart={cart}
          setCart={setCart}
          onAdd={onAdd}
          onRemove={onRemove}
          setShow={setShow}
          show={show}
          handleClose={handleClose}
          handleShow={handleShow}
        />

      
      </Col>
      <Col sm={2}></Col>
    </Row>
  );
};

export default CartMain;

import React from "react";

import Cart from "./Cart";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
const Cartsee = (props) => {
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
    <div>
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
      <div>
        {cart.length !== 0 && (
          <div>
            <Link to="/cart" style={{ color: "black", textDecoration: "none" }}>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleClose}
              >
                Check Out
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cartsee;

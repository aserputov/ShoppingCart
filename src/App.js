import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import Navigation from "./Navigation";
import Footer from "./footer";
import About from "./About";
import Cartsee from "./Cartsee";
import CartMain from "./CartMain";
import Sample from "./Sample";
import AllProducts from "./Allprod";
import Main from "./Main";
import Contact from "./Contact";
import NotFound from "./NotFound";
import Thanks from "./Thanks";
import Result from "./Result";
import Button from "@material-ui/core/Button";

import axios from "axios";
import {Modal } from "react-bootstrap";
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
function App() {
  const [data, setData] = useState({ blogpost: [] });
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);
  const [searchString, setSearchString] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://agile-eyrie-45739.herokuapp.com/Seasoningspices"
      );

      setData(result.data);
      setCart(cartFromLocalStorage);
    };

    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const onAdd = (product) => {
    const exist = cart.find((x) => x._id === product._id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cart.find((x) => x._id === product._id);
    if (exist.qty === 1) {
      setCart(cart.filter((x) => x._id !== product._id));
    } else {
      setCart(
        cart.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <>
      <br />
      <br />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Cartsee
            cart={cart}
            setCart={setCart}
            onAdd={onAdd}
            onRemove={onRemove}
            handleClose={handleClose}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="contained" onClick={handleClose} className="top">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Navigation
        item={cart.length}
        cart={cart}
        setCart={setCart}
        onAdd={onAdd}
        onRemove={onRemove}
        setShow={setShow}
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        searchString={searchString}
        setSearchString={setSearchString}
      />

      <Switch>
        <Route exact path="/">
          <Main
            data={data}
            onAdd={onAdd}
            cart={cart}
            setCart={setCart}
            onRemove={onRemove}
          />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/sample">
          <Sample />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/thanks">
          <Thanks />
        </Route>
        <Route exact path="/prod">
          <AllProducts data={data} onAdd={onAdd} />
        </Route>
        <Route exact path="/cart">
          <CartMain
            cart={cart}
            setCart={setCart}
            onAdd={onAdd}
            onRemove={onRemove}
            setShow={setShow}
            show={show}
            handleClose={handleClose}
            handleShow={handleShow}
          />
        </Route>
        <Route
          exact
          path="/result"
          render={(props) => (
            <Result query={props.location.search} onAdd={onAdd} />
          )}
        />
        <Route
          exact
          path="/sample/:id"
          render={(props) => (
            <Sample onAdd={onAdd} id={props.match.params.id} data={data} />
          )}
        />
        <Route render={() => <NotFound />} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import emailjs from "emailjs-com";
import { Col, Row } from "react-bootstrap";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("pk_test_yPzq9sLgvdtNDwFBeeUuwNvb00BN9BwSQ4");

const Cart = (props) => {
  const { cart, onAdd, onRemove} = props;
  const itemPrice = cart.reduce((a, c) => a + c.Price * c.qty, 0);
  const taxPrice = itemPrice * 0.14;
  const shippingPrice = itemPrice > 2000 ? 0 : 50;
  const totalPrice = itemPrice + taxPrice + shippingPrice;
  const data = { totalPrice: { totalPrice } };
  const handleClick = async (event) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Call your backend to create the Checkout Session
    const response = await fetch(
      "https://agile-eyrie-45739.herokuapp.com/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    // console.log(totalPrice)
    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zmcguuj",
        "template_of4ppp8",
        e.target,
        "user_cnGLBmwpqfYKi2rqaUk9j"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
    <br/>
      <Typography variant="h4" className="fortext">
        Your Cart
      </Typography>
      <div>
        <div>
          {cart.length === 0 && (
            <Typography variant="h7">(Nothing here yet) </Typography>
          )}
        </div>

        {cart.map((item) => (
          <>
            <hr />

            <Grid container spacing={2}>
              <Typography variant="h6">
                <img
                  src={item.Img[0]}
                  alt=""
                  style={{ width: 70, marginRight: 10, marginLeft: 20 }}
                />
              </Typography>
              <Grid item xs={3}>
                <Typography variant="h6">{item.Name}</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="h7">{item.SmallDesc}</Typography>
              </Grid>

              <Grid item xs={2}>
                <Button
                  onClick={() => onAdd(item)}
                  variant="outlined"
                  color="primary"
                  style={{
                    marginTop: 5,
                    fontSize: 20,
                    height: 20,
                    width: 5,
                    marginLeft: 5,
                    color: "darkseagreen",
                  }}
                >
                  +
                </Button>
                <Button
                  onClick={() => onRemove(item)}
                  variant="outlined"
                  color="primary"
                  style={{
                    marginTop: 5,
                    marginLeft: 5,
                    fontSize: 20,
                    height: 20,
                    width: 10,
                  }}
                >
                  -
                </Button>
              </Grid>
              <Grid item xs={1}>
                <Typography variant="h7">
                  {item.qty} * ${item.Price.toFixed(2)}
                </Typography>
              </Grid>
            </Grid>
            <div key={item._id} className="row"></div>
          </>
        ))}

        <hr />

        {cart.length !== 0 && (
          <>
            <Row>
              <Col sm={3}>
                <Typography variant="h7">Items Price</Typography>
              </Col>
              <Col sm={7}></Col>
              <Col sm={2}>
                <Typography variant="h7">${itemPrice.toFixed(2)}</Typography>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col sm={3}>
                <Typography variant="h7">Tax Price(x0.13%)</Typography>
              </Col>
              <Col sm={7}></Col>
              <Col sm={2}>
                <Typography variant="h7">${taxPrice.toFixed(2)}</Typography>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col sm={3}>
                <Typography>Shipping Price</Typography>
              </Col>
              <Col sm={7}></Col>
              <Col sm={2}>
                <Typography>${shippingPrice.toFixed(2)}</Typography>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col sm={3}>
                <Typography>Total Price</Typography>
              </Col>
              <Col sm={7}></Col>
              <Col sm={2}>
                <Typography variant="h7" name="totalPrice">
                  ${totalPrice.toFixed(2)}
                </Typography>
              </Col>
            </Row>
            <hr />
          
            <form className="contact-form" onSubmit={sendEmail}>
              <input type="hidden" name="total" value={totalPrice} />
              {cart.map((item) => (
                <div>
                  <input type="hidden" name="items" value={item.Name} />
                  <input type="hidden" name="items" value={item.Price} />
                  <input type="hidden" name="items" value={item.qty} />
                  <br />
                </div>
              ))}
              <br />
              <label> Name </label> <br />
              <input type="text" name="user_name" /> <br /> <br />
              <label>Email</label> <br />
              <input type="email" name="user_email" /> <br /> <br />
              <label>Message</label> <br />
              <textarea name="message" /> <br />
              <input type="submit" value="Send" role="link" onClick={handleClick}/>
            </form>
            <br />
          </>
        )}
      </div>

      <br />
    </>
  );
};

export default Cart;

import React from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";


const Navigation = (props) => {
  const { item, handleShow, searchString, setSearchString } = props;

  const searchHistory = useHistory();
  function handleSubmit(e) {
    e.preventDefault();
    searchHistory.push(`/result?name=${searchString}`);
    setSearchString("");
  }
  return (
    <div>
      <Navbar bg="light" expand="lg" className="check">
        <DragIndicatorIcon />
        <Navbar.Brand href="/">
          <Link to="/" style={{ color: "black ", textDecoration: "none" }}>
            Georgian House
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link style={{marginLeft:40}}>
              <Link to="/prod" className="topp">
                
              </Link>
            </Nav.Link>
            <Nav.Link className="topp" >
              <Link to="/" className="top">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className="topp">
              <Link to="/prod" className="top">
                Products
              </Link>
            </Nav.Link>
            <Nav.Link className="topp">
              <Link to="/about" className="top">
                About
              </Link>
            </Nav.Link>
            <Nav.Link className="topp">
              <Link to="/contact" className="top">
                Contact Us
              </Link>
            </Nav.Link>
          </Nav>

          <Form onSubmit={handleSubmit} inline>
            <TextField
              style={{ height: 35, marginRight: 10, marginTop: 5 }}
              color="secondary"
              type="text"
              placeholder-color="secondary"
              placeholder="Type something"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
            <Button
              variant="outlined"
              color="default"
              style={{ marginRight: 10 }}
            >
              Search...
            </Button>
          </Form>

          <IconButton
            aria-label="show 4 new mails"
            color="inherit"
            onClick={handleShow}
          >
            <Badge badgeContent={item} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;

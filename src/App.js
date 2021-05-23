import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Image, Badge, Form, FormControl, Button} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";
import "./components/headerComponents/Navbar.css";
import Product from "./components/productComponents/Product.jsx";
import Cart from "./components/cartComponents/Cart.jsx";
import Home from "./components/homeComponents/Home.jsx";
import Login from "./components/homeComponents/Login.jsx";
import NotFoundPage from "./components/notFoundComponents/NotFound";


export var numItems = 0;

export default function App() {


  const radios = "white";

  const [apiData, setApiData] = useState([]);
  numItems = apiData.length;
    var checked = true
  
  useEffect( async() => {
  
    await fetch('http://127.0.0.1:5000/carts')
      .then(response => response.json())
      .then(data => setApiData(data))
      .then(() => console.log(apiData))
      .then(() => checked = true)
      .then((checked) => checked = true)
      .catch(err => console.log(err));
  }, [])

  function updateNumItems() {
    numItems = apiData.length;
  }
  numItems = apiData.length;

  return (
    <Router>
      <Navbar bg={radios.name} expand="lg" className="Navbar">
        <Navbar.Brand href="/">Shoes for Moose</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>

          <Link to="/cart">
            <Form inline>
              <Image src="../../shoes/shopping-cart.png" width={40}/>
              <Badge style={{backgroundColor: "black", fontSize: "100%", fontWeight: "normal"}}>
                {numItems}
              </Badge>
            </Form>
          </Link>

        </Navbar.Collapse>
      </Navbar>
      <div>
        <Switch>

          <Route exact path="/product/:prod_id" component={Product}/>

          <Route exact path="/cart">
            <Cart />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="*">
            <NotFoundPage />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}
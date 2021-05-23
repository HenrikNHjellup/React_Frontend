import React, {Component, useEffect, useState, setState} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Image, Badge, NavDropdown, Form, FormControl, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";
import "./components/headerComponents/Navbar.css";
import Product from "./components/productComponents/Product.jsx";
import Cart from "./components/cartComponents/Cart.jsx";
import Home from "./components/homeComponents/Home.jsx";
import Users from "./components/userComponents/Users.jsx";
import NotFoundPage from "./components/notFoundComponents/NotFound";
import Login from "./components/homeComponents/Login"
import Logout from "./components/homeComponents/Logout"


/*
export var prod_id = 0;

const radios = [
  { name: 'light', value: '1' },
  { name: 'dark', value: '2' }
];

var theme = "dark";

function setValue(val){
  if(val === "dark"){
    return "light"
  } else {
    return "dark"
  }
}

//var prod_id = 0;

const handleChange = () => {
	this.setState({
		on: !this.state.on
	});
}
*/

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
            <Nav.Link href="/users">Users</Nav.Link>
          </Nav>

          <Link to="/cart">
            <Form inline>
              <Image src="../../shoes/shopping-cart.png" width={40}/>
              <Badge style={{backgroundColor: "black", fontSize: "100%", fontWeight: "normal"}}>
                {numItems}
              </Badge>
            </Form>
          </Link>

          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <div>
        {/*<nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
				</nav>*/}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/product/:prod_id" component={Product}/>
            {/*<Product prod_id={0}/>
          </Route>*/}
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/users">
            <Users />
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

// function Home() {
//  return <h2>Home</h2>;
// }

// function About() {
//  return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }
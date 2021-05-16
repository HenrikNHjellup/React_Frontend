import React, {Component, setState} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";
import "./components/headerComponents/Navbar.css";
import About from "./components/aboutComponents/About.jsx";
import Home from "./components/homeComponents/Home.jsx";
import Users from "./components/userComponents/Users.jsx";
import NotFoundPage from "./components/notFoundComponents/NotFound";

const radios = [
  { name: 'light', value: '1' },
  { name: 'dark', value: '2' }
];

var theme = "dark";

function setValue(val){
  if(val == "dark"){
    return "light"
  } else {
    return "dark"
  }
}

const handleChange = () => {
	this.setState({
		on: !this.state.on
	});
}

export default function App() {
  return (
    <Router>
      <Navbar bg={radios.name} expand="lg">
        <Navbar.Brand href="/">Shoes for Moose</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">Link</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
            <ToggleButtonGroup type="checkbox" value={theme} onChange={handleChange}>
              <ToggleButton value={1}>Option 1</ToggleButton>
            </ToggleButtonGroup>
          </Nav>

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
          <Route exact path="/about">
            <About />
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
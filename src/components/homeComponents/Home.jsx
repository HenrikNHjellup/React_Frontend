import React, {useEffect, useState} from 'react';
import { Button, Cards, Tabs, Tab, Accordion, Card, Image, Modal, Form } from "react-bootstrap";

import "./Home.css";


const Home = () => {

  const [price, setPrice] = useState(0);
  var prod_price = 0;

  useEffect( () => {

    fetch('http://127.0.0.1:5000/product/0')
      .then(response => response.json())
      .then(data => setPrice(data['price'])
      );

  }, [])

  function updatePrice() {
    fetch("http://127.0.0.1:5000/product/0", {
      method: "PATCH",
      mode: "cors",
      body: JSON.stringify({
      id: 0,
      name: "Sneakers",
      price: price,
      colors: 200
      }),
      headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': "*",

      }
      })
      .then(response => response.json())
      .then(json => console.log(json))
      }

	return(
    <div className="store_front">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Oppdater pris</Form.Label>
          <Form.Control
            type="text"
            /*placeholder={"123"}*/
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={updatePrice}>
          Send
        </Button>
      </Form>
      <Card>
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card>

      <Card>
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card>

      <Card style={{ width: '20%' }}>
        <Card.Img variant="top" src="../../shoes/nike-revolt.jpg" />
        <Card.Body>
          <Card.Title>Nike Revolt</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content. Price = {price}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card>
      
    </div>
  )
}

export default Home;
import React, {useEffect, useState} from 'react';
import { Button, Cards, Tabs, Tab, Accordion, Card, Image, Modal, Form } from "react-bootstrap";

import "./Home.css";


const Home = () => {

  const [price, setPrice] = useState(0);
  const [sendPrice, setSendPrice] = useState(0);
  const [prodNum, setProdNum] = useState(0);
  var prod_price = 0;

  useEffect( () => {

    fetch('http://127.0.0.1:5000/products')
      .then(response => response.json())
      .then(data => setPrice(data[0]['price'])
      );

  }, [])


  function updatePrice() {
    fetch(`http://127.0.0.1:5000/product/${prodNum}`, {
      method: "PATCH",
      mode: "cors",
      body: JSON.stringify({
      id: 0,
      name: "Sneakers",
      price: sendPrice,
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
        <Form.Group>
          <Form.Label>Oppdater pris</Form.Label>
          <Form.Control
            type="text"
            /*placeholder={"123"}*/
            value={sendPrice}
            onChange={e => setSendPrice(e.target.value)}
          />
          <Form.Control
            type="text"
            value={prodNum}
            onChange={e => setProdNum(e.target.value)}         
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
      <Card.Img variant="top" src="../../shoes/converse.jpg" />
        <Card.Body>
          <Card.Title>Nike Revolt</Card.Title>
          <Card.Text>
            Some quick example text. Price = {price}
          </Card.Text>
          <Button variant="primary">Read more</Button>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>

      <Card>
      <Card.Img variant="top" src="../../shoes/converse.jpg" />
        <Card.Body>
          <Card.Title>Nike Revolt</Card.Title>
          <Card.Text>
            Some quick example text. Price = {price}
          </Card.Text>
          <Button variant="primary">Read more</Button>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>

      <Card> {/*style={{ width: '20%' }}>*/}
        <Card.Img variant="top" src="../../shoes/nike-air-max.jpg" />
        <Card.Body>
          <Card.Title>Nike Revolt</Card.Title>
          <Card.Text>
            Some quick example text. Price = {price}
          </Card.Text>
          <Button variant="primary">Read more</Button>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>

      <Card>
      <Card.Img variant="top" src="../../shoes/air-jordan.jpg" />
        <Card.Body>
          <Card.Title>Nike Revolt</Card.Title>
          <Card.Text>
            Some quick example text. Price = {price}
          </Card.Text>
          <Button variant="primary">Read more</Button>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>

      <Card>
      <Card.Img variant="top" src="../../shoes/sneaker.jpg" />
        <Card.Body>
          <Card.Title>Nike Revolt</Card.Title>
          <Card.Text>
            Some quick example text. Price = {price}
          </Card.Text>
          <Button variant="primary">Read more</Button>
          <Button variant="primary">Add to cart</Button>        
        </Card.Body>
      </Card>

      <Card>
      <Card.Img variant="top" src="../../shoes/two-shoes.jpg" />
        <Card.Body>
          <Card.Title>Nike Revolt</Card.Title>
          <Card.Text>
            Some quick example text. Price = {price}
          </Card.Text>
          <Button variant="primary">Read more</Button>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
      
    </div>
  )
}

export default Home;
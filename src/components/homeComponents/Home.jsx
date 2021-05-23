import React, {useEffect, useState} from 'react';
import { Button, Cards, Tabs, Tab, Accordion, Card, Image, Modal, Form, Container } from "react-bootstrap";

import "./Home.css";
import ShowProducts from './ShowProducts';


const Home = () => {

  const [price, setPrice] = useState(0);
  const [sendPrice, setSendPrice] = useState(0);
  const [prodNum, setProdNum] = useState(0);
  const [apiData, setApiData] = useState([]); 
  var checked = true
  var showTheProds = <div></div>

  if(checked){
    showTheProds = <ShowProducts apiData={apiData}/>
  } 

  useEffect( async() => {

    await fetch('http://127.0.0.1:5000/products')
      .then(response => response.json())
      .then(data => setApiData(data))
      .then(() => console.log(apiData))
      .then(() => checked = true)
      .then((checked) => checked = true)
      .catch(err => console.log(err))
      ;

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
      'Access-Control-Allow-Origin': "*"
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

      <div>{showTheProds}</div>
      
    </div>
  )
}

export default Home;
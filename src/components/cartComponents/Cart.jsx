import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom"
import { Button, Tabs, Tab, Accordion, Card, Image, Modal, Form } from "react-bootstrap";

const Cart = () => {

  const [prodData, setProdData] = useState([]);
  const [apiData, setApiData] = useState([]);
  var checked = true

  useEffect( async() => {

    await fetch('http://127.0.0.1:5000/carts')
      .then(response => response.json())
      .then(data => setApiData(data))
      .then(() => console.log(apiData))
      .then(() => checked = true)
      .then((checked) => checked = true)
      .catch(err => console.log(err));

      await fetch('http://127.0.0.1:5000/products')
      .then(response => response.json())
      .then(data => setProdData(data))
      .then(() => console.log(prodData))
      .then(() => checked = true)
      .then((checked) => checked = true)
      .catch(err => console.log(err));


  }, [])

  var prodSum = 0;

  function deleteItem() {
    fetch(`http://127.0.0.1:5000/cart/0`, {
      method: "DELETE",
      headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': "*",

      }
      })
      .then(response => response.json())
      .then(json => console.log(json))
      }
    
	return (
    <div className="ShowProducts">
    
    {apiData.map((object) => 
      <Card key={object.product}>
      <Card.Img fluid variant="top" src={`../../shoes/${object.product}.jpg`} onError={(e)=>{e.target.onerror = null; e.target.src="../../shoes/404-shoe.jpg"}}/> {/*src="../../shoes/converse.jpg" />*/}
      <Card.Body>
        <Card.Title>{object.product}</Card.Title>
        <Card.Text>{"Color: " + object.color}</Card.Text>
        <Card.Text>{"Size: " + object.size}</Card.Text>
        <Card.Text>{"Number: " + object.number}</Card.Text>
        <Card.Text style={{fontWeight: "bold"}}>
          {"$" + object.price*object.number}
        </Card.Text>
        <Card.Text style={{fontWeight: "bold"}}>
          {"Subtotal: $"}{prodSum += object.price*object.number}
        </Card.Text>
        <Button onClick={deleteItem}>Delete</Button>
      </Card.Body>
    </Card>
    )}


    <Card>
      <Card.Title>Total sum:</Card.Title>
      <Card.Text style={{fontWeight: "bold"}}>{"$" + prodSum}</Card.Text>
      <Card.Text style={{fontWeight: "bold"}}>Special offer today: {"$" + prodSum} - {"$" + prodSum} =</Card.Text>
      <Card.Text style={{fontWeight: "bold"}}>$0</Card.Text>
    </Card>
    </div>
  )
}

export default Cart;

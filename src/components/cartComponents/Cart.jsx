import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom"
import { Button, Tabs, Tab, Accordion, Card, Image, Modal, Form } from "react-bootstrap";

const Cart = () => {

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
  }, [])
    
	return (
    <div className="ShowProducts">
    
    {apiData.map((object) => 
      <Card key={object.product}>
      <Card.Img fluid variant="top" src={`../../shoes/${object.product}.jpg`} onError={(e)=>{e.target.onerror = null; e.target.src="../../shoes/404-shoe.jpg"}}/> {/*src="../../shoes/converse.jpg" />*/}
      <Card.Body>
        <Card.Title>{object.product}</Card.Title>
        <Card.Text>{object.color}</Card.Text>
        <Card.Text>{object.size}</Card.Text>
        <Card.Text>{object.number}</Card.Text>
        <Card.Text style={{fontWeight: "bold"}}>
          {"$" + "69"}
        </Card.Text>
      </Card.Body>
    </Card>
    )}
    

    </div>
  )
}

export default Cart;

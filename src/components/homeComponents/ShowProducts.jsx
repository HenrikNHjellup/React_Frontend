import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import { Button, Cards, Tabs, Tab, Accordion, Card, Image, Modal, Form } from "react-bootstrap";
import "./ShowProducts.css";

// PREV CARD TEXT: Some quick example text. Price = 

var objArr = []

const ShowProducts = ({apiData}) => {

	function addToCart() {
		fetch(`http://127.0.0.1:5000/cart/${objArr[0].id}`, {
      method: "PUT",
      mode: "cors",
      body: JSON.stringify({
    	id: objArr[0].id,
      product: objArr[0].name,
      number: 1,
			size: "34",
      color: "Red"
      }),
      headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': "*",

      }
      })
    .then(response => response.json())
    .then(json => console.log(json))
	}

	//var objArr = []

	{apiData.map((object) =>
		objArr.push(object)
	)}

	render();{
		console.log(apiData)
		return (
			<div className="ShowProducts">
			
	  	{apiData.map((object) => 
	  		<Card key={object.id}>
	    	<Card.Img fluid variant="top" src={`../../shoes/${object.name}.jpg`}/> {/*src="../../shoes/converse.jpg" />*/}
	      <Card.Body>
	        <Card.Title>{object.name}</Card.Title>
	        <Card.Text>
	        	{object.description}
	        </Card.Text>
					<Card.Text style={{fontWeight: "bold"}}>
	        	{"$" + object.price}
	        </Card.Text>
					<Link to={`product/${object.id}`}>
	        	<Button variant="primary">Read more</Button>
					</Link>
	        <Button variant="primary" onClick={addToCart}>Add to cart</Button>
	      </Card.Body>
	  	</Card>
			)}
			

			</div>
		)
	}
}

export default ShowProducts;
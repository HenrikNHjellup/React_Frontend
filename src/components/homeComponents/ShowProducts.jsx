import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import { Button, Cards, Tabs, Tab, Accordion, Card, Image, Modal, Form } from "react-bootstrap";
import "./ShowProducts.css";

const ShowProducts = ({apiData}) => {

	render();{
		//return (<div>Yo</div>)
		console.log(apiData)
		return (
			<div className="ShowProducts">
			
	  	{apiData.map((object) => 
	  		<Card key={object.id}>
	    	<Card.Img fluid variant="top" src="../../shoes/converse.jpg" />
	      <Card.Body>
	        <Card.Title>{object.name}</Card.Title>
	        <Card.Text>
	        	Some quick example text. Price = {object.price}
	        </Card.Text>
	        <Button variant="primary">Read more</Button>
	        <Button variant="primary">Add to cart</Button>
	      </Card.Body>
	  	</Card>
			)}

			</div>
		)
	}

	//return ProductList();
}

export default ShowProducts;
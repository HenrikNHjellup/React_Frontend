import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { Button, Cards, Dropdown, DropdownButton, Tabs, Tab, Accordion, Card, Image, Modal, Form } from "react-bootstrap";
import "./ShowProducts.css";

var objArr = []

const ShowProducts = ({ apiData }) => {

	async function addToCart(){
		confirmSale()
		await fetch(`http://127.0.0.1:5000/carts`, {
			method: "PUT",
			mode: "cors",
			body: JSON.stringify({
				product: prodName,
				number: 1,//prodNum,
				price: prodPrice,
				size: sizeTitle,
				color: colorTitle
			}),
			headers: {
				"Content-Type": "application/json",
				'Access-Control-Allow-Origin': "*"

			}
		})
			.then(response => response.json())
			.then(json => console.log(json))
			.catch((error) => console.log(error))
			window.location.reload();
	}

	{
		apiData.map((object) =>
			objArr.push(object)
		)
	}

	function confirmSale(){
		setProdNum(prompt("Please confirm product: "))
		prodPrice = prompt("Please confirm price: ")
	}

	var sizeArray = [];
	var colorArray = [];

	var prodName = "";
	const [prodNum, setProdNum] = useState(1);
	var prodPrice = 0;
	const [sizeTitle, setSizeTitle] = useState("Size");
	const [colorTitle, setColorTitle] = useState("Color");

	const handleProdNumSelect = (e) => {
		setProdNum(e)
	}

	const handleSizeSelect = (e) => {
		setSizeTitle(e);
	}

	const handleColorSelect = (e) => {
		setColorTitle(e);
	}

	render(); {

		return (
			<div className="ShowProducts">

				{apiData.map((object) =>
					<Card key={object.id}>
						<Card.Img fluid variant="top" src={`../../shoes/${object.name}.jpg`} onError={(e)=>{e.target.onerror = null; e.target.src="../../shoes/404-shoe.jpg"}}/>
						<Card.Body>

							<Card.Title>{prodName = object.name}</Card.Title>
								
							<Card.Text>
								{object.shortDesc}
							</Card.Text>

							<Card.Text>
							{"Sizes available: " + object.sizes}
							<Card.Text style={{color: "white"}}>{sizeArray = object.sizes.split(" ")}</Card.Text>
							</Card.Text>

							<Card.Text>
							{"Colors available: " + object.colors}
							<Card.Text style={{color: "white"}}>{colorArray = object.colors.split(" ")}</Card.Text>
							</Card.Text>

							<Card.Text style={{ fontWeight: "bold" }}>
								{"$"}{prodPrice = object.price}
							</Card.Text>

							<Link to={`product/${object.id}`}>
								<Button variant="primary">Read more</Button>
							</Link>

							<Form>

							<Form.Group>
							  <Form.Control type="text" placeholder="Number of pairs" onChange={handleProdNumSelect}/>
							</Form.Group>

							<Dropdown>

							  <DropdownButton onSelect={handleSizeSelect} title={sizeTitle}>
							    {sizeArray[0] && <Dropdown.Item eventKey={sizeArray[0]}>{sizeArray[0]}</Dropdown.Item>}
							    {sizeArray[1] && <Dropdown.Item eventKey={sizeArray[1]}>{sizeArray[1]}</Dropdown.Item>}
							    {sizeArray[2] && <Dropdown.Item eventKey={sizeArray[2]}>{sizeArray[2]}</Dropdown.Item>}
									{sizeArray[3] && <Dropdown.Item eventKey={sizeArray[3]}>{sizeArray[3]}</Dropdown.Item>}
									{sizeArray[4] && <Dropdown.Item eventKey={sizeArray[4]}>{sizeArray[4]}</Dropdown.Item>}
									{sizeArray[5] && <Dropdown.Item eventKey={sizeArray[5]}>{sizeArray[5]}</Dropdown.Item>}
									{sizeArray[6] && <Dropdown.Item eventKey={sizeArray[6]}>{sizeArray[6]}</Dropdown.Item>}
									{sizeArray[7] && <Dropdown.Item eventKey={sizeArray[7]}>{sizeArray[7]}</Dropdown.Item>}
								</DropdownButton>
							</Dropdown>

							<Dropdown>

								<DropdownButton onSelect={handleColorSelect} title={colorTitle}>
							    {colorArray[0] && <Dropdown.Item eventKey={colorArray[0]}>{colorArray[0]}</Dropdown.Item>}
							    {colorArray[1] && <Dropdown.Item eventKey={colorArray[1]}>{colorArray[1]}</Dropdown.Item>}
							    {colorArray[2] && <Dropdown.Item eventKey={colorArray[2]}>{colorArray[2]}</Dropdown.Item>}
									{colorArray[3] && <Dropdown.Item eventKey={colorArray[3]}>{colorArray[3]}</Dropdown.Item>}
									{colorArray[4] && <Dropdown.Item eventKey={colorArray[4]}>{colorArray[4]}</Dropdown.Item>}
									{colorArray[5] && <Dropdown.Item eventKey={colorArray[5]}>{colorArray[5]}</Dropdown.Item>}
									{colorArray[6] && <Dropdown.Item eventKey={colorArray[6]}>{colorArray[6]}</Dropdown.Item>}
									{colorArray[7] && <Dropdown.Item eventKey={colorArray[7]}>{colorArray[7]}</Dropdown.Item>}
							  </DropdownButton>
							</Dropdown>

							</Form>

							<Button variant="primary" onClick={addToCart}>Add to cart</Button>

						</Card.Body>
					</Card>
				)}


			</div>
		)
	}
}

export default ShowProducts;
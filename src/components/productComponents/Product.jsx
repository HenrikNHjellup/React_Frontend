import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { Button, Cards, Tabs, Tab, Accordion, Card, Image, Modal, Form } from "react-bootstrap";
//import "./ShowProducts.css";

// PREV CARD TEXT: Some quick example text. Price = 

var objArr = [] // { prod_id } i const Product

const Product = (props) => {

	//console.log(prod_id)

	const [object, setObject] = useState([]); 

	var checked = true;

	useEffect( async() => {

    await fetch(`http://127.0.0.1:5000/product/${props.match.params.prod_id}`)
      .then(response => response.json())
      .then(data => setObject(data))
      .then(() => checked = true)
      .then((checked) => checked = true)
      .catch(err => console.log(err))
      /*.then(
        data => console.log(data),//setPrice(data[0]['price'])
      )
      .then(function(u){return u.json();})
      .then(function(json){apiData=json})*/
      ;

  }, [])

	console.log(object.name)

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

	render(); {
		return (
			

			<div className="ShowProducts">

					<Card>
						<Card.Img fluid variant="top" src={`../../shoes/${object.name}.jpg`} onError={(e)=>{e.target.onerror = null; e.target.src="../../shoes/404-shoe.jpg"}}/> {/*src="../../shoes/converse.jpg" />*/}
						<Card.Body>
							<Card.Title>{object.name}</Card.Title>

							<Card.Text>
								{object.longDesc}
							</Card.Text>

							<Card.Text>
							{"Sizes available: " + object.sizes}
							</Card.Text>

							<Card.Text>
							{"Colors available: " + object.colors}
							</Card.Text>

							<Card.Text style={{ fontWeight: "bold" }}>
								{"$" + object.price}
							</Card.Text>
						</Card.Body>
					</Card>

			</div>
		)
	}
}

export default Product;


/*


return (
			

			<div className="ShowProducts">

				{apiData.map((object) =>
					<Card key={object.id}>
						<Card.Img fluid variant="top" src={`../../shoes/${object.name}.jpg`} /> {/*src="../../shoes/converse.jpg" />}
						<Card.Body>
							<Card.Title>{object.name}</Card.Title>
							<Card.Text>
								{object.description}
							</Card.Text>
							<Card.Text style={{ fontWeight: "bold" }}>
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


*/
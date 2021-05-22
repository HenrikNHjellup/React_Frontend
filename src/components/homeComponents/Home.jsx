import React, {useEffect, useState} from 'react';
import { Button, Cards, Tabs, Tab, Accordion, Card, Image, Modal, Form, Container } from "react-bootstrap";

import "./Home.css";
import "../../public/shoes"
import ShowProducts from './ShowProducts';


const Home = () => {

  const [price, setPrice] = useState(0);
  const [sendPrice, setSendPrice] = useState(0);
  const [prodNum, setProdNum] = useState(0);
  const [apiData, setApiData] = useState([]); 
  //var apiData;
  //var prod_price = 0;
  var checked = true
  //var loading = false
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
      /*.then(
        data => console.log(data),//setPrice(data[0]['price'])
      )
      .then(function(u){return u.json();})
      .then(function(json){apiData=json})*/
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
      'Access-Control-Allow-Origin': "*",

      }
      })
      .then(response => response.json())
      .then(json => console.log(json))
      }



      setTimeout(function(){
        checked = true
        console.log(checked)
      }, 2000)

      //return (showTheProds)

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

      

      {/*<Card>
	    <Card.Img variant="top" src="../../shoes/converse.jpg" />
	      <Card.Body>
	        <Card.Title>Nike Revolt</Card.Title>
	        <Card.Text>
	        	Some quick example text. Price = {price}
	        </Card.Text>
	        <Button variant="primary">Read more</Button>
	        <Button variant="primary">Add to cart</Button>
	      </Card.Body>
	    </Card>*/}

      <div>{showTheProds}</div>

      
      
      

      

      {/*setTimeout(() => {  
          <div>{ProductList()}</div>
       }, 2000)*/}
      
      
      
        
      {/*posts.slice(0).map((post) => (
      <Card key={post.id}>
        <Link
          to={`/forum/${post.id}`}
          style={{ textDecoration: "none", color: "#000000" }}
        >
          <Card.Body>
            <div className="float-left">
              <Card.Text>
                {post.userId === null ? <>Postet av <b>[Slettet bruker]</b></> : <>Postet av <b>{post.username}</b></>}
                {" "}{moment(post.date).calendar()}
              </Card.Text>
            </div>

            <br />
            <br />
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>
              <ReadMoreReact text={post.content} />
            </Card.Text>
            <Card.Text className="subtoptitle">
              {topic.find(t => t.id === post.topicId)?.title} -{" "}
              {subtopic.find((st) => st.id === post.subTopicId)?.title}
            </Card.Text>
            <div className="likecomment">
              {post.like_Count}{" "}
              <LikeStatus postId={post.id} />{" "}
              &nbsp;
              {post.comment_Count}{" "}
              <FaRegComment
                size={18}
                color="grey"
                className="ml-2 mr-2 mb-1"
              /></div>
          </Card.Body>
        </Link>
      </Card>
      ))*/}
      
    </div>
  )
}

export default Home;
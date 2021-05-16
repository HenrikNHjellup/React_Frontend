import React from 'react';
import {Container, Row, Col, Image} from "react-bootstrap"
import { Link } from 'react-router-dom';
class NotFoundPage extends React.Component{
    render(){
        return <div>
            <Container>
                <Row style={{marginLeft : "20%"}}>
                <h1 style={{marginTop : "5%"}}>404 - Page not found</h1>
                  <Col xs={6} md={4}>
                    <Image src="../../shoes/404-shoe.jpg" rounded />
                  </Col>
                </Row>
            </Container>
          </div>;
    }
}
export default NotFoundPage;
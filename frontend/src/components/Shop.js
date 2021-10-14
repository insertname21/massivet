import React from "react";
import { useSpring, animated } from 'react-spring'
import { Container,Row, Col } from "react-bootstrap";
import products from '../products'
import Product from './Product.js'


export default function Shop() {
  
  return (
    <Container>
      <h1 class="top">Products avalible</h1>
      
      
      <Row>
        {products.map(product =>
          <Col key={product._id} sm={12} md={6}  lg={4} xl={3}>
          <Product product={product} />
          </Col>)}
      </Row>
      </Container>
    
  );
}


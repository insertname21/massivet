import React from "react";
import { Card,Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (

    <div style={{paddingright: '30px'}}>
    <Card style={{ width: '18rem', height: '20rem' }}>
    <Card.Img variant="top" src={product.image} style={{ height: '180px' }}/>
    <Card.Body>
    <Card.Title as="div">
      <strong>{product.name}</strong>
    </Card.Title>
      
      <Link to={`/Product/${product._id}`}>
        <Button variant="primary">More Info</Button>
      </Link>
    </Card.Body>
  </Card>
  </div>
  );
}

export default Product;

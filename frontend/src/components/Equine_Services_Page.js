import React from "react";
import { Card,Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Equine_Services() {
  return (
      <div>
    <div>
        <h1 class="top">Equine Services</h1>
        </div>
    <div>
    <Card style={{ width: '18rem', height: '20rem' }} className="rounded p-3 my-3">
    <Card.Img variant="top" src="/images/LamenessInvestigations.jpg" style={{ height: '180px' }}/>
    <Card.Body>
    <Card.Title as="div">
      <strong>Lameness Investigations</strong>
    </Card.Title>
      
      <Link to={`/Equine_Services/LamenessInvestigation`}>
        <Button variant="primary">More Info</Button>
      </Link>
    </Card.Body>
  </Card>
  </div>
  </div>
  );
}

export default Equine_Services;
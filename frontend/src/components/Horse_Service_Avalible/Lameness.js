import React from "react";
import { Card,Button,Col,Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Lameness() {
  return (
      
<div class="article">
                <h3>A mobile vet you can trust</h3>
                <p>
                A Mobile Veterinary Service Treating Farm animals Like Family 
in Jackson County and Surrounding Areas
                </p>
                <Link to="/Products">Contact Us</Link>
              </div>
  
  
  );
}

export default Lameness;
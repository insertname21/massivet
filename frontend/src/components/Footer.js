import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div class="Footer">
      <Row>
        <Col style={{padding: '10px '}}>
          <img src="\images\accrt\AAEP.image.jpg" />
        </Col>
        <Col style={{padding: '10px '}}>
          <img src="\images\accrt\AVMA.jpg" />
        </Col>
        <Col  >
          
          <img src="\images\accrt\AABP.jpg" />
        </Col>
        <Col>
          <img src="\images\accrt\CVMA.jpg" />
        </Col>
      </Row>
    </div>
  );
}

export default Footer;

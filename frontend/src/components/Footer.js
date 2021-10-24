import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div>
      <Row>
        <Col>
          <h2>Contact Info:</h2>

          <p>Location: 4940 Pioneer Rd,Medford, OR 97501</p>
          <p>Telephone:541-636-1191</p>
          <p>Email: info@massievet.com</p>
        </Col>

        <Col>
          <img src="\images\accrt\AAEP.image.webp" />
        </Col>
        <Col>
          <img src="\images\accrt\AVMA.webp" />
        </Col>
        <Col>
          <img src="\images\accrt\AABP.webp" />
        </Col>
      </Row>
    </div>
  );
}

export default Footer;

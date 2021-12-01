import React from "react";
import { useSpring, animated, config } from "react-spring";
import { Container, Nav,Button,Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function ContactUs(){
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, config: config.molasses,});
  	return (
      <animated.div style={props}>
      <div className="article">
      <h1>Contact US</h1>
      <Row>
        <Col>
     <div class="col-md-8">
<iframe width="150%" height="450"  loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJAQAsOwl3z1QR6d58YlUXVKk&key=AIzaSyAWoHHG2dKowKhkB7XO_CyuVlc1ZfHux58"></iframe>  
      </div>
      </Col>
      <Col>
      <div>
          <h3>Contact:</h3>
          <p><a href="tel:541-636-1191">541-636-1191</a></p>
          
          <p>< a href="mailto:info@massievet.com">info@massievet.com</a></p>
          
        </div>
      </Col>
      </Row>
    	</div>
      </animated.div>
    );
  }	


export default ContactUs;

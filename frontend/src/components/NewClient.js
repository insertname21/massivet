import React from "react";
import { useSpring, animated, config } from "react-spring";
import { Container, Nav,Button,Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function New_Client(){
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, config: config.molasses,});
  
  
	
    
  	return (
      <animated.div style={props}>
    	<div className="article">
        <h1>Massie vet new client form</h1>
        <form>
          <Row>
        <div class="form-group col-md-5">
    <label for="exampleInputEmail1">First Name</label>
    <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name"/>
    
  </div>
  <div class="form-group col-md-5">
    <label for="exampleInputEmail1">Last Name</label>
    <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name"/>
    
  </div>
  </Row>
  <div class="form-group col-md-10">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>

 <Row>
    <div class="form-group col-md-4">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity" placeholder="City"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <input type="text" id="inputState" class="form-control" placeholder="State">
      </input>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip" placeholder="12345"/>
    </div>
    </Row>
    <Row>
  <div class="form-group col-md-5">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group col-md-5">
    <label for="exampleInputPhone">Phone</label>
    <input type="tel" class="form-control"   pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="(123)-456-789"required />
    
  </div>
  </Row>

  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

    	</div>
      </animated.div>
    );
  }	


export default New_Client;

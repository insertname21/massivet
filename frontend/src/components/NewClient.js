import React from "react";
import { useSpring, animated, config } from "react-spring";
import { Container, Nav,Button,Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function New_Client(){
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, config: config.molasses,});
  
  
	
    
  	return (
      <animated.div style={props}>
        <div class="article">
        <iframe src="https://prodinternal.vettersoftware.com/view/onlinebook/index.html?identifier=SpAcvuwKLuj8FGyYmJQ0WIoMXXUJCPSuc84xtcRMvbJtzVIkH7ny0p%2BBi%2FzJaboPbIc0kXQNvqldphQ3f6FcWFUM77gdJxjBAf8EmonmF0Q%3D" frameborder="0"  height="500px" width="100%"></iframe>
                    
      </div>
                    
                    
{/*     	<div className="article">
        <h1>Massie vet new client form</h1>
        <form>
          <Row>
        <div class="form-group col-md-5">
    <label for="exampleInputEmail1">First Name</label>
    <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name"required/>
    
  </div>
  <div class="form-group col-md-5">
    <label for="exampleInputEmail1">Last Name</label>
    <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name"required/>
    
  </div>
  </Row>
  <div class="form-group col-md-10">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"required/>
  </div>

 <Row>
    <div class="form-group col-md-4">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity" placeholder="City"required/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <input type="text" id="inputState" class="form-control" placeholder="State"required/>
      
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip" placeholder="12345"required/>
    </div>
    </Row>
    <Row>
  <div class="form-group col-md-5">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email"required/>
    
  </div>
  <div class="form-group col-md-5">
    <label for="exampleInputPhone">Phone</label>
    <input type="tel" class="form-control"    placeholder="(123)-456-789" required />
    
  </div>
  </Row>
  <div class="form-check" style={{
    paddingTop: '25px',
  }}>
  terms and conditions
    </div>
  
  <div class="form-check">
  
    <input type="checkbox" class="form-check-input" id="exampleCheck1"required/>
    <label class="form-check-label" for="exampleCheck1">I have read and agree to the </label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

    	</div> */}
      </animated.div>
    );
  }	


export default New_Client;

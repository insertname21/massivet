import React from "react";
import { Card,Button,Col,Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSpring, animated,config } from 'react-spring'

function Equine_Services() {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, config: config.molasses,})
  return (
    <animated.div style={props}>
    <Container>
    
    <div class="article">
        <h1 >Small Animal Services</h1>
  
    <Row>





    <Card border="dark" style={{ width: '18rem', height: '20rem' }} className="rounded p-3 my-3">
    <Card.Img src="/images/DiagnosticImaging.jpg" style={{ height: '180px' }}/>
    <Card.Body>
    <Card.Title as="div">
      <strong>Lameness Investigations</strong>
    </Card.Title>
      
    <div class="text">
                
                <Link to={`/Equine_Services/LamenessInvestigation`}>More Info</Link>
              </div>
    </Card.Body>
  </Card>


    <Card border="dark"style={{ width: '18rem', height: '20rem' }} className="rounded p-3 my-3">
    <Card.Img variant="top" src="/images/wormtest.jpg" style={{ height: '180px' }}/>
    <Card.Body>
    <Card.Title as="div">
      <strong>Worming Programme</strong>
    </Card.Title>
      
      
      <div class="text">
                
                <Link to={`/Equine_Services/LamenessInvestigation`}>More Info</Link>
              </div>
 
    </Card.Body>
  </Card>

  

    <Card border="dark" style={{ width: '18rem', height: '20rem' }} className="rounded p-3 my-3">
    <Card.Img variant="top" src="/images/DiagnosticImaging.jpg" style={{ height: '180px' }}/>
    <Card.Body>
    <Card.Title as="div">
      <strong>Diagnostic Imaging</strong>
    </Card.Title>
      
      <Link to={`/Equine_Services/LamenessInvestigation`}>
      
      <div class="text">
                
                <Link to="/Products">More Info</Link>
              </div>
      </Link>
    </Card.Body>
  </Card>
  <Card border="dark" style={{ width: '18rem', height: '20rem' }} className="rounded p-3 my-3 cards">
    <Card.Img variant="top" src="/images/LamenessInvestigations.jpg" style={{ height: '180px' }}/>
    <Card.Body>
    <Card.Title as="div">
      <strong>End of Life Care</strong>
    </Card.Title>
      
    <div class="text">
                
                <Link to={`/Equine_Services/LamenessInvestigation`}>More Info</Link>
              </div>
    </Card.Body>
  </Card>


  <Card border="dark" style={{ width: '18rem', height: '20rem' }} className="rounded p-3 my-3 cards">
    <Card.Img variant="top" src="/images/LamenessInvestigations.jpg" style={{ height: '180px' }}/>
    <Card.Body>
    <Card.Title as="div">
      <strong>Equine Endoscopy</strong>
    </Card.Title>
      
    <div class="text">
                
                <Link to={`/Equine_Services/LamenessInvestigation`}>More Info</Link>
              </div>
    </Card.Body>
  </Card>
  
  </Row>
  
  </div>
  </Container>
  </animated.div>
  );
}

export default Equine_Services;
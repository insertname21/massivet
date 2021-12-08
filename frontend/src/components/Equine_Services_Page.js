import React from "react";
import { Card,Button,Col,Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSpring, animated,config } from 'react-spring'

function Equine_Services() {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, config: config.molasses,})
  return (
    <animated.div style={props}>

    <div class="article">
        <h1 >Equine Services</h1>

    <Row>



    <Card style={{ width: '18rem', padding: '0px' }}>
  <Card.Img variant="top" src="/images/1125620197.jpeg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

    
    <Card   style={{ width: '18rem', padding: '0px' }} className="rounded">
    <Card.Img variant="top" src="/images/DiagnosticImaging.jpg" />
    <Card.Body>
    <Card.Title>
      <strong>Lameness Investigations</strong>
    </Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <div class="text">
                
                <Link to={`/Equine_Services/LamenessInvestigation`}>More Info</Link>
              </div>
    </Card.Body>
  </Card>


    <Card border="dark"style={{ width: '18rem', height: '20rem' }} className="rounded p-3 my-3">
    <Card.Img variant="top" src="/images/wormtest.jpeg" style={{ height: '180px' }}/>
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

  </animated.div>
  );
}

export default Equine_Services;
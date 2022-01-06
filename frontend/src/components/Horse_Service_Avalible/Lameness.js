import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSpring, animated,config } from 'react-spring'

function Lameness() {
  const props1 = useSpring({   to: {x:0, opacity: 1 },
    from: {x:-500, opacity: 0 },
     config: config.molasses,})
     const props2 = useSpring({   to: {x:0, opacity: 1 },
      from: {x:-10, opacity: 0 },
       config: config.molasses,})
  return (
    <animated.div style={props1}>
    <div class="article d-none d-xl-block" >
    <h1 >Lameness</h1>
      <Row >
      
      <Col>
      
      <p> Lameness is one of the most common issues horse owners will encounter. Lameness can vary from severe cases associated with fractures of hoof abscesses to subtle hoof issues which can cause pain and a decrease in overall performance. </p>
        <p>A lameness investigation includes a thorough examination of both the level of lameness and the legs affected. Palpation of leg, hoof testers, and flexion tests are used initially, but if there is no obvious cause, then nerve blocks may be administered to localise the problem and further investigations using our state-of-the-art VetRay, high-end digital radiology, or ultrasound methods may be necessary. 
</p>
          <p>Some horses may require referral for specialised tests such as scintigraphy (bone-scanning) or MRI and we will advise you if these are required. Contact us at 541-636-1191 to schedule a lameness investigation appointment today.
</p></Col>
      
                 <Col >
                 
                 
      <iframe 
        overflow= "auto"
        width="750px"
        height="400px"
        src="https://www.youtube.com/embed/M98VPRpRBDw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      
      </Col>
      
      </Row>
 
      
    </div>
    <div class="article d-xl-none" >
     
      <div><h1 >Lameness Investigation</h1>
      <p> Lameness is one of the most common issues horse owners will encounter. Lameness can vary from severe cases associated with fractures of hoof abscesses to subtle hoof issues which can cause pain and a decrease in overall performance. </p>
        <p>A lameness investigation includes a thorough examination of both the level of lameness and the legs affected. Palpation of leg, hoof testers, and flexion tests are used initially, but if there is no obvious cause, then nerve blocks may be administered to localise the problem and further investigations using our state-of-the-art VetRay, high-end digital radiology, or ultrasound methods may be necessary. 
</p>
          <p>Some horses may require referral for specialised tests such as scintigraphy (bone-scanning) or MRI and we will advise you if these are required. Contact us at 541-636-1191 to schedule a lameness investigation appointment today.
</p>
</div>
      
                    
      <iframe 
        height="100%"

        
        

        src="https://www.youtube.com/embed/M98VPRpRBDw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen=""
      ></iframe>
      
      
      
   

 
    </div>
</animated.div>
    
  );
}

export default Lameness;

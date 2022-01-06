import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSpring, animated,config } from 'react-spring'

function InternalMedicine() {
  const props1 = useSpring({   to: {x:0, opacity: 1 },
    from: {x:-500, opacity: 0 },
     config: config.molasses,})
     const props2 = useSpring({   to: {x:0, opacity: 1 },
      from: {x:-10, opacity: 0 },
       config: config.molasses,})
  return (
    <animated.div style={props1}>
    <div class="article d-none d-xl-block" >
    <h1 >Internal Medicine:</h1>
      <Row >
      
      <Col>
      
      <p> Cases that might require extra internal medicine services include, but are not limited to, weight loss, respiratory issues, colic, ulcers, anaemia, liver problems, and skin and eye issues. 

</p>
        <p>Common internal medicine techniques include blood analysis, skin scrapes, faecal analysis, endoscopy, radiography, and biopsy. All techniques are employed after a thorough clinical examination and discussions with the owner. 


</p>
          <p>At Massie Mobile Veterinary Services, we have state-of-the-art technology including a portable Digital Vet-Ray, and we use a range of specialist external laboratories for hormonal assays, bacterial culture and sensitivity evaluation and histopathology.


</p>
<p>You can expect test results to be shared in a timely manner via phone, text, or email, and you can feel free to contact us with any questions about your results by calling or texting 541-636-1191.
</p>

</Col>
      
 
      
      </Row>
 
      
    </div>
    <div class="article d-xl-none" >
     
    <h1 >Internal Medicine:</h1>

      
      <p> Cases that might require extra internal medicine services include, but are not limited to, weight loss, respiratory issues, colic, ulcers, anaemia, liver problems, and skin and eye issues. 

</p>
        <p>Common internal medicine techniques include blood analysis, skin scrapes, faecal analysis, endoscopy, radiography, and biopsy. All techniques are employed after a thorough clinical examination and discussions with the owner. 


</p>
          <p>At Massie Mobile Veterinary Services, we have state-of-the-art technology including a portable Digital Vet-Ray, and we use a range of specialist external laboratories for hormonal assays, bacterial culture and sensitivity evaluation and histopathology.


</p>
<p>You can expect test results to be shared in a timely manner via phone, text, or email, and you can feel free to contact us with any questions about your results by calling or texting 541-636-1191.
</p>
      
                    
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

export default InternalMedicine;

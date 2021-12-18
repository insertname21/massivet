import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSpring, animated,config } from 'react-spring'

function PrePurchaseExams() {
  const props1 = useSpring({   to: {x:0, opacity: 1 },
    from: {x:-500, opacity: 0 },
     config: config.molasses,})
     const props2 = useSpring({   to: {x:0, opacity: 1 },
      from: {x:-10, opacity: 0 },
       config: config.molasses,})
  return (
    <animated.div style={props1}>
    <div class="article d-none d-xl-block" >
    <h1> Pre-Purchase Exams</h1>
      <Row >
      
      <Col>
      
      <p> Dr. Massie regularly performs pre-purchase exams for buyers who are looking for a mount that meets their recreational or performance goals. </p>
        <p>A pre-purchase examination surveys the horse’s performance and health status prior to purchase so that buyers can make an informed decision on whether or not to proceed. It provides an assessment of any foreseeable problems, but does not guarantee that a horse will remain clinically sound during the remainder of its life. All examinations will be summarised in a written report for the client. 

 
</p>
          <p>The evaluation takes up to two hours and offers a top-down physical and manual examination that includes checking the horse’s eyes, teeth, heart, lungs, and legs. We will perform flexion tests after analyzing the horse’s movement during both on-the-ground and ridden exercises. During the recovery phase, when the horse might experience stiffness, we will assess if there are any problems and finish up with taking blood samples, if necessary, to test for the presence of pain-killers or sedatives. Radiographs are also offered for the buyer to weigh soundness concerns.


</p>
<p>To schedule a pre-purchase exam, please text or call us at 541-636-1191.


</p>

</Col>
      
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
    <h1> Pre-Purchase Exams</h1>

      
      <p> Dr. Massie regularly performs pre-purchase exams for buyers who are looking for a mount that meets their recreational or performance goals. </p>
        <p>A pre-purchase examination surveys the horse’s performance and health status prior to purchase so that buyers can make an informed decision on whether or not to proceed. It provides an assessment of any foreseeable problems, but does not guarantee that a horse will remain clinically sound during the remainder of its life. All examinations will be summarised in a written report for the client. 

 
</p>
          <p>The evaluation takes up to two hours and offers a top-down physical and manual examination that includes checking the horse’s eyes, teeth, heart, lungs, and legs. We will perform flexion tests after analyzing the horse’s movement during both on-the-ground and ridden exercises. During the recovery phase, when the horse might experience stiffness, we will assess if there are any problems and finish up with taking blood samples, if necessary, to test for the presence of pain-killers or sedatives. Radiographs are also offered for the buyer to weigh soundness concerns.


</p>
<p>To schedule a pre-purchase exam, please text or call us at 541-636-1191.


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

export default PrePurchaseExams;

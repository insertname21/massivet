import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSpring, animated,config } from 'react-spring'

function NaturalDentistry() {
  const props1 = useSpring({   to: {x:0, opacity: 1 },
    from: {x:-500, opacity: 0 },
     config: config.molasses,})
     const props2 = useSpring({   to: {x:0, opacity: 1 },
      from: {x:-10, opacity: 0 },
       config: config.molasses,})
  return (
    <animated.div style={props1}>
    <div class="article d-none d-xl-block" >
    <h1 >Natural Dentistry</h1>
      <Row >
      
      <Col>
      
      <p> Routine dental examinations are an essential part of your horse’s health care, but are unfortunately often overlooked. However, a horse’s teeth are one of the best indicators of early disease and by undertaking regular examinations, severe, painful dental-related problems can be minimised or prevented.

</p>
        <p>We recommend that all horses undergo a dental examination at least once a year. Some horses, such as those expected to perform at a high level and those with specific dental abnormalities, might benefit from more frequent examinations, especially since many will tolerate dental abnormalities and not show symptoms. 


</p>
          <p>Please note that dentistry is also included in our Equine Wellness Plan, which offers a host of additional benefits at a low monthly cost of $49.50. To enroll in our equine wellness plan, please call or text us at 541-636-1191.


</p>
<p>At Massie Mobile Veterinary Services, we’re proud to administer completely natural dentistry techniques, without the use of harmful power tools. Our dental care is completed through a thorough oral and dental examination, where an assessment of teeth and soft tissue is carried out with Dr. Massie using his hands to feel every tooth individually. Sharp points and dental arcades are controlled using hand rasps, and more serious dental abnormalities may require the use of a flashlight, speculum or dental endoscope. 
</p>
<p>We are trained in administering sedatives, local anesthetic, and pain killers, allowing for safer and more comfortable treatment, however in natural dentistry sedatives are rarely needed.

</p>
<p>Owners can expect to receive a full dental chart upon completion, which will record all findings and work performed. To schedule your horse’s dental appointment, please call or text us at 541-636-1191.


</p>
</Col>
      
 
      
      </Row>
 
      
    </div>
    <div class="article d-xl-none" >
     
    <h1 >Natural Dentistry</h1>

      <p> Routine dental examinations are an essential part of your horse’s health care, but are unfortunately often overlooked. However, a horse’s teeth are one of the best indicators of early disease and by undertaking regular examinations, severe, painful dental-related problems can be minimised or prevented.

</p>
        <p>We recommend that all horses undergo a dental examination at least once a year. Some horses, such as those expected to perform at a high level and those with specific dental abnormalities, might benefit from more frequent examinations, especially since many will tolerate dental abnormalities and not show symptoms. 


</p>
          <p>Please note that dentistry is also included in our Equine Wellness Plan, which offers a host of additional benefits at a low monthly cost of $49.50. To enroll in our equine wellness plan, please call or text us at 541-636-1191.


</p>
<p>At Massie Mobile Veterinary Services, we’re proud to administer completely natural dentistry techniques, without the use of harmful power tools. Our dental care is completed through a thorough oral and dental examination, where an assessment of teeth and soft tissue is carried out with Dr. Massie using his hands to feel every tooth individually. Sharp points and dental arcades are controlled using hand rasps, and more serious dental abnormalities may require the use of a flashlight, speculum or dental endoscope. 
</p>
<p>We are trained in administering sedatives, local anesthetic, and pain killers, allowing for safer and more comfortable treatment, however in natural dentistry sedatives are rarely needed.

</p>
<p>Owners can expect to receive a full dental chart upon completion, which will record all findings and work performed. To schedule your horse’s dental appointment, please call or text us at 541-636-1191.


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

export default NaturalDentistry;

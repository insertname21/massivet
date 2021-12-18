import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSpring, animated,config } from 'react-spring'

function WellnessExams() {
  const props1 = useSpring({   to: {x:0, opacity: 1 },
    from: {x:-500, opacity: 0 },
     config: config.molasses,})
     const props2 = useSpring({   to: {x:0, opacity: 1 },
      from: {x:-10, opacity: 0 },
       config: config.molasses,})
  return (
    <animated.div style={props1}>
    <div class="article d-none d-xl-block" >
    <h1 >Wellness Exams</h1>
      <Row >
      
      <Col>
      
      <p>  Wellness exams are one of the most important aspects of ensuring preventative care. For many, that requires yearly, or even quarterly examinations. That’s why we’ve made it our priority to offer affordable options for all of our clientele.</p>
        <p>Our most affordable option would be enrolling your horse in our Equine Wellness Plan, our smart and affordable equine wellness package designed to support your horse’s health through high quality, preventative care at just $49.50 a month. 

 
</p>
          <p>It includes:
          <ul>
  <li>The farm call</li>
  <li>An annual wellness exam
</li>
  <li>Dental Float
</li>
<li>5-Way, West Nile, Potomac Horse Fever, and Rabies Vaccines
</li>
<li>Fecal Tests & Worming Protocol Analysis

</li>
<li>Bodywork and skeletomuscular adjustments during annual exams

</li>
<li>And 10% off all labs, diagnostics, and future bodywork, as needed

</li>
</ul> 

</p>
<p><mark><small>These discounts are only approved for those enrolled in our wellness program, so call us at 541-636-1191 to enroll today and take advantage of these benefits for the upcoming new year.</small></mark></p>


<p>During a wellness examination, we’ll assess your horse’s total wellbeing, including their soundness, dental health, structural and muscular tone, hoof balance and trim angles, vaccination records, and parasite loads using the University of Davis minimum standards of horse care.


</p>
<p>We also offer services such as nutritional analysis, digital imaging, equine sports medicine and bodywork, natural dentistry, thermal imaging, ultrasound, microchipping, and joint injections for an extra cost. 



</p>
<p>Our wellness exams are designed to give you peace of mind. Whether your horse has a clean bill of health or needs additional evaluation, you’ll be able to proceed with confidence under our guidance. 




</p>
<p>To schedule your horse’s wellness exam or to enroll in our wellness program, click here or call or text  541-636-1191.
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
     
    <h1 >Wellness Exams</h1>

      
      <p>  Wellness exams are one of the most important aspects of ensuring preventative care. For many, that requires yearly, or even quarterly examinations. That’s why we’ve made it our priority to offer affordable options for all of our clientele.</p>
        <p>Our most affordable option would be enrolling your horse in our Equine Wellness Plan, our smart and affordable equine wellness package designed to support your horse’s health through high quality, preventative care at just $49.50 a month. 

 
</p>
          <p>It includes:
          <ul>
  <li>The farm call</li>
  <li>An annual wellness exam
</li>
  <li>Dental Float
</li>
<li>5-Way, West Nile, Potomac Horse Fever, and Rabies Vaccines
</li>
<li>Fecal Tests & Worming Protocol Analysis

</li>
<li>Bodywork and skeletomuscular adjustments during annual exams

</li>
<li>And 10% off all labs, diagnostics, and future bodywork, as needed

</li>
</ul> 

</p>
<p><mark><small>These discounts are only approved for those enrolled in our wellness program, so call us at 541-636-1191 to enroll today and take advantage of these benefits for the upcoming new year.</small></mark></p>


<p>During a wellness examination, we’ll assess your horse’s total wellbeing, including their soundness, dental health, structural and muscular tone, hoof balance and trim angles, vaccination records, and parasite loads using the University of Davis minimum standards of horse care.


</p>
<p>We also offer services such as nutritional analysis, digital imaging, equine sports medicine and bodywork, natural dentistry, thermal imaging, ultrasound, microchipping, and joint injections for an extra cost. 



</p>
<p>Our wellness exams are designed to give you peace of mind. Whether your horse has a clean bill of health or needs additional evaluation, you’ll be able to proceed with confidence under our guidance. 




</p>
<p>To schedule your horse’s wellness exam or to enroll in our wellness program, click here or call or text  541-636-1191.
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

export default WellnessExams;

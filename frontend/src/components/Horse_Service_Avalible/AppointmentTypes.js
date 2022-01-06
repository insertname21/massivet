import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSpring, animated,config } from 'react-spring'

function Appointments() {
  const props1 = useSpring({   to: {x:0, opacity: 1 },
    from: {x:-500, opacity: 0 },
     config: config.molasses,})
     const props2 = useSpring({   to: {x:0, opacity: 1 },
      from: {x:-10, opacity: 0 },
       config: config.molasses,})
  return (
    <animated.div style={props1}>
    <div class="article d-none d-xl-block" >
    <h1 >Appointment Types</h1>
      <Row >
      
      <Col>
      
      <p> Routine visits and wellness exams are a large part of providing preventative care for your animal(s). Dr. Massive offers a variety of examination options in and out of the clinic to fit your and your animals’ lifestyle needs.  </p>
        <p>We want to make sure that you and your animal know what to expect from us during the appointment and what we expect from you. Please see the list below or contact us for more information at 541-636-1191.
 
</p>
          <p>Before your appointment, please make sure to review our mandatory client safety guidelines here and refer to this pamphlet regarding what to bring to your appointment. Thank you in advance for helping us create the safest experience possible for you and your animal(s). 

</p>
<p><h3>In-Clinic Examinations:</h3>All in-clinic examinations are by appointment only and take place during designated times at our beautiful family ranch in Yreka, California, or at your property in the Rogue Valley and throughout Siskiyou County. No matter what the pre-approved appointment is for, you can expect the best quality of care as soon as you enter our gates or we step out of the truck. To book an appointment online, please click here or call or text us at 541-636-1191. 

</p>
<p><h3>Household and Farm Visits:</h3>We know that some appointments are especially sensitive, that some animals fare better in environments that they are used to, and that it’s hard for some folks to leave the house. That’s why we can travel to you to make sure that you and your animal(s) receive the best quality care. 

</p>
<p>Whether we’re making the visit to your front door, the barn, or the pasture, and whether the visit itself is painful or joyful, you can expect the best in bed-side (or barn-side) manner from Dr. Massie. To have us come to your residence, please click here to book an appointment or call or text us at 541-636-1191.</p>

<p><h3>Regional Zone Visits:</h3>We serve the people of Southern Oregon and Northern California. To make travelling easier on folks with busy schedules or other barriers, we routinely hold clinics and workshops throughout the region. Click on this map to see which days we’ll be near you or call or text us at 541-636-1191 to host us for a personalized clinic at your barn or local establishment. 


</p>
<p>Please note that this is NOT the best option for emergency situations. If you believe your animal is eligible as an emergency client, please call or text this number: 541-636-1191.

</p>

<p><h3>Emergency Visits:</h3>Emergencies will always take priority over any non-emergency calls and we will always do our best to respond quickly to either provide our services or direct you to the next-best option. 



</p>
<p>Please note that we only take calls for large animal emergencies if they are established clients. 
If you’re unsure about whether or not your animal would be considered an emergency client, we’ve made a quick guide to help you decide. But when in doubt, please make sure to call or text us at 541-636-1191. We are more than happy to discuss your animal’s condition over the phone and assist you in deciding whether or not they require emergency services. We can also direct you to external resources, if needed. 
 
Please note that a standard visit fee is applied to emergency visits during normal office hours and a surcharge is applied to all visits outside of normal hours.

</p>

</Col>
      
                
      
      </Row>
 
      
    </div>
    <div class="article d-xl-none" >
    <h1 >Appointment Types</h1>
    
      
      <p> Routine visits and wellness exams are a large part of providing preventative care for your animal(s). Dr. Massive offers a variety of examination options in and out of the clinic to fit your and your animals’ lifestyle needs.  </p>
        <p>We want to make sure that you and your animal know what to expect from us during the appointment and what we expect from you. Please see the list below or contact us for more information at 541-636-1191.
 
</p>
          <p>Before your appointment, please make sure to review our mandatory client safety guidelines here and refer to this pamphlet regarding what to bring to your appointment. Thank you in advance for helping us create the safest experience possible for you and your animal(s). 

</p>
<p><h3>In-Clinic Examinations:</h3>All in-clinic examinations are by appointment only and take place during designated times at our beautiful family ranch in Yreka, California, or at your property in the Rogue Valley and throughout Siskiyou County. No matter what the pre-approved appointment is for, you can expect the best quality of care as soon as you enter our gates or we step out of the truck. To book an appointment online, please click here or call or text us at 541-636-1191. 

</p>
<p><h3>Household and Farm Visits:</h3>We know that some appointments are especially sensitive, that some animals fare better in environments that they are used to, and that it’s hard for some folks to leave the house. That’s why we can travel to you to make sure that you and your animal(s) receive the best quality care. 

</p>
<p>Whether we’re making the visit to your front door, the barn, or the pasture, and whether the visit itself is painful or joyful, you can expect the best in bed-side (or barn-side) manner from Dr. Massie. To have us come to your residence, please click here to book an appointment or call or text us at 541-636-1191.</p>

<p><h3>Regional Zone Visits:</h3>We serve the people of Southern Oregon and Northern California. To make travelling easier on folks with busy schedules or other barriers, we routinely hold clinics and workshops throughout the region. Click on this map to see which days we’ll be near you or call or text us at 541-636-1191 to host us for a personalized clinic at your barn or local establishment. 


</p>
<p>Please note that this is NOT the best option for emergency situations. If you believe your animal is eligible as an emergency client, please call or text this number: 541-636-1191.

</p>

<p><h3>Emergency Visits:</h3>Emergencies will always take priority over any non-emergency calls and we will always do our best to respond quickly to either provide our services or direct you to the next-best option. 



</p>
<p>Please note that we only take calls for large animal emergencies if they are established clients. 
If you’re unsure about whether or not your animal would be considered an emergency client, we’ve made a quick guide to help you decide. But when in doubt, please make sure to call or text us at 541-636-1191. We are more than happy to discuss your animal’s condition over the phone and assist you in deciding whether or not they require emergency services. We can also direct you to external resources, if needed. 
 
Please note that a standard visit fee is applied to emergency visits during normal office hours and a surcharge is applied to all visits outside of normal hours.

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

export default Appointments;

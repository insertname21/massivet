import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSpring, animated,config } from 'react-spring'

function BehaviorConsultations() {
  const props1 = useSpring({   to: {x:0, opacity: 1 },
    from: {x:-500, opacity: 0 },
     config: config.molasses,})
     const props2 = useSpring({   to: {x:0, opacity: 1 },
      from: {x:-10, opacity: 0 },
       config: config.molasses,})
  return (
    <animated.div style={props1}>
    <div class="article d-none d-xl-block" >
    <h1> Behavior Consultations:</h1>
      <Row >
      
      <Col>
      
      <p> As we know, the cause of irregular behavior is often misdiagnosed when its origin is actually pain. We offer behavioral consultations to rule out whether it’s ‘pain or the brain’!
</p>
        <p>Similar to a pre-purchase exam, we will thoroughly examine your equine partner to detect pain. We will then evaluate the issue from a behavioral or training perspective to isolate the origin of the behavior and address it in a thorough analysis. We can suggest veterinary or training modalities to remedy the issue at hand and make recommendations to trainers in the area that are best suited to help you.
 

 
</p>
          <p>If the cause of the behavioral issue is pain-related, we would also offer our bodywork services, which can result in transformative differences in behavior for your horse. 




</p>
<p>To schedule a behavior consultation or to ask about our bodywork services, please call or text 541-636-1191.

</p>


</Col>
      

      
      </Row>
 
      
    </div>
    <div class="article d-xl-none" >
    <h1> Equine First Aid Clinics</h1>

      
    <p> Equine first-aid clinics are workshops designed to empower you with the knowledge to assess your horse’s wellbeing and apply temporary first aid while you wait for veterinary assistance. Our two-part series takes place over two days, covers everything from wounds to splints, and best of all can be held in your own barn or at a local establishment. </p>
        <p>Both Dr. Massie and Andria Watson-Massie will take turns leading the clinic in small groups. You can expect to learn about how to check your horse’s vitals and all about colic, ulcers, and wounds during the first day, while lameness, splinting, breaks, backcountry first aid, eye issues, and extreme cases will be covered during the second day.
 

 
</p>
          <p>Clinics are a great way to make sure that your whole operation is educated, which ensures that there are more people with the know-how to provide localized support for your animals. This clinic is hands-on and modular-based and lunch is always provided. 



</p>
<p>Check out what a beloved client and former clinic attendee had to say about our workshop: 
</p>
<p><i>“The clinic was designed to empower those people and teach them what to have and when you need to call the vet.  I want to thank the people who came to learn how we can help our horses, ourselves, our friends and take a load of work off the vets with unnecessary calls so they can address the issues to save lives of horses who really need it. Massie Mobile Veterinary Services care about you and your animals and the cost of this was designed to be affordable for all.”</i></p>
<p>– Sharon Ann Meulners-Vandyke</p>
<p>In the future, we plan to expand our workshop clinics to involve a pain-related series. As we know, the cause of irregular behavior is often misdiagnosed when its origin is actually pain. In the meantime, The University of Guelph has a myriad of online resources which can help supplement your knowledge about pain and first aid. 
</p>
<p>To invite us to your barn or establishment for a personalized clinic, please text or call us at 541-636-1191.

</p>


                    

      
      
      
   

 
    </div>
</animated.div>
    
  );
}

export default BehaviorConsultations;

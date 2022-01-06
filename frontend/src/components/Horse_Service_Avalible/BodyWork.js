import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSpring, animated,config } from 'react-spring'

function BodyWork() {
  const props1 = useSpring({   to: {x:0, opacity: 1 },
    from: {x:-500, opacity: 0 },
     config: config.molasses,})
     const props2 = useSpring({   to: {x:0, opacity: 1 },
      from: {x:-10, opacity: 0 },
       config: config.molasses,})
  return (
    <animated.div style={props1}>
    <div class="article d-none d-xl-block" >
    <h1 >Body Work:</h1>
      <Row >
      
      <Col>
      
      <p>Bodywork is used for horses that are sore, tight or stiff from either normal workload or underlying causes and who may be exhibiting discomfort or irritability. Our bodywork practices include non-invasive massage therapy, trigger point therapy, spinal manipulation, and musculoskeletal, soft tissue, and cranial sacral adjustments. 
</p>
        <p>Horses who are especially active, who have prior injuries, or who are experiencing stress may particularly benefit from bodywork. At Massie Mobile Veterinary Services, Andria Watson-Massie is our core bodywork specialist. 


</p>
          <p>Regular body work appointments are proven to:
          <ul>
  <li>Reduce muscle stiffness and spasms by dilating blood vessels and increasing blood flow to affected areas
</li>
  <li>Improve the elasticity and flexibility of muscles by breaking down scar tissue

</li>
  <li>Decrease pain through the release of endorphins

</li>
<li>Relax the horse by creating a sedating effect on the nervous system

</li>
<li>Reduce the risk of injury.


</li>

</ul> 
</p>
<p>Here’s what you can expect during your horse’s bodywork appointment:
</p>
<ol>

<li>Firstly, we will have a discussion with you to determine your horse's history, if they’ve had any injuries, and what your goals are for the work we do together.

</li>
<li>We will then conduct a visual exam of your horse’s conformation including muscle symmetry, limb and pelvis balance, and topline condition.


</li>
<li>Afterwards, we will watch you lightly exercise your horse so that we can analyze body movement. We will be looking for straightness, dragging of the feet, and any signs of lameness or discomfort. 


</li>
<li>The bodywork adjustment and massage comes next and will last for up to an hour, with additional hours being priced accordingly. 



</li>
</ol> 
<p>After our session, you can expect to receive a thorough report of findings and a recommendation for further treatment. Some horses will need more massage therapy than others depending on their condition. Remember that equine bodywork is like peeling back an onion; if the horse has pain or restriction issues, it may take more than one session to relieve them fully. 
</p>
<p>Unless otherwise instructed, please allow your horse some relaxation and recovery time after their bodywork session. Movement increases the circulation to eliminate lactic acid that the massage freed up during our session. 
</p>
<p>Please note that all bodywork is 10% off when you sign up for our Equine Wellness Plan, which offers a host of additional benefits at a low monthly cost of $49.50. To enroll in our equine wellness plan or to schedule a bodywork session, please call or text us at 541-636-1191. </p>

</Col>
      
 
      
      </Row>
 
      
    </div>
    <div class="article d-xl-none" >
     
    <h1 >Podiatry:</h1>

      <p>Bodywork is used for horses that are sore, tight or stiff from either normal workload or underlying causes and who may be exhibiting discomfort or irritability. Our bodywork practices include non-invasive massage therapy, trigger point therapy, spinal manipulation, and musculoskeletal, soft tissue, and cranial sacral adjustments. 
</p>
        <p>Horses who are especially active, who have prior injuries, or who are experiencing stress may particularly benefit from bodywork. At Massie Mobile Veterinary Services, Andria Watson-Massie is our core bodywork specialist. 


</p>
          <p>Regular body work appointments are proven to:
          <ul>
  <li>Reduce muscle stiffness and spasms by dilating blood vessels and increasing blood flow to affected areas
</li>
  <li>Improve the elasticity and flexibility of muscles by breaking down scar tissue

</li>
  <li>Decrease pain through the release of endorphins

</li>
<li>Relax the horse by creating a sedating effect on the nervous system

</li>
<li>Reduce the risk of injury.


</li>

</ul> 
</p>
<p>Here’s what you can expect during your horse’s bodywork appointment:
</p>
<ol>

<li>Firstly, we will have a discussion with you to determine your horse's history, if they’ve had any injuries, and what your goals are for the work we do together.

</li>
<li>We will then conduct a visual exam of your horse’s conformation including muscle symmetry, limb and pelvis balance, and topline condition.


</li>
<li>Afterwards, we will watch you lightly exercise your horse so that we can analyze body movement. We will be looking for straightness, dragging of the feet, and any signs of lameness or discomfort. 


</li>
<li>The bodywork adjustment and massage comes next and will last for up to an hour, with additional hours being priced accordingly. 



</li>
</ol> 
<p>After our session, you can expect to receive a thorough report of findings and a recommendation for further treatment. Some horses will need more massage therapy than others depending on their condition. Remember that equine bodywork is like peeling back an onion; if the horse has pain or restriction issues, it may take more than one session to relieve them fully. 
</p>
<p>Unless otherwise instructed, please allow your horse some relaxation and recovery time after their bodywork session. Movement increases the circulation to eliminate lactic acid that the massage freed up during our session. 
</p>
<p>Please note that all bodywork is 10% off when you sign up for our Equine Wellness Plan, which offers a host of additional benefits at a low monthly cost of $49.50. To enroll in our equine wellness plan or to schedule a bodywork session, please call or text us at 541-636-1191. </p>
                    
     
      
      
      
   

 
    </div>
</animated.div>
    
  );
}

export default BodyWork;

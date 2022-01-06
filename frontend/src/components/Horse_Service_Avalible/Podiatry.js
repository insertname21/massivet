import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSpring, animated,config } from 'react-spring'

function Podiatry() {
  const props1 = useSpring({   to: {x:0, opacity: 1 },
    from: {x:-500, opacity: 0 },
     config: config.molasses,})
     const props2 = useSpring({   to: {x:0, opacity: 1 },
      from: {x:-10, opacity: 0 },
       config: config.molasses,})
  return (
    <animated.div style={props1}>
    <div class="article d-none d-xl-block" >
    <h1 >Podiatry:</h1>
      <Row >
      
      <Col>
      
      <p> We take the phrase “no horse, no hoof” very seriously and work with therapeutic farriers to develop personalized hoof healthcare plans for your horse(s). Using state-of-the-art technology, we work hard to ensure that the maxim “do no harm” is followed.
</p>
        <p>Podiatry is somewhat different to traditional farriery, because it offers owners tools and management practices that they wouldn’t receive otherwise.We work closely with owners to achieve the healthiest hooves possible for their horse and are dedicated to educating owners so that they can understand how different factors, like riding and biomechanics, influence the health of the hoof.

</p>
          <p>Our hoof care system is based on a model which takes a complex structure (the equine foot) and breaks it down into a number of key parts that enables us to assess the health of your horses feet and recommend ways of improving that health. Using diagnostics and thermal imaging, we will work with you to develop a hoof care routine which works for your schedule and capabilities and will improve the overall longevity of your horse’s hooves. 

</p>
<p>We can also work with other equines such as donkeys and mules. </p>
<p>To schedule a podiatry appointment for your horse, call or text 541-636-1191 today!
</p>
</Col>
      
 
      
      </Row>
 
      
    </div>
    <div class="article d-xl-none" >
     
    <h1 >Podiatry:</h1>

      <p> We take the phrase “no horse, no hoof” very seriously and work with therapeutic farriers to develop personalized hoof healthcare plans for your horse(s). Using state-of-the-art technology, we work hard to ensure that the maxim “do no harm” is followed.
</p>
        <p>Podiatry is somewhat different to traditional farriery, because it offers owners tools and management practices that they wouldn’t receive otherwise.We work closely with owners to achieve the healthiest hooves possible for their horse and are dedicated to educating owners so that they can understand how different factors, like riding and biomechanics, influence the health of the hoof.

</p>
          <p>Our hoof care system is based on a model which takes a complex structure (the equine foot) and breaks it down into a number of key parts that enables us to assess the health of your horses feet and recommend ways of improving that health. Using diagnostics and thermal imaging, we will work with you to develop a hoof care routine which works for your schedule and capabilities and will improve the overall longevity of your horse’s hooves. 

</p>
<p>We can also work with other equines such as donkeys and mules. </p>
<p>To schedule a podiatry appointment for your horse, call or text 541-636-1191 today!
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

export default Podiatry;

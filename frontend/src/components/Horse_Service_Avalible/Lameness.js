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
      
      <Row >
      
      <Col><h1 >Lameness Investigation</h1>
      <p>There are numerous causes of lameness and poor performance in horses, 
        some of which can be diagnosed relatively easily and some of which cannot; in more complicated cases, 
        detailed clinical evaluations and the use of advanced diagnostic techniques may be required.</p>
        <p>Horses referred to Bell Equine for lameness and poor performance related to musculoskeletal pain will undergo an evaluation 
          by one of our specialists. As well as a trot up areas to allow assessment in hand, we also have an all-weather surface to allow 
          assessment during lunging and ridden exercise. We have experienced nurses who facilitate nerve and joint blocking, with the aim 
          that this is stress-free for horses and owners alike. Our clinic is fully equipped with up-to date and advanced diagnostic imaging 
          equipment, including radiography, ultrasonography, nuclear scintigraphy, CT and MRI.</p>
          <p>It is our aim to work closely with farriers, physiotherapists and osteopaths as appropriate so that,
             through a team approach, we can maximise your horse's chance to return to successful athletic function.</p>
             <p>Many of our ambulatory vets also have an interest in lameness diagnosis and we
                have the capability to perform lameness evaluation, radiography and ultrasonography on a mobile basis where transport of the horse
                 is not possible or advisable.</p>
                 <p>For further information on lameness or poor perfomance investigations, see under 'Useful Info' the section on lameness.</p></Col>
      
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
      <row>
    <h3 >Aditional Info</h3>
    </row>
      
    </div>
    <div class="article d-xl-none" >
     
      <div><h1 >Lameness Investigation</h1>
      <p>There are numerous causes of lameness and poor performance in horses, 
        some of which can be diagnosed relatively easily and some of which cannot; in more complicated cases, 
        detailed clinical evaluations and the use of advanced diagnostic techniques may be required.</p>
        <p>Horses referred to Bell Equine for lameness and poor performance related to musculoskeletal pain will undergo an evaluation 
          by one of our specialists. As well as a trot up areas to allow assessment in hand, we also have an all-weather surface to allow 
          assessment during lunging and ridden exercise. We have experienced nurses who facilitate nerve and joint blocking, with the aim 
          that this is stress-free for horses and owners alike. Our clinic is fully equipped with up-to date and advanced diagnostic imaging 
          equipment, including radiography, ultrasonography, nuclear scintigraphy, CT and MRI.</p>
          <p>It is our aim to work closely with farriers, physiotherapists and osteopaths as appropriate so that,
             through a team approach, we can maximise your horse's chance to return to successful athletic function.</p>
             <p>Many of our ambulatory vets also have an interest in lameness diagnosis and we
                have the capability to perform lameness evaluation, radiography and ultrasonography on a mobile basis where transport of the horse
                 is not possible or advisable.</p>
                 <p>For further information on lameness or poor perfomance investigations, see under 'Useful Info' the section on lameness.</p></div>
      
                    
      <iframe 
        height="100%"

        
        

        src="https://www.youtube.com/embed/M98VPRpRBDw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen=""
      ></iframe>
      
      
      
   
      <row>
    <h3>Aditional Info</h3>
    </row>
 
    </div>
</animated.div>
    
  );
}

export default Lameness;

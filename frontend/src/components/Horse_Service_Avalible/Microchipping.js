import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSpring, animated,config } from 'react-spring'

function Microchipping() {
  const props1 = useSpring({   to: {x:0, opacity: 1 },
    from: {x:-500, opacity: 0 },
     config: config.molasses,})
     const props2 = useSpring({   to: {x:0, opacity: 1 },
      from: {x:-10, opacity: 0 },
       config: config.molasses,})
  return (
    <animated.div style={props1}>
    <div class="article d-none d-xl-block" >
    <h1 >Microchipping:</h1>
      <Row >
      
      <Col>


<p> Thousands of pets and livestock go missing each year — that includes horses. Microchips are cost-effective, electronic devices the size of a grain of rice that help combat this problem and can improve the health and welfare of your horse. In Southern Oregon and Northern California, they can be especially helpful during fire season when your horse gets loose.

</p>
  <p>Microchips are easily implanted with a needle after local anesthesia in the horse's nuchal ligament (just below the base of the mane) halfway between the horse's poll and withers. It's like a VIN (vehicle identification number) for your horse that would be extremely difficult to remove without veterinarian support and lasts up to 25 years.


</p>
    <p>Some of the benefits of microchipping include:

    <ul>
<li>Preventing  theft and aiding in recovery during disasters. </li>

<li>Providing a mobile link to online health certificates and medical records.

</li>
<li>Providing  accuracy at competitions and preventing fraud. Many horse registries and show organizers have started requiring that participating horses be microchipped to ensure that the horses' ID, age and past participation are accurate.

</li>
<li>They provide traceability in the event of a disease outbreak.


</li>
<li>They aid in identification for sales documentation and transfers.


</li>

</ul> 

</p>
<p>According to the American Association of Equine Practitioners (AAEP), starting in January 2017, the Jockey Club requires all Thoroughbred foals be microchipped. And beginning December 1, 2017, all horses competing in the U.S. Equestrian Federation-licensed and/or U.S. Hunter Jumper Association-sanctioned competitions with hunter-jumper seat equitation classes must be microchipped.
</p>
<p>To schedule your horse’s microchipping, please call or text us at 541-636-1191.

</p>
</Col>
      
 
      
      </Row>
 
      
    </div>
    <div class="article d-xl-none" >
     
    <h1 >Microchipping:</h1>

      <p> Thousands of pets and livestock go missing each year — that includes horses. Microchips are cost-effective, electronic devices the size of a grain of rice that help combat this problem and can improve the health and welfare of your horse. In Southern Oregon and Northern California, they can be especially helpful during fire season when your horse gets loose.

</p>
        <p>Microchips are easily implanted with a needle after local anesthesia in the horse's nuchal ligament (just below the base of the mane) halfway between the horse's poll and withers. It's like a VIN (vehicle identification number) for your horse that would be extremely difficult to remove without veterinarian support and lasts up to 25 years.


</p>
          <p>Some of the benefits of microchipping include:
 
          <ul>
  <li>Preventing  theft and aiding in recovery during disasters. </li>

  <li>Providing a mobile link to online health certificates and medical records.

</li>
  <li>Providing  accuracy at competitions and preventing fraud. Many horse registries and show organizers have started requiring that participating horses be microchipped to ensure that the horses' ID, age and past participation are accurate.

</li>
<li>They provide traceability in the event of a disease outbreak.


</li>
<li>They aid in identification for sales documentation and transfers.


</li>

</ul> 

</p>
<p>According to the American Association of Equine Practitioners (AAEP), starting in January 2017, the Jockey Club requires all Thoroughbred foals be microchipped. And beginning December 1, 2017, all horses competing in the U.S. Equestrian Federation-licensed and/or U.S. Hunter Jumper Association-sanctioned competitions with hunter-jumper seat equitation classes must be microchipped.
</p>
<p>To schedule your horse’s microchipping, please call or text us at 541-636-1191.

</p>
      
                    
     
      
   

 
    </div>
</animated.div>
    
  );
}

export default Microchipping;

import React from "react";
import "../index.css";
import { useSpring, animated, config } from "react-spring";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Staff() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: config.molasses,
  });
  return (
    <animated.div style={props}>
      <div class="article">
        <h1>Our Staff:</h1>
        <Row>
<div class="col-md-4">
  
  <img src="/images/File_000.jpg" class="img-fluid" alt="Responsive image" ></img>
</div>
<div class="col-md-8">
  <h2>DR. MASSIE</h2>
  <p>Dr. Massie grew up in the Pacific Northwest and dreamt of becoming a large animal veterinarian as a child. 
    After completing his bachelors degree at Washigton State University,  Dr Massie worked as a mechanic, alligator wrestler and zookeeper, 
    focusing mostly on reptiles. He then joined the Army and worked as a veterinary technician in Italy and Germany in small animal clinics. 
    Following his active duty commitment he obtained his DVM from Ross University in St. Kitts. While in veterinary school he conducted research on small 
    ruminant reproduction, leptospirosis in donkeys and sedation in alligators. He lives in Medford, Oregon and runs Massie Mobile Veterinary Services with his wife,
     Andria. His career goal is to combine the true art of horsemanship with the science of veterinary medicine, and specialize in equine and bovine podiatry, dentistry
      and reproduction.</p>
  
</div>
</Row>
<Row>

<div class="col-md-8">
  <h2>Andria</h2>
  <p>Andria is a native Southern Oregonian and has been part of the equine industry for over 30 years.
     She learned colt starting techniques from her grandfathers as a little girl and went on to start colts
      for her college agriculture program. Over the years she became a student of classical horsemanship and studied
       training programs in reining, cow horse, dressage and vaquero disciplines. She's coached 4-H groups and pony club
        and served on the Ohio REINS program. At Massie Mobile Veterinary Services she provides integrated equine therapies
         for your equine companion and/or athlete.</p>
  
</div>
<div class="col-md-4">
  
  <img src="/images/Andria Watson-Massie.jpg" class="img-fluid" alt="Responsive image" ></img>
</div>
</Row>
      </div>
    </animated.div>
  );
}

export default Staff;

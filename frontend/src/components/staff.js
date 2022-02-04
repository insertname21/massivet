import React from "react";
import "../index.css";
import { useSpring, animated, config } from "react-spring";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import InfoSection from '../components/InfoSection';
import {
  staff1,
  staff2,
  homeObjThree
} from '../components/InfoSection/Data';

function Staff() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: config.molasses,
  });
  return (
    <animated.div style={props}>
      <div class="article">
    <InfoSection {...staff1} />
      
      <InfoSection {...staff2} />
      </div>
    </animated.div>
    
  );
}

export default Staff;

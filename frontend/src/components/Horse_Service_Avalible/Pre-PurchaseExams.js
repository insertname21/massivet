import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSpring, animated,config } from 'react-spring'
import InfoSection from '../../components/InfoSection';
import {
  PrePurchase
} from '../../components/InfoSection/Data';

function PrePurchaseExams() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: config.molasses,
  });
  return (
    <animated.div style={props}>
     <div class="article">
    <InfoSection {...PrePurchase} />
      
      
      </div>
    </animated.div>
    
  );
}

export default PrePurchaseExams;

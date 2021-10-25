import React from "react";
import Horse from "./video/Horse.mp4";
import '../index.css';
import { useSpring, animated,config } from 'react-spring'
import { Nav } from "react-bootstrap";
import {Link} from 'react-router-dom'

function Features() {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, config: config.molasses,})
  return (
        <animated.div style={props}>
          <div >
            <section class="showcase">
              <video autoPlay loop muted>
                <source src="https://massivet.s3.us-east-2.amazonaws.com/Horse.mp4"  />
              </video>

              <div class="overlay"></div>
              <div class="text">
                <h3>A mobile vet you can trust</h3>
                <p>
                A Mobile Veterinary Service Treating Farm animals Like Family 
in Jackson County and Surrounding Areas
                </p>
                <Link to="/Products">Contact Us</Link>
              </div>
            </section>
          </div>
        </animated.div>

    
  );
}

export default Features;

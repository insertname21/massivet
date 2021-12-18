import React from "react";
import "../index.css";
import { useSpring, animated, config } from "react-spring";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Features() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: config.molasses,
  });
  return (
    <animated.div style={props}>
      <Container>
        <div id="main">
          <section class="showcase">
            <video autoPlay loop muted>
              <source src="https://massivet.s3.us-east-2.amazonaws.com/massie+vet+video.mp4" />
            </video>

            <div class="overlay"></div>
            <div class="text">
              <h3>A mobile vet</h3>
              <h3>you can trust</h3>
              <p>
              Serving Jackson, Josephine and Siskiyou Counties with companion animal, livestock and equine care
              </p>

              
              <Link to="/Contact">Contact Us</Link>
            </div>
          </section>
        </div>
      </Container>
    </animated.div>
  );
}

export default Features;

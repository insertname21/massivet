import React from "react";
import "../index.css";
import { useSpring, animated, config } from "react-spring";
import { Container, Nav,Carousel } from "react-bootstrap";
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
              <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=f5f5f5"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block h-100"
      
      
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=e5e5e5"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
          </section>
        </div>
      </Container>
      <Container>
      <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=f5f5f5"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=eee"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=e5e5e5"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Container>
    </animated.div>
  );
}

export default Features;

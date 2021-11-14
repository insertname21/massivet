import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "./images/MMVSLogoFooter.png";
import { LinkContainer } from "react-router-bootstrap";


function Footer() {
  
  window.onload = function() {
    const faders = document.querySelectorAll(".fade-in");
  const appearOptions = {
    threshold: .5,

  };

  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });
  };

  return (
    <div Class="footer fade-in">
      <Row>
        <div class="col">
          <img src={logo} width="200px" />
        </div>
        <div class="col">
          <h3>Contact:</h3>
          <p>541-636-1191</p>
          <p>info@massievet.com</p>
          <p>4940 Pioneer Rd</p>
          <p>Medford, OR 97501</p>
        </div>
        <div class="col">
          <h3>legal info:</h3>
          <p>press kit</p>
          <p>Terms & conditions</p>
          <p>copy right</p>
        </div>
        <div class="col">
          <h3>Follow us:</h3>

          <p>
            <a href="https://www.instagram.com/massievet/?hl=en">Instagram</a>
          </p>

          <p>
            <a href="https://www.facebook.com/massievet">Facebook</a>
          </p>
        </div>
      </Row>
      <Row>
        <div class="center">
          <p>© 2020 by Massie Mobile Veterinary Services, LLC.</p>
        </div>
      </Row>
    </div>
    
  );
  
}

export default Footer;

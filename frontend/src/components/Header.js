import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "./images/MMVS Logo graded.jpg";
import { LinkContainer } from "react-router-bootstrap";
import { Container } from "react-bootstrap";

function headers() {
  return (
    <header>
      <Navbar collapseOnSelect bg="light" expand="lg" fixed="top">
      <Container>
        <LinkContainer to="/">
          <Nav.Link>
            <img src={logo} height="50px" />
          </Nav.Link>
        </LinkContainer>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto my-2 my-lg-0">
            <LinkContainer to="/Equine_Services">
              <Nav.Link>Equine Services</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Farm_Services">
              <Nav.Link>Farm Animal Services</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/Small_Animal_Services">
              <Nav.Link>Small animal services</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/Contact">
              <Nav.Link href="#Avalible_Models">Contact us</Nav.Link>
            </LinkContainer>

            <Nav.Link href="https://massiemobilevetservices.securevetsource.com/site/view/202423_Home.pml">
              Pharmacy
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default headers;

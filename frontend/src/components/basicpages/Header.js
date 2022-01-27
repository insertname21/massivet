import React from "react";
import { Navbar, Nav, Button,NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Container } from "react-bootstrap";

function headers() {
  return (
    <header>
      <Navbar
        collapseOnSelect
        bg="light"
        expand="lg"
        fixed="top"
        style={{ padding: "5px" }}
      >
        <Container>
          <LinkContainer
            to="/"
            style={{ paddingtop: "0px", paddingbottom: "0px" }}
          >
            <Nav.Link>
              <img src=".\images\logos\MMVS Logo graded.png" height="80px" />
            </Nav.Link>
          </LinkContainer>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto my-2 my-lg-0">
              <LinkContainer to="/Staff">
                <Nav.Link>About US</Nav.Link>
              </LinkContainer>

              
              <NavDropdown title="Equine" id="nav-dropdown">
              <LinkContainer to="/Equine_Services"><NavDropdown.Item>Action</NavDropdown.Item></LinkContainer>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      
              <LinkContainer to="/Farm_Services">
                <Nav.Link>Livestock</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/Small_Animal_Services">
                <Nav.Link>Companion animal</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/Contact">
                <Nav.Link href="#Avalible_Models">Contact us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/new_client">
                <Nav.Link>New client</Nav.Link>
              </LinkContainer>

              <Nav.Link href="https://massiemobilevetservices.securevetsource.com/site/view/202423_Home.pml">
                Pharmacy
              </Nav.Link>
            </Nav>
            <LinkContainer to="/Contact">
              <Button variant="danger">emergencies</Button>
            </LinkContainer>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default headers;

import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import LogoGray from "../images/btg-logo-gray.svg";

function Navigation() {
  return (
    <Container>
      <Navbar
        collapseOnSelect
        expand="sm"
        bg="white"
        variant="light"
        className="px-0 mx-0"
      >
        <Navbar.Brand href="#home">
          <img
            src={LogoGray}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="BTG Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="#people">People</Nav.Link>
            <Nav.Link eventKey={2} href="#contact">
              Get in touch
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Navigation;
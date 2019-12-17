import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import LogoColor from "../images/btg-logo-white-red.svg";

function Navigation() {
  return (
    <div className="border-bottom">
      <Container>
        <Navbar
          collapseOnSelect
          expand="sm"
          bg="white"
          variant="light"
          className="px-0 mx-0 py-0 my-0"
        >
          <Navbar.Brand href="/" className="py-0 my-0">
            <img
              src={LogoColor}
              width="70"
              height="70"
              className="d-inline-block align-top"
              alt="BTG Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link href="/alumni">Alumni</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default Navigation;

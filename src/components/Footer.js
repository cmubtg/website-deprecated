import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import LogoGray from "../images/btg-logo-gray.svg";

const Footer = () => {
  return (
    <Container className="py-5 mt-5" id="contact">
      <Row>
        <Col>
          <Button
            variant="light"
            href="https://facebook.com/cmubtg"
            className="mr-1"
          >
            <FaFacebookF />
          </Button>
          <Button
            variant="light"
            href="https://instagram.com/cmubtg"
            className="mr-1"
          >
            <FaInstagram />
          </Button>
          <Button
            variant="light"
            href="https://github.com/cmubtg"
            className="mr-1"
          >
            <FaGithub />
          </Button>
          <Button
            variant="light"
            href="https://linkedin.com/company/cmubtg"
            className="mr-1"
          >
            <FaLinkedinIn />
          </Button>
          <p className="text-muted py-5">
            <small>
              Want to reach out? Send us a line at{" "}
              <a href="mailto:info@cmubtg.com">info@cmubtg.com</a>
            </small>
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <img src={LogoGray} alt="" width="50" className="" />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
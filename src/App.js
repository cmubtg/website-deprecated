import React from "react";
import "./App.css";

import { Helmet } from "react-helmet";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { FaInstagram, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

import ReactGA from "react-ga";

ReactGA.initialize("UA-104764221-10");
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <div className="">
      <Helmet>
        <title>Home Page | CMU BTG</title>
      </Helmet>

      <Container className="">
        <Row className="pt-5 mt-5">
          <Col>
            <h1 className="display-3 text-black font-weight-boldest">
              We build the cutting edge
            </h1>

            <h2 className="text-muted font-weight-bold">
              We are the Carnegie Mellon Business Technology Group
            </h2>
          </Col>
        </Row>

        <Form className="py-5 my-5">
          <Row>
            <Col md={10} xs={12}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" className="bg-light border-0" placeholder="> Enter email" />
              </Form.Group>
            </Col>
            <Col md={2} xs={12}>
              <Button variant="danger" type="Sign up" block>
                Submit
              </Button>
            </Col>
          </Row>
        </Form>

        <Row className="mt-5">
          <Col md={3}>
            <p>
              We specialize in applied technology that improves work, play, and
              education.
            </p>
          </Col>
          <Col md={9}>
            <p>
              Our mission is to provide underclassmen interested in technology
              with a strong understanding of potential career paths and offer
              them opportunities to gain hands-on experience in their areas of
              interest.
            </p>

            <Row className="mt-5 py-3">
              <Col xs={12} md={4}>
                <h4 className="font-weight-bold">
                  <Badge variant="danger" className="align-bottom">
                    3
                  </Badge>{" "}
                  Divisions
                </h4>
              </Col>
              <Col xs={12} md={4}>
                <h4 className="font-weight-bold">
                  <Badge variant="success" className="align-bottom">
                    10
                  </Badge>{" "}
                  Lectures
                </h4>
              </Col>
              <Col xs={12} md={4}>
                <h4 className="font-weight-bold">
                  <Badge variant="primary" className="align-bottom">
                    37k
                  </Badge>{" "}
                  Lines of code
                </h4>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={3}>
            <span className="font-weight-bold">
              BTG Academy&nbsp;
              <Badge pill="true" variant="primary">
                OPEN
              </Badge>
            </span>
          </Col>
          <Col md={9}>
            <p>
              Selected lectures from our curriculum that teach a variety of
              skills in database management, web development, API usage, UI/UX
              design, and much more. No technical experience or background is
              necessary.
            </p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={3}>
            <span className="font-weight-bold">
              BTG Analytics&nbsp;
              <Badge pill="true" variant="secondary">
                RECRUITING
              </Badge>
            </span>
          </Col>
          <Col md={9}>
            <p>
              Applied artificial intelligence and machine learning research and
              inference into massive public datasets. Work with your team to
              produce a unique report under the mentorship of an experienced
              member. Background knowledge in AI/ML not necessary, but general
              programming experience preferred.
            </p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={3}>
            <span className="font-weight-bold">
              BTG Web&nbsp;
              <Badge pill="true" variant="secondary">
                RECRUITING
              </Badge>
            </span>
          </Col>
          <Col md={9}>
            <p>
              Full-stack web development using industry standard tools i.e.
              React, Next.js, Redux, npm. Produce your own portfolio site
              through the semester and showcase your work. Past experience in
              web development preferred but not necessary.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="py-5 mt-5">
        <Row>
          <Col className="text-center">
            <Button
              variant="secondary"
              href="https://facebook.com/cmubtg"
              className="mr-1"
            >
              <FaFacebookF />
            </Button>
            <Button
              variant="secondary"
              href="https://instagram.com/cmubtg"
              className="mr-1"
            >
              <FaInstagram />
            </Button>
            <Button
              variant="secondary"
              href="https://github.com/cmubtg"
              className="mr-1"
            >
              <FaGithub />
            </Button>
            <Button
              variant="secondary"
              href="https://linkedin.com/company/cmubtg"
              className="mr-1"
            >
              <FaLinkedinIn />
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

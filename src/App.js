import React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./App.css";
import LogoGray from "./images/btg-logo-gray.svg";

// Mailchimp

// import MailchimpSubscribe from "react-mailchimp-subscribe";

// const url = "//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn";

// simplest form (only email)
// const SimpleForm = () => <MailchimpSubscribe url={url} />;

ReactGA.initialize("UA-104764221-10");
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <div className="">
      <Helmet>
        <title>Home Page | CMU BTG</title>
      </Helmet>

      <Container>
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
                <Form.Control
                  type="email"
                  className="bg-light"
                  placeholder="> Enter email"
                />
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
              <Badge pill="true" variant="danger">
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

      <div className="bg-light">
        <Container className="py-5 mt-5">
          <Row>
            <Col>
              <h4 className="font-weight-bold">Meet the team</h4>

              <p className="py-5">
                CMU BTG team and alumni lead and deploy software, design, and
                consulting projects around the world in fast-paced and
                large-scale environments like Microsoft, Spotify, and Carnegie
                Mellon University.
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <div>
                <h5>Calvin Lui</h5>
              </div>
            </Col>
            <Col>
              <div>
                <h5>Jenny Zhu</h5>
              </div>
            </Col>
            <Col>
              <div>
                <h5>Eric Cheng</h5>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>
                <h5>Calvin Lui</h5>
              </div>
            </Col>
            <Col>
              <div>
                <h5>Calvin Lui</h5>
              </div>
            </Col>
            <Col>
              <div>
                <h5>Calvin Lui</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-5 mt-5">
        <Row>
          <Col>
            <Button
              variant="light"
              href="https://facebook.com/cmubtg"
              className="mr-1 border"
            >
              <FaFacebookF />
            </Button>
            <Button
              variant="light"
              href="https://instagram.com/cmubtg"
              className="mr-1 border"
            >
              <FaInstagram />
            </Button>
            <Button
              variant="light"
              href="https://github.com/cmubtg"
              className="mr-1 border"
            >
              <FaGithub />
            </Button>
            <Button
              variant="light"
              href="https://linkedin.com/company/cmubtg"
              className="mr-1 border"
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
            <img src={LogoGray} alt="" width="50px" className="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

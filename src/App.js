import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

function App() {
  return (
    <div class="">
      <Helmet>
        <title>Home Page | CMU BTG</title>
      </Helmet>
      <Container class="">
        <Row className="pt-5 mt-5">
          <Col>
            <h1 class="display-3 text-black font-weight-boldest">
              We build the cutting edge
            </h1>
          </Col>
        </Row>
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
              <Col>
                <h3 class="font-weight-bold">
                  <Badge variant="danger" className="align-bottom">
                    3
                  </Badge>{" "}
                  Divisions
                </h3>
              </Col>
              <Col>
                <h3 class="font-weight-bold">
                  <Badge variant="success" className="align-bottom">
                    12
                  </Badge>{" "}
                  Lectures
                </h3>
              </Col>
              <Col>
                <h3 class="font-weight-bold">
                  <Badge variant="primary" className="align-bottom">
                    11
                  </Badge>{" "}
                  Repos
                </h3>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={3}>
            <span class="font-weight-bold">
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
            <span class="font-weight-bold">
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
            <span class="font-weight-bold">
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
    </div>
  );
}

export default App;

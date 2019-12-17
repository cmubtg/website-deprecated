import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FadeIn from "react-fade-in";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import AlumniSummary from "./components/AlumniSummary";
import BTGCover from "./images/btg-cover.png";

ReactGA.initialize("UA-104764221-10");
ReactGA.pageview(window.location.pathname + window.location.search);

function Alumni() {
  return (
    <FadeIn>
      <Helmet>
        <title>Alumni | CMUBTG</title>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:image" content={BTGCover}></meta>
      </Helmet>

      <Navigation />

      <Container className="mt-md-5 pt-md-5">
        <Row className="pt-5 mt-5">
          <Col>
            <h1 className="display-3 text-black font-weight-boldest">Alumni</h1>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5 pt-5">
        <AlumniSummary />
      </Container>

      <Footer />
    </FadeIn>
  );
}

export default Alumni;

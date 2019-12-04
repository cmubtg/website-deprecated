import React from "react";
import Badge from "react-bootstrap/Badge";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FadeIn from "react-fade-in";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";
import Companies from "./components/Companies";
import Footer from "./components/Footer";
import MailchimpForm from "./components/MailchimpForm";
import Navigation from "./components/Navigation";
import TeamSummary from "./components/TeamSummary";
import BTGCover from "./images/btg-cover.png";

ReactGA.initialize("UA-104764221-10");
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <FadeIn>
      <Helmet>
        <title>Home Page | CMUBTG</title>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:image" content={BTGCover}></meta>
      </Helmet>

      <Navigation />

      <Container className="mt-md-5 pt-md-5">
        <Row className="pt-5 mt-5">
          <Col>
            <h1 className="display-3 text-black font-weight-boldest">
              We build the cutting edge
            </h1>

            <h2 className="text-muted font-weight-bold">
              We are the CMU Business Technology Group
            </h2>
          </Col>
        </Row>
      </Container>

      <MailchimpForm />

      <Container>
        <Row className="mt-5">
          <Col md={3}>
            <p>
              We specialize in applied technology that improves work, play, and
              education.
            </p>
          </Col>

          <Col md={9}>
            <p>
              Our mission is to provide undergraduates interested in technology
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
                  SLOC
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
            <span className="font-weight-bold">BTG Analytics&nbsp;</span>
          </Col>
          <Col md={9}>
            <p>
              Applied artificial intelligence and machine learning research and
              inference into massive public datasets. Work with your team to
              produce a unique report under the mentorship of an experienced
              member. Background knowledge in AI/ML not necessary, but general
              programming experience preferred.
            </p>
            <p>Check back in spring 2020 for more opportunities.</p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={3}>
            <span className="font-weight-bold">BTG Digital&nbsp;</span>
          </Col>
          <Col md={9}>
            <p>
              Full-stack web development using industry standard tools i.e.
              React, GatsbyJS, Next.js, Redux, npm. Produce your own portfolio
              site through the semester and showcase your work. Past experience
              in web development preferred but not necessary.
            </p>
            <p>Check back in spring 2020 for more opportunities.</p>
          </Col>
        </Row>
      </Container>

      <Container className="py-5 mt-5">
        <Row>
          <Col>
            <h4 className="font-weight-bold">Historical achievement</h4>

            <p className="py-5">
              You’re in good company. Whatever your goals may be, CMUBTG can
              support and guide you towards your highest potential. CMUBTG
              members and alumni lead, deploy, and design exciting projects
              across the industry.
            </p>
          </Col>
        </Row>

        <Companies />
      </Container>

      <div className="bg-light">
        <Container className="py-5 mt-5">
          <Row>
            <Col>
              <h4 className="font-weight-bold">Meet the team</h4>

              <p className="py-5">
                The CMUBTG combines hands-on technical training and holistic
                engagement with the technology industry. Our strong community
                can be found around campus and reinforces our dedicated yet fun
                culture.
              </p>
            </Col>
          </Row>

          <TeamSummary />
        </Container>
      </div>

      <Footer />
    </FadeIn>
  );
}

export default App;

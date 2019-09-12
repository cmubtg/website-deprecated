import React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";
import "./App.css";
import LogoGray from "./images/btg-logo-gray.svg";

import Microsoft from "./images/microsoft.svg";
import Spotify from "./images/spotify.svg";
import YC from "./images/yc.svg";
import Mastercard from "./images/mastercard.svg";
import Deutsche from "./images/deutsche.svg";
import CapitalOne from "./images/capitalone.svg";
import Boeing from "./images/boeing.svg";
import Bofa from "./images/bofa.svg";

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
              We are the CMU Business Technology Group
            </h2>
          </Col>
        </Row>

        <Form className="py-5 my-5">
          <Row>
            <Col md={9} xs={12}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  className="border-0 shadow-custom"
                  placeholder="> Enter email"
                />
              </Form.Group>
            </Col>
            <Col md={3} xs={12}>
              <Button
                variant="danger"
                type="Sign up"
                className="shadow-custom-danger"
                block
              >
                Sign up
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

        <Row>
          <Col xs={6} md={3}>
            <div className="company-photo pt-4">
              <img src={Microsoft} alt="microsoft" className="img-fluid company-svg" />
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="company-photo pt-4">
              <img src={Spotify} alt="spotify" className="img-fluid company-svg" />
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="company-photo pt-4">
              <img src={YC} alt="ycombinator" className="img-fluid company-svg" />
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="company-photo pt-4">
              <img src={Mastercard} alt="mastercard" className="img-fluid company-svg" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={3}>
            <div className="company-photo pt-4">
              <img src={Boeing} alt="boeing" className="img-fluid company-svg" />
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="company-photo pt-4">
              <img src={Deutsche} alt="deutsche" className="img-fluid company-svg" />
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="company-photo pt-4">
              <img src={Bofa} alt="bofa" className="img-fluid company-svg" />
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="company-photo pt-4">
              <img src={CapitalOne} alt="capitalone" className="img-fluid company-svg" />
            </div>
          </Col>
        </Row>
      </Container>

      <div className="bg-light">
        <Container className="py-5 mt-5">
          <Row>
            <Col>
              <h4 className="font-weight-bold">Meet the team</h4>

              <p className="py-5">
                The Carnegie Mellon Business Technology Group combines hands-on
                technical training and holistic engagement with the technology
                indstury. Our strong community can be found around campus and
                reinforces our dedicated yet fun culture.
              </p>
            </Col>
          </Row>

          <Row>
            <Col md={3} sm={6} className="pt-4">
              <div className="team-photo-wrapper shadow-custom">
                <div className="team-photo">
                  <img
                    src="https://scontent.fphl2-4.fna.fbcdn.net/v/t1.0-9/64817755_10219950975144174_8409638470573621248_n.jpg?_nc_cat=108&_nc_oc=AQkgM5wsLobeyPvgy7GLuuiUq7c3frE9R7AArE622VQ2u2oLXAk6bzVMKA0WkRr-NVA&_nc_ht=scontent.fphl2-4.fna&oh=82e0974c32cb98ee38ae4ae45916f1ba&oe=5E13B3D0"
                    alt="calvin"
                    className="img-fluid"
                  />
                </div>
                <div className="team-description text-white px-3">
                  <h4 className="font-weight-bold">Calvin Lui</h4>
                  <p>
                    <small>President</small>
                  </p>
                </div>
                <div className="team-gradient"></div>
              </div>
            </Col>

            <Col md={3} sm={6} className="pt-4">
              <div className="team-photo-wrapper shadow-custom">
                <div className="team-photo">
                  <img
                    src="https://media.licdn.com/dms/image/C4D03AQHpiBSWIdF3xw/profile-displayphoto-shrink_800_800/0?e=1573689600&v=beta&t=jXOJvB3Zn8dxWb6RHrAdX5auhpxkba0jop7yHgbjbJI"
                    alt="jenny"
                    className="img-fluid"
                  />
                </div>
                <div className="team-description text-white px-3">
                  <h4 className="font-weight-bold">Jenny Zhu</h4>
                  <p>
                    <small>Head of Curation</small>
                  </p>
                </div>
                <div className="team-gradient"></div>
              </div>
            </Col>

            <Col md={3} sm={6} className="pt-4">
              <div className="team-photo-wrapper shadow-custom">
                <div className="team-photo">
                  <img
                    src="https://scontent.fphl2-3.fna.fbcdn.net/v/t1.0-9/67881568_874773979570522_7004249365149646848_n.jpg?_nc_cat=104&_nc_oc=AQmc74TtkZBU1JTSS_IjV0_bImkRZqvrS4uRTFbVa_se5SC8PfIjChV83fIbLbYQX5Y&_nc_ht=scontent.fphl2-3.fna&oh=660c6ed89d89e51ab4fc4ba66aa31680&oe=5DF78DDE"
                    alt="eric"
                    className="img-fluid"
                  />
                </div>
                <div className="team-description text-white px-3">
                  <h4 className="font-weight-bold">Eric Cheng</h4>
                  <p>
                    <small>Head of Product</small>
                  </p>
                </div>
                <div className="team-gradient"></div>
              </div>
            </Col>

            <Col md={3} sm={6} className="pt-4">
              <div className="team-photo-wrapper shadow-custom">
                <div className="team-photo">
                  <img
                    src="https://scontent.fphl2-4.fna.fbcdn.net/v/t1.0-9/37290259_272554483506268_6348707729372086272_n.jpg?_nc_cat=111&_nc_oc=AQnmp5lIzlq_EiLZR3ZYzKNupIGskkZ3SVel_avZLtSEwjsCwwjLIsR_4Kdu6dWqlic&_nc_ht=scontent.fphl2-4.fna&oh=0c71310eadce266e1a41d43f31bc2bd0&oe=5DF2BF91"
                    alt="will"
                    className="img-fluid"
                  />
                </div>
                <div className="team-description text-white px-3">
                  <h4 className="font-weight-bold">Will Zeng</h4>
                  <p>
                    <small>Head of Education</small>
                  </p>
                </div>
                <div className="team-gradient"></div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={3} sm={6} className="pt-4">
              <div className="team-photo-wrapper shadow-custom">
                <div className="team-photo">
                  <img
                    src="https://scontent.fagc3-2.fna.fbcdn.net/v/t1.0-1/70738858_2356018594667735_1973856107545755648_n.jpg?_nc_cat=105&_nc_oc=AQkrodaIwidrMu_PAp1HJ3Vo-vKc2OOVDUOp7MKm1YmxiMUrF-FlzJnyHd0vQp0YsGg&_nc_ht=scontent.fagc3-2.fna&oh=515128804a48b2d8f95cc27aab75bf2c&oe=5DF1A5E4"
                    alt="yvonne"
                    className="img-fluid"
                  />
                </div>
                <div className="team-description text-white px-3">
                  <h4 className="font-weight-bold">Yvonne Liang</h4>
                  <p>
                    <small>Head of Finance</small>
                  </p>
                </div>
                <div className="team-gradient"></div>
              </div>
            </Col>

            <Col md={3} sm={6} className="pt-4">
              <div className="team-photo-wrapper shadow-custom">
                <div className="team-photo">
                  <img
                    src="https://scontent.fagc3-2.fna.fbcdn.net/v/t1.0-9/54516161_2305266406420863_8869409634369142784_n.jpg?_nc_cat=101&_nc_oc=AQmlU1HGHN8KcH8_juvJj6WjtrzTLdh1fNcybc8MFgJ36qnsMjrCWi99qOpepzamv9A&_nc_ht=scontent.fagc3-2.fna&oh=7817adcb3ebd2378efdc362dc457bfcd&oe=5DC7CAD0"
                    alt="matt"
                    className="img-fluid"
                  />
                </div>
                <div className="team-description text-white px-3">
                  <h4 className="font-weight-bold">Matt Guo</h4>
                  <p>
                    <small>Head of Design</small>
                  </p>
                </div>
                <div className="team-gradient"></div>
              </div>
            </Col>

            <Col md={3} sm={6} className="pt-4">
              <div className="team-photo-wrapper shadow-custom">
                <div className="team-photo">
                  <img
                    src="https://media.licdn.com/dms/image/C5603AQF3AXlqvod16A/profile-displayphoto-shrink_800_800/0?e=1573689600&v=beta&t=QS23gEsjP59XG9EVh7RWE3kYp_rRPjeigBmgA-icKfs"
                    alt="navid"
                    className="img-fluid"
                  />
                </div>
                <div className="team-description text-white px-3">
                  <h4 className="font-weight-bold">Navid Mamoon</h4>
                  <p>
                    <small>Head of Growth</small>
                  </p>
                </div>
                <div className="team-gradient"></div>
              </div>
            </Col>

            <Col md={3} sm={6} className="pt-4"></Col>
          </Row>
        </Container>
      </div>

      <Container className="py-5 mt-5">
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
            <img src={LogoGray} alt="" width="60px" className="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

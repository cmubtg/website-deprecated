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
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";
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
            <Col md={8} xs={12}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  className="bg-light"
                  placeholder="> Enter email"
                />
              </Form.Group>
            </Col>
            <Col md={4} xs={12}>
              <Button variant="danger" type="Sign up" block>
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

          <CardDeck>
            <Card border="0" className="bg-transparent">
              <Card.Img
                variant="top"
                src="https://scontent.fphl2-4.fna.fbcdn.net/v/t1.0-9/64817755_10219950975144174_8409638470573621248_n.jpg?_nc_cat=108&_nc_oc=AQkgM5wsLobeyPvgy7GLuuiUq7c3frE9R7AArE622VQ2u2oLXAk6bzVMKA0WkRr-NVA&_nc_ht=scontent.fphl2-4.fna&oh=82e0974c32cb98ee38ae4ae45916f1ba&oe=5E13B3D0"
              />
              <Card.Body className="p-0 pt-4">
                <Card.Title classname="pb-0 mb-0">
                  <p className="font-weight-bold">Calvin Lui</p>
                </Card.Title>
                <Card.Text classname="pt-0 mt-0">
                  <p>
                    <small>President</small>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="0" className="bg-transparent">
              <Card.Img
                variant="top"
                src="https://media.licdn.com/dms/image/C4D03AQHpiBSWIdF3xw/profile-displayphoto-shrink_800_800/0?e=1573689600&v=beta&t=jXOJvB3Zn8dxWb6RHrAdX5auhpxkba0jop7yHgbjbJI"
              />
              <Card.Body className="p-0 pt-4">
                <Card.Title classname="pb-0 mb-0">
                  <p className="font-weight-bold">Jenny Zhu</p>
                </Card.Title>
                <Card.Text>
                  <p>
                    <small>Head of Strategy</small>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="0" className="bg-transparent">
              <Card.Img
                variant="top"
                src="https://scontent.fphl2-3.fna.fbcdn.net/v/t1.0-9/67881568_874773979570522_7004249365149646848_n.jpg?_nc_cat=104&_nc_oc=AQmc74TtkZBU1JTSS_IjV0_bImkRZqvrS4uRTFbVa_se5SC8PfIjChV83fIbLbYQX5Y&_nc_ht=scontent.fphl2-3.fna&oh=660c6ed89d89e51ab4fc4ba66aa31680&oe=5DF78DDE"
              />
              <Card.Body className="p-0 pt-4">
                <Card.Title classname="pb-0 mb-0">
                  <p className="font-weight-bold">Eric Cheng</p>
                </Card.Title>
                <Card.Text>
                  <p>
                    <small>Head of Product</small>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="0" className="bg-transparent">
              <Card.Img
                variant="top"
                src="https://scontent.fphl2-4.fna.fbcdn.net/v/t1.0-9/37290259_272554483506268_6348707729372086272_n.jpg?_nc_cat=111&_nc_oc=AQnmp5lIzlq_EiLZR3ZYzKNupIGskkZ3SVel_avZLtSEwjsCwwjLIsR_4Kdu6dWqlic&_nc_ht=scontent.fphl2-4.fna&oh=0c71310eadce266e1a41d43f31bc2bd0&oe=5DF2BF91"
              />
              <Card.Body className="p-0 pt-4">
                <Card.Title classname="pb-0 mb-0">
                  <p className="font-weight-bold">Will Zeng</p>
                </Card.Title>
                <Card.Text>
                  <p>
                    <small>Head of Curriculum</small>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>

          <CardDeck className="pt-5 ">
            <Card border="0" className="bg-transparent">
              <Card.Img
                variant="top"
                src="https://scontent.fagc3-2.fna.fbcdn.net/v/t1.0-1/70738858_2356018594667735_1973856107545755648_n.jpg?_nc_cat=105&_nc_oc=AQkrodaIwidrMu_PAp1HJ3Vo-vKc2OOVDUOp7MKm1YmxiMUrF-FlzJnyHd0vQp0YsGg&_nc_ht=scontent.fagc3-2.fna&oh=515128804a48b2d8f95cc27aab75bf2c&oe=5DF1A5E4"
              />
              <Card.Body className="p-0 pt-4">
                <Card.Title classname="pb-0 mb-0">
                  <p className="font-weight-bold">Yvonne Liang</p>
                </Card.Title>
                <Card.Text>
                  <p>
                    <small>Head of Finance</small>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="0" className="bg-transparent">
              <Card.Img
                variant="top"
                src="https://scontent.fagc3-2.fna.fbcdn.net/v/t1.0-9/54516161_2305266406420863_8869409634369142784_n.jpg?_nc_cat=101&_nc_oc=AQmlU1HGHN8KcH8_juvJj6WjtrzTLdh1fNcybc8MFgJ36qnsMjrCWi99qOpepzamv9A&_nc_ht=scontent.fagc3-2.fna&oh=7817adcb3ebd2378efdc362dc457bfcd&oe=5DC7CAD0"
              />
              <Card.Body className="p-0 pt-4">
                <Card.Title classname="pb-0 mb-0">
                  <p className="font-weight-bold">Matt Guo</p>
                </Card.Title>
                <Card.Text>
                  <p>
                    <small>Head of Design</small>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="0" className="bg-transparent">
              <Card.Img
                variant="top"
                src="https://media.licdn.com/dms/image/C5603AQF3AXlqvod16A/profile-displayphoto-shrink_800_800/0?e=1573689600&v=beta&t=QS23gEsjP59XG9EVh7RWE3kYp_rRPjeigBmgA-icKfs"
              />
              <Card.Body className="p-0 pt-4">
                <Card.Title classname="pb-0 mb-0">
                  <p className="font-weight-bold">Navid Mamoon</p>
                </Card.Title>
                <Card.Text>
                  <p>
                    <small>Head of Outreach</small>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card bg="danger" className="border-0">
              <Card.Body>
                <Card.Title className="text-white">Join us +</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
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
            <img src={LogoGray} alt="" width="60px" className="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

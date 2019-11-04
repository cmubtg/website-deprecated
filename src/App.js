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
import TeamPhoto from "./components/TeamPhoto";

ReactGA.initialize("UA-104764221-10");
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <FadeIn>
      <Helmet>
        <title>Home Page | CMUBTG</title>
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

          <Row id="people">
            <TeamPhoto
              memberName={"Calvin Lui"}
              role={"President"}
              imageUrl={
                "https://scontent.fphl2-4.fna.fbcdn.net/v/t1.0-9/64817755_10219950975144174_8409638470573621248_n.jpg?_nc_cat=108&_nc_oc=AQkgM5wsLobeyPvgy7GLuuiUq7c3frE9R7AArE622VQ2u2oLXAk6bzVMKA0WkRr-NVA&_nc_ht=scontent.fphl2-4.fna&oh=82e0974c32cb98ee38ae4ae45916f1ba&oe=5E13B3D0"
              }
              description={
                "Calvin is the President of CMUBTG. He is a senior studying Information Systems. Calvin has been 6’3” since high school, but only recently this summer, he was able to touch the rim of a basketball hoop. Sad reacts only."
              }
            ></TeamPhoto>

            <TeamPhoto
              memberName={"Jenny Zhu"}
              role={"Head of Curation"}
              imageUrl={
                "https://media.licdn.com/dms/image/C4D03AQHpiBSWIdF3xw/profile-displayphoto-shrink_800_800/0?e=1573689600&v=beta&t=jXOJvB3Zn8dxWb6RHrAdX5auhpxkba0jop7yHgbjbJI"
              }
              description={
                "Jenny serves as the Head of Curation at CMUBTG. She is a senior studying Information Systems and Statistics and Machine Learning. Recently, Jenny has been enjoying jazz, funk, and sadboi lofi hip hop."
              }
            ></TeamPhoto>

            <TeamPhoto
              memberName={"Eric Cheng"}
              role={"Head of Product"}
              imageUrl={
                "https://scontent.fphl2-3.fna.fbcdn.net/v/t1.0-9/67881568_874773979570522_7004249365149646848_n.jpg?_nc_cat=104&_nc_oc=AQmc74TtkZBU1JTSS_IjV0_bImkRZqvrS4uRTFbVa_se5SC8PfIjChV83fIbLbYQX5Y&_nc_ht=scontent.fphl2-3.fna&oh=660c6ed89d89e51ab4fc4ba66aa31680&oe=5DF78DDE"
              }
              description={
                "Eric serves as Head of Product at CMUBTG. He studies business at Carnegie Mellon. Fun fact: Eric is probably BTG’s best chef. He cooked this very website, too!"
              }
            ></TeamPhoto>

            <TeamPhoto
              memberName={"Will Zeng"}
              role={"Head of Education"}
              imageUrl={
                "https://scontent.fphl2-4.fna.fbcdn.net/v/t1.0-9/37290259_272554483506268_6348707729372086272_n.jpg?_nc_cat=111&_nc_oc=AQnmp5lIzlq_EiLZR3ZYzKNupIGskkZ3SVel_avZLtSEwjsCwwjLIsR_4Kdu6dWqlic&_nc_ht=scontent.fphl2-4.fna&oh=0c71310eadce266e1a41d43f31bc2bd0&oe=5DF2BF91"
              }
              description={
                "William is the Head of Education at CMUBTG. He is a sophomore studying Statistics and Machine Learning. He enjoys game theory and games of chance."
              }
            ></TeamPhoto>
          </Row>

          <Row>
            <TeamPhoto
              memberName={"Yvonne Liang"}
              role={"Head of Finance"}
              imageUrl={
                "https://scontent.fagc3-2.fna.fbcdn.net/v/t1.0-1/70738858_2356018594667735_1973856107545755648_n.jpg?_nc_cat=105&_nc_oc=AQkrodaIwidrMu_PAp1HJ3Vo-vKc2OOVDUOp7MKm1YmxiMUrF-FlzJnyHd0vQp0YsGg&_nc_ht=scontent.fagc3-2.fna&oh=515128804a48b2d8f95cc27aab75bf2c&oe=5DF1A5E4"
              }
              description={
                "Yvonne is the Head of Finance at CMUBTG. She is a sophomore studying business. She enjoys hikes and lakes."
              }
            ></TeamPhoto>

            <TeamPhoto
              memberName={"Matthew Guo"}
              role={"Head of Design"}
              imageUrl={
                "https://scontent.fagc3-2.fna.fbcdn.net/v/t1.0-9/54516161_2305266406420863_8869409634369142784_n.jpg?_nc_cat=101&_nc_oc=AQmlU1HGHN8KcH8_juvJj6WjtrzTLdh1fNcybc8MFgJ36qnsMjrCWi99qOpepzamv9A&_nc_ht=scontent.fagc3-2.fna&oh=7817adcb3ebd2378efdc362dc457bfcd&oe=5DC7CAD0"
              }
              description={
                "Matthew is Head of Design at CMUBTG and studies Information Systems + HCI. Having grown up in Sydney and Shanghai, he is always willing to explore more of Pittsburgh."
              }
            ></TeamPhoto>

            <TeamPhoto
              memberName={"Navid Mamoon"}
              role={"Head of Growth"}
              imageUrl={
                "https://media.licdn.com/dms/image/C5603AQF3AXlqvod16A/profile-displayphoto-shrink_800_800/0?e=1573689600&v=beta&t=QS23gEsjP59XG9EVh7RWE3kYp_rRPjeigBmgA-icKfs"
              }
              description={
                "Navid is Head of Growth at CMUBTG. He is a sophomore studying Business Administration. Navid’s in love with his guitar and has recently taken up rock climbing in lieu of his failed attempts at working out."
              }
            ></TeamPhoto>

            <Col md={3} sm={6} className="pt-4"></Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </FadeIn>
  );
}

export default App;

import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FadeIn from "react-fade-in";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import BTGCover from "../images/btg-cover.png";
import TeamDescription from "../components/TeamDescription";

ReactGA.initialize("UA-104764221-10");
ReactGA.pageview(window.location.pathname + window.location.search);

function Team() {
  return (
    <FadeIn>
      <Helmet>
        <title>Team | CMUBTG</title>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:image" content={BTGCover}></meta>
      </Helmet>

      <Navigation />

      <Container className="mt-md-5 pt-md-5">
        <Row className="pt-5 mt-5">
          <Col>
            <h1 className="display-3 text-black font-weight-boldest">Team</h1>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5 pt-5">
        <Row>
          <Col>
            <h4 className="font-weight-bold pb-5">BTG Digital</h4>
            <TeamDescription
              memberName={"Grace Kim"}
              classYear={"2022"}
              description={""}
            />
            <TeamDescription
              memberName={"Xinda Zhou"}
              classYear={"2022"}
              description={""}
            />
            <TeamDescription
              memberName={"Andrew Huang"}
              classYear={"2022"}
              description={""}
            />
            <TeamDescription
              memberName={"Zach Zhao"}
              classYear={"2022"}
              description={""}
            />
          </Col>
        </Row>
      </Container>

      <Container className="mt-5 pt-5">
        <Row>
          <Col>
            <h4 className="font-weight-bold pb-5">BTG Analytics</h4>
            <TeamDescription
              memberName={"Sandhya Bala"}
              classYear={"2021"}
              description={""}
            />
            <TeamDescription
              memberName={"Katherine Liu"}
              classYear={"2021"}
              description={""}
            />
            <TeamDescription
              memberName={"Denis Ebby"}
              classYear={"2021"}
              description={""}
            />
            <TeamDescription
              memberName={"Sebastian Yang"}
              classYear={"2022"}
              description={""}
            />
            <TeamDescription
              memberName={"Elizabeth Han"}
              classYear={"2022"}
              description={""}
            />
            <TeamDescription
              memberName={"Youngjoo Lee"}
              classYear={"2022"}
              description={""}
            />
            <TeamDescription
              memberName={"Alex Zhong"}
              classYear={"2022"}
              description={""}
            />
            <TeamDescription
              memberName={"Juan Diego Meza"}
              classYear={"2021"}
              description={""}
            />
            <TeamDescription
              memberName={"Konwoo Kim"}
              classYear={"2023"}
              description={
                "Konwoo studies computer science. He enjoys playing table tennis and poker."
              }
            />
            <TeamDescription
              memberName={"Eddie Li"}
              classYear={"2023"}
              description={
                "Eddie is in SCS and is interested in ML, Blockchain, and hardware hacking. He has two cats."
              }
            />
            <TeamDescription
              memberName={"Joseph Li"}
              classYear={"2023"}
              description={""}
            />
          </Col>
        </Row>
      </Container>

      <Footer />
    </FadeIn>
  );
}

export default Team;

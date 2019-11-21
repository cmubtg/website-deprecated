import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import TeamPhoto from "./TeamPhoto";
import CalvinPhoto from "../images/team/calvin.jpg";
import JennyPhoto from "../images/team/jenny.jpeg";
import EricPhoto from "../images/team/eric.jpg";
import WillPhoto from "../images/team/will.jpg";
import MattPhoto from "../images/team/matt.jpg";
import NavidPhoto from "../images/team/navid.jpg";
import YvonnePhoto from "../images/team/yvonne.jpg";

function TeamSummary() {
  return (
    <React.Fragment>
      <Row id="people">
        <TeamPhoto
          memberName={"Calvin Lui"}
          role={"President"}
          imageUrl={
            CalvinPhoto
          }
          description={
            "Calvin is the President of CMUBTG. He is a senior studying Information Systems. Calvin has been 6’3” since high school, but only recently this summer, he was able to touch the rim of a basketball hoop. Sad reacts only."
          }
        ></TeamPhoto>

        <TeamPhoto
          memberName={"Jenny Zhu"}
          role={"Head of Curation"}
          imageUrl={
            JennyPhoto
          }
          description={
            "Jenny serves as the Head of Curation at CMUBTG. She is a senior studying Information Systems and Statistics and Machine Learning. Recently, Jenny has been enjoying jazz, funk, and sadboi lofi hip hop."
          }
        ></TeamPhoto>

        <TeamPhoto
          memberName={"Eric Cheng"}
          role={"Head of Product"}
          imageUrl={
            EricPhoto
          }
          description={
            "Eric serves as Head of Product at CMUBTG. He studies business at Carnegie Mellon. Fun fact: Eric is probably BTG’s best chef. He cooked this very website, too!"
          }
        ></TeamPhoto>

        <TeamPhoto
          memberName={"Will Zeng"}
          role={"Head of Education"}
          imageUrl={
            WillPhoto
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
            YvonnePhoto
          }
          description={
            "Yvonne is the Head of Finance at CMUBTG. She is a sophomore studying business. She enjoys hikes and lakes."
          }
        ></TeamPhoto>

        <TeamPhoto
          memberName={"Matthew Guo"}
          role={"Head of Design"}
          imageUrl={
            MattPhoto
          }
          description={
            "Matthew is Head of Design at CMUBTG and studies Information Systems + HCI. Having grown up in Sydney and Shanghai, he is always willing to explore more of Pittsburgh."
          }
        ></TeamPhoto>

        <TeamPhoto
          memberName={"Navid Mamoon"}
          role={"Head of Growth"}
          imageUrl={
            NavidPhoto
          }
          description={
            "Navid is Head of Growth at CMUBTG. He is a sophomore studying Business Administration. Navid’s in love with his guitar and has recently taken up rock climbing in lieu of his failed attempts at working out."
          }
        ></TeamPhoto>

        <Col md={3} sm={6} className="pt-4"></Col>
      </Row>
    </React.Fragment>
  );
}

export default TeamSummary;
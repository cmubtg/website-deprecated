import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Boeing from "../images/boeing.svg";
import Bofa from "../images/bofa.svg";
import CapitalOne from "../images/capitalone.svg";
import Deutsche from "../images/deutsche.svg";
import Mastercard from "../images/mastercard.svg";
import Microsoft from "../images/microsoft.svg";
import Spotify from "../images/spotify.svg";
import Roblox from "../images/roblox.svg";
import YC from "../images/yc.svg";

const Companies = () => {
  return (
    <>
      <Row>
        <Col xs={6} md={3}>
          <div className="company-photo pt-4 text-center">
            <img
              src={Microsoft}
              alt="microsoft"
              className="img-fluid company-svg microsoft-logo"
            />
          </div>
        </Col>
        <Col xs={6} md={3}>
          <div className="company-photo pt-4 text-center">
            <img
              src={Spotify}
              alt="spotify"
              className="img-fluid company-svg spotify-logo"
            />
          </div>
        </Col>
        <Col xs={6} md={3}>
          <div className="company-photo pt-4 text-center">
            <img
              src={YC}
              alt="ycombinator"
              className="img-fluid company-svg ycombinator-logo"
            />
          </div>
        </Col>
        <Col xs={6} md={3}>
          <div className="company-photo pt-4 text-center">
            <img
              src={Mastercard}
              alt="mastercard"
              className="img-fluid company-svg mastercard-logo"
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={3}>
          <div className="company-photo pt-4 text-center">
            <img
              src={Boeing}
              alt="boeing"
              className="img-fluid company-svg boeing-logo"
            />
          </div>
        </Col>
        <Col xs={6} md={3}>
          <div className="company-photo pt-4 text-center">
            <img
              src={Deutsche}
              alt="deutsche"
              className="img-fluid company-svg deutsche-logo"
            />
          </div>
        </Col>
        <Col xs={6} md={3}>
          <div className="company-photo pt-4 text-center">
            <img
              src={Bofa}
              alt="bofa"
              className="img-fluid company-svg bofa-logo"
            />
          </div>
        </Col>
        <Col xs={6} md={3}>
          <div className="company-photo pt-4 text-center">
            <img
              src={CapitalOne}
              alt="capitalone"
              className="img-fluid company-svg capitalone-logo"
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={3}>
          <div className="company-photo pt-4 text-center">
            <img
              src={Roblox}
              alt="roblox"
              className="img-fluid company-svg boeing-logo"
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Companies;

import React from "react";
import Row from "react-bootstrap/Row";
import Company from "./Company";
import Boeing from "../images/boeing.svg";
import Bofa from "../images/bofa.svg";
import CapitalOne from "../images/capitalone.svg";
import Deutsche from "../images/deutsche.svg";
import Mastercard from "../images/mastercard.svg";
import Microsoft from "../images/microsoft.svg";
import Spotify from "../images/spotify.svg";
import Roblox from "../images/roblox.svg";
import YC from "../images/yc.svg";
import PayPal from "../images/paypal.svg";

const Companies = () => {
  return (
    <>
      <Row>
        <Company name="microsoft" company={Microsoft}></Company>
        <Company name="spotify" company={Spotify}></Company>
        <Company name="yc" company={YC}></Company>
        <Company name="mastercard" company={Mastercard}></Company>
      </Row>
      <Row>
        <Company name="boeing" company={Boeing}></Company>
        <Company name="deutsche" company={Deutsche}></Company>
        <Company name="bofa" company={Bofa}></Company>
        <Company name="capitalone" company={CapitalOne}></Company>
      </Row>
      <Row>
        <Company name="roblox" company={Roblox}></Company>
        <Company name="paypal" company={PayPal}></Company>
      </Row>
    </>
  );
};

export default Companies;

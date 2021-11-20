import React, { useState,useEffect } from "react";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";
import FadeIn from "react-fade-in";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Navigation from "../components/Navigation";
import BTGCover from "../images/btg-cover.png";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import axios from 'axios';

ReactGA.initialize("UA-104764221-10");
ReactGA.pageview(window.location.pathname + window.location.search);

function Members() {

    const [error,setError] = useState(null);
    const [members, setMembers] = useState([]);

    useEffect(() => {
      async function getAPI() {
        try{
          const response = await axios.get(`http://localhost:1337/members`)
          setMembers(response.data);
        } catch (error) {
            setError(error)
        }
      }
      getAPI()
    },[])

    // useEffect(() => {
    //     const response = axios.get(`http://localhost:1337/portfolios`)
    //     setPortfolios(response);
    // },[]);

    console.log(members);

    return (
    <FadeIn>
    <Helmet>
        <title>Members | CMUBTG</title>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:image" content={BTGCover}></meta>
    </Helmet>

    <Navigation />

    <Container className="mt-md-5 pt-md-5">
        <Row className="pt-5 mt-5">
          <Col>
            <h1 className="display-3 text-black font-weight-boldest">Members</h1>
          </Col>
        </Row>
      </Container>
      
    <Container className="mt-5 pt-5">
    <Row>
        <Col>
          <ul>
              { members.map(member => (
              <li key={member.andrewid}>
                  <Link to={"member/"+member.andrewid}>{member.firstname} {member.lastname}</Link>
              </li>
              ))}
            </ul>
        </Col>
    </Row>
    </Container>
        <Footer />
    </FadeIn>
    );
}

export default Members;
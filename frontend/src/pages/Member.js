import React,{ useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios'
import ReactGA from "react-ga";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet";
import FadeIn from "react-fade-in";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Navigation from "../components/Navigation";
import BTGCover from "../images/btg-cover.png";
import Footer from "../components/Footer";

import {LinkedInPhoto, Resume, Email} from "../images/static";

ReactGA.initialize("UA-104764221-10");
ReactGA.pageview(window.location.pathname + window.location.search);

function Member(){

    const params = useParams();
    const id = params.id;

    const [error,setError] = useState(null);
    const [member, setMember] = useState([]);
    const [isLoaded,setIsLoaded] = useState(false);

    useEffect(() => {
      async function getAPI() {
        try{
          const response = await axios.get(`http://localhost:1337/members/?andrewid=`+id)
          setMember(response.data);
          setIsLoaded(true);
        } catch (error) {
            setError(error)
            setIsLoaded(true);
        }
      }
      getAPI()
    },[])

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
        return <div>Loading...</div>;
    }  
    if (member){

        return (
            <FadeIn>
            <Helmet>
                <title>Members | CMUBTG</title>
                <meta name="twitter:card" content="summary_large_image"></meta>
                <meta name="twitter:image" content={BTGCover}></meta>
            </Helmet>
        
            <Navigation />
        
            <Container className="mt-md-1 pt-md-4">
              <Row>
                <h1 className="display-3 text-black font-weight-boldest">{member[0].firstname} {member[0].lastname}</h1>
              </Row>
              <Row className="pt-1 mt-5">
                <Col xs={8}>
                  <h2>About Me</h2>
                  <p>{member[0].portfolio}</p>
                </Col>
                <Col>
                  <img src={"http://localhost:1337"+member[0].pic.formats.thumbnail.url} alt="Pic" width="250"/>
                </Col>
              </Row>
            </Container>

            <Container className="pt-3 mt-4" style={{backgroundColor: '#ff2f44'}}>
              <Row>
                <Col>
                  <div style={{color: 'white'}}>
                    <h2>My Experiences</h2>                                        
                    <ReactMarkdown>{member[0].experiences}</ReactMarkdown>
                  </div>                  
                </Col>
              </Row>
            </Container>

            <Container className="pt-3 mt-3">
              <Row>     
                <Col>
                  <h2>Contact Info</h2>
                </Col>                         
              </Row>
              <Container className="mt-1">
                <Row>
                  <Col className="mr-3">
                    <a href={member[0].LinkedIn} target="_blank"><img src={LinkedInPhoto} alt="LinkedIn" width="75"/></a>           
                  </Col>
                  <Col className="mr-4">
                    <a href={"http://localhost:1337"+member[0].resume[0].url} target="_blank"><img src={Resume} alt="Resume" width="75"/></a>
                  </Col>
                  <Col className="mr-4">
                    <a href={"mailto:"+member[0].andrewid+"@andrew.cmu.edu"} target="_blank"><img src={Email} alt="Email" width="75"/></a>        
                  </Col>                                
                </Row>
              </Container>
            </Container>

            <Footer />
            </FadeIn>
        );
    }

}

export default Member;
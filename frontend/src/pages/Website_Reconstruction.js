import React from "react";
import FadeIn from "react-fade-in";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import BTGCover from "../images/btg-cover.png";
import {Container, Row, Col, Button, Card} from 'react-bootstrap'

ReactGA.initialize("UA-104764221-10");
ReactGA.pageview(window.location.pathname + window.location.search);

function Projects() {
  return (
    <FadeIn>
      <Helmet>
        <title>Projects | CMUBTG</title>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:image" content={BTGCover}></meta>
      </Helmet>

      <Navigation />

      <Container className="mt-md-5 pt-md-5">
        <Row className="pt-5 mt-5">

        </Row>
      </Container>

      <Container>
        <h1>Website Reconstruction Team</h1>
        <Card className = 'mb-5 opacity-20' style={{backgroundColor: '#F32E43',color: '#fff',backgroundOpacity:50}}>
          <Card.Body>           
             <Card.Img src = 'https://picsum.photos/180/100' />
           </Card.Body>
        </Card>
       
        <small class = 'padded-multipline'style = {{marginTop: 10, fontSize: 15}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </small>
        <h1 style = {{marginTop: 30}}>Members</h1>
        <Card style={{backgroundColor: '#F32E43',color: '#fff'}}>
          <Card.Body>
            <Col>
              <Button style = {{padding: '0px 0px', border: '0px', margin: 15}}>
                <img src="https://picsum.photos/140/200"/>
              </Button>
              <Button style = {{padding: '0px 0px', border: '0px', margin: 15}}>
                <img src="https://picsum.photos/140/200"/>
              </Button>
              <Button style = {{padding: '0px 0px', border: '0px', margin: 15}}>
                <img src="https://picsum.photos/140/200"/>
              </Button>
              <Button style = {{padding: '0px 0px', border: '0px', margin: 15}}>
                <img src="https://picsum.photos/140/200"/>
              </Button>
              <Button style = {{padding: '0px 0px', border: '0px', margin: 15}}>
                <img src="https://picsum.photos/140/200"/>
              </Button>        
            </Col>
          </Card.Body>
        </Card>
        <div class = 'text-center'>
          <Row style = {{marginLeft: 60, marginTop:20, marginBottom: 40}}>
            <small style = {{marginRight: 85}}>
              Member Name<br/>Year
            </small>
            <small style = {{marginRight: 85}}>
              Member Name<br/>Year
            </small>
            <small style = {{marginRight: 85}}>
              Member Name<br/>Year
            </small>
            <small style = {{marginRight: 85}}>
              Member Name<br/>Year
            </small>
            <small style = {{marginRight: 85}}>
              Member Name<br/>Year
            </small>
          </Row>
        </div>
        <Card style={{backgroundColor: '#F32E43',color: '#fff'}}>
          <Card.Body>
            <Col>
              <Button style = {{padding: '0px 0px', border: '0px', margin: 15}}>
                <img src="https://picsum.photos/140/200"/>
              </Button>
              <Button style = {{padding: '0px 0px', border: '0px', margin: 15}}>
                <img src="https://picsum.photos/140/200"/>
              </Button>
              <Button style = {{padding: '0px 0px', border: '0px', margin: 15}}>
                <img src="https://picsum.photos/140/200"/>
              </Button>
              <Button style = {{padding: '0px 0px', border: '0px', margin: 15}}>
                <img src="https://picsum.photos/140/200"/>
              </Button>
              <Button style = {{padding: '0px 0px', border: '0px', margin: 15}}>
                <img src="https://picsum.photos/140/200"/>
              </Button>        
            </Col>
          </Card.Body>
        </Card>
        <div class = 'text-center'>
          <Row style = {{marginLeft: 60, marginTop:20, marginBottom: 40}}>
            <small style = {{marginRight: 85}}>
              Member Name<br/>Year
            </small>
            <small style = {{marginRight: 85}}>
              Member Name<br/>Year
            </small>
            <small style = {{marginRight: 85}}>
              Member Name<br/>Year
            </small>
            <small style = {{marginRight: 85}}>
              Member Name<br/>Year
            </small>
            <small style = {{marginRight: 85}}>
              Member Name<br/>Year
            </small>
          </Row>
        </div>
      </Container>

      <Footer />
    </FadeIn>
  );
}

export default Projects;

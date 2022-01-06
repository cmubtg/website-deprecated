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
        <h1 style = {{marginBottom: 20}}>Projects</h1>
        <Row style = {{marginBottom:30}}>
          
          <div className = 'border-0' style = {{width:'15rem'}}>
            <img src = 'https://picsum.photos/200/200' style = {{margin:20}}/>
          </div>

          <div className = 'text-right border-0' style = {{width:700}}>
          <txt>
            <h2 style = {{margin:20, marginBottom:20,color:'#F32E43'}}><u>Website Reconstruction</u></h2>
            <div class = 'padded-multiline' style = {{margin:20}}>
              <small style = {{fontSize:15}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </small>              
            </div>
          </txt>
        </div>
        </Row>

        <Row style = {{marginBottom:30}}>
          
          <div className = 'border-0' style = {{backgroundColor:'#F32E43', color: '#fff', width:700}}>
            <txt>
              <h2 style = {{margin:20, marginBottom:20}}><u>Scotty Energy Dashboard</u></h2>
              <div class = 'padded-multiline' style = {{margin:20}}>
                <small style = {{fontSize:15}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                  occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </small>              
              </div>
            </txt>
          </div>

        
          <div className = 'border-0' style = {{backgroundColor:'#F32E43', color: '#fff', width:'15rem'}}>
            <img src = 'https://picsum.photos/200/200' style = {{margin:20}}/>
          </div>

        </Row>
        <Row style = {{marginBottom:30}}>
          
          <div className = 'border-0' style = {{width:'15rem'}}>
            <img src = 'https://picsum.photos/200/200' style = {{margin:20}}/>
          </div>

          <div className = 'text-right border-0' style = {{width:700}}>
          <txt>
            <h2 style = {{margin:20, marginBottom:20,color:'#F32E43'}}><u>Plaid Pickup</u></h2>
            <div class = 'padded-multiline' style = {{margin:20}}>
              <small style = {{fontSize:15}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </small>              
            </div>
          </txt>
        </div>
        </Row>

        <Row style = {{marginBottom:30}}>
          
          <div className = 'border-0' style = {{backgroundColor:'#F32E43', color: '#fff', width:700}}>
            <txt>
              <h2 style = {{margin:20, marginBottom:20}}><u>ML Mini Projects</u></h2>
              <div class = 'padded-multiline' style = {{margin:20}}>
                <small style = {{fontSize:15}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                  occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </small>              
              </div>
            </txt>
          </div>

        
          <div className = 'border-0' style = {{backgroundColor:'#F32E43', color: '#fff', width:'15rem'}}>
            <img src = 'https://picsum.photos/200/200' style = {{margin:20}}/>
          </div>

        </Row>


        
        
      </Container>
        

      <Footer />
    </FadeIn>
  );
}

export default Projects;

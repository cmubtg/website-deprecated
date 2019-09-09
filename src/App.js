import React from 'react';
import './App.css';
import { Helmet } from "react-helmet";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div class="">
      <Helmet>
        <title>Home Page | CMU BTG</title>
      </Helmet>
      <Container class="">
        <Row>
          <Col>
            <h1 class="my-5 py-5 display-3 font-weight-boldest">
              We are the Carnegie Mellon Business Technology Group
            </h1>

            <p>
              CMU’s Business Technology Group specializes in applied technology
              that improves work, play, and education.
            </p>
            <p>
              Our mission is to provide underclassmen interested in technology
              with a strong understanding of potential career paths and offer
              them opportunities to gain hands-on experience in their areas of
              interest.
            </p>

            <p>To accomplish this, we:</p>

            <ul>
              <li>
                Foster technical knowledge through interactive workshops on
                cutting edge technology
              </li>
              <li>
                Apply technology via project committees that produce high
                quality content in web development and data science
              </li>
              <li>
                Facilitate networking by inviting our corporate partners to
                campus for insightful talks
              </li>
              <li>
                Keep members up-to-date with weekly newsletters regarding all
                things technology
              </li>
            </ul>

            <p>
              BTG, in addition to its core group, offers two specialized
              divisions: BTG Web and BTG Analytics. We keep admission into these
              divisions competitive to ensure we may best execute our mission,
              but value passion for business technology more than initial
              aptitude.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

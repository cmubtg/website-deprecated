import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

function HeaderAnnouncement() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert
        variant="normal"
        className="bg-danger rounded-0 text-center text-white p-0 pt-3 m-0"
        onClose={() => setShow(false)}
      >
        <Container>
          <Row>
            <Col>
              <p className="small">
                Sign up to join <a className="text-white" href="https://forms.gle/MCWGNKk8T7ZwNnCb8"><u>BTG Analytics or BTG Digital</u></a>!
              </p>
            </Col>
          </Row>
        </Container>
      </Alert>
    );
  }
  return "";
}

export default HeaderAnnouncement;
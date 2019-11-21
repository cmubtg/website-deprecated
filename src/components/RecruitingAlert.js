import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

function RecruitingAlert() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert
        variant="normal"
        className="border-bottom rounded-0 text-center p-0 pt-3 m-0"
        onClose={() => setShow(false)}
      >
        <Container>
          <Row>
            <Col>
              <p className="small">
                Apply to become an <a href="https://forms.gle/Duo3JxLmvFuNdCTz9">Operations Director</a> by December 3<sup>rd</sup>, 9 PM EST
              </p>
            </Col>
          </Row>
        </Container>
      </Alert>
    );
  }
  return "";
}

export default RecruitingAlert;
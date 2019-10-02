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
        className="border rounded-0 text-center p-0 pt-3 m-0"
        onClose={() => setShow(false)}
      >
        <Container>
          <Row>
            <Col>
              <p className="text-muted small">
                If you applied to a BTG division, please check your inbox later this week for further instruction.
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
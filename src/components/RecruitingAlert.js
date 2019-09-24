import React from "react";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
                Want to join a division? Apply to {" "}
                <Alert.Link className="text-danger" href="https://forms.gle/bgHkNvBDrrtarUBQ6">
                  BTG Web and BTG Analytics{" "}
                </Alert.Link> by October 1<sup>st</sup>
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
import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import useForm from "./useForm";
import axios from "axios";

// https://upmostly.com/tutorials/using-custom-react-hooks-simplify-forms
// https://github.com/axios/axios

const MailchimpForm = () => {
  const { values, handleChange, handleSubmit } = useForm(login);

  function login() {
    axios
      .post("https://us20.api.mailchimp.com/3.0/lists/17948cdb23/members/", {
        email_address: values,
        status: "subscribed"
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  return (
    <Form className="py-5 my-5" onSubmit={handleSubmit}>
      <Row>
        <Col md={9} xs={12}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              className="border-0 shadow-custom"
              placeholder="> Enter email"
              onChange={handleChange}
              value={values.email}
            />
          </Form.Group>
        </Col>
        <Col md={3} xs={12}>
          <Button
            variant="danger"
            type="submit"
            className="shadow-custom-danger"
            block
          >
            Sign up
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default MailchimpForm;

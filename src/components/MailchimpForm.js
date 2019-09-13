import React from "react";
// import useForm from "./useForm";
// import axios from "axios";

// https://upmostly.com/tutorials/using-custom-react-hooks-simplify-forms
// https://github.com/axios/axios

const MailchimpForm = () => {
  const mailchimp = {
    position: "absolute",
    left: "-5000px"
  };

  return (
    <div id="mc_embed_signup" className="py-5 my-5">
      <form
        action="https://cmu.us20.list-manage.com/subscribe/post?u=2f77ab610640a97c09a7c2193&amp;id=17948cdb23"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        novalidate
      >
        <div className="form-row">
          <div className="col-md-9">
            <div className="mc-field-group form-group">
              {/* <label for="mce-EMAIL"></label> */}
              <input
                type="email"
                placeholder="> Enter email"
                name="EMAIL"
                className="required email shadow-custom form-control border-0"
                id="mce-EMAIL"
              ></input>
            </div>
          </div>
          <div id="mce-responses" className="clear" hidden>
            <div className="response" id="mce-error-response" hidden></div>
            <div className="response" id="mce-success-response" hidden></div>
          </div>
          <div style={mailchimp} aria-hidden="true" hidden>
            <input
              type="text"
              name="b_c043d73acfb9d61f492748d7b_5ce2d05829"
              tabindex="-1"
              value=""
            ></input>
          </div>
          <div className="col-md-3">
            <input
              type="submit"
              value="Sign up"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="btn btn-danger shadow-custom-danger w-100"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );

  //   const { values, handleChange, handleSubmit } = useForm(login);

  //   let signed = false;

  //   function login() {
  //     axios
  //       .put("https://us20.api.mailchimp.com/3.0/lists/17948cdb23/members/16627583760d60c7c0cf368f37dc0ce1-us20", {
  //         email_address: values,
  //         status: "subscribed"
  //       })
  //       .then(function(response) {
  //         console.log(response);
  //         signed = true;
  //       })
  //       .catch(function(error) {
  //         console.log(error);
  //       });
  //   }

  //   if (signed === false) {
  //     return (
  //       <Form className="py-5 my-5" onSubmit={handleSubmit}>
  //         <Row>
  //           <Col md={9} xs={12}>
  //             <Form.Group controlId="formBasicEmail">
  //               <Form.Control
  //                 type="email"
  //                 className="border-0 shadow-custom"
  //                 placeholder="> Enter email"
  //                 onChange={handleChange}
  //                 value={values.email}
  //               />
  //             </Form.Group>
  //           </Col>
  //           <Col md={3} xs={12}>
  //             <Button
  //               variant="danger"
  //               type="submit"
  //               className="shadow-custom-danger"
  //               block
  //             >
  //               Sign up
  //             </Button>
  //           </Col>
  //         </Row>
  //       </Form>
  //     );
  //   } else {
  //     return (
  //       <Form className="py-5 my-5" onSubmit={handleSubmit}>
  //         <Row>
  //           <Col md={9} xs={12}>
  //             <Form.Group controlId="formBasicEmail">
  //               <Form.Control
  //                 type="email"
  //                 className="border-0 shadow-custom"
  //                 placeholder="> Enter email"
  //                 onChange={handleChange}
  //                 value={values.email}
  //               />
  //             </Form.Group>
  //           </Col>
  //           <Col md={3} xs={12}>
  //             <Button
  //               variant="danger"
  //               type="submit"
  //               className="shadow-custom-danger"
  //               block
  //               disabled
  //             >
  //               Thanks for signing up!
  //             </Button>
  //           </Col>
  //         </Row>
  //       </Form>
  //     );
  //   }
};

export default MailchimpForm;

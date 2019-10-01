import React from "react";
import Col from "react-bootstrap/Col";

function TeamPhoto(props) {
  return (
    <Col md={3} sm={6} className="pt-4">
      <div className="team-photo-wrapper shadow-custom">
        <div className="team-photo">
          <img
            src={props.imageUrl}
            alt={props.memberName}
            className="img-fluid"
          />
        </div>
        <div className="team-description text-white px-3">
          <h4 className="font-weight-bold">{props.memberName}</h4>
          <p>
            <small>{props.role}</small>
          </p>
        </div>
        <div className="team-gradient"></div>
      </div>
    </Col>
  );
};

export default TeamPhoto;
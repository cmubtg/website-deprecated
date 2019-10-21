import React from "react";
import Col from "react-bootstrap/Col";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

function TeamPhoto(props) {
  return (
    <OverlayTrigger
      placement="right"
      overlay={
        <Popover id="popover-basic">
          <Popover.Content>{props.description}</Popover.Content>
        </Popover>
      }
    >
      <Col md={3} sm={6} xs={6} className="p-0">
        <div className="team-photo-wrapper">
          <div className="team-photo">
            <img
              src={props.imageUrl}
              alt={props.memberName}
              className="img-fluid shadow-custom"
            />
          </div>
          <div className="team-description px-3">
            <h4 className="font-weight-bold">{props.memberName}</h4>
            <p>
              <small>{props.role}</small>
            </p>
          </div>
          <div className="team-gradient"></div>
        </div>
      </Col>
    </OverlayTrigger>
  );
}

export default TeamPhoto;

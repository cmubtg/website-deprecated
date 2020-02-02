import React from "react";

function TeamDescription(props) {
  return (
    <div>
      <h6 className="font-weight-bold">
        {props.memberName}, class of {props.classYear}
      </h6>
      <p>{props.description}</p>
    </div>
  );
}

export default TeamDescription;

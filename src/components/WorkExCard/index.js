import React from "react";
import InfoBadge from "../InfoBadge";
import "./index.scss";

export default props => {
  const { to = "present", from, companyName, description, role } = props;
  if (!companyName) {
    return null;
  }
  let descriptionItems = null;
  if (description) {
    if (description.constructor === Array && description.length) {
      descriptionItems = description.map(item => <li>{item}</li>);
    } else {
      descriptionItems = description;
    }
  }
  return (
    <div className="workCard">
      <InfoBadge
        badgeText={`${from} - ${to || ""}`}
        badgeClassName="workCard__badge"
      />
      {(role && <div className="workCard__role">{role} </div>) || null}
      {(companyName && (
        <div className="workCard__company">{companyName}</div>
      )) ||
        null}
      {descriptionItems && (
        <div className="workCard__description"> {descriptionItems} </div>
      )}
      <div className="workCard__divider"></div>
    </div>
  );
};

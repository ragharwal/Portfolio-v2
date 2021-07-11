import React from "react";
import "./index.scss";

export default props => {
  const { aboutBadgeText, aboutBadgeSubtext, className, aboutBadgeClassName } = props;
  if (!aboutBadgeText) {
    return null;
  }
  return (
    <div className={`aboutBadgeWrapper ${className || ""}`}>
      <span className={`aboutBadgeWrapper__text ${aboutBadgeClassName || ""}`}>
        {aboutBadgeText}
      </span>
      {aboutBadgeSubtext && (
        <span className="aboutBadgeWrapper__subtext"> {aboutBadgeSubtext}</span>
      )}
    </div>
  );
};

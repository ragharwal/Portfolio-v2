import React from "react";
import "./index.scss";

export default props => {
  const { badgeText, badgeSubtext, className, badgeClassName } = props;
  if (!badgeText) {
    return null;
  }
  return (
    <div className={`badgeWrapper ${className || ""}`}>
      <span className={`badgeWrapper__text ${badgeClassName || ""}`}>
        {badgeText}
      </span>
      {badgeSubtext && (
        <span className="badgeWrapper__subtext"> {badgeSubtext}</span>
      )}
    </div>
  );
};

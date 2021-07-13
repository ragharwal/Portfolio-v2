import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

export default () => {
  return (
    <div className="footerWrapper">
      <a
        href="#"
        download="RaghavAgarwal.pdf"
        className="footerWrapper__btn"
      >
        Download CV
        <FontAwesomeIcon icon={faDownload} />
      </a>
    </div>
  );
};

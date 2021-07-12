import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./index.scss";

export default (props) => {
  return (
    <div className="socialLinks">
      <a
        href="https://www.linkedin.com/in/sanyam-mehendiratta-2b0640190/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          className="socialLinks__icons"
          size="1x"
        />
      </a>
      <a
        href="https://github.com/Sanyam2000-dot"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faGithub}
          className="socialLinks__icons"
          size="1x"
        />
      </a>
      <a
        href="https://www.instagram.com/sanyam.mehendiratta/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          className="socialLinks__icons"
          size="1x"
        />
      </a>
      <a
        href="https://twitter.com/__waitforit___"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faTwitter}
          className="socialLinks__icons"
          size="1x"
        />
      </a>
    </div>
  );
};

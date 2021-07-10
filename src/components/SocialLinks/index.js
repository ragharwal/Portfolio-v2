import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./index.scss";

export default (props) => {
  return (
    <div className="socialLinks">
      <a
        href="https://www.linkedin.com/in/ragharwal/"
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
        href="https://github.com/ragharwal"
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
        href="https://www.instagram.com/raghrwal/"
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
        href="https://www.youtube.com/channel/UCkrbXtTt7qJaHuNibvMCyOA"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faYoutube}
          className="socialLinks__icons"
          size="1x"
        />
      </a>
    </div>
  );
};

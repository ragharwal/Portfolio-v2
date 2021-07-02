import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLaptopCode,
  faBriefcase,
  faGraduationCap
} from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

const handleTabClick = (clicked, props) => {
  const { currentActive, changeTab = () => {} } = props;
  if (
    clicked &&
    currentActive &&
    clicked.toLowerCase() !== currentActive.toLowerCase()
  ) {
    changeTab(clicked.toLowerCase());
  }
};

export default props => {
  const { currentActive } = props;
  return (
    <div className="navTab">
      <div
        className={`navTab__item ${
          currentActive === "about" ? " navTab__selected" : ""
        }`}
        onClick={() => {
          handleTabClick("about", props);
        }}
      >
        <FontAwesomeIcon icon={faUser} />
        <div className="navTab__text">About</div>
      </div>
      <div
        className={`navTab__item ${
          currentActive === "skills" ? " navTab__selected" : ""
        }`}
        data-state="skills"
        onClick={() => {
          handleTabClick("skills", props);
        }}
      >
        <FontAwesomeIcon icon={faLaptopCode} />
        <div className="navTab__text">Skills</div>
      </div>
      <div
        className={`navTab__item ${
          currentActive === "experience" ? " navTab__selected" : ""
        }`}
        onClick={() => {
          handleTabClick("experience", props);
        }}
      >
        <FontAwesomeIcon icon={faBriefcase} data-state="experience" />
        <div className="navTab__text">Experience</div>
      </div>
      <div
        className={`navTab__item ${
          currentActive === "education" ? " navTab__selected" : ""
        }`}
        onClick={() => {
          handleTabClick("education", props);
        }}
      >
        <FontAwesomeIcon icon={faGraduationCap} data-state="education" />
        <div className="navTab__text">Education</div>
      </div>
    </div>
  );
};

import React, { Component } from "react";
import SocialLinks from "../../components/SocialLinks";
import ProfileCardFooter from "../../components/ProfileCardFooter";
import ProfileInfo from "../../components/ProfileInfo";
import InfoBadge from "../../components/InfoBadge";
import AboutBadge from "../../components/AboutBadge";
import ProgressBar from "../../components/ProgressBar";
import WorkExCard from "../../components/WorkExCard";
import ProjectCard from "../../components/ProjectCard";
import NavigationTab from "../../components/NavigationTab";
import { detectMobile } from "../../utils/helper";
import "./index.scss";
import Highlights from "../../components/Highlights";
import Transition from "../../components/TextTransition/Transition";

const data = {
  about: {
    sections: [
      {
        heading: "About Me",
        topSection: {
          heading: "I am Raghav Agarwal",
          text: "I am Raghav Agarwal",
        },
        bottomSection: {
          heading: "",
          list: [
            {
              Component: AboutBadge,
              props: {
                aboutBadgeText: "Languages:",
                aboutBadgeSubtext: "C/C++ , Java, Javascript and Python",
              },
            },
            {
              Component: AboutBadge,
              props: {
                aboutBadgeText: "Frameworks:",
                aboutBadgeSubtext: "Node JS, React JS and DJango",
              },
            },
            {
              Component: AboutBadge,
              props: {
                aboutBadgeText: "Database:",
                aboutBadgeSubtext: "MySQL, Oracle, SQLite and MongoDB",
              },
            },
            {
              Component: AboutBadge,
              props: {
                aboutBadgeText: "Software:",
                aboutBadgeSubtext: "Atom, VSCode, Sublime and Intellij Idea",
              },
            },
          ],
        },
      },
      {
        heading: "Highlights",
        topSection: {
          Component: Highlights,
        },
      },
    ],
  },
  skills: {
    sections: [
      {
        heading: "Projects",
        bottomSection: {
          list: [
            {
              Component: ProjectCard,
              props: {
                name: "SNAPPPRR",
                description:
                  "A photography webpage that is build in a grid-filter form to display images. ",
                features: ["Snappprr", "Grid Filter"],
                url: "http://facebook.com",
              },
            },
          ],
        },
      },
    ],
  },
  experience: {
    sections: [
      {
        heading: "Work Experience",
        bottomSection: {
          list: [
            {
              Component: WorkExCard,
              props: {
                from: "April, 2021",
                to: "Present",
                companyName: "ThinkBig Data Community",
                role: "Technical Head",
                description:
                  "Developed an e-commerce consumer facing website template.",
              },
            },
            {
              Component: WorkExCard,
              props: {
                from: "Jan, 2021",
                to: "Present",
                companyName: "National Service Scheme",
                role: "Core Committee Member",
                description:
                  "Developed an e-commerce consumer facing website template.",
              },
            },
            {
              Component: WorkExCard,
              props: {
                from: "Oct, 2020",
                to: "Present",
                companyName: "Open Community",
                role: "Lead Student Developer",
                description:
                  "Developed an e-commerce consumer facing website template.",
              },
            },
            {
              Component: WorkExCard,
              props: {
                from: "Jan, 2020",
                to: "Present",
                companyName: "MIDAS",
                role: "Member Secretory",
                description:
                  "Developed an e-commerce consumer facing website template.",
              },
            },
          ],
        },
      },
    ],
  },
  education: {
    sections: [
      {
        heading: "Education",
        bottomSection: {
          list: [
            {
              Component: WorkExCard,
              props: {
                to: "Present",
                from: "July, 2019",
                role: "B.Tech (Hons) Computer Science and Engineering - Big Data",
                companyName:
                  "University of Petroleum and Energy Studies, Dehradun",
                description: [
                  "GPA: 8.81/10",
                  "Lead Student Developer at Open Community",
                  "Technical Head at ThinkBig Data Community",
                  "Core Committee Member at National Service Scheme",
                ],
              },
            },
            {
              Component: WorkExCard,
              props: {
                to: "March, 2019",
                from: "April, 2017",
                role: "Senior Secondary School",
                companyName: "Asha Modern School, Saharanpur",
                description: [
                  "Percentage: 91.1%",
                  "Member at Discipline Committee",
                  "Prefect at Marsahal Neil House",
                ],
              },
            },
            {
              Component: WorkExCard,
              props: {
                to: "March, 2017",
                from: "April, 2015",
                role: "Secondary School",
                companyName: "Asha Mordern School, Saharanpur",
                description: [
                  "CGPA: 7.8/10",
                  "Member at Prithvi Mitra Society",
                  "Assistant Prefect at Marsahal Neil House",
                ],
              },
            },
          ],
        },
      },
    ],
  },
};

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "about",
    };
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(tab) {
    if (tab) {
      this.setState({ selectedTab: tab });
    }
    if (detectMobile()) {
      window.scrollTo(0, 450);
    }
  }

  render() {
    const { selectedTab } = this.state;
    return (
      <div className="container">
        <div className="wrapper">
          <NavigationTab
            currentActive={selectedTab}
            changeTab={this.changeTab}
          />
          <div className="profileCard">
            <div className="profileCard__imgWrapper">
              <img src="/header.png" alt="" loading="lazy" />
            </div>
            <div className="profileCard__profileImg">
              <img src="/RaghavAgarwalUPES.jpg" loading="lazy" alt="" />
            </div>
            <div className="profileCard__infoWrapper">
              <div className="profileCard__infoWrapper--heading">
                Raghav Agarwal
              </div>
              <div className="profileCard__infoWrapper--subheading">
                <div style={{ textAlign: "center" }}>
                  <Transition />
                </div>
              </div>
              <SocialLinks />
              <ProfileCardFooter />
            </div>
          </div>
          <ProfileInfo data={data[selectedTab]} />
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import SocialLinks from "../../components/SocialLinks";
import ProfileCardFooter from "../../components/ProfileCardFooter";
import ProfileInfo from "../../components/ProfileInfo";
import AboutBadge from "../../components/AboutBadge";
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
          text: "Plenteous and hadworking full stack developer with interest in open source and data science. Always ready to take challenges and lead my way thorugh it. Seeking to develop my carrer as a Software Developer. Passionate about developing scaled web applications.",
        },
        bottomSection: {
          heading: "",
          list: [
            {
              Component: AboutBadge,
              props: {
                aboutBadgeText: "Languages:",
                aboutBadgeSubtext: "C/C++ , Python, Javascript and Dart",
              },
            },
            {
              Component: AboutBadge,
              props: {
                aboutBadgeText: "Frameworks",
                aboutBadgeSubtext: "Reactjs, Nodejs, Express and Flutter",
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
                aboutBadgeSubtext: "VSCode, Android Studio and Sublime",
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
                name: "OPEN WEB",
                description:
                  "Open Web is basically the community website which gives information about the organisation, projects, events and team members. Purely made in reactjs.",
                features: [
                  "Displays all the active projects on the projects page using GitHub API",
                  "Upcoming features include commits by particular contributor and separate dashboard for admin and users.",
                ],
                url: "https://upes-open.org/",
              },
            },
            {
              Component: ProjectCard,
              props: {
                name: "IMAGE PICKER",
                description:
                  "Image Picker is a app made using flutter framework which can capture the image using built in camera or any external camera to the phone and shows it to the main screen. Moreover we can alse select image from the local storage and displays it on the main screen.",
                features: [
                  "Displays the image by selecting from the local storage on the main screen.",
                  "Captures the image using the built in camera and displays it on the main screen.",
                ],
                url: "https://github.com/Sanyam2000-dot/Image_picker",
              },
            },
            {
              Component: ProjectCard,
              props: {
                name: "OpenCV TUTORIALS",
                description:
                  "OpenCV TUTORIALS basically consist of all the small projects that can be made using openCV python. Great resource for pyhton beginners as well intermediates. This public repository welcomes all open source enthusiasts and help them to start their open source journey.",
                features: [
                  "Multiple projects including live camera, road lines detector and face detection.",
                  "It also include projects like invisible cloak which can make you invisible by using particular coloured cloak",
                ],
                url: "https://github.com/Sanyam2000-dot/Open-cv-tutorials",
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
                from: "Feb, 2021",
                to: "May, 2021",
                companyName: "Cerebro Kids",
                role: "Web Developer",
                description:
                  "Enhanced and managed their offical website using HTML, CSS and JS, helped SEO team in improving the overall rankings, added new pages for Financial Literacy Olympiad and gave a fresh look to the login page of their CMS.",
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
                  "Devised the app named AUTO-INFIRMARY using flutter framework which helped students and faculties in case of any medical emergency, implemented authentication using Nodejs for Open Blog Platform, developed the official website of OPEN community using Reactjs.",
              },
            },
            {
              Component: WorkExCard,
              props: {
                from: "Sept, 2020",
                to: "Present",
                companyName: "Hypervision",
                role: "Associate Technical Head",
                description:
                  "Planned and headed a successful technical event named DECODE-THE-CINECODE. Developing and managing the official webiste of the community.",
              },
            },
            {
              Component: WorkExCard,
              props: {
                from: "Aug, 2020",
                to: "Oct, 2020",
                companyName: "HakinCodes",
                role: "Partcipant",
                description:
                  "Got introduced to the open source world and made my first pr.Learned about git in depth and made several valuable contributions. ",
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
                role: "B.Tech (Hons) Computer Science and Engineering",
                companyName:
                  "University of Petroleum and Energy Studies, Dehradun",
                description: [
                  "GPA: 8.81/10",
                  "Lead Student Developer at Open Community",
                  " Associate Technical Head at Hypervision",
                  " Technical Core Committee Member at National Service Scheme",
                ],
              },
            },
            {
              Component: WorkExCard,
              props: {
                to: "March, 2019",
                from: "April, 2017",
                role: "Senior Secondary School",
                companyName: "Scholar English Academy, Surat",
                description: [
                  "Percentage: 80%",
                  "Member of the cricket and debate team",
                  "Participated in various Maths and Physics olympiads",
                ],
              },
            },
            {
              Component: WorkExCard,
              props: {
                to: "March, 2017",
                from: "April, 2015",
                role: "Secondary School",
                companyName: "Delhi Public School, Surat",
                description: [
                  "CGPA: 10/10",
                  "Won best delegate award in DPSSMUN",
                  "Particpated in various football and basketball competitions",
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
              <img src="/header2.png" alt="" loading="lazy" />
            </div>
            <div className="profileCard__profileImg">
              <img src="/SanyamMehendiratta.jpg" loading="lazy" alt="" />
            </div>
            <div className="profileCard__infoWrapper">
              <div className="profileCard__infoWrapper--heading">
                Sanyam Mehendiratta
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

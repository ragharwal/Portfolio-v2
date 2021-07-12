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
          text: "Seeking to develop a career as a Data Scientist to assist pharmaceuticals in identifying flaws and propelling the company to new heights. ",
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
                aboutBadgeSubtext: "Reactjs, Nodejs  and Flutter",
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
                aboutBadgeSubtext: "VSCode, Android Studio, Sublime",
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
                url: "https://snappprr.web.app",
              },
            },
            {
              Component: ProjectCard,
              props: {
                name: "Mystical Reader",
                description:
                  "This website is for client Mystical Reader; Customized according to client needs.",
                features: ["Snappprr", "Grid Filter"],
                url: "http://mysticalreader.herokuapp.com/",
              },
            },
            {
              Component: ProjectCard,
              props: {
                name: "Herbal Formulations",
                description:
                  "This website is for M/S Herbal Formulations; Customized according to client needs.",
                features: ["Snappprr", "Grid Filter"],
                url: "https://herbalformulations.co",
              },
            },
            {
              Component: ProjectCard,
              props: {
                name: "Chander Prakash Bhatia And Sons",
                description:
                  "This website is for M/S Chander Prakash Bhatia And Sons. This site has been customized according to client needs. ",
                features: ["Snappprr", "Grid Filter"],
                url: "https://chanderprakashbhatiaands-46ca9.web.app/",
              },
            },
            {
              Component: ProjectCard,
              props: {
                name: "Url Shortner",
                description:
                  "A webpage that can shorten any site URL and show how many times it is opened with a short URL.  ",
                features: ["Snappprr", "Grid Filter"],
                url: "https://github.com/ragharwal/URL-Shortener",
              },
            },
            {
              Component: ProjectCard,
              props: {
                name: "Open Blog",
                description: "Designed the backend for them under collab 1009 ",
                features: ["Snappprr", "Grid Filter"],
                url: "https://github.com/upes-open/Open-Blog",
              },
            },
            {
              Component: ProjectCard,
              props: {
                name: "Weather Clock",
                description: "A clock that displays the time and temperature. ",
                features: ["Snappprr", "Grid Filter"],
                url: "https://github.com/ragharwal/Weather-Clock",
              },
            },
            {
              Component: ProjectCard,
              props: {
                name: "Tic Tac Toe",
                description: "Play the classic Tic-Tac-Toe game. ",
                features: ["Snappprr", "Grid Filter"],
                url: "https://github.com/ragharwal/Tic-Tac-Toe",
              },
            },
            {
              Component: ProjectCard,
              props: {
                name: "Dictionary App",
                description:
                  "An offline dictionary app in which user can search the word meaning.  ",
                features: ["Snappprr", "Grid Filter"],
                url: "https://github.com/ragharwal/Dictionary-App",
              },
            },
            {
              Component: ProjectCard,
              props: {
                name: "Whatsapp Automation",
                description:
                  "WhatsApp automation will automatically send a text to your friends, colleague, etc.   ",
                features: ["Snappprr", "Grid Filter"],
                url: "https://github.com/ragharwal/whatsapp-automation",
              },
            },
            {
              Component: ProjectCard,
              props: {
                name: "Email Bot",
                description:
                  "Email bot is going to make your life easier. You need to speak the name of the person you want to send an email. And it will automatically ask you the subject and body of the email.  ",
                features: ["Snappprr", "Grid Filter"],
                url: "https://github.com/ragharwal/Email-Bot",
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

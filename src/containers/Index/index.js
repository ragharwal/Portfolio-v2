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
                description:
                  "Designed the backend for them under collab 1009 ",
                features: ["Snappprr", "Grid Filter"],
                url: "https://github.com/upes-open/Open-Blog",
              },
            },
            {
              Component: ProjectCard,
              props: {
                name: "Weather Clock",
                description:
                  "A clock that displays the time and temperature. ",
                features: ["Snappprr", "Grid Filter"],
                url: "https://github.com/ragharwal/Weather-Clock",
              },
            },
            {
              Component: ProjectCard,
              props: {
                name: "Tic Tac Toe",
                description:
                  "Play the classic Tic-Tac-Toe game. ",
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
                from: "April, 2021",
                to: "Present",
                companyName: "ThinkBig Data Community",
                role: "Technical Head",
                description:
                  "Responsible for developing and maintaining the website, as well as assigning tasks to committee members and ensuring that everything runs well.",
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
                "Capture key moments through my lens in order to narrate a story to others.",
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
                  "For collab 1001 as well as 1009 and Responsible for developing and maintaining the website.",
              },
            },
            {
              Component: WorkExCard,
              props: {
                from: "Jan, 2020",
                to: "Sep, 2020",
                companyName: "MIDAS",
                role: "Member Secretory",
                description:
                  "Responsible for planning and convening Board meetings, as well as keeping track of the events. ",
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

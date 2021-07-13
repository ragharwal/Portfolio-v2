import React, { Component } from "react";
import SocialLinks from "../../components/SocialLinks";
// import ProfileCardFooter from "../../components/ProfileCardFooter";
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
                aboutBadgeSubtext: "C/C++, Javascript, and Python",
              },
            },
            {
              Component: AboutBadge,
              props: {
                aboutBadgeText: "Frameworks:",
                aboutBadgeSubtext: "Express JS, React JS (lib), and DJango",
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
                aboutBadgeSubtext: "Atom, Visual Studio Code, and Sublime",
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
        heading: "Top Projects",
        bottomSection: {
          list: [
            {
              Component: ProjectCard,
              props: {
                name: "OPEN WEB",
                description:
                  "Open Web is basically the community website which give information about the organisation, projects, events and team members. Purely made in React.",
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
                name: "Email Bot",
                description:
                  "Email bot is going to make your life easier. You need to speak the name of the person you want to send an email. And it will automatically ask you the subject and body of the email.  ",
                features: ["Libraries used smtplib, speech_recognition and, pyttsx3", 
                "Upcoming features include an app which will ask you the necessary information and store it automatically."],
                url: "https://github.com/ragharwal/Email-Bot",
              },
            },
            {
              Component: ProjectCard,
              props: {
                name: "ThinkBig Data Web App",
                description:
                  "Devised a Web App for the Community that includes features such as an Automatic Certificate Generator, Blogging, and mailing to users for new Community Newsletter, Event, and Blog. ",
                features: ["Tech Stack Used: Node JS, Express JS, and MongoDB", "It will be made public soon."],
                url: "https://thinkbigdata.co.in/",
              },
            },
            {
              Component: ProjectCard,
              props: {
                name: "Dictionary App",
                description:
                  "A dictionary app that allows the user to look up the definition of any word. ",
                features: ["Command-Line Interface",
                 "Obtain the meaning of the word in a few milliseconds."],
                url: "https://github.com/ragharwal/Dictionary-App",
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
                  "Responsible for developing and maintaining the official website of the community, as well as assigning tasks to committee members and ensuring that everything runs well.",
              },
            },
            {
              Component: WorkExCard,
              props: {
                from: "Jan, 2021",
                to: "Present",
                companyName: "National Service Scheme",
                role: "Photography Core Committee Member",
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
                  "Implemented backend using Node JS for Open Blog (COLLAB 1009) and developing the official website of OPEN community using MERN (COLLAB 1001).",
              },
            },
            {
              Component: WorkExCard,
              props: {
                from: "Jan, 2020",
                to: "Sep, 2020",
                companyName: "UPES International Conference",
                role: "Member Secretory",
                description:
                  "Responsible for planning and convening Board meetings, as well as verified and secured 1000+ universities professor's data in Mircosoft Excel for the Conference on Machine Intelligence and Data Science Applications. ",
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
                  "Member of the AMS Discipline Committee",
                  "Prefect of the AMS Marsahal Neil House",
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
                  "Member of the Prithvi Mitra club",
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
              {/* <ProfileCardFooter /> */}
            </div>
          </div>
          <ProfileInfo data={data[selectedTab]} />
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import SocialLinks from "../../components/SocialLinks";
import ProfileCardFooter from "../../components/ProfileCardFooter";
import ProfileInfo from "../../components/ProfileInfo";
import InfoBadge from "../../components/InfoBadge";
import ProgressBar from "../../components/ProgressBar";
import WorkExCard from "../../components/WorkExCard";
import NavigationTab from "../../components/NavigationTab";
import { detectMobile } from "../../utils/helper";
import "./index.scss";
import Highlights from "../../components/Highlights";

const data = {
  about: {
    sections: [
      {
        heading: "About Me",
        topSection: {
          heading: "",
          text: "description",
        },
        bottomSection: {
          heading: "",
          list: [
            {
              Component: InfoBadge,
              props: { badgeText: "Age", badgeSubtext: 21 },
            },
            {
              Component: InfoBadge,
              props: {
                badgeText: "Residence",
                badgeSubtext: "UttarPradesh, India",
              },
            },

            // {
            //   Component: InfoBadge,
            //   props: {
            //     badgeText: "Current Role",
            //     badgeSubtext: "Developer",
            //   },
            // },
            {
              Component: InfoBadge,
              props: {
                badgeText: "Email",
                badgeSubtext: "xyz@gmail.com",
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
        heading: "Skills",
        bottomSection: {
          list: [
            {
              Component: ProgressBar,
              props: { name: "Javascript", highLight: 90 },
            },
            {
              Component: ProgressBar,
              props: { name: "React JS", highLight: 85 },
            },
            {
              Component: ProgressBar,
              props: { name: "Redux JS", highLight: 75 },
            },
            {
              Component: ProgressBar,
              props: { name: "Node JS", highLight: 80 },
            },
            {
              Component: ProgressBar,
              props: { name: "HTML", highLight: 70 },
            },
            {
              Component: ProgressBar,
              props: { name: "CSS", highLight: 65 },
            },
            { Component: ProgressBar, props: { name: "Nginx", highLight: 80 } },
            {
              Component: ProgressBar,
              props: { name: "Web Performace", highLight: 75 },
            },
            { Component: ProgressBar, props: { name: "Redis", highLight: 65 } },
            {
              Component: ProgressBar,
              props: { name: "AWS", highLight: 60 },
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
                role: "Intern",
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
                from: "May, 2019",
                role: "Bacherlors of Technology, Computer Science and Engineering",
                companyName: "University of Petroleum and Energy Studies",
                description: [
                  "CGPA: 9.08/10",
                  "Lead Student Developer at UPES-OPEN | Open source organisation",
                  "Associate Technical Head of UPES-Hypersvision",
                ],
              },
            },
            {
              Component: WorkExCard,
              props: {
                to: "March, 2019",
                from: "March, 2017",
                role: "Senior Secondary School",
                companyName: "Scholar English Academy",
                description: ["Scored 80%", "Part of cricket and debate team"],
              },
            },
            {
              Component: WorkExCard,
              props: {
                to: "March, 2017",
                from: "March, 2015",
                role: "Secondary School",
                companyName: "Delhi Public School Surat",
                description: [
                  "CGPA: 10/10",
                  "Won several prizes for debate and art competitions",
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
              <img src="/profile_img.jpg" loading="lazy" alt="" />
            </div>
            <div className="profileCard__infoWrapper">
              <div className="profileCard__infoWrapper--heading">
                Sanyam Mehendiratta
              </div>
              <div className="profileCard__infoWrapper--subheading">
                Software Developer
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

import React from "react";
import MeetOurAdvisors from "./MeetOurAdvisor";
import MeetOurTeam from "./MeetOurTeam";
import OurInvestors from "./OurInvestors";
import WhoWeAre from "./WhoWeAre";
import "./AboutTab.scss";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

function AboutTab() {
  return (
    <>
      <Tabs
        defaultActiveKey="who"
        id="uncontrolled-tab-example"
        className="m-3"
      >
        <Tab eventKey="who" title="Who We Are">
          <WhoWeAre />
        </Tab>
        <Tab eventKey="team" title="Meet Our Team">
          <MeetOurTeam />
        </Tab>
        <Tab eventKey="advisors" title="Meet Our Advisors">
          <MeetOurAdvisors />
        </Tab>
        <Tab eventKey="investors" title="Our Investors">
          <OurInvestors />
        </Tab>
      </Tabs>
    </>
  );
}

export default AboutTab;

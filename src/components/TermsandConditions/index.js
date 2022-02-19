import React, { useState, useEffect } from "react";
import Style from "./TermsandConditions.module.scss";
import { useSelector, useDispatch } from "react-redux";
import Assets from "../Layout/Assets";
import Container from "react-bootstrap/Container";
import Termsofuse from "./TermsofUse/Termsofuse";
import PrivacyPolicy from "../PrivacyPolicy";
import { Link, useLocation,useParams } from "react-router-dom";
function TermsandConditions({typeId}) {
  let location = useLocation();

  const [TermsInsideIndia, setTerms] = useState(true);
  const [activeTab, setActiveTab] = useState(typeId);

  useEffect(() => {
   
    console.log(typeId);
  
  }, []);
  

  return (
    <div className={Style.TermsandConditions_Main}>
      <div className={Style.TermsandConditions_Top}>
        <Container>
          <h1 className={Style.Top_Head}>Legal</h1>
          <p>
            {/* Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy <br /> eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam. */}
          </p>
        </Container>
      </div>
      <div className={Style.TermsandConditions_Tabs_main}>
        <Container>
          <div className={Style.TermsandConditions_Tabs}>
            <h6
              className={`${Style.Tab} ${
                activeTab == "terms" ? Style.activeClass : ""
              }`}
              onClick={() => setActiveTab("terms")}
            >
              Terms of Use
            </h6>
            <h6
              className={Style.Tab}
              onClick={() => setActiveTab("privacy")}
              className={`${Style.Tab} ${
                activeTab == "privacy" ? Style.activeClass : ""
              }`}
            >
              Privacy Policy
            </h6>
          </div>
        </Container>
      </div>
      <div>
        {activeTab == "terms" ? (
          <Termsofuse TermsInsideIndia={TermsInsideIndia} />
        ) : (
          <PrivacyPolicy />
        )}
      </div>
    </div>
  );
}

export default TermsandConditions;

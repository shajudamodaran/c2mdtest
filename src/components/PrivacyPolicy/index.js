import React, { useState } from "react";
import InsideIndia from "./InsideIndia";
import OutSideIndia from "./OutSideIndia";
import Style from "./PrivacyPolicy.module.scss";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
function PrivacyPolicy() {
  const [insideIndia, setTerms] = useState(true);
  return (
    <Container>
      <div className={Style.PrivacyPolicy_main}>
        <div className={Style.btn_wrapper}>
          <Button
            variant="secondary"
            className={`${Style.btn_1} ${insideIndia ? Style.active_btn1 : ""}`}
            onClick={() => setTerms(true)}
          >
            For patients from India
          </Button>
          <Button
            variant="secondary"
            className={`${Style.btn_1} ${
              !insideIndia ? Style.active_btn1 : ""
            }`}
            onClick={() => setTerms(false)}
          >
            Rest of the World
          </Button>
        </div>
        {insideIndia ? <InsideIndia /> : <OutSideIndia />}
      </div>
    </Container>
  );
}

export default PrivacyPolicy;

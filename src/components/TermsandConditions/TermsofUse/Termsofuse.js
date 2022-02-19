import React, { useState } from "react";
import Style from "./TermsofUse.module.scss";
import Button from "react-bootstrap/Button";
import Assets from "../../Layout/Assets";
import Container from "react-bootstrap/Container";
import InsideIndia from "./InsideIndia";
import OutSideIndia from "./OutsideIndia";
function Termsofuse() {
  const [insideIndia, setTerms] = useState(true);

  return (
    <Container>
      <div className={Style.termsofUse}>
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
            For patients from Rest of the World
          </Button>
        </div>
        {insideIndia ? <InsideIndia /> : <OutSideIndia />}
      </div>
    </Container>
  );
}

export default Termsofuse;

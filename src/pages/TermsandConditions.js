import React from "react";
import LoginLayout from "../components/Layout/LoginLayout";
import TermsandConditions from "../components/TermsandConditions";
function TermsAndConditionsPage({location}) {
  return (
    <LoginLayout>
      <TermsandConditions />
    </LoginLayout>
  );
}

export default TermsAndConditionsPage;

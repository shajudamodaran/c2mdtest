import React from "react";
import Row from 'react-bootstrap/Row';
import Style from "./SignupLayout.module.scss";
import Assets from "../Assets";
import classNames from 'classnames'

function SignupLayout({ children }) {
  const formLayout = classNames(Style.signup_form_login, 'col-md-9')

  return (
      <div className={Style.signup_topSection}>
          <div className={Style.signup_div}>
              <div>{children}</div>
          </div>
      </div>
  );
}

export default SignupLayout;

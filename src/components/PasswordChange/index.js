import React from "react";
import Style from "./Change.module.scss";
import SignupLayout from "../Layout/SignupLayout";
import Assets from "../Layout/Assets";

function ResetPassword() {
  return (
    <SignupLayout>
      <form className={Style.change_form_align}>
        <img src={Assets.changed} />
        <h2 className={Style.change_header_align}>Password changed</h2>

        <div className="form-group">
          <p className={Style.change_form_label}>
            Your password has been changed successfully.
          </p>
        </div>

        <div>
          <p></p>
          <p className={Style.change_checkbox_text}>
            <a href="/signin">Click here</a> sign in
          </p>
        </div>
      </form>
    </SignupLayout>
  );
}

export default ResetPassword;

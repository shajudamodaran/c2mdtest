import React, { useEffect, useState } from "react";
import Style from "./Confirm.module.scss";
import Button from "react-bootstrap/Button";
import SignupLayout from "../Layout/SignupLayout";
import { useHistory, useLocation } from "react-router-dom";
import { fetchForgotPassword } from "../../actions/ForgotPasswordAction";
import { useDispatch } from "react-redux";
import { Formik, Field, ErrorMessage } from "formik";
import Form from "react-bootstrap/Form";

function ResetPassword() {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

  const userId = location.state.userId;

  const submit_data = (values) => {
    dispatch(fetchForgotPassword({ values: values, userId: userId }));
  };

  return (
    <SignupLayout>
      <Formik
        validate={(values) => {
          let errors = {};

          if (values.newPassword === "") {
            errors.newPassword = "Password is required";
          } else if (values.newPassword.length < 8) {
            errors.newPassword =
              "A secure password consists of minimum 8 characters including 1 special character, 1 CAPITAL letter and 1 small letter";
          }

          if (values.confirmPassword === "") {
            errors.confirmPassword = "Confirm Password is required";
          } else if (values.confirmPassword != values.newPassword) {
            errors.confirmPassword =
              "The passwords you entered are not matching. Please try again";
          }
          return errors;
        }}
        initialValues={{ newPassword: "", confirmPassword: "" }}
        onSubmit={(values) => {
          history.push({
            pathname: "/passwordchange",
          });
          submit_data(values);
        }}
      >
        {({ touched, errors, handleSubmit }) => (
          <Form className={Style.reset_form_align} onSubmit={handleSubmit}>
            <h2 className={Style.reset_header_align}>Reset password</h2>

            <div className="form-group">
              <label className={Style.reset_form_label}>New Password</label>
              <br />
              <p>
                <Field
                  type="password"
                  name="newPassword"
                  className={
                    Style.reset_input_field +
                    " " +
                    `${
                      touched.newPassword && errors.newPassword
                        ? "is-invalid"
                        : ""
                    }`
                  }
                  placeholder="Enter Password"
                />
                <ErrorMessage
                  component="div"
                  name="newPassword"
                  className={Style.reset_form_error_msg}
                />
              </p>
            </div>

            <div className="form-group">
              <label className={Style.reset_form_label}>
                Confirm New Password
              </label>
              <br />
              <p>
                <Field
                  type="password"
                  name="confirmPassword"
                  className={
                    Style.reset_input_field +
                    " " +
                    `${
                      touched.confirmPassword && errors.confirmPassword
                        ? "is-invalid"
                        : ""
                    }`
                  }
                  placeholder="Enter Password"
                />
                <ErrorMessage
                  component="div"
                  name="confirmPassword"
                  className={Style.reset_form_error_msg}
                />
                <p className={Style.signin_password_para}>
                  *Password Must Be 8 Characters Minimum
                </p>
              </p>
            </div>

            <div className="col-md-12">
              <Button
                variant="outline-secondary"
                className={Style.signup_continue_btn}
                type="submit"
                disabled={Object.keys(errors).length > 0}
                // onClick={() => history.push("/passwordchange")}
              >
                Continue
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </SignupLayout>
  );
}

export default ResetPassword;

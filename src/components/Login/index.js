import React from "react";
import Row from "react-bootstrap/Row";
import Style from "./Login.module.scss";
import Button from "react-bootstrap/Button";
import SignupLayout from "../Layout/SignupLayout";
import { useFormik } from "formik";
import { Col } from "react-bootstrap";

//import { Formik, Field, Form, ErrorMessage } from "formik";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";

function Login() {
  let history = useHistory();

  const validate = (values) => {
    const errors = {};

    if (!values.fullName) {
      errors.fullName = "Required";
    } else if (values.fullName.length > 15) {
      errors.fullName = "Must be 15 characters or less";
    }

    // if (!values.lastName) {
    //   errors.lastName = 'Required';
    // } else if (values.lastName.length > 20) {
    //   errors.lastName = 'Must be 20 characters or less';
    // }

    // if (!values.email) {
    //   errors.email = 'Required';
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //   errors.email = 'Invalid email address';
    // }
    // if (countryName =="") {
    //   errors.country = 'Required';
    // }
    // if (!values.address) {
    //   errors.address = 'Required';
    // }
    // if (!values.phone) {
    //     errors.phone = 'Required';
    //   }
    // if (!values.city) {
    //   errors.zipcode = 'Required';
    // }
    // return errors;
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
    },
    validate,
    onSubmit: (values) => {},
  });


  const responseGoogle = (response) => {};

  
  return (
    <SignupLayout>
      <form className={Style.login_form_align} onSubmit={formik.handleSubmit}>
        <h2 className={Style.login_header_align}>Log in to your account</h2>

        <div className="form-group">
          <p></p>
          <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Sign in with google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            className={Style.login_google_button}
          />
        </div>
        <div>
          <p></p>
          <p className={Style.login_text_option}>Or</p>
        </div>
        <div className="form-group">
          <label className={Style.login_form_label}>
            {["radio"].map((type) => (
              <div key={`inline-${type}`}>
                <Row xs="auto">
                  <Col className="ml-33">Sign in with</Col>
                  <Col xs={3}>
                    <Form.Check
                      inline
                      label="Email"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                  </Col>
                  <Col xs={3}>
                    <Form.Check
                      inline
                      label="Number"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                  </Col>
                </Row>
              </div>
            ))}
          </label>

          <br />

          <p>
            <input
              type="text"
              name="fullName"
              className={Style.login_input_field}
              placeholder="Enter eMail id"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}
          </p>
        </div>

        <div>
          <label className={Style.login_form_label}>Password</label>
          <br />

          <p>
            <input
              type="password"
              name="password"
              className={Style.login_input_field}
              placeholder="Enter Password"
              value={formik.values.password}
            />
            <p className={Style.login_password_para}>
              Leave blank for OTP sign in
            </p>
            <p className={Style.login_password_forgot}>Forgot Password</p>
          </p>
        </div>

        <div className="col-md-12">
          <br />
          <Button
            onClick={() => history.push("/signup/verify")}
            variant="outline-secondary"
            className={Style.login_continue_btn}
            type="submit"
          >
            Sign in with OTP
          </Button>
          &nbsp;
          <Button variant="outline-dark" className={Style.login_continue_btn1}>
            Sign In
          </Button>
        </div>
        <div>
          <p></p>
          <p className={Style.login_checkbox_text}>
            Don't have an account?
            <a href="#">Sign up</a>
          </p>
        </div>
      </form>
    </SignupLayout>
  );
}

export default Login;

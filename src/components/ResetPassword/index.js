import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Style from "./Reset.module.scss";
import Button from "react-bootstrap/Button";
import SignupLayout from "../Layout/SignupLayout";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import { Formik, Field, ErrorMessage } from "formik";
import CountryJson from "../../constants/country.json";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ArrowLeftBlue } from "../../assets/Logos/Icons";

function ResetPassword() {
  const re = /^[0-9\b]+$/;
  const history = useHistory();
  const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const [emailform, SetForm] = useState(false);

  let [isEnabled,setEnabled]=useState(false)

  const handleOnChange = (value, data, event, formattedValue) => { };


  let onEmailChange = (e) => {

    if (e.target.value.match(emailTest)) 
    {
      
        setEnabled(true)
    }
    else{

      setEnabled(false)

    }

  }


  let onPhoneChange = (e) => {

    var pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    let phonenumber=e.slice(2)

    if (phonenumber.match(pattern)) 
    {

        setEnabled(true)
    }
    else{

      setEnabled(false)

    }

  }



  let onContinue = () =>{

    

  }



  return (
    <SignupLayout>
      <Formik
        validate={(values) => {
          let errors = {};
          if (values.loginType === "email") {
            if (values.email === "") {
              errors.email =
                "Please enter the email id used when you created the account";
            } else if (!emailTest.test(values.email)) {
              errors.email =
                "There seems to be some issue with your email id. Please check ";
            }
          }
          if (values.loginType === "mobile") {
            if (values.mobile === "") {
              errors.mobile = "Please enter the registered mobile number ";
            }
            // else if (values.mobile.toString().length != 10) {
            //   errors.mobile =
            //     "There seems to be some issue with the mobile number you entered. Please check ";
            // }
          }
          return errors;
        }}
        initialValues={{
          email: "",
          mobile: "",
          loginType: "email",
          accessCountry: "0",
          dial_code: "91",
          countryCode: "IN",
          code: { name: "India", flag: "🇮🇳", code: "IN", dial_code: "+91" },
        }}
        onSubmit={(values) => {
          if (values.loginType === "mobile") {
            history.push({
              pathname: "/signup/verify",
              state: { detail: values, page: "reset" },
            });
          } else {
            SetForm(true);
          }
        }}
      >
        {({
          touched,
          errors,
          setFieldValue,
          values,
          handleChange,
          handleSubmit,
        }) => (
          <form className={Style.reset_form_align} onSubmit={handleSubmit}>
            <h2 className={Style.reset_header_align}>Reset your password</h2>
            <div className="form-group">
              {emailform ? (
                <p className={Style.reset_text}>
                  Verification code has been sent to your email
                </p>
              ) : (
                <p className={Style.reset_text}>
                  Enter the email address or mobile number associated with your
                  account
                </p>
              )}
            </div>
            <div>
              <p></p>
            </div>
            <div className="form-group">
              <label className={Style.reset_form_label}>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`}>
                    <div className={Style.signin_radiowrp}>
                      <span>Sign in with</span>
                      <div className={Style.signin_radioeach}>
                        <div>
                          <Form.Check
                            inline
                            label="eMail"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                            onChange={() => setFieldValue("loginType", "email")}
                            checked={values.loginType === "email"}
                          />
                        </div>
                        <div>
                          <Form.Check
                            inline
                            label="Mobile"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                            checked={values.loginType === "mobile"}
                            onChange={() => {
                              SetForm(false);
                              setFieldValue("loginType", "mobile");
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </label>

              <br />
              {values.loginType === "email" && (
                <p>
                  <Field
                    type="text"
                    name="email"
                    className={
                      Style.reset_input_field +
                      " " +
                      `${touched.email && errors.email ? "is-invalid" : ""}`
                    }
                    placeholder="Enter eMail id"
                    onChange={(e) => { handleChange(e); onEmailChange(e) }}
                  />
                  <ErrorMessage
                    component="div"
                    name="email"
                    className={Style.reset_error_msg}
                  />
                </p>
              )}
              {values.loginType === "mobile" && (
                <>
                  <div
                    className={
                      Style.reset_PhoneInput +
                      " " +
                      `${touched.mobile && errors.mobile ? "is-invalid" : ""}`
                    }
                  >
                    <PhoneInput
                      country={"in"}
                      value={values.mobile}
                      name="mobile"
                      autoFormat={false}
                      countryCodeEditable={false}
                      onChange={(value, data, event, formattedValue) => {

                        onPhoneChange(value)
                        setFieldValue("mobile", value);
                        setFieldValue("dial_code", data.dialCode);
                        setFieldValue(
                          "countryCode",
                          data.countryCode?.toUpperCase()
                        );

                        handleOnChange(value, data, event, formattedValue);
                      }}
                    />
                    {/* <select
                      className={Style.forgot_country_code}
                      value={values.accessCountry}
                      name="accessCountry"
                      onChange={(e) => {
                        setFieldValue("accessCountry", e.target.value);
                        setFieldValue("code", CountryJson[e.target.value]);
                      }}
                      // onChange={(value) =>
                      //   setFieldValue("accessCountry", value)
                      // }
                    >
                      {CountryJson.map((item, index) => {
                        return (
                          <option value={index}>
                            {item.flag} {item.dial_code}
                          </option>
                        );
                      })}
                    </select> */}
                    {/* <Field
                      type="text"
                      name="mobile"
                      className={Style.reset_input_field}
                      placeholder="Enter Mobile No"
                      onChange={(e) => {
                        if (e.target.value === "" || re.test(e.target.value)) {
                          handleChange(e);
                        }
                      }}
                      autoComplete="off"
                    /> */}
                  </div>
                  <ErrorMessage
                    component="div"
                    name="mobile"
                    className={Style.reset_error_msg}
                  />
                </>
              )}
            </div>

            <div className="col-md-12">
              {emailform ? (
                <Button
                  variant="outline-secondary"
                  className={Style.signup_continue_btn}
                  type="submit"
                  onClick={() => history.push("/signin")}
                >
                  Go back
                </Button>
              ) : (
                <Button
                  disabled={!isEnabled}
                  variant="outline-secondary"
                  className={Style.signup_continue_btn}
                  type="submit"
                >
                  Continue
                </Button>
              )}

              <div
                variant="outline-secondary"
                className={Style.back_to_login_link}
                type="submit"
                onClick={()=>{history.push('/signin')}}
              >
                <div className={Style.back_to_login_link_icon}><ArrowLeftBlue/></div>
                Back
              </div>
            </div>
          </form>
        )}
      </Formik>
    </SignupLayout>
  );
}

export default ResetPassword;

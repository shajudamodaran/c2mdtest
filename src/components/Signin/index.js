import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Style from "./signin.module.scss";
import Button from "react-bootstrap/Button";
import SignupLayout from "../Layout/SignupLayout";
import { Col } from "react-bootstrap";

import { Formik, Field, ErrorMessage } from "formik";
import { GoogleLogin } from "react-google-login";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, loginwithotp } from "../../actions/LoginAction";
import * as Yup from "yup";
import CountryJson from "../../constants/country.json";
import { toast } from "react-toastify";
import Assets from "../Layout/Assets";
import { loginWithGoogle } from "../../actions/LoginAction";
import { checkUser } from "../../actions/SignupAction";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ConfirmModal from "./ConfirmModal";
import CustomPhoneInput from "../CustomPhoneInput/CustomPhoneInput";
function Signin() {
  const history = useHistory();
  const re = /^[0-9\b]+$/;
  const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const dispatch = useDispatch();
  const responseGoogle = (response) => {

    let profileData = response ? response.profileObj : null


    if (response?.profileObj) {
      dispatch(
        loginWithGoogle({ Data: response.profileObj, history: history })
      ).then((res) => {
        if (res.info) {
          setErrorMsg(res.info);


        }
      });
    }
  };
  const [errorMsg, setErrorMsg] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  let [drSign, setDrSign] = useState(false)
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const login = async (values, setSubmitting) => {
    let userName = "";
    let limit = values.dial_code?.length;
    let mobNo = values.mobile?.slice(limit);

    if (values.loginType == "email") {
      userName = values.email;
    } else if (values.loginType == "mobile") {
      userName = `%2B${values.dial_code} ${mobNo}`;
    }


    await dispatch(
      loginAction({
        loginType: values.loginType,
        userName: userName,
        accessCountry: values.countryCode,
        password: values.password,
        history: history,
        setDrSign: setDrSign
      })
    ).then((res) => {

      if (res.info) {

        if (res.info == "The user is already logged in. Please logout the session or try after sometime") {
          setErrorMsg("The user is already logged in. Please logout the session or try after sometime")
        }
        else {

          let text = values.loginType === "email" ? "email id" : "mobile number";
          setErrorMsg(
            `You have entered an invalid username(${text}) or password`
          );

        }

      }
    });

    await setSubmitting(false);
  };
  const validationSchema = Yup.object().shape({
    loginType: Yup.string(),
    submitBttn: Yup.string(),
    password: Yup.string().when("submitBttn", {
      is: "type2",
      then: Yup.string().required("Enter your password to proceed further"),
    }),
    mobile: Yup.string().when("loginType", {
      is: "mobile",
      then: Yup.string()
        .required("Please enter the registered mobile number")
        .matches(
          phoneRegExp,
          "There seems to be some issue with the mobile number you entered. Please check "
        )
        .min(
          4,
          "There seems to be some issue with the mobile number you entered. Please check "
        ),
      // .max(
      //   10,
      //   "There seems to be some issue with the mobile number you entered. Please check "
      // ),
    }),
    email: Yup.string().when("loginType", {
      is: "email",
      then: Yup.string()
        .email("There seems to be some issue with your eMail id. Please check ")
        .required(
          "Please enter the eMail id used when you created the account"
        ),
    }),
  });
  const loginwithotp = (values) => {
    let type = values?.loginType === "mobile" ? "Mobile" : values?.loginType;
    let limit = values.dial_code?.length;
    let mobNo = values.mobile?.slice(limit);
    let searchkeyType =
      values?.loginType === "mobile"
        ? `%2B${values.dial_code} ${mobNo}`
        : values.email;

    dispatch(
      checkUser({
        searchtype: type,
        searchKey: searchkeyType,
      })
    )
      .then((res) => {
        if (res?.info === "New User") {
          let text =
            values.loginType === "email" ? "eMail id" : "mobile number";
          setErrorMsg(`You have entered an invalid username(${text}) `);
        } else {
          history.push({
            pathname: "/signup/verify",
            state: { detail: values, page: "login" },
          });
        }
      })
      .catch(() => { });
  };

  const handleOnChange = (value, data, event, formattedValue) => { };

  return (
    <SignupLayout>

      <ConfirmModal
        showModal={drSign}
        setShowModal={() => { setDrSign(true) }}
        onCancel={() => { setDrSign(false) }}

      />
      <div className={Style.signin_form_align}>
        <h2 className={Style.signin_header_align}>Sign in to your account</h2>

        <div className="form-group">
          <p></p>
          <GoogleLogin
            clientId="259504799474-3q2tvrsu5gf83rofjevpr5bpdpun3jii.apps.googleusercontent.com"
            buttonText="Sign in with google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            className={Style.signin_google_button}
          />
        </div>
        {<div>
          <p></p>
          <p className={Style.signin_text_option}>Or</p>
        </div>}
        <div>
          <Formik
            initialValues={{
              // email: "athira@webandcrafts.in",
              // password: "123456@Aa",
              email: "",
              password: "",
              accessCountry: "0",
              loginType: "email",
              mobile: "",
              dial_code: "91",
              countryCode: "IN",
              code: { name: "", flag: "🇮", code: "", dial_code: "" },
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              if (values.submitBttn === "type1") {
                loginwithotp(values);
              } else if (values.submitBttn === "type2") {
                login(values, setSubmitting);
              }
            }}
          >
            {({
              touched,
              errors,
              isSubmitting,
              handleChange,
              values,
              setFieldValue,
              handleSubmit,
              resetForm,
            }) => {
              return (
                <Form
                  onSubmit={handleSubmit}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      if (values.password == "") {
                        setFieldValue("submitBttn", "type1");
                      } else {
                        setFieldValue("submitBttn", "type2");
                      }
                      handleSubmit();
                    }
                  }}
                >
                  <div className="form-group">
                    <label className={Style.signin_form_label}>
                      <div>
                        <div className={Style.signin_radiowrp}>
                          <span className="ml-33">Sign in with</span>
                          <div className={Style.signin_radioeach}>
                            <div>
                              <Form.Check
                                inline
                                label="eMail"
                                name="loginType"
                                type="radio"
                                id="email"
                                onChange={() => {
                                  setErrorMsg("");
                                  resetForm();
                                  setFieldValue("loginType", "email");
                                }}
                                checked={values.loginType === "email"}
                              />
                            </div>
                            <div>
                              <Form.Check
                                inline
                                label="Mobile"
                                name="loginType"
                                type="radio"
                                id="mobile"
                                checked={values.loginType === "mobile"}
                                onChange={() => {
                                  setErrorMsg("");
                                  resetForm();
                                  setFieldValue("loginType", "mobile");
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </label>

                    <br />
                    {values.loginType === "email" && (
                      <p>
                        <Field
                          type="text"
                          name="email"
                          onChange={(e) => {
                            setErrorMsg("");
                            handleChange(e);
                          }}
                          className={
                            Style.signin_input_field +
                            " " +
                            `${touched.email && errors.email ? "is-invalid" : ""
                            }`
                          }
                          placeholder="Enter eMail id"
                        />

                        <ErrorMessage
                          component="div"
                          name="email"
                          className={Style.signin_error_msg}
                        />
                      </p>
                    )}

                    {values.loginType === "mobile" && (
                      <div className={Style.mob_flag_wrp}>
                        <div
                          className={`${Style.siginin_mobile}${" "}${touched.mobile && errors.mobile ? "is-invalid" : ""
                            }`}
                        >
                          <CustomPhoneInput
                            country={"in"}
                            value={values.mobile?.slice(values.dial_code?.length)}
                            name="mobile"
                            autoFormat={false}
                            countryCodeEditable={false}
                            onChange={(value, data, event, formattedValue) => {
                              setFieldValue("mobile", value);
                              setFieldValue("dial_code", data.dialCode);
                              setFieldValue(
                                "countryCode",
                                data.countryCode?.toUpperCase()
                              );
                              setErrorMsg("");
                              handleOnChange(
                                value,
                                data,
                                event,
                                formattedValue
                              );
                            }}
                          />
                          {/* <select
                            className={Style.signin_country_code}
                            value={values.accessCountry}
                            name="accessCountry"
                            onChange={(e) => {
                              setFieldValue("accessCountry", e.target.value);
                              setFieldValue(
                                "code",
                                CountryJson[e.target.value]
                              );
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
                            placeholder="Enter Mobile Number"
                            onChange={(e) => {
                              if (
                                e.target.value === "" ||
                                re.test(e.target.value)
                              ) {
                                setErrorMsg("");
                                handleChange(e);
                              }
                            }}
                            autoComplete="off"
                            className={Style.signin_mobile_input}
                          /> */}
                        </div>
                        <ErrorMessage
                          component="div"
                          name="mobile"
                          className={Style.signin_error_msg}
                        />
                      </div>
                    )}
                  </div>

                  <div className={Style.pswrd_input}>
                    <label className={Style.signin_form_label}>Password</label>
                    <br />
                    <div
                      className={
                        Style.signin_input_field +
                        " " +
                        `${touched.password && errors.password
                          ? "is-invalid"
                          : ""
                        }`
                      }
                    >
                      <Field
                        type={passwordShown ? "text" : "password"}
                        name="password"
                        placeholder="Enter Password"
                        className={Style.signinPasswordInput}
                      />
                      <img
                        className={Style.signinPasswordImg}
                        src={Assets.iconpassword}
                        alt=""
                        onClick={togglePasswordVisiblity}
                      />
                    </div>

                    <ErrorMessage
                      component="div"
                      name="password"
                      className={Style.signin_error_msg1}
                    />
                    <p className={Style.signin_password_para}>
                      Leave blank for OTP Sign in
                    </p>
                    <p
                      className={Style.signin_password_forgot}
                      onClick={() => history.push("/reset")}
                    >
                      Forgot Password?
                    </p>
                  </div>

                  {errorMsg != "" && (
                    <p className={Style.errorMsg}>{errorMsg}</p>
                  )}

                  <div className={Style.signin_btn_wrp}>
                    <Button
                      type="submit"
                      onClick={() => {
                        setFieldValue("submitBttn", "type1");
                      }}
                      // onClick={signInWithOtp}
                      variant="outline-secondary"
                      className={Style.signin_continue_btn}
                    >
                      Sign in with OTP
                    </Button>
                    &nbsp;
                    <Button
                      variant="outline-dark"
                      className={`${Style.signin_continue_btn1} ${values.password ? Style.signin_continue_btn1_active : ""
                        }`}
                      type="submit"
                      onClick={() => {
                        setFieldValue("submitBttn", "type2");
                      }}
                      disabled={isSubmitting}
                    // onClick={login}
                    >
                      {values.submitBttn === "type2" && isSubmitting
                        ? "Please wait..."
                        : "Sign in"}
                    </Button>
                  </div>
                  {/* <ReactTelephoneInput
                    defaultCountry="in"
                    flagsImagePath={flagsImagePaths}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur} */}
                  {/* /> */}
                </Form>
              );
            }}
          </Formik>
        </div>

        <div>
          <p></p>
          <p className={Style.signin_checkbox_text}>
            Don't have an account?
            <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </SignupLayout>
  );
}

export default Signin;
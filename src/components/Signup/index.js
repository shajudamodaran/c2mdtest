import React, { useEffect, useState } from "react";

import Style from "./signup.module.scss";
import Button from "react-bootstrap/Button";
import Assets from "../Layout/Assets";
import classNames from "classnames";
import SignupLayout from "../Layout/SignupLayout";
import { useFormik } from "formik";

import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpeciality } from "../../actions/SpecialityListingAction";
import { signup_action } from "../../actions/SignupAction";
import { NavLink, Link, useLocation } from "react-router-dom";
import CountryJson from "../../constants/country.json";
import * as Yup from "yup";
import { loginwithotp } from "../../actions/LoginAction";
import { signup_with_Google, checkUser } from "../../actions/SignupAction";
//
import { getCountryData } from "../../actions/MicrositeAction";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import SighnupDropDown from "../SignupDropdown/SighnupDropDown";
import { InformationIcon } from "../../assets/Logos/Icons";
import { Tooltip } from "antd";


function Signup() {
  const location = useLocation();

  let backBtnData = location.state;
  const re = /^[0-9\b]+$/;
  let history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    //dispatch(fetchSpeciality());
    dispatch(getCountryData())
  }, []);
  const speciality = useSelector(
    (state) => state.specialityList.specialityList
  );

  let clinicdata = useSelector(
    (state) => state.clinicData
  );
  let countryData = useSelector(
    (state) => state.login.countryData
  );
  let reduxData = useSelector(state => state)

  const [passwordShown, setPasswordShown] = useState(false);



  let checkForSubmitEnable = (formikValues) => {

    var re = /\S+@\S+\.\S+/;

    const phoneRegExp =
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


    // if( && formikValues.email?.test(re) && formikValues.mobileNumber?.slice(2).match(phoneRegExp) && formikValues.password)
    // {
    //     return false
    // }
    // else{
    //   return true
    // }

    let responce = {
      fullName: false,
      email: false,
      phone: false,
      password: false
    }


    if (formikValues.fullName) {
      responce.fullName = true
    }


    if (formikValues.email) {
      if (formikValues.email.match(re)) {
        responce.email = true
      }
    }

    if (formikValues.mobileNumber) {
      if (formikValues.mobileNumber.slice(2).match(phoneRegExp)) {
        responce.phone = true
      }
    }

    if (formikValues.password) {
      responce.password = true
    }


    if (responce.fullName && responce.email && responce.phone && responce.password) {

      return false

    }
    else {
      return true
    }



  }

  const [ShowError, setShowError] = useState({
    emailError: false,
    mobileError: false,
    mobileerrorMsg: "",
    mailerrorMsg: "",
  });
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const [errorMsg, setErrorMsg] = useState("");
  const [userType, setUerType] = useState("Patient");
  const buttonSelection = classNames(Style.signup_form_button_type, "col-md-6");

  const activeButton = classNames(
    Style.signup_form_button_type,
    "col-md-6",
    Style.active
  );

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const nameRegExp = /^[a-zA-Z0-9 ]+$/;


  const validationSchema = Yup.object().shape({
    userType: Yup.string(),
    fullName: Yup.string().required(
      "It would be nice to address you with your full name. Please enter your full name"
    ),
    email: Yup.string()
      .email("There seems to be some issue with your email id. Please check ")
      .required(
        "An email id is required to keep you updated on any appointment related information"
      ),
    mobileNumber: Yup.string()
      .required(
        "A mobile number is required to keep you updated on any appointment related information"
      )
      .matches(
        phoneRegExp,
        "There seems to be some issue with your mobile number. Please check"
      )
      .min(4, "Mobile number must be at least 10 characters")
      .max(15, "Mobile number must be at most 15 characters"),
    password: Yup.string()
      .required("You need to keep your account secure with a password")
      .min(
        8,
        "A secure password consists of minimum 8 characters including 1 special character, 1 CAPITAL letter and 1 small letter"
      )
      .matches(
        /[a-z]+/,
        "A secure password consists of minimum 8 characters including 1 special character, 1 CAPITAL letter and 1 small letter"
      )
      .matches(
        /[A-Z]+/,
        "A secure password consists of minimum 8 characters including 1 special character, 1 CAPITAL letter and 1 small letter"
      )
      .matches(
        /[@$!%*#?&]+/,
        "A secure password consists of minimum 8 characters including 1 special character, 1 CAPITAL letter and 1 small letter"
      ),
    // specialityType: Yup.string().when("userType", {
    //   is: "Doctor",
    //   then: Yup.string().nullable().required("You must select your speciality to continue"),
    // }),
  });


  const formik = useFormik({
    initialValues: {
      userType: "Patient",
      fullName: "",
      email: "",
      specialityType: null,
      mobileNumber: "",
      password: "",
      accessCountry: "0",
      dial_code: "91",
      countryCode: "IN",
      code: { name: "India", flag: "🇮🇳", code: "IN", dial_code: "+91" },
    },
    validationSchema,

    onSubmit: (values) => {

      console.log(ShowError)
      if (!ShowError.emailError && !ShowError.mobileError) {
        history.push({
          pathname: "/signup/verify",
          state: { detail: values, userType: userType, page: "signup" },
        });
      }

    },

  });






  const responseGoogle = (response) => {
    let Obj = response.profileObj;

    if (Obj) {
      dispatch(
        signup_with_Google({
          userType: userType,
          Data: response.profileObj,
          history: history,
        })
      ).then((response) => {
        if (response.info) {
          setErrorMsg(response.info);
        }
      });
    }
  };

  const handleBlurAction1 = (event, type, fieldName) => {



    let searchKey =
      type == "Mobile"
        ? `%2B${formik.values.code.dial_code.substring(1)} ${formik.values.mobileNumber
        }`
        : formik.values.email;
    formik.handleBlur(event);
    if (formik.values.email !== "") {
      dispatch(
        checkUser({
          searchtype: type,
          searchKey: searchKey,
        })
      )
        .then((res) => {
          if (res?.info === "New User") {

          } else {
            setShowError({
              ...ShowError,
              emailError: true,

              mailerrorMsg: res?.info,
            });
          }
        })
        .catch(() => { });
    }
  };

  const handleBlurAction2 = (event, type, fieldName) => {



    let limit = formik.values?.dial_code?.length;
    let mobNo = formik.values?.mobileNumber?.slice(limit);


    if (!formik.values?.mobileNumber?.slice(limit)) {
      setShowError({
        ...ShowError,

        mobileError: false,
        mobileerrorMsg: null
      });
    }
    else {

      let searchKey =
        type == "Mobile"
          ? `%2B${formik.values?.dial_code} ${mobNo}`
          : formik.values.email;

      formik.handleBlur(event);

      if (formik.values.mobileNumber !== "") {

        console.log(formik.values?.mobileNumber?.slice(limit));


        dispatch(
          checkUser({
            searchtype: type,
            searchKey: searchKey,
          })
        )
          .then((res) => {
            if (res?.info === "New User") {
              setShowError({
                ...ShowError,

                mobileError: false,
                mobileerrorMsg: null
              });
            } else {
              setShowError({
                ...ShowError,

                mobileError: true,
                mobileerrorMsg: res?.info,
              });
            }
          })
          .catch(() => { });
      }

    }


  };
  const handleOnChange = (value, data, event, formattedValue) => {



  };

  return (
    <SignupLayout>
      <form className={Style.signup_form_align} onSubmit={formik.handleSubmit}>
        <h2 className={Style.signup_header_align}>Create your account
          <span style={{
            fontSize: "14px",
            marginLeft: "5px"
          }}>(For patient only)</span>
        </h2>
        <div className={Style.signup_button_type_selection}>
          {/* {
            clinicdata ? null :
              <Button
                variant="outline-secondary"
                className={`${buttonSelection}${userType == "Doctor" && activeButton
                  }`}
                style={{ "margin-right": "2%" }}
                onClick={() => {
                  formik.resetForm();
                  setUerType("Doctor");
                  formik.setFieldValue("userType", "Doctor");
                  setShowError({
                    emailError: false,
                    mobileError: false,
                    mobileerrorMsg: "",
                    mailerrorMsg: "",
                  });
                  history.push('/signin')
                }}
              >
                <img src={Assets.doctor_icon} />
                I'm a Doctor
                {userType == "Doctor" && (
                  <img
                    src={Assets.signupTick}
                    alt=""
                    className={Style.activeTick}
                  />
                )}
              </Button>
          } */}
          {/* <Button
            variant="outline-secondary"
            className={`${buttonSelection}${userType == "Patient" && activeButton
              }`}
            onClick={() => {
              formik.resetForm();
              setUerType("Patient");
              formik.setFieldValue("userType", "Patient");
              setShowError({
                emailError: false,
                mobileError: false,
                mobileerrorMsg: "",
                mailerrorMsg: "",
              });
            }}
          >
            <img src={Assets.patient_icon} />
            I'm Patient
            {userType == "Patient" && (
              <img
                src={Assets.signupTick}
                alt=""
                className={Style.activeTick}
              />
            )}
          </Button> */}
        </div>
        <div className="form-group ">
          <p></p>
          {/* <Button variant="outline-secondary" className={Style.signup_google_btn} type="submit">
        Sign up with google
      </Button> */}
          { <div className={Style.btn_google}>
            <GoogleLogin
              clientId="259504799474-3q2tvrsu5gf83rofjevpr5bpdpun3jii.apps.googleusercontent.com"
              buttonText="Sign up with google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              className={Style.gBtn}
              disabled={false}
            />
          </div> }
        </div>
        {errorMsg != "" && <p className={Style.errors}>{errorMsg}</p>}
        {<div>
          <p></p>
          <p className={Style.signup_text_option}>Or</p>
        </div> }
        <div className={Style.form_group}>
          <label className={Style.signup_form_label}>Full Name</label>
          <br />

          <p>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your name"
              value={formik.values.fullName}
              onChange={(e) => {
                if (e.target.value === "" || nameRegExp.test(e.target.value)) {
                  formik.handleChange(e);
                }
              }}
              onBlur={formik.handleBlur}
              autoComplete="off"
              className={
                Style.signup_input_field +
                " " +
                `${formik.touched.fullName && formik.errors.fullName
                  ? "is-invalid"
                  : ""
                }`
              }
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <div className={Style.errors}>{formik.errors.fullName}</div>
            ) : null}
          </p>
        </div>
        <div className={Style.form_group}>
          <label className={Style.signup_form_label}>eMail Id</label>
          <br />

          <p>
            <input
              type="email"
              name="email"
             
              placeholder="Enter eMail id"
              value={formik.values.email}
              onChange={(e) => {
                setShowError({
                  ...ShowError,
                  emailError: false,
                });

                formik.handleChange(e);
              }}
              onBlur={(event) => {
                handleBlurAction1(event, "email", "email");
              }}
              autoComplete="off"
              className={
                Style.signup_input_field +
                " " +
                `${formik.touched.email && formik.errors.email
                  ? "is-invalid"
                  : ""
                }`
              }
            />
            {ShowError.emailError && (
              <p className={Style.errors}>{ShowError.mailerrorMsg}</p>
            )}
            {formik.touched.email && formik.errors.email ? (
              <div className={Style.errors}>{formik.errors.email}</div>
            ) : null}
          </p>
        </div>
        <div className={Style.form_group}>
          <label className={Style.signup_form_label}>Mobile Number</label>
          <br />
          <div className="mob-flag-bx-wrp">
            <div
              className={
                "mob-flag-wrp" +
                " " +
                `${Style.siginup_mobileInput}${" "}${formik.touched.mobileNumber && formik.errors.mobileNumber
                  ? "is-invalid"
                  : ""
                }`
              }
            >
              {/* <select
                className={Style.signup_country_code}
                value={formik.values.accessCountry}
                name="accessCountry"
                onChange={(e) => {
                  formik.setFieldValue("accessCountry", e.target.value);
                  formik.setFieldValue("code", CountryJson[e.target.value]);
                }}
              >
                {CountryJson.map((item, index) => {
                  return (
                    <option value={index}>
                      {item.flag} {item.dial_code}
                    </option>
                  );
                })}
              </select> */}
              <PhoneInput
                country={"in"}
                value={formik.values.mobile}
                name="mobile"
                autoFormat={false}
                countryCodeEditable={false}

                onBlur={(event) => {
                  // formik.handleBlur(event);
                  handleBlurAction2(event, "Mobile", "mobileNumber");
                }}

                onChange={(value, data, event, formattedValue) => {


                  formik.setFieldValue("mobileNumber", value);
                  formik.setFieldValue("dial_code", data.dialCode);
                  // formik.setFieldValue("code",{ name:  data.name, flag: getCountryFlagFromCountryCode(data.countryCode.toUpperCase()), code: data.countryCode.toUpperCase(), dial_code:  data.dialCode })


                  formik.setFieldValue(
                    "countryCode",
                    data.countryCode?.toUpperCase()
                  );
                  // setShowError({
                  //   ...ShowError,

                  //   mobileError: false,
                  //   mobileerrorMsg: "",
                  // });

                  handleOnChange(value, data, event, formattedValue);
                }}
              />
              {/* <input
                type="text"
                name="mobileNumber"
                className={Style.signup_mobile_input_field}
                placeholder="Enter Mobile Number"
                value={formik.values.mobileNumber}
                onChange={(e) => {
                  if (e.target.value === "" || re.test(e.target.value)) {
                    setShowError({
                      ...ShowError,

                      mobileError: false,
                      mobileerrorMsg: "",
                    });
                    formik.handleChange(e);
                  }
                }}
                onBlur={(event) => {
                  handleBlurAction2(event, "Mobile", "mobileNumber");
                }}
                autoComplete="off"
              /> */}
            </div>
            {ShowError.mobileError && (
              <p className={Style.errors}>{ShowError.mobileerrorMsg}</p>
            )}
            {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
              <div className={Style.errors}>{formik.errors.mobileNumber}</div>
            ) : null}
          </div>
        </div>
        <div className={Style.form_group}>
          <label className={Style.signup_form_label}>Create Password</label>
          <br />

          <p className={Style.pswrd_input}>
            <div className={Style.pswrd_input_row}>
              <div
                className={
                  Style.signup_input_field +
                  " " +
                  `${formik.touched.password && formik.errors.password
                    ? "is-invalid"
                    : ""
                  }`
                }
              >
                <input
                  type={passwordShown ? "text" : "password"}
                  name="password"
                  placeholder="Enter Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  autoComplete="off"
                  className={Style.signupPasswordInput}
                />
                <img
                  className={Style.signupPasswordImg}
                  src={Assets.iconpassword}
                  alt=""
                  onClick={togglePasswordVisiblity}
                />
              </div>

              <Tooltip placement="right" title={"A secure password consists of minimum 8 characters including 1 special character, 1 CAPITAL letter and 1 small letter"}>
              <div className={Style.infoIcon}><InformationIcon/></div>
              </Tooltip>

            </div>
            {/* {formik.touched.password && formik.errors.password ? (
              <div className={Style.errors}>{formik.errors.password}</div>
            ) : null} */}
          </p>
        </div>
        {userType === "Doctor" && (
          <div className={Style.form_group}>
            <label className={Style.signup_form_label}>Speciality</label>
            <br />

            <p>


              {/* <select
            
                name="specialityType"
                value={formik.values.specialityType}
                onChange={(e)=>{console.log(e)}}
                onBlur={formik.handleBlur}
                placeholder='test'
                defaultValue={null}
                className={
                  Style.signup_input_field +
                  " " +
                  `${formik.touched.specialityType &&
                    formik.errors.specialityType
                    ? "is-invalid"
                    : ""
                  }`
                }
              >
                <option value="" disabled selected hidden>Select your option</option> 
                {speciality &&
                  speciality.map((item, index) => {
                    return (
                      <option
                        value={item.specialityName}
                        label={item.specialityName}
                      />
                    );
                  })}
              </select> */}

              <SighnupDropDown
                value={formik.values.specialityType}
                DataItem={speciality}
                formik={formik}
                defaultPlaceH="Select speciality"
              />


              {formik.touched.specialityType && formik.errors.specialityType ? (
                <div className={Style.errors}>
                  {formik.errors.specialityType}
                </div>
              ) : null}
            </p>
          </div>
        )}
        <div className="col-md-12">
          <br />
          <Button
            disabled={checkForSubmitEnable(formik.values)}
            onClick={formik.handleSubmit}
            variant="outline-secondary"
            className={Style.signup_continue_btn}
            type="submit"
          >
            Continue
          </Button>
        </div>
        <div>
          <p></p>
          <p className={Style.signup_checkbox_text}>
            {" "}
            I agree to our
            {/* <a href="">Terms of service</a> */}
            <Link
              to={{
                pathname: "/termsofUse/terms",
                state: "terms",
              }}
              target="_blank"
            >
              Terms of service
            </Link>
            and
            {/* <a href="/">Privacy Policy</a> */}
            <Link
              to={{
                pathname: "/termsofUse/privacy",
                state: "privacy",
              }}
              target="_blank"
            >
              Privacy Policy
            </Link>
          </p>
          <p className={Style.signup_checkbox_text_signin}>
            Already Signed up?
            <Link to="/signin"> Sign in</Link>
          </p>
        </div>
      </form>
    </SignupLayout>
  );
}

export default Signup;
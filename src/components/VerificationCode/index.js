import React, { useEffect, useState } from "react";
import Style from "./VerificationCode.module.scss";
import Button from "react-bootstrap/Button";
import Assets from "../Layout/Assets";
import SignupLayout from "../Layout/SignupLayout";
import ReactInputVerificationCode from "react-input-verification-code";
import OtpTimer from "otp-timer";
import classNames from "classnames";
import { useHistory, useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { generate_OTP, signup_action } from "../../actions/SignupAction";
import { checkUser, loginwithotp } from "../../actions/LoginAction";
import { checkUserAvailability } from "../../actions/ForgotPasswordAction";
import { toast } from "react-toastify";
function VerificationCode() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [pages, setPage] = useState("");
  const [formData, setSignupData] = useState({ value: "", userType: "" });
  let signupData = "";
  let userType = "";
  let page = "";

  useEffect(() => {
    signupData = location.state?.detail;

    userType = location.state?.userType;
    page = location.state?.page;
    setPage(location.state?.page);
    setSignupData({
      ...formData,
      value: location.state?.detail,
      userType: location.state?.userType,
    });
    onload(page);
  }, [pages]);
  const backBtn =
    pages === "login" ? "/signin" : pages === "signup" ? "/signup" : "/signin";
  const [value, setValue] = React.useState("");
  const [OTP, setOTP] = useState("");
  const [loginOTP, setloginOTP] = useState("");
  const [resetOTP, setresetOTP] = useState("");
  const [userId, setuserId] = useState("");
  const [errorMsg, SetErrorMsg] = useState("");
  const otpTimerClass = classNames(Style.signup_form_otp_timer, "col-md-4");
  const appoinment_form = useSelector(
    (state) => state.bookAppoinment.appoinment_form
  );
  const fetch_OTP = () => {
    dispatch(generate_OTP(formData.value)).then((res) => {
      setOTP(res);
    });
  };
  const onload = async () => {
    if (pages === "signup") {
      fetch_OTP();
    } else if (pages === "login") {
      let limit = formData.value?.dial_code?.length;
      let mobNo = formData.value?.mobile?.slice(limit);
      let searchKey =
        (await formData.value.loginType) === "mobile"
          ? `%2B${formData.value.dial_code} ${mobNo}`
          : formData.value.email;

      dispatch(
        checkUser({
          type: formData.value.loginType,
          searchkey: searchKey,
        })
      ).then((res) => {
        if (res?.data.otpvalue == "Email id not registerd") {
        } else {
          let resValue = res?.data.otpvalue;

          setloginOTP(resValue);
        }
      });
    } else if (pages === "reset") {
      let resendData = location.state?.detail;

      let limit = resendData?.dial_code?.length;
      let mobNo = resendData?.mobile?.slice(limit);

      let searchKey =
        resendData.loginType === "mobile"
          ? `%2B${resendData?.dial_code} ${mobNo}`
          : resendData.email;

      dispatch(
        checkUserAvailability({
          type: resendData.loginType,
          searchkey: searchKey,
        })
      ).then((res) => {
        if (res?.data.otpvalue == "Email id not registerd") {
        } else {
          let resValue = res?.data.otpvalue;
          let userId = res?.data.userId;
          setresetOTP(resValue);
          setuserId(userId);
        }
      });
    }
  };
  const resendOTP = () => {
    setValue("");
    SetErrorMsg("");
    onload(pages);
  };

  const verifyOtp = () => {
    if (pages === "signup") {
      if (value === OTP) {
        dispatch(
          signup_action({
            values: formData.value,
            userType: formData.userType,
            OTP: OTP,
            history: history,
          })
        ).then((res) => {
          SetErrorMsg(res?.info);
          // history.push({
          //   pathname: "/signup",
          // });
        });
      } else {
        // toast.error("Invalid OTP", {
        //   position: toast.POSITION.TOP_CENTER,
        // });
        setValue("");
        SetErrorMsg("Invaild OTP. Please try again");
      }
    } else if (pages === "login") {
      if (value === loginOTP) {
        login();
      } else {
        setValue("");
        SetErrorMsg("Invaild OTP. Please try again");
      }
    } else if (pages === "reset") {
      if (value === resetOTP) {
        history.push({
          pathname: "/confirmpassword",
          state: { detail: signupData, userId: userId, page: "reset" },
        });
      } else {
        SetErrorMsg("Invaild OTP. Please try again");
        setValue("");
      }
    }
  };

  const login = () => {
    let limit = formData.value.dial_code?.length;
    let mobNo = formData.value.mobile?.slice(limit);
    let searchKey =
      formData.value.loginType === "mobile"
        ? `%2B${formData.value.dial_code} ${mobNo}`
        : formData.value.email;

    dispatch(
      loginwithotp({
        loginType: formData.value.loginType,
        userName: searchKey,
        accessCountry: "IN",

        isotpverified: true,
        history: history,
        appoinment_form: appoinment_form,
      })
    );
  };

  let Limit =
    pages === "login" ? (formData.value?.loginType === "mobile" ? 5 : 4) : 5;

  return (
    <SignupLayout>
      <div className={Style.signup_verification_form_align}>
        <h2>Enter your verification code</h2>
        <p>Please enter the verification code that sent to</p>

        {pages === "login" && (
          <p className="verify-email">
            {formData.value?.loginType === "mobile"
              ? "+" +
                formData.value?.dial_code +
                " " +
                formData.value?.mobile.slice(formData.value?.dial_code?.length)
              : formData.value?.email}
            <Link to={backBtn}> Change</Link>
          </p>
        )}
        {pages === "reset" && (
          <p className="verify-email">
            {`+ ${
              formData.value?.dial_code
            }${" "}${formData.value?.mobile.slice(
              formData.value?.dial_code?.length
            )}`}
            <Link to="/reset"> Change</Link>
          </p>
        )}
        {pages === "signup" && (
          <p className="verify-email">
            {`+ ${
              formData.value?.dial_code
            }${" "}${formData.value?.mobileNumber.slice(
              formData.value?.dial_code?.length
            )}`}

            <Link
              to={{
                pathname: `/signup`,
                state: formData,
              }}
            >
              {" "}
              Change
            </Link>
          </p>
        )}

        <div>
          <ReactInputVerificationCode
            onChange={setValue}
            value={value}
            placeholder=""
            length={Limit}
          />
        </div>

        <div className="col-md-12">
          <div className={Style.Resend_wrapper}>
            <OtpTimer
              className={otpTimerClass}
              seconds={30}
              minutes={0}
              text="Not received your code?"
              resend={resendOTP}
            />
          </div>
        </div>
        {errorMsg != "" && <p className={Style.errorMsg}>{errorMsg}</p>}
        <div className="col-md-12">
          <Button
            variant="outline-secondary"
            className={`${Style.signup_verify_btn}
            ${value && Style.signup_verify_active_btn}`}
            onClick={() => verifyOtp()}
          >
            Verify
          </Button>
        </div>
      </div>
    </SignupLayout>
  );
}

export default VerificationCode;

import loginedApi from "../apis";
import { toast } from "react-toastify";
import CryptoJS from "crypto-js";
import { SIGNUP_SUCCESS_ACTION } from "./type";
const publicIp = require("public-ip");
let IP = publicIp.v4();
let platform = window.navigator.platform;
let userAgent = window.navigator.userAgent;

export const signup_action =
  ({ values, userType, OTP, history }) =>
  async (dispatch) => {
    // var hash = CryptoJS.SHA512(values.password);
    var hash = CryptoJS.SHA512("C2MD|" + values.password);

    let password = hash.toString();

    let hashPassword = hash.toString(CryptoJS.enc.Base64);
    // let hashPassword = CryptoJS.SHA512("C2MD|"+password);
    let limit = values.dial_code?.length;
    let mobNo = values.mobileNumber?.slice(limit);
    let mobileNo = `%2B${values.dial_code}${" "}${mobNo}`;

    const res = await loginedApi.post("signup", {
      requestType: 2,
      data: {
        lastName: values.fullName,
        accessCountry: values?.countryCode,
        source: "iOSApp",
        useragent: userAgent,
        department: "",
        password: password,
        hashPassword: hashPassword,
        userType: userType,
        mobileNumber: mobileNo,
        emailId: values.email,
        referenceOTP: OTP,
        deviceId: "",
        signupFrom: "c2md",
        Os: platform,
        firstName: values.fullName,
        clinicId: "20",
        Ipaddress: IP,
        type: "",
        browserTimeZone: "GMT%2B0530",
        speciality: "",
        appname: "C2MD Patient",
      },
      token: "token",
    });

    if (res.data.data) {
      let response = res.data.data;

      if (response.hasOwnProperty("info")) {
        return response;
      } else {
        dispatch({
          type: SIGNUP_SUCCESS_ACTION,
          payload: JSON.stringify(res.data.data),
        });
        localStorage.setItem("userData", response);
        history.push("/DoctorListing");
      }
      return response;
    }
  };
export const generate_OTP = (formData) => async (dispatch) => {
  let limit = formData.dial_code?.length;
  let mobNo = formData.mobileNumber?.slice(limit);
  let mobileNo = `%2B${formData.dial_code}${" "}${mobNo}`;

  const res = await loginedApi.post("getmobileotp", {
    token: "C2MDVerificationToken",
    requestType: "25",
    data: {
      mobileNumber: mobileNo,
      Os: platform,
      Ipaddress: IP,
      useragent: userAgent,
    },
  });

  return res.data && res.data.data.info;
};

export const signup_with_Google =
  ({ userType, Data, history }) =>
  async (dispatch) => {
    const res = await loginedApi.post("signup", {
      requestType: 2,
      data: {
        lastName: "",
        accessCountry: "",
        source: "iOSApp",
        useragent: userAgent,
        department: "",
        password: "",
        hashPassword: "",
        userType: userType,
        mobileNumber: "",
        emailId: Data.email,
        referenceOTP: "",
        deviceId: "",
        signupFrom: "c2md",
        Os: platform,
        firstName: Data.name,
        clinicId: "20",
        Ipaddress: IP,
        type: "",
        browserTimeZone: "GMT%2B0530",
        speciality: "",
        appname: "C2MD Patient",
      },
      token: "token",
    });

    if (res.data.data) {
      let response = res.data.data;

      if (response.hasOwnProperty("info")) {
        // toast.error(response.info, {
        //   position: toast.POSITION.TOP_CENTER,
        // });

        return response;
      } else {
        dispatch({
          type: SIGNUP_SUCCESS_ACTION,
          payload: JSON.stringify(res.data.data),
        });
        localStorage.setItem("userData", response);
        history.push("/DoctorListing");
      }
      return response;
    }
  };
export const checkUser =
  ({ searchtype, searchKey }) =>
  async (dispatch) => {
    const res = await loginedApi.post("useravailability", {
      requestType: 22,
      token: "C2MDVerificationToken",
      data: { searchtype: searchtype, searchKey: searchKey },
    });

    return res.data?.data;
  };

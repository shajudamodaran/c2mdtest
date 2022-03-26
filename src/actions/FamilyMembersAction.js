import loginedApi from "../apis";
import { toast } from "react-toastify";
import CryptoJS from "crypto-js";
import {
  FETCH_FAMILY_MEMBERS,
  FETCH_PATIENT_MEDICAL_DATA,
  FETCH_UPLOADED_DATA,
  FETCH_PATIENT_MEDICAL_DATA_INIT_ACTION,
  FETCH_PATIENT_MEDICAL_DATA_FAIL_ACTION,
} from "./type";
const publicIp = require("public-ip");
const { detect } = require("detect-browser");
const browser = detect();
let platform = window.navigator.platform;
let userAgent = window.navigator.userAgent;
let off = new Date().toString().replace(/GMT\+(\d\d)(\d\d)/, "GMT+$1:$2");
let formatTime = off?.split("GMT")[1].split(" (")[0];
let result = formatTime?.slice(1);
if (formatTime.search(/\+/g) != null) {
  formatTime = formatTime.replace(/\+/g, "%2B");
} else if (formatTime.search(/\-/g) != null) {
  formatTime = formatTime.replace(/\-/g, "%2D");
} //replace(/\+/g,' ') browserTimeZone: `GMT${formatTime}`

export const fetch_family_members =
  ({ userid }) =>
  async (dispatch) => {
    let resp = await loginedApi.post("getcountrycode", 
  {
    "token": "token",
    "version":"2.0",
    "data": {browserTimeZone: `GMT${formatTime}`},
    "requestType": 1058
});
const doctorscountrycode = resp.data.data;

    const res = await loginedApi.post("profile", {
      token: "C2MDVerificationToken",
      data: {
        patientId: userid?.user.userId,
        isfrommobile: true,
        browserTimeZone: `GMT${formatTime}`,
        Ipaddress: doctorscountrycode.Ipaddress,
        useragent: userAgent,
        Browser: browser.name + " " + browser.version,
        appname: "C2MD Web",
        Os: platform,
        currency: doctorscountrycode.currency,
        accessCountry: doctorscountrycode.Country,
      },
      requestType: "66",
    });

    if (res.data?.data) {
      dispatch({
        type: FETCH_FAMILY_MEMBERS,
        payload: [
          {
            memberName: "For myself",
            relationship: "self",
            gender: userid?.user?.gender,
            dob: userid?.user?.dob,
          },
          ...res.data.data,
        ],
      });
    }
  };

export const fetch_patient_medicalDetails =
  ({ userdata, date, userID }) =>
  async (dispatch) => {
    let resp = await loginedApi.post("getcountrycode", 
  {
    "token": "token",
    "version":"2.0",
    "data": {browserTimeZone: `GMT${formatTime}`},
    "requestType": 1058
});
const doctorscountrycode = resp.data.data;

    dispatch({ type: FETCH_PATIENT_MEDICAL_DATA_INIT_ACTION });
    const res = await loginedApi.post("profile", {
      requestType: "68",
      token: "C2MDVerificationToken",
      data: {
        patientId: date.relationship == "rel-self" ? userID : date.relationship,
        patientEmail: userdata?.userId,
        patientMobile: userdata?.mobileNumber,
        
        todayRate: userdata?.today_rate?.todayRate,
        currency: userdata?.today_rate?.currency,
        dayOfAppointment: date.appointmentDate,
        appointmentNavigation: "start",
        browserTimeZone: `GMT${formatTime}`,
			Ipaddress: doctorscountrycode.Ipaddress, 
            useragent: userAgent,
            Browser: browser.name+" "+browser.version,
            appname: "C2MD Web",
            Os: platform ,
            currency: doctorscountrycode.currency,
            accessCountry: doctorscountrycode.Country,
        
      },
    });

    if (res.data?.data) {
      dispatch({ type: FETCH_PATIENT_MEDICAL_DATA, payload: res.data.data });
    }
  };

export const fetch_Uploaded_files =
  ({ userId }) =>
  async (dispatch) => {
    let resp = await loginedApi.post("getcountrycode", 
    {
      "token": "token",
      "version":"2.0",
      "data": {browserTimeZone: `GMT${formatTime}`},
      "requestType": 1058
  });
  const doctorscountrycode = resp.data.data;
  
    const res = await loginedApi.post("profile", {
      requestType: "60",
      token: "C2MDVerificationToken",
      data: {
        patientId: userId,
        reportData: {
          type: "All",
          limit: "10",
        },
        
        todayRate: "73.81225",
        browserTimeZone: `GMT${formatTime}`,
			Ipaddress: doctorscountrycode.Ipaddress, 
            useragent: userAgent,
            Browser: browser.name+" "+browser.version,
            appname: "C2MD Web",
            Os: platform ,
            currency: doctorscountrycode.currency,
            accessCountry: doctorscountrycode.Country,
      },
    });

    if (res.data?.data) {
      let Item = res.data?.data;

      dispatch({ type: FETCH_UPLOADED_DATA, payload: Item });
    }
  };

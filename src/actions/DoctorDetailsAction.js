import axios from "axios";
import loginedApi from "../apis";
import { DOCTOR_DETAIL, REMOVE_DOCTOR_DETAIL } from "./type";
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

export const fetch_DoctorDetail = (doctorid) => async (dispatch) => {
  let resp = await loginedApi.post("getcountrycode", {
    token: "token",
    version: "2.0",
    data: { browserTimeZone: `GMT${formatTime}` },
    requestType: 1058,
  });
  const doctorscountrycode = resp.data.data;

  const response = await loginedApi.post("profile", {
    requestType: 59,
    token: "C2MDVerificationToken",
    data: {
      doctorId: doctorid,
      browserTimeZone: `GMT${formatTime}`,
      firstParam: "dr",
      Ipaddress: doctorscountrycode.Ipaddress,
      useragent: userAgent,
      todayRate: "74.45000",
      Browser: browser.name + " " + browser.version,
      appname: "C2MD Web",
      Os: platform,
      currency: doctorscountrycode.currency,
      accessCountry: doctorscountrycode.Country,
    },
  });

  if (response.status == 200) {
    const profileData = response.data.data;

    dispatch({ type: DOCTOR_DETAIL, payload: profileData });
  }
};

export const removeDoctorDetails = () => async (dispatch) => {
  dispatch({ type: REMOVE_DOCTOR_DETAIL });
};

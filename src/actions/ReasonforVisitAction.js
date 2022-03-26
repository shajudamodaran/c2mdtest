import loginedApi from "../apis";
import {
  REASONFOR_VISIT,
  TYPE_OF_APPOINMENT,
  INSURANCE_LIST,
  BOOKING_RELATED_DATA,
} from "./type";
const { detect } = require('detect-browser');
const browser = detect();
let platform = window.navigator.platform;
let userAgent = window.navigator.userAgent;
let off = new Date().toString().replace(/GMT\+(\d\d)(\d\d)/, "GMT+$1:$2");
let formatTime = off?.split("GMT")[1].split(" (")[0];
let result = formatTime?.slice(1);
if (formatTime.search(/\+/g) != null) {
  formatTime = formatTime.replace(/\+/g, "%2B")
} else if (formatTime.search(/\-/g) != null) {
  formatTime = formatTime.replace(/\-/g, "%2D")
}//replace(/\+/g,' ') browserTimeZone: `GMT${formatTime}`


export const fetchReasonforVisit = (doctorId) => async (dispatch) => {
  const res = await loginedApi.post("getreasonforvisit", {
    requestType: 183,
    token: "C2MDVerificationToken",
    data: {
      doctorId: doctorId,
      isfrommobile: true,
      useragent: "Simulator iPhone13,4 - CDD71058-AA65-40EB-8B50-61115DDD07C4",
      browserTimeZone: "GMT%2B05:30",
      currency: "INR",
      todayRate: "74.27006",
      accessCountry: "IN",
      Ipaddress: "192.168.1.43",
      Os: "iOS14.4",
    },
  });

  if (res.status === 200) {
    const reasons = res.data.data.Reasons;
    dispatch({ type: REASONFOR_VISIT, payload: reasons });
  }
};

export const fetchTypeofAppoinment = (doctorId) => async (dispatch) => {
  let resp = await loginedApi.post("getcountrycode", 
  {
    "token": "token",
    "version":"2.0",
    "data": {browserTimeZone: `GMT${formatTime}`},
    "requestType": 1058
});
const doctorscountrycode = resp.data.data;


  const res = await loginedApi.post("gettypeofconsultation", {
    requestType: "182",
    token: "C2MDVerificationToken",
    data: {
      doctorId: doctorId,
      browserTimeZone: `GMT${formatTime}`,
			Ipaddress: doctorscountrycode.Ipaddress, 
            useragent: userAgent,
            Browser: browser.name+" "+browser.version,
            appname: "C2MD Web",
            Os: platform ,
            currency: doctorscountrycode.currency,
            accessCountry: doctorscountrycode.Country,
      todayRate: "",
    },
  });

  if (res.status === 200) {
    const typeofAppoinment = res.data.data.Details;
    dispatch({ type: TYPE_OF_APPOINMENT, payload: typeofAppoinment });
  }
};

export const fetch_Insurance = (patientId) => async (dispatch) => {
  const res = await loginedApi.post("gettinsurancelist", {
    requestType: "923",
    token: "C2MDVerificationToken",
    data: {
      patientId: patientId,
      browserTimeZone: `GMT${formatTime}`,
      useragent: userAgent,
            Browser: browser.name+" "+browser.version,
            appname: "C2MD Web",
            Os: platform ,
      currency: "INR",
      accessCountry: "IN",
      todayRate: "",
    },
  });

  if (res.status === 200) {
    const insuranceList = res.data.data;
    dispatch({ type: INSURANCE_LIST, payload: insuranceList });
  }
};

export const UploadImageUpload = () => async (dispatch) => {};

export const fetch_Symptoms = (patientId) => async (dispatch) => {
  const res = await loginedApi.post("bookingrelateddata", {
    token: "token",
    data: {
      Ipaddress: "",
      userId: patientId,
      browserTimeZone: `GMT${formatTime}`,
      useragent: userAgent,
      Browser: browser.name+" "+browser.version,
      appname: "C2MD Web",
      Os: platform ,
      accessCountry: "IN",
    },
    requestType: 191,
  });

  if (res.status === 200) {
    const settingsdata = res.data.data.data;

    dispatch({ type: BOOKING_RELATED_DATA, payload: settingsdata });
  }
};

import loginedApi from "../apis";
import { FETCH_APPOINTMENT_HISTORY, FETCH_SELECTED_APPOINTMENT_DETAILS } from "./type";
import specialist from "../specialityList";
const publicIp = require("public-ip");
let IP = publicIp.v4();
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



export const fetchAppointmentHistory = (patientData) => async (dispatch) => {

    let resp = await loginedApi.post("getcountrycode", 
    {
      "token": "token",
      "version":"2.0",
      "data": {"browserTimeZone":"GMT%2B05:30"},
      "requestType": 1058
  });
  const doctorscountrycode = resp.data.data;


    const res = await loginedApi.post("getappointmenthistory", {

        token: "C2MDVerificationToken",
        version: "2.0",
        data: {
            browserTimeZone: `GMT${formatTime}`,
            patientId:patientData?.patientId, //"48315460",
            Ipaddress: doctorscountrycode.Ipaddress, 
            useragent: userAgent,
            Browser: browser.name+" "+browser.version,
            appname: "C2MD Web",
            Os: platform ,
          
            accessCountry: doctorscountrycode.Country,
        },
        "requestType": 58,
    });

    console.log(res);

    if (res.status === 200) {
        dispatch({
            type: FETCH_APPOINTMENT_HISTORY,
            payload: res.data.data,
        });
    }
};


export const fetchSelectedAppointmentDetails = ({ appointmentId,userData}) => async (dispatch) => {

    let resp = await loginedApi.post("getcountrycode", 
    {
      "token": "token",
      "version":"2.0",
      "data": {"browserTimeZone":"GMT%2B05:30"},
      "requestType": 1058
  });
  const doctorscountrycode = resp.data.data;

    const res = await loginedApi.post("appointments",
        {
            "requestType": "77",
            "token": "C2MDVerificationToken",
            "data": {
                "appointmentId": appointmentId,
                "userType": userData?.userType,
                browserTimeZone: `GMT${formatTime}`,
                "userId": userData?.userId,
                "currency": userData?.today_rate.currency,
                Browser: browser.name+" "+browser.version,
                appname: "C2MD Web",
                Ipaddress: doctorscountrycode.Ipaddress, 
                useragent: userAgent,
            }
        }
    );

    console.log(res);

    if (res.status === 200) {
        dispatch({
            type: FETCH_SELECTED_APPOINTMENT_DETAILS,
            payload: res.data.data,
        });
    }
};




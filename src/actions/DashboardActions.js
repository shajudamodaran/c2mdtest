import moment from "moment";
import loginedApi from "../apis";
import { check_consultation } from "./MicrositeAction";
import { DASHBOARD_DATA_PATIENT } from "./type";

const publicIp = require("public-ip");
let IP = publicIp.v4();
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


export const fetch_dashboardData = (patientId, email, phone) => async (dispatch) => {

  let today = moment(new Date()).format("DD-MMM-YYYY")




  let data = {
    patientId: patientId,
    patientEmail: email,
    patientMobile: phone,
    browserTimeZone: `GMT${formatTime}`,
    dayOfAppointment: moment(new Date).format('DD-MMM-yyy'),
    appointmentNavigation: "start",
    currency: "INR",
    accessCountry: "IN",
    todayRate: "74.45000",
    Ipaddress: IP, useragent: userAgent,
    Browser: "Chrome-95.0.4638.69",
    Os: platform
  }


  const response = await loginedApi.post("profile", {
    requestType: "51",
    token: "C2MDVerificationToken",
    data
  });

  if (response.status === 200) {

    dispatch({ type: DASHBOARD_DATA_PATIENT, payload: response.data.data.data });
  }


  // return response.data.data.Details;
};


export const uploadReports = ({ formData, userData, dashboardData }) => async (dispatch) => {

  console.log({ formData, userData, dashboardData });

  const config = {
    headers: { 'content-type': 'multipart/form-data' }
  }


  const response = await loginedApi.post("updatereports", {
    body: formData
  }, config);

  console.log("File upload result==>", response);

  if (response.status === 200) {

    dispatch(
      check_consultation(userData, dashboardData)
    );
  }


}


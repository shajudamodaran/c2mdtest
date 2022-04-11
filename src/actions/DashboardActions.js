import moment from "moment";
import loginedApi from "../apis";
import authHeader from './AuthHeader';
import { check_consultation } from "./MicrositeAction";
import { DASHBOARD_DATA_PATIENT, FETCH_COUNTRYDATA } from "./type";

const publicIp = require("public-ip");
const { detect } = require('detect-browser');
const browser = detect();
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

 
    
  let resp = await loginedApi.post("getcountrycode", 
  {
    "token": "token",
    "version":"2.0",
    "data": {"browserTimeZone":"GMT%2B05:30"},
    "requestType": 1058
});
const doctorscountrycode = resp.data.data;

  let data = {
    patientId: patientId,
    patientEmail: email,
    patientMobile: phone,
    browserTimeZone: `GMT${formatTime}`,
    dayOfAppointment: moment(new Date).format('DD-MMM-yyy'),
    appointmentNavigation: "start",
    todayRate: "74.45000",
    currency: doctorscountrycode.currency,
    accessCountry: doctorscountrycode.Country,
    
    Ipaddress: doctorscountrycode.Ipaddress, 
    useragent: userAgent,
    Browser: browser.name+" "+browser.version,
    Os: platform
  }


  const response = await loginedApi.post("profile", {
    requestType: "51",
    token: "C2MDVerificationToken",
    data
  },{ headers: authHeader() });

  if (response.status === 200) {

    dispatch({ type: DASHBOARD_DATA_PATIENT, payload: response.data.data.data });
  }


  // return response.data.data.Details;
};
// Recent activities API integration
export const fetch_recentactivities = (patientId, email, phone) => async (dispatch) => {

  let today = moment(new Date()).format("DD-MMM-YYYY")

 
    
  let resp = await loginedApi.post("getcountrycode", 
  {
    "token": "token",
    "version":"2.0",
    "data": {"browserTimeZone":"GMT%2B05:30"},
    "requestType": 1058
});
const doctorscountrycode = resp.data.data;

  let data = {
    patientId: patientId,
    patientEmail: email,
    patientMobile: phone,
    browserTimeZone: `GMT${formatTime}`,
    
    todayRate: "74.45000",
    currency: doctorscountrycode.currency,
    accessCountry: doctorscountrycode.Country,
    
    Ipaddress: doctorscountrycode.Ipaddress, 
    useragent: userAgent,
    Browser: browser.name+" "+browser.version,
    Os: platform
  }


  const response = await loginedApi.post("getrecentactivities", {
    requestType: "1039",
    token: "C2MDVerificationToken",
    data
  },{ headers: authHeader() });

  // console.log("recent activities----",response)

  if (response.status === 200) {

   // dispatch({ type: DASHBOARD_DATA_PATIENT, payload: response.data.data.data });
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

export const getCountryData = () => async (dispatch) => {
 
 

  
  const res = await loginedApi.post("getcountrycode", 
  {
    "token": "token",
    "version":"2.0",
    "data": {"browserTimeZone":"GMT%2B05:30"},
    "requestType": 1058
});

  if (res.status === 200) {


    dispatch({ type: FETCH_COUNTRYDATA, payload: res.data.data });
  }


};



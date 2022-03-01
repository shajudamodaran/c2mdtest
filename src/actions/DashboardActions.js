import moment from "moment";
import loginedApi from "../apis";
import { check_consultation } from "./MicrositeAction";
import { DASHBOARD_DATA_PATIENT } from "./type";



export const fetch_dashboardData = (userData,dashboardData) => async (dispatch) => {

  let today= moment(new Date()).format("DD-MMM-YYYY")


  let data = {

    patientId:dashboardData?.patientId,
    patientEmail: dashboardData?.patientEmail,
    patientMobile:userData?.mobileNumber,
    browserTimeZone: dashboardData?.browserTimeZone,
    dayOfAppointment: today,
    appointmentNavigation:dashboardData?.appointmentNavigation,
    currency: dashboardData?.currency,
    accessCountry: dashboardData?.accessCountry,
    todayRate:dashboardData?.todayRate,
    Ipaddress: dashboardData?.Ipaddress, 
    useragent: dashboardData?.useragent,
    Browser: dashboardData?.Browser,
    Os: dashboardData?.Os
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


export const uploadReports = ({formData, userData, dashboardData }) => async (dispatch) => {

  console.log({formData, userData, dashboardData });

  const config = {     
    headers: { 'content-type': 'multipart/form-data' }
}


  const response = await loginedApi.post("updatereports", {
    body: formData
  },config);

  if (response.status === 200) {
  
    dispatch(
      check_consultation(userData, dashboardData)
    );
  }


}


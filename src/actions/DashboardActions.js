import loginedApi from "../apis";
import { check_consultation } from "./MicrositeAction";
import { DASHBOARD_DATA_PATIENT } from "./type";



export const fetch_dashboardData = () => async (dispatch) => {
  let data = {

    patientId: "48315460",
    patientEmail: "mail.sobinjose@gmail.com",
    patientMobile: "+91 9846809893",
    browserTimeZone: "GMT+05:30",
    dayOfAppointment: "16-Nov-2021",
    appointmentNavigation: "start",
    currency: "INR",
    accessCountry: "IN",
    todayRate: "74.45000",
    Ipaddress: "111.92.118.253", useragent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
    Browser: "Chrome-95.0.4638.69",
    Os: "Windows"
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


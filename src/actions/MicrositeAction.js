import { CHECK_CONSULTATION, FETCH_CLIENTDETAILS, FETCH_COUNTRYDATA } from "./type";
import loginedApi from "../apis";
import moment from "moment";
let off = new Date().toString().replace(/GMT\+(\d\d)(\d\d)/, "GMT+$1:$2");
let formatTime = off?.split("GMT")[1].split(" (")[0];
let result = formatTime?.slice(1);
if (formatTime.search(/\+/g) != null) {
  formatTime = formatTime.replace(/\+/g, "%2B")
} else if (formatTime.search(/\-/g) != null) {
  formatTime = formatTime.replace(/\-/g, "%2D")
}//replace(/\+/g,' ') browserTimeZone: GMT${formatTime}


export const fetch_clientDetails = (clinicId) => async (dispatch) => {



  let params = {
    requestType: "1036",
    token: "C2MDVerificationToken",
    data: {
      browserTimeZone: `GMT${formatTime}`,
      currency: "INR",
      accessCountry: "IN",
      todayRate: "",
      clinicId: clinicId,
    },
  };
  if (clinicId != "") {
    params.data.clinicId = clinicId;
  }

  const response = await loginedApi.post("getclinicdetails", params);
  //localStorage.setItem("ClinicDetails",response.data.data);

  console.log("Calling.....................",params);
  console.log("Response.....................",response);

  await localStorage.setItem("ClinicDetails", JSON.stringify(response.data.data));
  dispatch({ type: FETCH_CLIENTDETAILS, payload: response.data.data });
  getCountryData();
};



export const check_consultation = (userData) => async (dispatch) => {

let today= moment(new Date()).format("DD-MMM-YYYY")


  let paramAppoint =
  {
    "requestType": "65",
    "token": "C2MDVerificationToken",
    "data":
    {
      "patientId": userData?.userId,
      "patientEmail": userData?.userId,
      "patientMobile": userData?.mobileNumber,
      "browserTimeZone": "GMT%2B05:30",
      "dayOfAppointment": today,
      "appointmentNavigation": "start",
      "currency": "INR",
      "accessCountry": "IN",
      "todayRate": "74.45000",
      "Ipaddress": {},
      "useragent": "Mozilla/5.0 (Linux; Android 8.0.0; Nexus 6P Build/OPP3.170518.006) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.81 Mobile Safari/537.36", "Browser": "Chrome-95.0.4638.69", "Os": "Win32"
    }
  }


  const response = await loginedApi.post("appointments", paramAppoint);
  //localStorage.setItem("ClinicDetails",response.data.data);

 

  if (response.data.data) {

    dispatch({ type: CHECK_CONSULTATION, payload: response.data.data });
  }

};


export const getCountryData = () => async (dispatch) => {
 
 

  const res = await loginedApi.post("getcountrycode", 
  {
    "token": "token",
    "version":"2.0",
    "data": { browserTimeZone: `GMT${formatTime}`,},
    "requestType": 1058
});


  if (res.status === 200) {


    dispatch({ type: FETCH_COUNTRYDATA, payload: res.data.data });
  }


};




// if (userData.userId && userData.userName && userData.mobileNumber && dashboardData?.dayOfAppointment) {

//   let paramAppoint = {
//     "requestType": "65",
//     "token": "C2MDVerificationToken",
//     "data":
//     {
//       "patientId": userData.userId,
//       "patientEmail": userData.userName,
//       "patientMobile": userData.mobileNumber,
//       "browserTimeZone": "GMT%2B05:30",
//       "dayOfAppointment": dashboardData.dayOfAppointment,
//       "currency": "INR",
//       "accessCountry": "IN",
//       "todayRate": "74.45000",
//       "Ipaddress": {},
//       "useragent": "Mozilla/5.0 (Linux; Android 8.0.0; Nexus 6P Build/OPP3.170518.006) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.81 Mobile Safari/537.36", "Browser": "Chrome-95.0.4638.69", "Os": "Win32"
//     }
//   }

//   const response = await loginedApi.post("appointments", paramAppoint);
//   //localStorage.setItem("ClinicDetails",response.data.data);

//   dispatch({ type: CHECK_CONSULTATION, payload: response.data.data });

// }
// else {
//   console.log("Api call check_consultation not completed because of incomplete parameters");

// }
import { FETCH_CONSULTATION } from "./type";
import loginedApi from "../apis";
let off = new Date().toString().replace(/GMT\+(\d\d)(\d\d)/, "GMT+$1:$2");
let formatTime = off?.split("GMT")[1].split(" (")[0];
let result = formatTime?.slice(1);
if(formatTime.search(/\+/g)!=null)
  {
    formatTime=formatTime.replace(/\+/g,"%2B")
  }else if(formatTime.search(/\-/g)!=null)
  {
    formatTime=formatTime.replace(/\-/g,"%2D")
  }//replace(/\+/g,' ') browserTimeZone: `GMT${formatTime}`


  export const fetch_clientDetails = (consultationId,userType) => async (dispatch) => {

  
    
    let countrycoderes = await loginedApi.post("getcountrycode", 
    {
      "token": "token",
      "version":"2.0",
      "data": { browserTimeZone: `GMT${formatTime}`,},
      "requestType": 1058
  });
  
   let doctorscountrycode = countrycoderes.data.data;
    let params = {
      requestType: "400",
      token: "C2MDVerificationToken",
      data: {
        browserTimeZone: `GMT${formatTime}`,
        currency: doctorscountrycode.currency,
        accessCountry: doctorscountrycode.Country,
        todayRate: "",
        consultationId: consultationId,
        userType: userType,
      },
    };
    
   
    if (consultationId != "") {
      params.data.consultationId = consultationId;
    }
  
    console.log("Calling............................",params);
    const response = await loginedApi.post("consultation", params);
    dispatch({ type: FETCH_CONSULTATION, payload: response.data.data });
  
    return response.data.data;
  };
  
  export const fetch_ConsultationDetails = (consultationId,userType) => async (dispatch) => {
    let countrycoderes = await loginedApi.post("getcountrycode", 
    {
      "token": "token",
      "version":"2.0",
      "data": { browserTimeZone: `GMT${formatTime}`,},
      "requestType": 1058
  });
  
   let doctorscountrycode = countrycoderes.data.data;
    let params = {
      requestType: "404",
      token: "C2MDVerificationToken",
      data: {
        browserTimeZone: `GMT${formatTime}`,
        currency: doctorscountrycode.currency,
        accessCountry: doctorscountrycode.Country,
        todayRate: "",
        consultationId: consultationId,
        userType: userType,
      },
    };
    
    if (consultationId != "") {
      params.data.consultationId = consultationId;
    }
  
    const response = await loginedApi.post("consultation", params);
    dispatch({ type: FETCH_CONSULTATION, payload: response.data.data });
  
    return response.data.data;
  };
import { APPOINTMENT_SLOT, APPOINTMENT_MORE_SLOT, APPOINTMENT_MORE_SLOT_RESET } from "./type";
import loginedApi from "../apis";

const { detect } = require('detect-browser');
const browser = detect();
let platform = window.navigator.platform;
let userAgent = window.navigator.userAgent;
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

let countrycoderes;
let doctorscountrycode;

export const fetch_appointmentSlot =
  ({ isStart, isNext, date, typeofconsultation, doctorId }) =>
  async (dispatch) => {


    countrycoderes = await loginedApi.post("getcountrycode",
    {
      "token": "token",
      "version": "2.0",
      "data": { browserTimeZone: `GMT${formatTime}`, },
      "requestType": 1058
    });

    doctorscountrycode = countrycoderes.data.data;
      


    const response = await loginedApi.post("doctortimeslots", {
      requestType: "175",
      token: "C2MDVerificationToken",
      data: {
        timeSlotCriteria: {
          doctorId: doctorId,
          date: date,
          isStart: isStart,
          isNext: isNext,
          typeofconsultation: typeofconsultation,
        },
        // browserTimeZone: "GMT%2B05:30",
        browserTimeZone: `GMT${formatTime}`,
        todayRate: "73.49680",
        actualRate: "73.49680",
        Ipaddress: doctorscountrycode.Ipaddress, 
        useragent: userAgent,
        Browser: browser.name+" "+browser.version,
        appname: "C2MD Web",
        Os: platform ,
        accessCountry: doctorscountrycode.Country,
        currency: doctorscountrycode.currency,
      },
    });

    if (response.status === 200) {
      dispatch({ type: APPOINTMENT_SLOT, payload: response.data.data });
    }
  };










  
  export const fetch_more_appointmentSlot =
  ({ isStart, isNext, date, typeofconsultation, doctorId, isClear }) =>
    async (dispatch) => {

      countrycoderes = await loginedApi.post("getcountrycode",
        {
          "token": "token",
          "version": "2.0",
          "data": { browserTimeZone: `GMT${formatTime}`, },
          "requestType": 1058
        });

      doctorscountrycode = countrycoderes.data.data;


      const response = await loginedApi.post("doctortimeslots", {
        requestType: "175",
        token: "C2MDVerificationToken",
        data: {
          timeSlotCriteria: {
            doctorId: doctorId,
            date: date,
            isStart: isStart,
            isNext: isNext,
            typeofconsultation: typeofconsultation,
          },
          browserTimeZone: `GMT${formatTime}`,
          todayRate: "73.49680",
          actualRate: "73.49680",
          Ipaddress: doctorscountrycode.Ipaddress, 
          useragent: userAgent,
          Browser: browser.name+" "+browser.version,
          appname: "C2MD Web",
          Os: platform ,
          accessCountry: doctorscountrycode.Country,
          currency: doctorscountrycode.currency,
        },
      });
      if (response.status === 200) {
        console.log(response);
        dispatch({ type: isClear ? APPOINTMENT_MORE_SLOT_RESET : APPOINTMENT_MORE_SLOT, payload: response.data.data });
      }
    };


    export const fetch_appointmentTypes = (doctorId) => async (dispatch) => {
      countrycoderes = await loginedApi.post("getcountrycode",
        {
          "token": "token",
          "version": "2.0",
          "data": { browserTimeZone: `GMT${formatTime}`, },
          "requestType": 1058
        });
    
      doctorscountrycode = countrycoderes.data.data;
      const response = await loginedApi.post("gettypeofconsultation", {
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
          accessCountry: doctorscountrycode.Country,
          currency: doctorscountrycode.currency,
          todayRate: "",
        },
      });
    
      return response.data.data.Details;
    };
    
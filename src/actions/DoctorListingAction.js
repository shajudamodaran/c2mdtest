import loginedApi from "../apis/index";
import { DOCTOR_LISTING } from "./type";
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

export const fetch_doctors =
  (speciality, clinicId, pagination) => async (dispatch) => {


    console.log({ speciality, clinicId, pagination });


    let resp = await loginedApi.post("getcountrycode", {
      token: "token",
      version: "2.0",
      data: { browserTimeZone: `GMT${formatTime}` },
      requestType: 1058,
    });
    const doctorscountrycode = resp.data.data;

    let params = {
      data: {
        clinicId: clinicId,
        todayRate: "74.27006",
        searchName: "",
        City: "",
        speciality: speciality,
        browserTimeZone: `GMT${formatTime}`,
        Ipaddress: doctorscountrycode.Ipaddress,
        useragent: userAgent,
        Browser: browser.name + " " + browser.version,
        appname: "C2MD Web",
        Os: platform,
        currency: doctorscountrycode.currency,
        accessCountry: doctorscountrycode.Country,

      },
      requestType: "604",
      token: "C2MDVerificationToken",
    };


    let getalldoctors = {
      requestType: "259",
      token: "C2MDVerificationToken",
      data: {
        browserTimeZone: `GMT${formatTime}`,
        Ipaddress: doctorscountrycode.Ipaddress,
        useragent: userAgent,
        Browser: browser.name + " " + browser.version,
        appname: "C2MD Web",
        Os: platform,
        currency: doctorscountrycode.currency,
        accessCountry: doctorscountrycode.Country,
        todayRate: "",
        clinicId: clinicId,
        searchName: "",
        City: "",
        count: pagination,

      },
    };

    if (clinicId != "") {
      params.data.clinicId = clinicId;
    }

    let res = null;


    //Only if there is clinic id.................................

    if (clinicId) {

      if (speciality && speciality != "ALL") {

        res = await loginedApi.post("searchDoctor", params);
        console.log("Searching doctors...........................",params);
      
      } else {


        res = await loginedApi.post("getdoctors", getalldoctors);
        console.log("loading all doctors...........................");
      }

      if (res.status === 200) {
        const doctors = res.data.data;

        let location = [{ value: "All", checked: false }];
        let hospitals = [{ value: "All", checked: false }];
        let languagesSet = [
          { value: "All", checked: false },
          { value: "English", checked: false },
          { value: "Hindi", checked: false },
          { value: "Tamil", checked: false },
        ];

        doctors.Hospitals.map((item) => {
          item && hospitals.push({ value: item, checked: false });
        });
        doctors.citiesSet.map((item) => {
          item && location.push({ value: item, checked: false });
        });
        doctors.languagesSet.map((item) => {
          item && location.push({ value: item, checked: false });
        });

    
        dispatch({
          type: DOCTOR_LISTING,
          payload: {
            speciality,
            doctors: doctors,
            location: location,
            hospitals: hospitals,
            languagesSet: languagesSet,
            indexCharacters: doctors?.indexCharacters,
          },
        });
      }
    }

  };

export const fetch_alldoctors = (count, clinicId) => async (dispatch) => {
  // let reduxData = useSelector(state => state)
  // console.log("88888888888",reduxData)
  const countrycoderes = await loginedApi.post("getcountrycode",
    {
      "token": "token",
      "version": "2.0",
      "data": { browserTimeZone: `GMT${formatTime}`, },
      "requestType": 1058
    });

  const doctorscountrycode = countrycoderes.data.data;

  let params = {
    data: {
      clinicId: clinicId,
      Ipaddress: doctorscountrycode.Ipaddress,
      useragent: userAgent,
      todayRate: "74.27006",
      currency: doctorscountrycode.currency,
      accessCountry: doctorscountrycode.Country,
      searchName: "",
      browserTimeZone: `GMT${formatTime}`,
      Os: platform,
      City: "",

      count: count,
    },
    requestType: "259",
    token: "C2MDVerificationToken",
  };

  if (clinicId != "") {
    params.data.clinicId = clinicId;
  }


  let res;
  if (clinicId != "" && clinicId != undefined) {
    res = await loginedApi.post("getdoctors", params);
  }
  console.log("res-->", res)

  if (res?.status === 200) {
    const doctors = res.data.data;

    let location = [{ value: "All", checked: false }];
    let hospitals = [{ value: "All", checked: false }];
    let languagesSet = [
      { value: "All", checked: false },
      { value: "English", checked: false },
      { value: "Hindi", checked: false },
      { value: "Tamil", checked: false },
    ];

    doctors.Hospitals.map((item) => {
      item && hospitals.push({ value: item, checked: false });
    });
    doctors.citiesSet.map((item) => {
      item && location.push({ value: item, checked: false });
    });
    doctors.languagesSet.map((item) => {
      item && location.push({ value: item, checked: false });
    });


    console.log(doctors.doctorDetails.length);


    dispatch({
      type: DOCTOR_LISTING,
      payload: {
        doctors: doctors,
        location: location,
        hospitals: hospitals,
        languagesSet: languagesSet,
        indexCharacters: doctors?.indexCharacters,
      },
    });
  }
};
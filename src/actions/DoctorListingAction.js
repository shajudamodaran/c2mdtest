import loginedApi from "../apis/index";
import { DOCTOR_LISTING } from "./type";
const publicIp = require("public-ip");
let IP = publicIp.v4();
let platform = window.navigator.platform;
let userAgent = window.navigator.userAgent;

export const fetch_doctors = (speciality, clinicId) => async (dispatch) => {
  let params = {
    data: {
      clinicId: clinicId,
      Ipaddress: IP,
      useragent: userAgent,
      todayRate: "74.27006",
      currency: "INR",
      searchName: "",
      browserTimeZone: "GMT%2B05:30",
      Os: platform,
      City: "",
      accessCountry: "IN",
      speciality: speciality,
    },
    requestType: "604",
    token: "C2MDVerificationToken",
  };

  if (clinicId != "") {
    params.data.clinicId = clinicId;
  }

  const res = await loginedApi.post("searchDoctor", params);

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
        doctors: doctors,
        location: location,
        hospitals: hospitals,
        languagesSet: languagesSet,
        indexCharacters: doctors?.indexCharacters,
      },
    });
  }
};

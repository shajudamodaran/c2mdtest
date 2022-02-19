import axios from "axios";
import loginedApi from "../apis";
import { DOCTOR_DETAIL, REMOVE_DOCTOR_DETAIL } from "./type";

export const fetch_DoctorDetail = (doctorid) => async (dispatch) => {
  const response = await loginedApi.post("profile", {
    requestType: 59,
    token: "C2MDVerificationToken",
    data: {
      browserTimeZone: "GMT%2B05:30",
      accessCountry: "IN",
      Os: "iOS14.4",
      todayRate: "70.89479",
      doctorId: doctorid,
      currency: "INR",
      firstParam: "dr",
      Ipaddress: "192.168.1.43",
      useragent: "Simulator iPhone13,4 - CDD71058-AA65-40EB-8B50-61115DDD07C4",
    },
  });

  if (response.status == 200) {
    const profileData = response.data.data;

    dispatch({ type: DOCTOR_DETAIL, payload: profileData });
  }
};

export const removeDoctorDetails = () => async (dispatch) => {
  dispatch({ type: REMOVE_DOCTOR_DETAIL });
};

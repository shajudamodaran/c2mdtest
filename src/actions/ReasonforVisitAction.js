import loginedApi from "../apis";
import {
  REASONFOR_VISIT,
  TYPE_OF_APPOINMENT,
  INSURANCE_LIST,
  BOOKING_RELATED_DATA,
} from "./type";
export const fetchReasonforVisit = (doctorId) => async (dispatch) => {
  const res = await loginedApi.post("getreasonforvisit", {
    requestType: 183,
    token: "C2MDVerificationToken",
    data: {
      doctorId: doctorId,
      isfrommobile: true,
      useragent: "Simulator iPhone13,4 - CDD71058-AA65-40EB-8B50-61115DDD07C4",
      browserTimeZone: "GMT%2B05:30",
      currency: "INR",
      todayRate: "74.27006",
      accessCountry: "IN",
      Ipaddress: "192.168.1.43",
      Os: "iOS14.4",
    },
  });

  if (res.status === 200) {
    const reasons = res.data.data.Reasons;
    dispatch({ type: REASONFOR_VISIT, payload: reasons });
  }
};

export const fetchTypeofAppoinment = (doctorId) => async (dispatch) => {
  const res = await loginedApi.post("gettypeofconsultation", {
    requestType: "182",
    token: "C2MDVerificationToken",
    data: {
      doctorId: doctorId,
      browserTimeZone: "GMT%2B05:30",
      currency: "INR",
      accessCountry: "IN",
      todayRate: "",
    },
  });

  if (res.status === 200) {
    const typeofAppoinment = res.data.data.Details;
    dispatch({ type: TYPE_OF_APPOINMENT, payload: typeofAppoinment });
  }
};

export const fetch_Insurance = (patientId) => async (dispatch) => {
  const res = await loginedApi.post("gettinsurancelist", {
    requestType: "923",
    token: "C2MDVerificationToken",
    data: {
      patientId: patientId,
      browserTimeZone: "GMT%2B05:30",
      currency: "INR",
      accessCountry: "IN",
      todayRate: "",
    },
  });

  if (res.status === 200) {
    const insuranceList = res.data.data;
    dispatch({ type: INSURANCE_LIST, payload: insuranceList });
  }
};

export const UploadImageUpload = () => async (dispatch) => {};

export const fetch_Symptoms = (patientId) => async (dispatch) => {
  const res = await loginedApi.post("bookingrelateddata", {
    token: "token",
    data: {
      Ipaddress: "192.168.1.43",
      userId: patientId,
      browserTimeZone: "GMT%2B05:30",
      Os: "iOS14.4",
      useragent: "Simulator iPhone13,4 - CDD71058-AA65-40EB-8B50-61115DDD07C4",
      accessCountry: "IN",
    },
    requestType: 191,
  });

  if (res.status === 200) {
    const settingsdata = res.data.data.data;

    dispatch({ type: BOOKING_RELATED_DATA, payload: settingsdata });
  }
};

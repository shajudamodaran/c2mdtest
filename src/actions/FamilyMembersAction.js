import loginedApi from "../apis";
import { toast } from "react-toastify";
import CryptoJS from "crypto-js";
import {
  FETCH_FAMILY_MEMBERS,
  FETCH_PATIENT_MEDICAL_DATA,
  FETCH_UPLOADED_DATA,
  FETCH_PATIENT_MEDICAL_DATA_INIT_ACTION,
  FETCH_PATIENT_MEDICAL_DATA_FAIL_ACTION,
} from "./type";
const publicIp = require("public-ip");
let IP = publicIp.v4();
let platform = window.navigator.platform;
let userAgent = window.navigator.userAgent;

export const fetch_family_members =
  ({ userid }) =>
  async (dispatch) => {
    const res = await loginedApi.post("profile", {
      token: "C2MDVerificationToken",
      data: {
        Os: platform,
        useragent: userAgent,
        patientId: userid?.user.userId,
        isfrommobile: true,
        Ipaddress: IP,
      },
      requestType: "66",
    });

    if (res.data?.data) {
      dispatch({
        type: FETCH_FAMILY_MEMBERS,
        payload: [
          {
            memberName: "For myself",
            relationship: "self",
            gender: userid?.user?.gender,
            dob: userid?.user?.dob,
          },
          ...res.data.data,
        ],
      });
    }
  };

export const fetch_patient_medicalDetails =
  ({ userdata, date, userID }) =>
  async (dispatch) => {
    dispatch({ type: FETCH_PATIENT_MEDICAL_DATA_INIT_ACTION });
    const res = await loginedApi.post("profile", {
      requestType: "68",
      token: "C2MDVerificationToken",
      data: {
        patientId: date.relationship == "rel-self" ? userID : date.relationship,
        patientEmail: userdata?.userName,
        patientMobile: userdata?.mobileNumber,
        browserTimeZone: "GMT%2B05:30",
        accessCountry: "IN",
        todayRate: userdata?.today_rate?.todayRate,
        currency: userdata?.today_rate?.currency,
        dayOfAppointment: date.appointmentDate,
        appointmentNavigation: "start",
        Ipaddress: IP,
        useragent: userAgent,
        Os: platform,
      },
    });

    if (res.data?.data) {
      dispatch({ type: FETCH_PATIENT_MEDICAL_DATA, payload: res.data.data });
    }
  };

export const fetch_Uploaded_files =
  ({ userId }) =>
  async (dispatch) => {
    const res = await loginedApi.post("profile", {
      requestType: "60",
      token: "C2MDVerificationToken",
      data: {
        patientId: userId,
        reportData: {
          type: "All",
          limit: "10",
        },
        browserTimeZone: "GMT%2B05:30",
        accessCountry: "IN",
        todayRate: "73.81225",
        currency: "INR",
        Ipaddress: IP,
        useragent: userAgent,
        Os: platform,
      },
    });

    if (res.data?.data) {
      let Item = res.data?.data;

      dispatch({ type: FETCH_UPLOADED_DATA, payload: Item });
    }
  };

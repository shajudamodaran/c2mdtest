import { APPOINTMENT_SLOT, APPOINTMENT_MORE_SLOT } from "./type";
import loginedApi from "../apis";

let off = new Date().toString().replace(/GMT\+(\d\d)(\d\d)/, "GMT+$1:$2");
let formatTime = off?.split("GMT")[1].split(" (")[0];
let result = formatTime?.slice(1);

export const fetch_appointmentSlot =
  ({ isStart, isNext, date, typeofconsultation, doctorId }) =>
  async (dispatch) => {
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
        browserTimeZone: `GMT%2B${result}`,
        todayRate: "73.49680",
        actualRate: "73.49680",
        currency: "INR",
        accessCountry: "IN",
      },
    });

    if (response.status === 200) {
      dispatch({ type: APPOINTMENT_SLOT, payload: response.data.data });
    }
  };

export const fetch_more_appointmentSlot =
  ({ isStart, isNext, date, typeofconsultation, doctorId }) =>
  async (dispatch) => {
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
        browserTimeZone: `GMT%2B${result}`,
        todayRate: "73.49680",
        actualRate: "73.49680",
        currency: "INR",
        accessCountry: "IN",
      },
    });
    if (response.status === 200) {
      dispatch({ type: APPOINTMENT_MORE_SLOT, payload: response.data.data });
    }
  };

export const fetch_appointmentTypes = (doctorId) => async (dispatch) => {
  const response = await loginedApi.post("gettypeofconsultation", {
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

  return response.data.data.Details;
};

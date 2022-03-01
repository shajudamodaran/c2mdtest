import loginedApi from "../apis";
import { FETCH_APPOINTMENT_HISTORY, FETCH_SELECTED_APPOINTMENT_DETAILS } from "./type";
import specialist from "../specialityList";
const publicIp = require("public-ip");
let IP = publicIp.v4();
let platform = window.navigator.platform;
let userAgent = window.navigator.userAgent;


export const fetchAppointmentHistory = (patientData) => async (dispatch) => {
    const res = await loginedApi.post("getappointmenthistory", {

        token: "C2MDVerificationToken",
        version: "2.0",
        data: {
            browserTimeZone: patientData?.browserTimeZone,
            patientId:patientData?.patientId, //"48315460",
            Ipaddress: patientData?.Ipaddress,
            appname: patientData?.appname,
            Os: patientData?.Os,
            useragent: patientData?.useragent,
            accessCountry: patientData?.accessCountry
        },
        "requestType": 58,
    });

    console.log(res);

    if (res.status === 200) {
        dispatch({
            type: FETCH_APPOINTMENT_HISTORY,
            payload: res.data.data,
        });
    }
};


export const fetchSelectedAppointmentDetails = ({ appointmentId,userData}) => async (dispatch) => {


    const res = await loginedApi.post("appointments",
        {
            "requestType": "77",
            "token": "C2MDVerificationToken",
            "data": {
                "appointmentId": appointmentId,
                "userType": userData?.userType,
                "browserTimeZone": "GMT+05:30",
                "userId": userData?.userId,
                "currency": userData?.today_rate.currency
            }
        }
    );

    console.log(res);

    if (res.status === 200) {
        dispatch({
            type: FETCH_SELECTED_APPOINTMENT_DETAILS,
            payload: res.data.data,
        });
    }
};




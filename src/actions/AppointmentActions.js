import loginedApi from "../apis";
import { FETCH_APPOINTMENT_HISTORY, FETCH_SELECTED_APPOINTMENT_DETAILS } from "./type";
import specialist from "../specialityList";
const publicIp = require("public-ip");
let IP = publicIp.v4();
let platform = window.navigator.platform;
let userAgent = window.navigator.userAgent;


export const fetchAppointmentHistory = (patientId) => async (dispatch) => {
    const res = await loginedApi.post("getappointmenthistory", {

        token: "C2MDVerificationToken",
        version: "2.0",
        data: {
            browserTimeZone: "GMT%2B05:30",
            patientId:patientId, //"48315460",
            Ipaddress: "192.168.1.43",
            appname: "C2MD Patient",
            Os: "iOS14.4",
            useragent: "Simulator iPhone13,4 - CDD71058-AA65-40EB-8B50-61115DDD07C4",
            accessCountry: "IN"
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


export const fetchSelectedAppointmentDetails = ({ appointmentId,userType,userId }) => async (dispatch) => {

    console.log("Click ok");
    const res = await loginedApi.post("appointments",
        {
            "requestType": "77",
            "token": "C2MDVerificationToken",
            "data": {
                "appointmentId": appointmentId,
                "userType": userType,
                "browserTimeZone": "GMT+05:30",
                "userId": userId,
                "currency": "INR"
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




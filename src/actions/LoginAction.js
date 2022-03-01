import loginedApi from "../apis";
import { toast } from "react-toastify";
import CryptoJS from "crypto-js";
import { LOGIN_SUCCESS_ACTION, LOG_OUT_ACTION, UPDATE_LOGIN } from "./type";
const publicIp = require("public-ip");
let IP = publicIp.v4();
let platform = window.navigator.platform;
let userAgent = window.navigator.userAgent;

export const loginAction =
  ({ loginType, userName, accessCountry, password, history, backupData }) =>
    async (dispatch) => {
      var hash = CryptoJS.SHA512("C2MD|" + password);
      // var hash = CryptoJS.SHA512(password);
      const res = await loginedApi.post("login", {
        token: "token",
        data: {
          isFromMobile: true,
          Ipaddress: IP,
          clinicId: "20",
          deviceId: "",
          browserTimeZone: "GMT%2B05:30",
          appname: "C2MD Patient",
          Os: platform,
          hashPassword: hash.toString(CryptoJS.enc.Base64),
          useragent: userAgent,
          password: hash.toString(),
          accessCountry: accessCountry,
          loginType: loginType,
          userName: userName,
        },
        requestType: 3,
      });

      if (res?.data?.data?.info) {
        return res.data.data;
      } else {
        dispatch({ type: LOGIN_SUCCESS_ACTION, payload: res.data.data });

        await localStorage.setItem("userData", JSON.stringify(res.data.data));

        if (res.data?.data?.userType == "Patient") {
          if (backupData && backupData?.redirection) {
            history.push(backupData?.redirection);
          } else if (history?.location?.state?.redirection) {
            history.push(history?.location?.state?.redirection);
          } else {
            history.push("/dashboard");
          }
        } else {
          history.push("/dashboard");
        }
      }
      return res.data.data;
    };

export const checkUser =
  ({ type, searchkey }) =>
    async (dispatch) => {
      const response = await loginedApi.post("loginwithotp", {
        requestType: 15,
        token: "C2MDVerificationToken",
        data: { type: type, searchKey: searchkey },
      });

      if (response.status === 200) {
        return response.data && response.data;
      }
    };

export const logoutAction = (userData, patientData) => async (dispatch) => {

  let params = {
    "token": "token",
    "version": "2.0",
    "data":
    {
      "browserTimeZone": "GMT%2B05:30",
      "userId": userData?.userId,
      "Ipaddress": patientData?.ipAddress,
      "appname": patientData?.appname,
      "Os": patientData?.Os,
      "useragent": patientData?.useragent,
      "accessCountry": patientData?.accessCountry
    },
    "requestType": 4
  }

  const res = await loginedApi.post("logout", {
    token: "C2MDVerificationToken",
    data: params.data,
    requestType: 4,
  });


  dispatch({ type: LOG_OUT_ACTION, payload: res?.data.data });
  localStorage.removeItem("userData");


};

export const loginwithotp =
  ({ loginType, userName, accessCountry, history, appoinment_form }) =>
    async (dispatch) => {
      const res = await loginedApi.post("login", {
        token: "token",
        data: {
          isFromMobile: true,
          Ipaddress: IP,
          clinicId: "20",
          deviceId: "",
          browserTimeZone: "GMT%2B05:30",
          appname: "C2MD Patient",
          Os: platform,
          hashPassword: "",
          useragent: userAgent,
          password: "",
          accessCountry: accessCountry,
          loginType: loginType,
          userName: userName,
          isotpverified: true,
        },
        requestType: 3,
      });

      if (res.data.data.info) {
        toast.error("Invalid username or password !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        dispatch({ type: LOGIN_SUCCESS_ACTION, payload: res.data.data });

        await localStorage.setItem("userData", JSON.stringify(res.data.data));
        if (res.data?.data?.userType == "Patient") {
          if (appoinment_form?.routing) {
            let doctrId = localStorage.getItem("doctrID");

            history.push(`/BookAppointment/${doctrId}`);
          } else {
            history.push("/DoctorListing");
          }
        } else {
          history.push("/DoctorListing");
        }
      }
    };

export const loginWithGoogle =
  ({ Data, history }) =>
    async (dispatch) => {
      const res = await loginedApi.post("login", {
        token: "token",
        data: {
          isFromMobile: true,
          Ipaddress: IP,
          clinicId: "20",
          deviceId: "",
          browserTimeZone: "GMT%2B05:30",
          appname: "C2MD Patient",
          Os: platform,
          hashPassword: "",
          useragent: userAgent,
          password: "",
          accessCountry: "IN",
          loginType: "email",
          userName: Data?.email,
          isotpverified: true,
        },
        requestType: 3,
      });

      if (res.data.data.info) {
        return res.data.data;
      } else {
        dispatch({ type: LOGIN_SUCCESS_ACTION, payload: res.data.data });

        await localStorage.setItem("userData", JSON.stringify(res.data.data));
        history.push("/DoctorListing");
      }
      return res.data.data;
    };

export const updateLoginDetails = (data) => async dispatch => {
  dispatch({ type: UPDATE_LOGIN, payload: data })
}

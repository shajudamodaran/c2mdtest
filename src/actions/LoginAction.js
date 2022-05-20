import loginedApi from "../apis";
import { toast } from "react-toastify";
import CryptoJS from "crypto-js";
import axios from "axios";
import { LOGIN_SUCCESS_ACTION, LOG_OUT_ACTION, UPDATE_LOGIN } from "./type";
import { ADMIN_USER, BETHANY_CLINIC_ID } from "../constants/const";
import { CLINIC_ADMIN_USER } from "../constants/const";
const qs = require('qs')
const FormData = require('form-data');

const publicIp = require("public-ip");
let IP = publicIp.v4();
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

export const loginAction =
  ({
    loginType,
    userName,
    accessCountry,
    password,
    history,
    backupData,
    setDrSign,
  }) =>
  async (dispatch) => {
    let resp = await loginedApi.post("getcountrycode", {
      token: "token",
      version: "2.0",
      data: { browserTimeZone: `GMT${formatTime}` },
      requestType: 1058,
    });
    const doctorscountrycode = resp.data.data;

    console.log(backupData);
    var hash = CryptoJS.SHA512("C2MD|" + password);
    // var hash = CryptoJS.SHA512(password);
    const res = await loginedApi.post("login", {
      token: "token",
      data: {
        isFromMobile: true,
        clinicId: "20",
        deviceId: "",
        appname: "C2MD Patient",
        hashPassword: hash.toString(CryptoJS.enc.Base64),
        password: hash.toString(),
        loginType: loginType,
        userName: userName,
        browserTimeZone: `GMT${formatTime}`,
        Ipaddress: doctorscountrycode.Ipaddress,
        useragent: userAgent,
        Browser: browser.name + " " + browser.version,
        Os: platform,
        currency: doctorscountrycode.currency,
        accessCountry: doctorscountrycode.Country,
      },
      requestType: 3,
    });

    if (res?.data?.data?.info) {
      return res.data.data;
    } else {
      dispatch({ type: LOGIN_SUCCESS_ACTION, payload: res.data.data });

      await localStorage.setItem("userData", JSON.stringify(res.data.data));
     
      if (res.data?.data?.userType == "Patient") {
        console.log(backupData);
        if (backupData && backupData?.redirection) {
          history.push(backupData?.redirection);
        } else if (history?.location?.state?.redirection) {
          history.push(history?.location?.state?.redirection);
        } else {
          history.push("/dashboard");
        }
      }
      else if ( res.data?.data?.userType == ADMIN_USER ) {
        history.push("/dashboard");
      }
      else if ( res.data?.data?.userType == CLINIC_ADMIN_USER ) {

        if(res.data?.data?.clinicId==BETHANY_CLINIC_ID)
        {
          history.push("/admindashboard");
          //history.push("/dashboard");
        }
        else{
          history.push("/dashboard");

        }
        
      }
      // else if ( res.data?.data?.userType == CLINIC_ADMIN_USER) {
      //   history.push("/admindashboard");
      // }
      
      else {
       // history.push("/dashboard");
        // setDrSign(true)

       
      let login = {
        isFromMobile: true,
              Ipaddress: IP,
              clinicId: "20",
              deviceId: "",
              browserTimeZone: `GMT${formatTime}`,
              appname: "C2MD Patient",
              Os: platform,
              hashPassword: "",
              useragent: userAgent,
              password: "",
              accessCountry: accessCountry,
              loginType: loginType,
              userName: userName,
              isotpverified: true,
              Browser: browser.name + " " + browser.version,
      };

        axios({
          method: 'post',
          url: 'https://uat.c2mdr.com/demo/Connect2MyDoctorRequest',
          data: {
            requestType: 3,
            loginDetails: JSON.stringify(login)
        },
          
          headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(response => {
          console.log(response)
      })
      .catch(err => {
          throw err;
      });

      
    
      
  
      
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

export const logoutAction = () => async (dispatch) => {
  dispatch({ type: LOG_OUT_ACTION });
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
        browserTimeZone: `GMT${formatTime}`,
        appname: "C2MD Patient",
        Os: platform,
        hashPassword: "",
        useragent: userAgent,
        password: "",
        accessCountry: accessCountry,
        loginType: loginType,
        userName: userName,
        isotpverified: true,
        Browser: browser.name + " " + browser.version,
      },
      requestType: 3,
    });

    console.log(res);

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
      dispatch({
        type: LOGIN_SUCCESS_ACTION,
        payload: res.data.data,
      });

      //await localStorage.setItem("userData", JSON.stringify(res.data.data));
      console.log(res.data?.data?.userType);
      if (res.data?.data?.userType == "Patient") {
        if (appoinment_form?.routing) {
          let doctrId = localStorage.getItem("doctrID");

          history.push(`/BookAppointment/${doctrId}`);
        } else {
          history.push("/dashboard");
        }
      } else {
        let requestOptions = {
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          }
      };
  
      let body = {
        token: "token",
        data: {
          isFromMobile: true,
          Ipaddress: IP,
          clinicId: "20",
          deviceId: "",
          browserTimeZone: `GMT${formatTime}`,
          appname: "C2MD Patient",
          Os: platform,
          hashPassword: "",
          useragent: userAgent,
          password: "",
          accessCountry: accessCountry,
          loginType: loginType,
          userName: userName,
          isotpverified: true,
          Browser: browser.name + " " + browser.version,
        },
        requestType: 3,
      };
  
      return axios.post('https://uat.c2mdr.com/demo/Connect2MyDoctorRequest', JSON.stringify(body), requestOptions)
          .then(response => {
              return response;
          })
          .catch(err => {
              throw err;
          });
        //history.push("/dashboard");
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
        browserTimeZone: `GMT${formatTime}`,
        appname: "C2MD Patient",
        Os: platform,
        hashPassword: "",
        useragent: userAgent,
        password: "",
        accessCountry: "IN",
        loginType: "email",
        userName: Data?.email,
        isotpverified: true,
        Browser: browser.name + " " + browser.version,
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

export const updateLoginDetails = (data) => async (dispatch) => {
  dispatch({ type: UPDATE_LOGIN, payload: data });
};

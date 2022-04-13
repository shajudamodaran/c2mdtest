import loginedApi from "../apis";
import CryptoJS from "crypto-js";
const { detect } = require('detect-browser');
const browser = detect();
let platform = window.navigator.platform;
let userAgent = window.navigator.userAgent;
let off = new Date().toString().replace(/GMT\+(\d\d)(\d\d)/, "GMT+$1:$2");
let formatTime = off?.split("GMT")[1].split(" (")[0];
let result = formatTime?.slice(1);
if (formatTime.search(/\+/g) != null) {
  formatTime = formatTime.replace(/\+/g, "%2B")
} else if (formatTime.search(/\-/g) != null) {
  formatTime = formatTime.replace(/\-/g, "%2D")
}//replace(/\+/g,' ') browserTimeZone: `GMT${formatTime}`

export const fetchForgotPassword =
  ({ values, userId }) =>
    async (dispatch) => {
      let resp = await loginedApi.post("getcountrycode",
        {
          "token": "token",
          "version": "2.0",
          "data": { browserTimeZone: `GMT${formatTime}` },
          "requestType": 1058
        });
      const doctorscountrycode = resp.data.data;
      // var hash = CryptoJS.SHA512(values.confirmPassword);
      var hash = CryptoJS.SHA512("C2MD|" + values.confirmPassword);

      const res = await loginedApi.post("updateForgotPassword", {
        token: "C2MDVerificationToken",
        data: {
          password: hash.toString(),
          userId: userId,
          browserTimeZone: `GMT${formatTime}`,
          Ipaddress: doctorscountrycode.Ipaddress,
          useragent: userAgent,
          Browser: browser.name + " " + browser.version,
          appname: "C2MD Web",
          Os: platform,
          currency: doctorscountrycode.currency,
          accessCountry: doctorscountrycode.Country,
        },
        requestType: 6,
      });
    };

export const checkUserAvailability =
  ({ type, searchkey }) =>
    async (dispatch) => {

      let resp = await loginedApi.post("getcountrycode",
        {
          "token": "token",
          "version": "2.0",
          "data": { browserTimeZone: `GMT${formatTime}` },
          "requestType": 1058
        });
      const doctorscountrycode = resp.data.data;

      console.log({ type: type, searchkey: searchkey });


      const response = await loginedApi.post("checkuserAvailablity", {
        requestType: 5,
        token: "C2MDVerificationToken",
        data: {
          type: type, searchkey: searchkey,
          browserTimeZone: `GMT${formatTime}`,
          Ipaddress: doctorscountrycode.Ipaddress,
          useragent: userAgent,
          Browser: browser.name + " " + browser.version,
          appname: "C2MD Web",
          Os: platform,
          currency: doctorscountrycode.currency,
          accessCountry: doctorscountrycode.Country,
        },
      });

      console.log("Check user responce == >", response);
     
      if (response.status === 200) {
        return response.data && response.data;
      }
    };

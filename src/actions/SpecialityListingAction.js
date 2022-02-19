import loginedApi from "../apis";
import { SPECIALITY_LISTING } from "./type";
import specialist from "../specialityList";
const publicIp = require("public-ip");
let IP = publicIp.v4();
let platform = window.navigator.platform;
let userAgent = window.navigator.userAgent;
export const fetchSpeciality = (clientId) => async (dispatch) => {
  const res = await loginedApi.post("getclinicspeciality", {
    token: "C2MDVerificationToken",
    data: {
      clinicId: clientId,
      Ipaddress: IP,
      Os: platform,
      useragent: userAgent,
    },
    requestType: 268,
  });

  if (res.status === 200) {
    dispatch({
      type: SPECIALITY_LISTING,
      payload: res.data.data,
    });
  }
};

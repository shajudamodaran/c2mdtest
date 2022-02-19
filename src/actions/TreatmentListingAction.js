import { TREATMENT_LISTING } from "./type";
import treatmentlist from "../treatmentList";
import loginedApi from "../apis";

export const fetchTreatment = () => async (dispatch) => {
  const res = await loginedApi.post("getclinicspeciality", {
    token: "token",
    data: {
      clinicId: "babymemorial",
      Ipaddress: "192.168.1.40",
      Os: "Windows",
      useragent: "Simulator iPhone13,4 - CDD71058-AA65-40EB-8B50-61115DDD07C4",
    },
    requestType: 268,
  });

  dispatch({
    type: TREATMENT_LISTING,
    payload: treatmentlist,
  });
};

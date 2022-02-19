import loginedApi from "../apis";
import CryptoJS from "crypto-js";
export const fetchForgotPassword =
  ({ values, userId }) =>
  async (dispatch) => {
    // var hash = CryptoJS.SHA512(values.confirmPassword);
    var hash = CryptoJS.SHA512("C2MD|" + values.confirmPassword);
    const res = await loginedApi.post("updateForgotPassword", {
      token: "C2MDVerificationToken",
      data: {
        password: hash.toString(),
        userId: userId,
      },
      requestType: 6,
    });
  };

export const checkUserAvailability =
  ({ type, searchkey }) =>
  async (dispatch) => {
    const response = await loginedApi.post("checkuserAvailablity", {
      requestType: 5,
      token: "C2MDVerificationToken",
      data: { type: type, searchkey: searchkey },
    });

    if (response.status === 200) {
      return response.data && response.data;
    }
  };

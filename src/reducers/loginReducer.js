import {
  DASHBOARD_DATA_PATIENT,
  LOGIN_INIT,
  LOGIN_SUCCESS_ACTION,
  LOG_OUT_ACTION,
  MANAGE_SESSION,
  SIGNUP_SUCCESS_ACTION,
  UPDATE_LOGIN
} from "../actions/type";

const INITIAL_STATE = {
  login: false,
  user: {},
  countryData: null,
  patientDashboard: null,
  logout: null,
  isSessionActive: true
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case LOGIN_INIT:
      return { ...state, login: true };
    case LOGIN_SUCCESS_ACTION:
      return {
        ...state,
        user: payload,
        login: true,
      };

    case DASHBOARD_DATA_PATIENT:
      return {
        ...state,
        patientDashboard: payload
      };


    case LOG_OUT_ACTION:
      return {
        ...state,
        login: false,
        user: {},
        logout: payload
      };
    case SIGNUP_SUCCESS_ACTION:
      return {
        ...state,
        login: true,
        user: payload,
      };
    case UPDATE_LOGIN:
      return { ...payload }
    case LOG_OUT_ACTION:
      return INITIAL_STATE;
    case MANAGE_SESSION:
      return {
        ...state,
        isSessionActive: payload.isSessionActive,
      };
    default:
      return state;
  }
};
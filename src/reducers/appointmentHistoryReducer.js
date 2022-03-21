import { FETCH_APPOINTMENT_HISTORY, FETCH_SELECTED_APPOINTMENT_DETAILS } from "../actions/type";

const INITIAL_STATE = {
 
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_APPOINTMENT_HISTORY:
      return payload;
    case FETCH_SELECTED_APPOINTMENT_DETAILS:
      return {...state,selectedAppointment:payload};
    default:
      return state;
  }

};

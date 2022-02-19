import { bindActionCreators } from "redux";
import { DOCTOR_DETAIL, APPOINTMENT_SLOT,APPOINTMENT_MORE_SLOT,REMOVE_DOCTOR_DETAIL } from "../actions/type";
const INITIAL_STATE = {
  doctor_Details: [],
  timeSlot: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case DOCTOR_DETAIL:
      return { ...state, doctor_Details: payload };
    case REMOVE_DOCTOR_DETAIL:
      return INITIAL_STATE;
    case APPOINTMENT_SLOT:
      return { ...state, timeSlot: payload };
    case APPOINTMENT_MORE_SLOT:
      return {...state, timeSlot:[...state.timeSlot,...payload]}

    default:
      return state;
  }
};

import { DOCTOR_LISTING } from "../actions/type";
const INITIAL_STATE = {
  doctorList: [],
  location: [],
  hospitals: [],
  languagesSet: [],
  indexCharacters: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case DOCTOR_LISTING:
      return {
        ...state,
        doctorList: payload.doctors,
        location: payload.location,
        hospitals: payload.hospitals,
        languagesSet: payload.languagesSet,
        indexCharacters: payload.indexCharacters,
      };

    default:
      return state;
  }
};

import { SPECIALITY_LISTING } from "../actions/type";

const INITIAL_STATE = { specialityList: [] };

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SPECIALITY_LISTING:
      return { ...state, specialityList: payload };

    default:
      return state;
  }
};

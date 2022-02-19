import { TREATMENT_LISTING } from "../actions/type";

const INITIAL_STATE = { treatmentList: [] };

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case TREATMENT_LISTING:
      return { ...state, treatmentList: payload };

    default:
      return state;
  }
};

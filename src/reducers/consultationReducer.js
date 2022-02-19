import { CHECK_CONSULTATION } from "../actions/type";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, { type, payload }) => {
 
    switch (type) {
    case CHECK_CONSULTATION:
        return payload;
    default:
      return state;
  }

};

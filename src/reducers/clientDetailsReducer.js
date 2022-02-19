import { FETCH_CLIENTDETAILS } from "../actions/type";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, { type, payload }) => {
 
    switch (type) {
    case FETCH_CLIENTDETAILS:
        return payload;
    default:
      return state;
  }

};

import { DOCTOR_LISTING, INTERBRANCH_MODAL } from "../actions/type";

const INITIAL_STATE = {
  
    todaysReportModal: false,
    misReportModal:false
   
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {

    case INTERBRANCH_MODAL:

    //   let newStet = payload.name?.doctorDetails
    //   let oldState = state.doctorList?.doctorDetails

    //   if (oldState && (!payload.speciality||payload.speciality=="ALL" )) {

    //     payload.doctors.doctorDetails=[...oldState,...newStet]

    //   }

      return {
        ...state,
        [payload.name]:payload.value
      };

    default:
      return state;
  }
};

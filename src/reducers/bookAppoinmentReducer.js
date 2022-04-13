import {
  BOOK_APPOINMENT_QUESTIONARE,
  STORE_APPOINMENT_FORM_DATA,
  REASONFOR_VISIT,
  TYPE_OF_APPOINMENT,
  INSURANCE_LIST,
  BOOKING_RELATED_DATA,
  ADD_FAMILY,
  EDIT_FAMILY,
  BOOKING_CONFIRMATION,
  BOOKING_UPDATE_CONFIRMATION,
  FETCH_PATIENT_MEDICAL_DATA,
  FETCH_UPLOADED_DATA,
  REQUEST_BOOKING_CONFIRM,
  LOG_OUT_ACTION,
  GOTO_DASHBOARD,
  FETCH_FAMILY_MEMBERS,
  RESET_BOOKING,
  FETCH_PATIENT_MEDICAL_DATA_INIT_ACTION,
} from "../actions/type";
import { appointmentBook } from "../components/Constants/BookAppoinmentData";
const INITIAL_STATE = {
  questionare: [],
  appoinment_form: appointmentBook,
  reasonForVisit: [],
  typeofAppoinment: [],
  insuranceList: [],
  settingsdata: [],
  familyMember: [
    {
      memberName: "For myself",
      relationship: "self",
      gender: "",
      dob: "",
    },
  ],
  bookingConfirmation: false,
  patient_data: [],
  uploadedData: {},
  bookingConfirmRes: {},
  appointmentResult: [],
  selectedMember:null
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case BOOK_APPOINMENT_QUESTIONARE:
      return { ...state, login: true, questionare: payload };
    case STORE_APPOINMENT_FORM_DATA:
      return { ...state, appoinment_form: payload };
    case REASONFOR_VISIT:
      return {
        ...state,
        reasonForVisit: payload,
      };
    case TYPE_OF_APPOINMENT:
      return {
        ...state,
        typeofAppoinment: payload,
      };
    case INSURANCE_LIST:
      return {
        ...state,
        insuranceList: payload,
      };
    case BOOKING_RELATED_DATA:
      return {
        ...state,
        settingsdata: payload,
      };
    case ADD_FAMILY:
      return {
        ...state,
        familyMember: [...state.familyMember, payload],
      };
    case EDIT_FAMILY:
      let new_array = state.familyMember.map((element) =>
        element.relationship == payload.relationship
          ? { ...element, gender: payload.gender, dob: payload.dob }
          : element
      );
      return {
        ...state,
        familyMember: new_array,
      };
    case BOOKING_CONFIRMATION:
      return {
        ...state,
        bookingConfirmation: true,
        bookingConfirmRes: payload,
        appointmentResult: [],
      };
    case BOOKING_UPDATE_CONFIRMATION:
      return { ...state, appointmentResult: payload };

    case FETCH_PATIENT_MEDICAL_DATA:
      return {
        ...state,
        patient_data: payload,
      };
    case FETCH_UPLOADED_DATA:
      return {
        ...state,
        uploadedData: payload,
      };
    case REQUEST_BOOKING_CONFIRM:
      return {
        ...state,
        appoinment_form: appointmentBook,
      };
    case GOTO_DASHBOARD:
      return {
        ...state,
        bookingConfirmation: false,
        appoinment_form: appointmentBook,
      };
    case LOG_OUT_ACTION:
      return {
        ...INITIAL_STATE,
      };
    case RESET_BOOKING:
      return {
        ...INITIAL_STATE,
      };
    case FETCH_FAMILY_MEMBERS:
      return {
        ...state,
        familyMember: [...payload],
      };
    default:
      return state;
  }
};

import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import loginReducer1 from "./loginReducer";
import specialityListReducer from "./specialityListReducer";
import doctordetailsReducer from "./doctordetailsReducer";
import treatmentListReducer from "./treatmentListReducer";
import bookAppoinmentReducer1 from "./bookAppoinmentReducer";
import doctorListingReducer from "./doctorListingReducer";
import clientDetailsReducer from "./clientDetailsReducer";
import consultationReducer from "./consultationReducer";
import appointmentHistoryReducer from "./appointmentHistoryReducer";
import modalReducer from "./modalReducer";
import InterbranchAdminreducer from "./InterbranchAdminreducer";


const persistConfig = {
  key: "user",
  storage,
  whitelist: ["user", "login"],
};
const persistConfig1 = {
  key: "apmnt",
  storage,
  whitelist: ["appoinment_form"],
};

const loginReducer = persistReducer(persistConfig, loginReducer1);
const bookAppoinmentReducer = persistReducer(
  persistConfig1,
  bookAppoinmentReducer1
);

export default combineReducers({
  login: loginReducer,
  specialityList: specialityListReducer,
  doctorDetail: doctordetailsReducer,
  treatmentList: treatmentListReducer,
  bookAppoinment: bookAppoinmentReducer,
  doctorListing: doctorListingReducer,
  clientDetails: clientDetailsReducer,
  consultationDetails: consultationReducer,
  appointmentHistory:appointmentHistoryReducer,
  interbranchModal:modalReducer,
  interbranchAdmin:InterbranchAdminreducer
});

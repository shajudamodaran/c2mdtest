import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import ScrollToTop from "../utils/ScrollToTop";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "react-bootstrap/Spinner";
import MeetPage from "../pages/MeetPage/MeetPage";

import { MeetPage_Dr } from "../pages/MeetPage_Dr/MeetPage_Dr";
import { MeetPage_Pt } from "../pages/MeetPage_Pt/MeetPage_Pt";
import Homepage from "./HomePage/Homepage";
import FaqContent from "./FAQ/FaqContent";
import Faq from "./FAQ/Faq";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";



const Login = React.lazy(() => import("../pages/login"));
const SpecialityPage = React.lazy(() => import("../pages/SpecialityListing"));
const SignupPage = React.lazy(() => import("../pages/Signup"));
const DoctorProfileSchedulePage = React.lazy(() =>
  import("../pages/DoctorProfileSchedule")
);
const MicrositePage = React.lazy(() => import("../pages/Microsite"));
const ContactUsPage = React.lazy(() => import("../pages/ContactUs"));
const TreatmentPage = React.lazy(() => import("../pages/Treatment"));
const OurDoctorPage = React.lazy(() => import("../pages/OurDoctor"));
const VerificationCodePage = React.lazy(() => import("../pages/Verification"));
const SigninPage = React.lazy(() => import("../pages/Signin"));
const LoginPage = React.lazy(() => import("../pages/login"));
const ResetPasswordPage = React.lazy(() => import("../pages/ResetPassword"));


const ConfirmPasswordPage = React.lazy(() =>
  import("../pages/ConfirmPassword")
);


const PasswordChangePage = React.lazy(() => import("../pages/PasswordChange"));
const DoctorListingPage = React.lazy(() => import("../pages/DoctorListing"));
const BookAppointmentPage = React.lazy(() =>
  import("../pages/BookAppointment")
);
const AboutUsPage = React.lazy(() => import("../pages/AboutUs"));

const MobileDashboardPage = React.lazy(() =>
  import("../pages/MobileDashboard")
);

const Dashboard = React.lazy(() =>
  import("../components/Dashboard/Dashboard")
);

// const Spinner = React.lazy(() => import('react-bootstrap/Spinner'));
const TermsandConditions = React.lazy(() =>
  import("../pages/TermsandConditions")
);
const ForDoctorPage = React.lazy(() => import("../pages/ForDoctor"));
const AdminHome = React.lazy(() => import("../pages/InterbranchAdmin/InterbranchAdminHome"));
const PrescriptionPolicyPage = React.lazy(() =>
  import("../pages/PrescriptionPolicy")
);

const ForPatient = React.lazy(() => import("../pages/Forpatients"));
const PartnerPage = React.lazy(() => import("../pages/PartnerPage"));
const PrescriptionCrPage = React.lazy(() => import("../pages/PriscriptionCr/Index"));
const ViewPrescription = React.lazy(() => import("../components/PrescriptionForm/ViewPrescription/ViewPrescription"));




function App() {

  const customTheme = createMuiTheme({


    overrides: 
    {
      MuiInput: 
      {
        input: {
          "&::placeholder": {
            color: 'rgb(119, 119, 119)!important',
            opacity: '1 !important',
            fontSize: "14px !important"
          },
          color: "black", // if you also want to change the color of the input, this is the prop you'd use
        }
      },
      MuiAutoComplete: 
      {
        input: {
          "&::placeholder": {
            color: 'rgb(119, 119, 119)!important',
            opacity: '1 !important',
            fontSize: "14px !important"
          },
          color: "black", // if you also want to change the color of the input, this is the prop you'd use
        }
      },
  
      MuiPickersToolbar: {
        toolbar: {
          backgroundColor: "#0a8ce0",
        },
      },
      MuiPickersCalendarHeader: {
        switchHeader: {
          // backgroundColor: lightBlue.A200,
          // color: "white",
        },
      },
      MuiPickersDay: {
        day: {
          color: "#0a8ce0",
        },
        daySelected: {
          backgroundColor:'#0a8ce0',
  
          '&:hover':{
  
            backgroundColor:'#0a8ce0',
  
          }
        },
       
      },
     
    }
  });


  return (
    <>
    <ThemeProvider theme={customTheme}>
      {/* <Router basename={'/ROOT/'}> */}
      <Router basename={"/c2mydruat/"}>
        <div>
          <Suspense fallback={<></>}>
            <ScrollToTop />
            <ToastContainer style={{ zIndex: 20000 }} limit={1} />
            <Switch>
              {/* <Route exact path="/" component={MobileDashboardPage} /> */}

              <Route
                exact
                path="/"
                component={Homepage}
              />


              <Route exact path="/speciality" component={SpecialityPage} />
              <Route
                exact
                path="/doctorProfile/:doctorid"
                component={DoctorProfileSchedulePage}
              />
              <Route exact path="/signup" component={SignupPage} />
              <Route
                exact
                path="/signup/verify"
                component={VerificationCodePage}
              />

              <Route exact path="/admin" component={AdminHome} />
              <Route exact path="/admindashboard" component={PrescriptionCrPage} />
              <Route exact path="/viewprescription/:prname" component={ViewPrescription} />

              <Route path="/partner-with-us" component={PartnerPage} />
              <Route path="/forpatients" component={ForPatient} />
              <Route path="/termsofUse/:typeId" component={TermsandConditions} />
              <Route path="/termsofUse" component={TermsandConditions} />
              <Route path="/signin" component={SigninPage} />
              <Route path="/login" component={SigninPage} />
              <Route path="/reset" component={ResetPasswordPage} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/meet" component={MeetPage} />
              <Route path="/faq" component={Faq} />
              <Route path="/meet_dr" component={MeetPage_Dr} />
              <Route path="/meet_pt/:appointmentId" component={MeetPage_Pt} />
              <Route
                exact
                path="/prescriptionpolicy"
                component={PrescriptionPolicyPage}
              />
              <Route
                exact
                path="/confirmpassword"
                component={ConfirmPasswordPage}
              />
              <Route
                exact
                path="/passwordchange"
                component={PasswordChangePage}
              />
              <Route
                exact
                path="/DoctorListing"
                component={DoctorListingPage}
              />
              <Route
                exact
                path="/DoctorListing/:clinicId"
                component={DoctorListingPage}
              />
              <Route
                exact
                path="/DoctorListing/:clinicId/:speciality"
                component={DoctorListingPage}
              />
              <Route
                exact
                path="/BookAppointment/:doctorId"
                component={BookAppointmentPage}
              />
              <Route exact path="/Aboutus" component={AboutUsPage} />
              <Route
                exact
                path="/mircrosite/:clinicId"
                component={MicrositePage}
              />
              {/* <Route exact path="/mircrosite/:clinicId" component={OurDoctorPage}/> */}
              <Route
                exact
                path="/mircrosite/:clinicId/contactus"
                component={ContactUsPage}
              />
              <Route
                exact
                path="/mircrosite/:clinicId/treatment"
                component={TreatmentPage}
              />
              <Route
                exact
                path="/mircrosite/:clinicId/ourdoctor"
                component={OurDoctorPage}
              />
              <Route
                exact
                path="/mircrosite/:clinicId/ourdoctor/:speciality"
                component={OurDoctorPage}
              />
              <Route exact path="/:clinicId" component={DoctorListingPage} />
              <Route
                exact
                path="/:clinicId/:speciality"
                component={DoctorListingPage}
              />
              {/* <Route path="/termsofUse" component={TermsandConditions} /> */}
            </Switch>
          </Suspense>
        </div>
      </Router>
      </ThemeProvider>
    </>
  );
}

export default App;

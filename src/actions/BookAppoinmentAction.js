import {
  BOOK_APPOINMENT_QUESTIONARE,
  STORE_APPOINMENT_FORM_DATA,
  ADD_FAMILY,
  EDIT_FAMILY,
  BOOKING_CONFIRMATION,
  BOOKING_UPDATE_CONFIRMATION,
  REQUEST_BOOKING_CONFIRM,
  RESET_BOOKING,
  GOTO_DASHBOARD,
} from "./type";
import loginedApi from "../apis";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
const publicIp = require("public-ip");
let IP = publicIp.v4();
const { detect } = require('detect-browser');
const browser = detect();

let platform = window.navigator.platform;
let userAgent = window.navigator.userAgent;
let off = new Date().toString().replace(/GMT\+(\d\d)(\d\d)/, "GMT+$1:$2");
let formatTime = off?.split("GMT")[1].split(" (")[0];
let result = formatTime?.slice(1);
if(formatTime.search(/\+/g)!=null)
  {
    formatTime=formatTime.replace(/\+/g,"%2B")
  }else if(formatTime.search(/\-/g)!=null)
  {
    formatTime=formatTime.replace(/\-/g,"%2D")
  }//replace(/\+/g,' ') browserTimeZone: `GMT${formatTime}`

export const fetch_appoinment_questions = () => async (dispatch) => {
  const res = await axios.post(
    "https://run.mocky.io/v3/bb5a24bf-255b-4289-9432-7ff1ebee4320"
  );

  dispatch({ type: BOOK_APPOINMENT_QUESTIONARE, payload: res.data });
};

export const Store_formData = (data) => async (dispatch) => {
  dispatch({ type: STORE_APPOINMENT_FORM_DATA, payload: data });
};

export const book_slot =
  ({ data, userr, old_appointment }) =>
  async (dispatch) => {

    let data1 = {
      nationalId: data.nationalId,

      // insurance: {
      //   provider: data.insurance.provider,
      //   membershipNo: data.insurance.membershipNo,
      // },
      symptoms: data.symptoms,
      medicalConditions: data.medicalConditions,
      patientHeight: "100",
      firstName: data.firstName,
      reasonForVisit: data.reasonForVisit,
      notesToDoctor: data.notesToDoctor,
      weightMeasurement: "kg",
      noOfBooking: 1,
      bookingFrom: data.bookingFrom,
      reminderNumber: data.reminderNumber,
      appointmentFor: data.appointmentFor,
      reports: data.reports,
      blockId: "",
      basicFees: data.basicFees.split(" ")[1],
      surgerydetails: data.surgeries,
      referenceId: data.referenceId,
      allergies: data.allergies,
      gender: data.gender,
      appointmentDate: data.appointmentDate,
      emergencyname: data.emergencyname,
      relationship: data.relationship,
      patientWeight: "200",
      dob: data.dob,
      heightMeasurement: "cm",
      medications: data.medications,
      emergencyrelation: data.emergencyrelation,
      dentalInfo: "[]",
      bookingType: data.bookingType,
      fees: data.fees,
      hospitalid: data.hospitalId,
      typeofconsultation: "",
      doctorId: data.doctorId,
      emergencyphone: data.emergencyphone,
      status: data.status,
      modeOfConsultation: "Video",
      duration: data.duration,
      appointmentTime: data.appointmentTime,
      lastName: "",
      typeofconsultation: data.typeofconsultation,
    };


    let response = [];
    let orderRes = [];

    console.log("------data",data)

    if (data.referenceId == "") {
      
      if (!old_appointment?.info) {
        
          response = await loginedApi.post("/appointments", {
          token: "C2MDVerificationToken",
          data: {
            IsfromMobile: true,
            bookingFrom: data.bookingFrom,
            todayRate: "74.27006",
            Ipaddress: IP,
            Os: platform,
            browserTimeZone: `GMT${formatTime}`,
            attachedReportFiles: "[]",
            patientId: userr.userId,
            appointmentDetails: data1,
            actualRate: "74.27006",
            useragent: userAgent,
            Browser: browser.name+" "+browser.version,
            appname: "C2MD Web",
          },
          requestType: "161",
        });

        console.log(response)
        dispatch({
          type: BOOKING_UPDATE_CONFIRMATION,
          payload: response.data.data,
        });

        orderRes = response.data.data;
      } else {
        response = old_appointment;
        orderRes = response;
      }
    } else 
      {
        response = await loginedApi.post("/requestordergeneration", {
          token: "C2MDVerificationToken",
          data: {
            IsfromMobile: true,
            bookingFrom: data.bookingFrom,
            todayRate: "74.27006",
            Ipaddress: IP,
            Os: platform,
            browserTimeZone: `GMT${formatTime}`,
            attachedReportFiles: "[]",
            doctorId: data.doctorId,
            fees: data.fees,
            appointmentId: data.referenceId,
            appointmentDetails: data1,
            actualRate: "74.27006",
            useragent: userAgent,
            Browser: browser.name+" "+browser.version,
            appname: "C2MD Web",
          },
          requestType: "1023",
        });
        orderRes = response.data.data;
        data1.bookingFrom = "Request";
        data1.referenceId = orderRes.info;
      }

    // let orderRes = response.data.data;

    if (data?.bookingFrom == "Request") {
      
      
      localStorage.setItem("RequestId",orderRes?.info)
      let appinmentData = {
        appoinmentId: "",
        appoinmentFromTime: "",
        appoinmentToTime: "",
        appoinmentType: "Request",
      };
      dispatch({ type: BOOKING_CONFIRMATION, payload: "Request" });
      // dispatch({ type: REQUEST_BOOKING_CONFIRM });

      // dispatch(
      //   BookingConfirmationOnRequest({
      //     orderData: data1,
      //     user: userr,
      //     orderRes,
      //   })
      // );
    } else {

     
      dispatch(
        displayRazorpay({
          orderRes,
          orderdata: data1,
          user: userr,
          formData: data,
        })
      );
    }
  };
function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export const displayRazorpay =
  ({ orderRes, orderdata, user, formData }) =>
  async (dispatch) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    let result = {
      amount: orderdata.basicFees * 100,
      currency: "INR",
      receipt: "Receipt no. 1",
      payment_capture: 1,
      notes: {
        notes_key_1: "Tea, Earl Grey, Hot",
        notes_key_2: "Tea, Earl Grey… decaf.",
      },
      order_id: orderRes?.orderId,
    };

    const { amount, order_id, currency } = result;

    const options = {
      key: orderRes.paymentgatewaykey, // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: formData?.hospitalname,
      description: "",
      image: formData?.clinicLogo,
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        dispatch(
          signature_Verification({
            razorpayRes: data,
            orderData: orderdata,
            user: user,
            orderRes: orderRes,
          })
        );
      },
      prefill: {
        name: "<YOUR NAME>",
        email: user.userName,
        contact: user.mobileNumber,
      },
      notes: {
        address: "Example Corporate Office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.on("payment.failed", function (response) {});
    paymentObject.open();
  };

export const signature_Verification =
  ({ razorpayRes, orderData, user, orderRes }) =>
  async (dispatch) => {
    const res = await loginedApi.post("signatureverification", {
      data: {
        razorpay_signature: razorpayRes.razorpaySignature,
        useragent: userAgent,
        razorpay_order_id: razorpayRes.razorpayOrderId,
        razorpay_payment_id: razorpayRes.razorpayPaymentId,
        Ipaddress: IP,
        Os: platform,
        Browser: browser.name+" "+browser.version,
        appname: "C2MD Web",
      },
      token: "C2MDVerificationToken",
      requestType: "1025",
    });

    if (res.data?.data.status === "Success") {
      dispatch(
        BookingConfirmation({
          razorpayRes: razorpayRes,
          orderData: orderData,
          user: user,
          orderRes: orderRes,
        })
      );
    }
  };
export const BookingConfirmation =
  ({ razorpayRes, orderData, user, orderRes }) =>
  async (dispatch) => {
    let uploadData = {
      transactionPG: "RAZORPAY",
      userId: user.userId,
      appointmentDetails: {
        appointmentBook: {
          patientHeight: "100",
          firstName: orderData.firstName,
          reasonForVisit: orderData.reasonForVisit,
          notesToDoctor: orderData.notesToDoctor,
          weightMeasurement: "kg",
          noOfBooking: 1,
          bookingFrom: orderData.bookingFrom,
          reminderNumber: orderData.reminderNumber,
          appointmentFor: orderData.appointmentFor,
          reports: orderData.reports,
          blockId: orderRes?.info,
          basicFees: orderData.basicFees,

          referenceId: orderData.referenceId,
          surgerydetails: orderData.surgerydetails,
          allergies: orderData.allergies,
          symptoms: orderData.symptoms,
          medicalConditions: orderData.medicalConditions,
          medications: orderData.medications,
          gender: orderData.gender,
          appointmentDate: orderData.appointmentDate,
          emergencyname: orderData.emergencyname,
          relationship: orderData.relationship,
          patientWeight: "200",
          dob: orderData.dob,
          heightMeasurement: "cm",

          emergencyrelation: orderData.emergencyrelation,
          dentalInfo: "[]",
          bookingType: orderData.bookingType,
          fees: orderData.fees,
          hospitalid: "",
          typeofconsultation: orderData.typeofconsultation,
          doctorId: orderData.doctorId,
          emergencyphone: orderData.emergencyphone,
          status: orderData.status,
          modeOfConsultation: "Video",
          duration: orderData.duration,
          appointmentTime: orderData.appointmentTime,
          lastName: "",
        },
        couponCode: "",
        bookingId: orderRes?.info,
      },
      actualRate: "74.27006",
      couponCode: "",
      Ipaddress: IP,
      transactionId: razorpayRes.razorpayPaymentId,
      blockId: orderRes?.info,
      browserTimeZone: `GMT${formatTime}`,
      attachedReportFiles: "[]",
      Os: platform,
      useragent: userAgent,
      razorpayId: razorpayRes.razorpayPaymentId,
      patientId: user.userId,
      referenceId: "",
      todayRate: "74.27006",
      bookingFrom: orderData.bookingFrom,
   Browser: browser.name+" "+browser.version,
          appname: "C2MD Web",
    };

    const res = await loginedApi.post("payment", {
      data: uploadData,
      token: "C2MDVerificationToken",
      requestType: "313",
    });

    let response = res.data.data;
    let timeData = localStorage.getItem("appinmentTime");
    let appinmentTime = JSON.parse(timeData);
    let appinmentData = {
      appoinmentId: response,
      appoinmentFromTime: appinmentTime.appoinmentFromTime,
      appoinmentToTime: appinmentTime.appoinmentToTime,
      appoinmentType: "Book",
    };
    if (response?.info !== "Failed") {
      dispatch({ type: BOOKING_CONFIRMATION, payload: appinmentData });
      localStorage.removeItem("appinmentTime");
    } else {
    }
  };

  //
export const addMember = (member) => async (dispatch) => {
  dispatch({ type: ADD_FAMILY, payload: member });
};

export const editMember = (member) => async (dispatch) => {
  dispatch({ type: EDIT_FAMILY, payload: member });
};
export const BookingConfirmationOnRequest =
  ({ orderData, user, orderRes }) =>
  async (dispatch) => {
    let uploadData = {
      transactionPG: "RAZORPAY",
      userId: user.userId,
      appointmentDetails: {
        appointmentBook: {
          patientHeight: "100",
          firstName: orderData.firstName,
          reasonForVisit: orderData.reasonForVisit,
          notesToDoctor: orderData.notesToDoctor,
          weightMeasurement: "kg",
          noOfBooking: 1,
          bookingFrom: orderData.bookingFrom,
          reminderNumber: "",
          appointmentFor: orderData.appointmentFor,
          reports: orderData.reports,
          blockId: orderRes?.info,
          basicFees: orderData.basicFees,
          surgerydetails: orderData.surgeries,
          referenceId: "",
          allergies: orderData.allergies,
          gender: orderData.gender,
          appointmentDate: orderData.appointmentDate,
          emergencyname: orderData.emergencyname,
          relationship: orderData.relationship,
          patientWeight: "200",
          dob: orderData.dob,
          heightMeasurement: "cm",
          medications: orderData.medications,
          emergencyrelation: orderData.emergencyrelation,
          dentalInfo: "[]",
          bookingType: orderData.bookingType,
          fees: orderData.fees,
          hospitalid: "",
          typeofconsultation: orderData.typeofconsultation,
          doctorId: orderData.doctorId,
          emergencyphone: "",
          status: orderData.status,
          modeOfConsultation: "Video",
          duration: orderData.duration,
          appointmentTime: orderData.appointmentTime,
          lastName: "",
        },
        couponCode: "",
        bookingId: orderRes?.info,
      },
      actualRate: "74.27006",
      couponCode: "",
      Ipaddress: IP,
      transactionId: "",
      blockId: orderRes?.info,
      browserTimeZone: `GMT${formatTime}`,
      attachedReportFiles: "[]",
      Os: platform,
      useragent: userAgent,
      razorpayId: "",
      patientId: user.userId,
      referenceId: "",
      todayRate: "74.27006",
      bookingFrom: orderData.bookingFrom,
      Browser: browser.name+" "+browser.version,
            appname: "C2MD Web",
    };

    const res = await loginedApi.post("payment", {
      data: uploadData,
      token: "C2MDVerificationToken",
      requestType: "313",
    });

    let response = res.data.data;

    if (response?.info !== "Failed") {
      dispatch({ type: BOOKING_CONFIRMATION, payload: response });
    } else {
    }
  };
export const GotoDashboard_action = () => async (dispatch) => {
  dispatch({ type: GOTO_DASHBOARD });
};

export const reset_booking = () => async (dispatch) => {
  dispatch({ type: RESET_BOOKING });
};

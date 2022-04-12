import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Carousel from "react-multi-carousel";
import { Button, Form, Dropdown } from "react-bootstrap";
import AppointmentOnRequest from "../AppointmentOnRequest";
import {
  fetch_appointmentSlot,
  fetch_appointmentTypes,
} from "../../../actions/AppointmentSlotAction";
import Assets from "../../Layout/Assets";
import {
  reset_booking,
  Store_formData,
} from "../../../actions/BookAppoinmentAction";
import "react-multi-carousel/lib/styles.css";
import Style from "./Schedule.module.scss";
import { useHistory, useParams, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
function Schedule({ responsive, Typeofappointment, doctorId, DayCounter }) {
  const moment = require("moment");
  const [ApponmtType, SetAppmtType] = useState("");
  const [ShowRequest, setRequest] = useState(false);
  const [ApponmtList, setApponmtList] = useState([]);
  const [SelectedType, setSelectedType] = useState("");
  const [DoctorFee, setDoctorFee] = useState(1);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [toastOpen, setToastOpen] = useState(false);

  const appoinment_form = useSelector(
    (state) => state.bookAppoinment.appoinment_form
  );
  useEffect(() => {
    let dateFrom = moment().subtract(1, "d").format("DD MM YYYY");
    dispatch(reset_booking());

    dispatch(fetch_appointmentTypes(doctorId)).then((res) => {
      setApponmtList(res);
      setSelectedType(res[0].Type);
      setRequest(res[0].availableType == "On Request");
      Onload(dateFrom, res[0].Type);
      SetAppmtType(
        `${res[0].Type} (${res[0].Amount.split(".")[0]} for upto ${res[0].Duration} Min)`
      );
      setDoctorFee(res[0].Amount);
      dispatch(
        Store_formData({
          ...appoinment_form,
          typeofconsultation: res[0].Type,
          doctorfees: res[0].doctorfees,
          gstamount: res[0].Gst,
          fees: res[0].Amount,
          duration: res[0].Duration,
          c2mdfees: res[0].c2mdFees,
          basicFees: res[0].doctorfees.split(" ")[1],
        })
      );
    });
  }, []);

  const Onload = (dateFrom, type) => {
    dispatch(
      fetch_appointmentSlot({
        isStart: true,
        isNext: false,
        date: dateFrom,
        doctorId: doctorId,
        typeofconsultation: type,
      })
    );
  };

  const Login = useSelector((state) => state.login);
  const TimeSlot = useSelector((state) => state.doctorDetail.timeSlot);
  const currentMonth = TimeSlot && TimeSlot.length > 0 && TimeSlot[0];

  const handleChange = (event) => {
    SetAppmtType(event.target.value);
  };

  const isCurrentDate = (timeSlot, time) => {
    let givenDate = `${timeSlot.year}-${timeSlot.month + 1}-${
      timeSlot.dates
    } ${time}`;
    let today = moment().format("YYYY-MM-DD hh:mm A");
    return moment(givenDate).isBefore(today);
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) =>
  {
    const {
      carouselState: { currentSlide },
    } = rest;
    const Nextslide = () => {
      // goToSlide(currentSlide + 7);

      let day = `${TimeSlot[DayCounter?.next].dates} ${
        TimeSlot[DayCounter?.next].month + 1
      } ${TimeSlot[DayCounter?.next].year}`;

      dispatch(
        fetch_appointmentSlot({
          isStart: false,
          isNext: true,
          date: day,
          doctorId: doctorId,
          typeofconsultation: SelectedType,
        })
      );
    };

    const onBack = () => {
      currentSlide !== 0 && goToSlide(currentSlide - DayCounter?.back);

      let CurrentDay = `${TimeSlot[0].year}-${TimeSlot[0].month + 1}-${
        TimeSlot[0].dates
      } `;

      let dateFrom = moment(CurrentDay)
        .subtract(DayCounter?.back, "d")
        .format("DD MM YYYY");

      let today = moment().format("YYYY-MM-DD");

      let check = moment(today).isAfter(CurrentDay);

      let CheckDay = moment(CurrentDay).isSame(moment().format("YYYY-M-DD"));

      if (!CheckDay) {
        if (!check) {
          dispatch(
            fetch_appointmentSlot({
              isStart: true,
              isNext: true,
              date: dateFrom,
              doctorId: doctorId,
              typeofconsultation: SelectedType,
            })
          );
        } else {
        }
      } else {
      }
    };

    return (
      <div className="carousel-button-group" style={{ display: "flex" }}>
        <div style={{ flex: 1, border:0 }}>
          <Button
            style={{
              float: "left",
              borderColor: "#F5F6F8",
            }}
            variant="outline-primary"
            className={currentSlide === 0 ? "disable" : ""}
            onClick={onBack}
          >
            {!moment(
              `${TimeSlot[0]?.year}-${TimeSlot[0]?.month + 1}-${
                TimeSlot[0]?.dates
              }`
            ).isSame(moment().format("YYYY-M-DD")) && (
              <img src={Assets.rightArrow} alt="<" />
            )}
          </Button>
        </div>
        <div style={{ flex: 1 }}>
          <Button
            variant="outline-primary"
            // onClick={() => next()}
            onClick={Nextslide}
            style={{
              float: "right",
              borderColor: "#F5F6F8",
            }}
          >
            <img src={Assets.rightArrow} alt=">" />
          </Button>
        </div>
      </div>
    );
  };

  const bookingApp = (time, date, bookingType, bookingFrom) => {
    if (Login?.user?.userType === "Doctor") {
      if (!toastOpen) {
        toast.error(
          "Sorry,This booking facility is allowed only for patients",
          {
            position: toast.POSITION.TOP_CENTER,
            hideProgressBar: true,
            onOpen: (props) => setToastOpen(true),
            onClose: (props) => setToastOpen(false),
          }
        );
      }
    } else {
      if (DoctorFee == 0) {
        if (!toastOpen) {
          toast.error("Please contact our support team ", {
            position: toast.POSITION.TOP_CENTER,
            hideProgressBar: true,
            onOpen: (props) => setToastOpen(true),
            onClose: (props) => setToastOpen(false),
          });
        }
      } else {
        let CurrentDay = `${date.year}-${date.month + 1}-${date.dates} `;

        let DateVariable = moment(CurrentDay, "YYYY-MM-DD").format(
          "DD-MMMM-YYYY"
        );
        let dt = moment(time, ["h:mm A"]).format("HH:mm");
        let toTime = moment(time, ["h:mm A"])
          .add(15, "minutes")
          .format("HH:mm");

        let dateTimeFormat = `${date.year}-${date.month + 1}-${
          date.dates
        } ${dt}`;

        let ToTimeFormat = `${date.year}-${date.month + 1}-${
          date.dates
        } ${toTime}`;

        let format2 = moment(dateTimeFormat, "YYYY-MM-DD HH:mm").format(
          "YYYY-MM-DD HH:mm"
        );

        localStorage.setItem(
          "appinmentTime",
          JSON.stringify({
            appoinmentFromTime: format2,
            appoinmentToTime: ToTimeFormat,
          })
        );
        dispatch(
          Store_formData({
            ...appoinment_form,
            appointmentDate: DateVariable,
            appointmentTime: time,
            bookingFrom: bookingFrom,
            bookingType: bookingType,
            appoinmentFromTime: format2,
            appoinmentToTime: ToTimeFormat,
            doctorId: doctorId,
            routing: true,
          })
        );
        if (Login.login) {
          history.push({
            pathname: `/bookAppointment/${doctorId}`,
            state: { doctorId: doctorId },
          });
        } else {
          history.push({
            // pathname:`/signin?redirection=/bookAppointment/${doctorId}`
            pathname: `/signin`,
            state: { redirection: `/bookAppointment/${doctorId}` },
          });
        }
      }
    }
  };

  const bookingAppOnRequest = () => {
    localStorage.setItem("doctrID", doctorId);
    dispatch(
      Store_formData({
        ...appoinment_form,
        appointmentDate: "",
        appointmentTime: "",
        bookingFrom: "Request",
        bookingType: "Request",
        doctorId: doctorId,
        routing: true,
      })
    );
    if (DoctorFee == 0) {
      if (!toastOpen) {
        toast.error("Please contact our support team ", {
          position: toast.POSITION.TOP_CENTER,
          hideProgressBar: true,
          onOpen: (props) => setToastOpen(true),
          onClose: (props) => setToastOpen(false),
        });
      }
    } else {
      if (Login.login) {
        history.push({
          pathname: `/bookAppointment/${doctorId}`,
          state: { doctorId: doctorId },
        });
      } else {
        history.push({
          pathname: `/signin`,
          state: { redirection: `/bookAppointment/${doctorId}` },
        });
      }
    }
  };

  const typeChange = (item) => {
    let dateFrom = moment().subtract(1, "d").format("DD MM YYYY");
    SetAppmtType(`${item.Type} (${item.Amount.split(".")[0]} for up to ${item.Duration} Min)`);
    setSelectedType(item.Type);
    setRequest(item.availableType == "On Request");
    dispatch(
      fetch_appointmentSlot({
        isStart: false,
        isNext: true,
        date: dateFrom,
        typeofconsultation: item.Type,
        doctorId: doctorId,
      })
    );
  };

  const monthChange = () => {
    let CurrentDay = `${TimeSlot[0].year}-${TimeSlot[0].month + 1}-1`;
    // moment().add(1, 'months');
    let dateFrom = moment(CurrentDay).endOf("month").format("DD MM YYYY");
    dispatch(
      fetch_appointmentSlot({
        isStart: false,
        isNext: true,
        date: dateFrom,
        doctorId: doctorId,
        typeofconsultation: SelectedType,
      })
    );
  };

  const previousMonthChange = () => {
    let CurrentDay = `${TimeSlot[0].year}-${TimeSlot[0].month + 1}-1`;
    let today = moment().format("YYYY-MM-DD");

    let check = moment(today).isBefore(
      moment(CurrentDay).subtract(1, "months")
    );
    if (!(CurrentDay <= moment().format("YYYY-M") + "-1")) {
      let dateFrom = "";
      if (!check) {
        dateFrom = moment(
          `${TimeSlot[0].year}-${TimeSlot[0].month + 1}-${moment(today).format(
            "DD"
          )}`
        )
          .subtract(1, "months")
          .subtract(1, "day")
          .format("DD MM YYYY");
      } else {
        dateFrom = moment(CurrentDay)
          .subtract(1, "months")
          .subtract(1, "day")
          .format("DD MM YYYY");
      }

      dispatch(
        fetch_appointmentSlot({
          isStart: false,
          isNext: true,
          date: dateFrom,
          doctorId: doctorId,
          typeofconsultation: SelectedType,
        })
      );
    }
  };

  const onTypeChange = (item) => {
    let doctorfees = item.Amount?.split(item.Currency);

    setDoctorFee(doctorfees[1]);
    typeChange(item);
    dispatch(
      Store_formData({
        ...appoinment_form,
        typeofconsultation: item.Type,
        doctorfees: item.doctorfees,
        gstamount: item.Gst,
        fees: item.Amount,
        duration: item.Duration,
        c2mdfees: item.c2mdFees,
        basicFees: item.Amount,
      })
    );
  };
  return (
    <div className={Style.Schedule}>
      <div className={Style.Select_wrapper}>
        <p className={Style.appointmentTypeTxt}>
          {" "}
          <img src={Assets.appointment} alt="appointment" />
          Appointment type
        </p>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {ApponmtType.split("(")?.[0]}
            <span className={Style.SubText}>
              {/* ( {ApponmtType.split("(")?.[1]} */}
              {ApponmtType.split("(")?.[1] &&
                "(" + ApponmtType.split("(")?.[1]}
            </span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {ApponmtList.map((item, index) => {
              return (
                <Dropdown.Item
                  onClick={() => {
                    onTypeChange(item);
                  }}
                >
                  {item.Type}{" "}
                  <span className={Style.SubText}>
                    ({item.Amount.split(".")[0]} for up to {item.Duration} Min)
                  </span>
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className={Style.availableTimeTxt}>
        <img src={Assets.time} alt="time" />
        {ShowRequest
          ? "Request for an appointment"
          : "Select an available time"}
      </div>
      {DoctorFee == 0 && (
        <p className={Style.errmsg}>
          You can't book appointment for this doctor. Please contact the support
          team
        </p>
      )}
      {ShowRequest ? (
        <AppointmentOnRequest bookingApp={bookingAppOnRequest} />
      ) : (
        TimeSlot &&
        TimeSlot.length != 0 && (
          <div className={Style.Schedule_Bottom}>
            <div className={Style.BottomTop}>
              <p className={Style.left_Text} onClick={previousMonthChange}>
                {!(
                  moment(
                    `${currentMonth.year}-${currentMonth.month + 1}-1`,
                    "YYYY-MM-D"
                  ).format("YYYY-M-D") <=
                  moment().format("YYYY-M") + "-1"
                ) && (
                  <img
                    src={Assets.nextArrow}
                    alt=""
                    style={{ transform: "rotate(180deg)", width: "8px" }}
                  />
                )}{" "}
                {moment(
                  `${currentMonth.year}-${currentMonth.month + 1}-${
                    currentMonth.dates
                  }`,
                  "YYYY-MM-DD"
                ).format("MMMM")}{" "}
                {currentMonth.year}
              </p>
              <p className={Style.right_Text} onClick={monthChange}>
                Next Month
                <img src={Assets.nextArrow} alt="" />
              </p>
            </div>

            <Carousel
              responsive={responsive}
              showDots={false}
              arrows={false}
              customButtonGroup={<ButtonGroup />}
              renderButtonGroupOutside={true}
            >
              {TimeSlot &&
                TimeSlot.map((item, index) => {


                  return (
                    <div key={index}>
                      <div className={Style.SliderItem}>

                        <div className={moment(new Date()).date()==item.dates?Style.Day_head_active:Style.Day_head}>{item.dates}</div>
                        <p className={Style.Day_text}>
                          {moment(
                            `${item.year}-${item.month + 1}-${item.dates}`,
                            "YYYY-MM-DD"
                          ).format("dddd")}
                        </p>
                      </div>
                      <div className={Style.SliderItemInner}>
                        {item.requestSlot ? (
                          <div className={Style.TimeSlot_main_wrapper}>
                            <div className={Style.timeSolt_wrapper}>
                              <p className={Style.noSoltsAvailable}>
                                No slots available
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div className={Style.TimeSlot_main_wrapper}>
                            <div className={Style.timeSolt_wrapper}>
                              {item.slots.length > 0 ? (
                                !isCurrentDate(
                                  item,
                                  item.slots[item.slots.length - 1].time
                                ) ? (
                                  item.slots.map((data) => {
                                    if (!isCurrentDate(item, data.time)) {
                                      return (
                                        <Button
                                          variant="outline-primary"
                                          className={Style.timeSlot_btn}
                                          key={data.time}
                                          onClick={() =>
                                            bookingApp(
                                              data.time,
                                              item,
                                              "Book",
                                              "AppointmentBooking"
                                            )
                                          }
                                        >
                                          {data.time}
                                        </Button>
                                      );
                                    }
                                  })
                                ) : (
                                  <p className={Style.noSoltsAvailable}>
                                    No slots available
                                  </p>
                                )
                              ) : (
                                <p className={Style.noSoltsAvailable}>
                                  No slots available
                                </p>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
            </Carousel>
          </div>
        )
      )}
    </div>
  );
}

export default Schedule;

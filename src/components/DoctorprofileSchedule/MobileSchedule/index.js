import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Carousel from "react-multi-carousel";
import { Button, Dropdown } from "react-bootstrap";
import AppointmentOnRequest from "../AppointmentOnRequest";
import {
  fetch_appointmentSlot,
  fetch_appointmentTypes,
  fetch_more_appointmentSlot,
} from "../../../actions/AppointmentSlotAction";
import Assets from "../../Layout/Assets";

import "react-multi-carousel/lib/styles.css";
import Style from "./MobileSchedule.module.scss";
import { useHistory, useParams, useLocation } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroller";
import { Store_formData,reset_booking } from "../../../actions/BookAppoinmentAction";

function MobileSchedule({
  responsive,
  Typeofappointment,
  doctorId,
  DayCounter,
}) {
  const moment = require("moment");
  const [ApponmtType, SetAppmtType] = useState("");
  const [ShowRequest, setRequest] = useState(false);
  const [ApponmtList, setApponmtList] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const Login = useSelector((state) => state.login);
  const location = useLocation();
  const [SelectedType, setSelectedType] = useState("");
  const isCurrentDate = (timeSlot, time) => {
    // debugger;
    let givenDate = `${timeSlot.year}-${timeSlot.month + 1}-${
      timeSlot.dates
    } ${time}`;
    let today = moment().format("YYYY-MM-DD hh:mm");
    return moment(givenDate,'YYYY-MM-DD hh:mm A').isBefore(today);
  };
  // useEffect(() => {
  //   let dateFrom = moment().subtract(1, "d").format("DD MM YYYY");

  //   dispatch(
  //     fetch_appointmentSlot({
  //       isStart: true,
  //       isNext: false,
  //       date: dateFrom,
  //     })
  //   );
  //   dispatch(fetch_appointmentTypes(doctorId)).then((res) => {
  //     setApponmtList(res);
  //   });
  // }, []);
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
        `${res[0].Type} (${res[0].Amount.split(".")[0]}) for up to ${res[0].Duration} Min`
      );
      dispatch(
        Store_formData({
          ...appoinment_form,
          typeofconsultation: res[0].Type,
          doctorfees: res[0].doctorfees,
          gstamount: res[0].Gst,
          fees: res[0].Amount,
          duration: res[0].Duration,
          c2mdfees: res[0].c2mdFees,
          basicFees: res[0].doctorfees,
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



  const TimeSlot = useSelector((state) => state.doctorDetail.timeSlot);
  const currentMonth = TimeSlot && TimeSlot.length > 0 && TimeSlot[0];

  const handleChange = (event) => {
    SetAppmtType(event.target.value);
  };
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
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
      let CheckDay = moment(CurrentDay).isSame(today);
      if (!CheckDay) {
        if (!check) {
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
      }
    };

    return (
      <div className="carousel-button-group" style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <Button
            style={{
              float: "left",
              borderColor: "#F5F6F8",
            }}
            variant="outline-primary"
            className={currentSlide === 0 ? "disable" : ""}
            onClick={onBack}
          >
            <img src={Assets.rightArrow} alt="<" />
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

  const addMoreSlot = () => {
    let day = `${TimeSlot[TimeSlot.length - 1]?.dates} ${
      TimeSlot[TimeSlot.length - 1].month + 1
    } ${TimeSlot[TimeSlot.length - 1].year}`;

    let dateFrom = moment(day, "DD MM YYYY").format("DD MM YYYY");
    // .subtract(1, "d")

    dispatch(
      fetch_more_appointmentSlot({
        isStart: false,
        isNext: true,
        date: dateFrom,
        doctorId: doctorId,
        typeofconsultation: SelectedType,
      })
    );
  };

  const typeChange = (item) => {
    let dateFrom = moment().subtract(1, "d").format("DD MM YYYY");
    SetAppmtType(
      `${item.Type} (${item.doctorfees} for upto ${item.Duration} Min)`
    );
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

  const bookingAppOnRequest = () => {
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
  };

  const bookingApp = (time, date, bookingType, bookingFrom) => {
    let CurrentDay = `${date.year}-${date.month + 1}-${date.dates} `;

    let DateVariable = moment(CurrentDay, "YYYY-MM-DD").format("DD-MMMM-YYYY");
    let dt = moment(time, ["h:mm A"]).format("HH:mm");
    let toTime = moment(time, ["h:mm A"]).add(15, "minutes").format("HH:mm");

    let dateTimeFormat = `${date.year}-${date.month + 1}-${date.dates} ${dt}`;

    let ToTimeFormat = `${date.year}-${date.month + 1}-${date.dates} ${toTime}`;

    let format2 = moment(dateTimeFormat,'YYYY-MM-DD HH:mm').format("YYYY-MM-DDTHH:mm:ss");
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
        pathname: `/signin`,
        state: { redirection: `/bookAppointment/${doctorId}` },
      });
    }
  };
  const onTypeChange = (item) => {
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
              {ApponmtType.split("(")?.[1] &&
                "( " + ApponmtType.split("(")?.[1]}
              {/* ( {ApponmtType.split("(")?.[1]} */}
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
                    ({item.doctorfees} for upto {item.Duration} Min)
                  </span>
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
        {/* <select value={ApponmtType} onChange={handleChange}>
          {ApponmtList.map((item, index) => {
            return (
              <option value={item.Type} key={index}>
                {item.Type} ({item.doctorfees} for upto {item.Duration} Min)
              </option>
            );
          })}
        </select> */}
      </div>
      <p className={Style.availableTimeTxt}>
        <span className={Style.availableTimeTxtimg}>
          <img src={Assets.time} alt="time" />
          Select an available time
        </span>
        <p className={Style.left_Text}>
          <span>
            {" "}
            {moment(
              `${currentMonth.year}-${currentMonth.month + 1}-${
                currentMonth.dates
              }`,'YYYY-MM-DD'
            ).format("MMM")}{" "}
            {moment(
              `${currentMonth.year}-${currentMonth.month + 1}-${
                currentMonth.dates
              }`,'YYYY-MM-DD'
            ).format("YYYY")}
          </span>
        </p>
      </p>
      {ShowRequest ? (
        <AppointmentOnRequest bookingApp={bookingAppOnRequest} />
      ) : (
        <div className={Style.Schedule_Bottom}>
          <InfiniteScroll
            loadMore={() => addMoreSlot()}
            hasMore={true}
            pageStart={1}
          >
            {TimeSlot &&
              TimeSlot.map((item, index) => {
                return (
                  <>
                    {TimeSlot[index] && TimeSlot[index]?.dates == 1 && (
                      <p className={Style.monthLeft}>
                        <span>
                          {" "}
                          {moment(
                            `${TimeSlot[index].year}/${
                              TimeSlot[index].month + 1
                            }/${TimeSlot[index].dates}`
                          ).format("MMM")}{" "}
                          {moment(
                            `${TimeSlot[index].year}/${
                              TimeSlot[index].month + 1
                            }/${TimeSlot[index].dates}`
                          ).format("YYYY")}
                        </span>
                      </p>
                    )}
                    <div key={index}>
                      <div className={Style.SliderItem}>
                        <p className={Style.Day_text}>
                          {item.dates}{" "}
                          {moment(
                            `${item.year}/${item.month + 1}/${item.dates}`
                          ).format("dddd")}
                        </p>
                      </div>
                      <div className={Style.SliderItemInner}>
                        {item.requestSlot ? (
                          <div className={Style.OnlyOnRequest}>
                            <h6 className={Style.textContent}>
                              Only On Request
                            </h6>
                            <div className={Style.req_btn_wrp}>
                              <Button
                                variant="outline-primary"
                                className={Style.reqst_btn}
                                onClick={() => setRequest(true)}
                              >
                                Request Now
                              </Button>
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
                                  <Button
                                    variant="outline-primary"
                                    className={`${Style.timeSlot_btn}  ${Style.Noslots_btn}`}
                                    disabled
                                  >
                                    No slots available
                                  </Button>
                                )
                              ) : (
                                <Button
                                  variant="outline-primary"
                                  className={`${Style.timeSlot_btn}  ${Style.Noslots_btn}`}
                                  disabled
                                >
                                  No slots available
                                </Button>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                );
              })}
            <Button
              variant="outline-primary"
              className={Style.Loadmore}
              onClick={addMoreSlot}
            >
              Load More
            </Button>
          </InfiniteScroll>
        </div>
      )}
    </div>
  );
}

export default MobileSchedule;

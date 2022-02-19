import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import Assets from "../Layout/Assets";
import Style from "./BookAppointmentMobile.module.scss";

function MobileBookAppointment() {

  return (
    <Container>
                <Row className={`${Style.mobile_book_appointment_align} container `}>
                   <span className={Style.mobile_filter_main_heading}>Book Your Appointment</span>
                   <img src={Assets.filter_close} className={Style.mobile_filter_close}/>
                </Row>
                <Row className={Style.mobile_book_appointment_type}>
                    <img src={Assets.appointment_type_icon} className={Style.mobile_book_appointment_icon}/>
                    <span className={Style.mobile_book_appointment_heading}>Appointment type</span>
                    <select
                    className={Style.book_appointment_select_field}
                    name="consultationTime">
                    <option value="">First time consultation (200 AUD for upto 15 Min)</option>
                    </select>
                </Row>
                <Row className={Style.mobile_book_appointment_available}>
                    <div className={Style.availabletime_title}>
                        <img src={Assets.timer_icon} className={Style.mobile_book_appointment_icon}/>
                        <span className={Style.mobile_book_appointment_heading}>Select an available time</span>                                                                         
                    </div>
                    <Button className={Style.mobile_book_appointment_button}>Aug ‘ 21</Button>
                 
                </Row>
                <Row className={Style.mobile_book_appointment_date}>
                    <p>Aug <span>01 Tuesday</span></p>
                    <div className={Style.appointment_time_wrapper}>
                        <ul>
                            <li>
                                <Button className={Style.mobile_book_appointment_time}>10:30 AM</Button>
                            </li>
                            <li>
                                <Button className={Style.mobile_book_appointment_time}>10:30 AM</Button>
                            </li>
                            <li>
                                <Button className={Style.mobile_book_appointment_time}>10:30 AM</Button>
                            </li>
                            <li>
                                <Button className={Style.mobile_book_appointment_time}>10:30 AM</Button>
                            </li>
                            <li>
                                <Button className={Style.mobile_book_appointment_time}>10:30 AM</Button>
                            </li>
                            <li>
                                <Button className={Style.mobile_book_appointment_time}>10:30 AM</Button>
                            </li>
                            <li>
                                <Button className={Style.mobile_book_appointment_time}>10:30 AM</Button>
                            </li>
                            <li>
                                <Button className={Style.mobile_book_appointment_time}>10:30 AM</Button>
                            </li>
                            <li>
                                <Button className={Style.mobile_book_appointment_more}>More</Button>
                            </li>
                        </ul>
                    
                    </div>
                </Row>
                <Row className={Style.mobile_book_appointment_date}>
                    <p>Aug <span>02 Wednesday</span></p>
                    <div className={Style.appointment_time_wrapper}>
                        <ul>
                            <li>
                                <Button className={Style.mobile_book_appointment_time}>10:30 AM</Button>
                            </li>
                            <li>
                                <Button className={Style.mobile_book_appointment_time}>10:30 AM</Button>
                            </li>
                            <li>
                                <Button className={Style.mobile_book_appointment_time}>10:30 AM</Button>
                            </li>
                            <li>
                                <Button className={Style.mobile_book_appointment_time}>10:30 AM</Button>
                            </li>
                            <li>
                                <Button className={Style.mobile_book_appointment_time}>10:30 AM</Button>
                            </li>
                            <li>
                                <Button className={Style.mobile_book_appointment_time}>10:30 AM</Button>
                            </li>
                            <li>
                                <Button className={Style.mobile_book_appointment_time}>10:30 AM</Button>
                            </li>
                            <li>
                                <Button className={Style.mobile_book_appointment_time}>10:30 AM</Button>
                            </li>
                            <li>
                                <Button className={Style.mobile_book_appointment_time}>10:30 AM</Button>
                            </li>
                            <li>
                                <Button className={Style.mobile_book_appointment_more}>More</Button>
                            </li>
                        </ul>
                    
                    </div>
                </Row>
                <Row className={Style.mobile_book_appointment_request}>
                    <p>Aug <span>03 Thursday</span></p>
                    <div className={Style.mobile_appointment_request_now}>
                        <span>Only On Request</span>
                        <Button className={Style.mobile_book_appointment_request_button}>Request Now</Button>
                    </div>
                  <hr/>
                </Row>
                <Row className={Style.mobile_book_appointment_date}>
                    <p>Aug <span>04 Friday</span></p>
                    <div className={Style.appointment_time_wrapper}>
                        <ul>
                            <li>
                                <Button className={Style.mobile_book_appointment_time}>10:30 AM</Button>
                            </li>
                            <li>
                                <Button className={Style.mobile_book_appointment_time}>10:30 AM</Button>
                            </li>
                            <li>
                                <Button className={Style.mobile_book_appointment_time}>10:30 AM</Button>
                            </li>
                            <li>
                                <Button className={Style.mobile_book_appointment_time}>10:30 AM</Button>
                            </li>
                            <li>
                                <Button className={Style.mobile_book_appointment_more}>More</Button>
                            </li>
                        </ul>
                    
                    </div>
                </Row>
                <Row className={`${Style.mobile_book_appointment_date} ${Style.last}`}>
                    <p>Aug <span>05 Monday</span></p>
                    <div className={Style.appointment_time_wrapper}>
                        <ul>
                            <li>
                                <Button className={Style.mobile_book_appointment_time}>10:30 AM</Button>
                            </li>
                            <li>
                                <Button className={Style.mobile_book_appointment_time}>10:30 AM</Button>
                            </li>
                            <li>
                                <Button className={Style.mobile_book_appointment_time}>10:30 AM</Button>
                            </li>
                            <li>
                                <Button className={Style.mobile_book_appointment_time}>10:30 AM</Button>
                            </li>
                            <li>
                                <Button className={Style.mobile_book_appointment_time}>10:30 AM</Button>
                            </li>
                            <li>
                                <Button className={Style.mobile_book_appointment_time}>10:30 AM</Button>
                            </li>
                            <li>
                                <Button className={Style.mobile_book_appointment_more}>More</Button>
                            </li>
                        </ul>
                    
                    </div>
                </Row>
    </Container>
                   
  );
}

export default MobileBookAppointment;
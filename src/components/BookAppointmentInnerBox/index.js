import React from 'react';
import Style from './BookAppointmentInnerBox.module.scss';
import Assets from "../Layout/Assets";

const BookAppointmentInnerBox = ({children,progressDescrementer,progress}) => {
    return (
        <div className={Style.book_appointment_div}>
        <form className={Style.book_appointment_form_align}>
        <img src={Assets.previous_icon} ></img> <span className={Style.book_appointment_previous_step}>Back</span>
            {children}
        </form>
        </div>
    )
}

export default BookAppointmentInnerBox
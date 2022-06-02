import React from 'react'
import { ArrowRightWhite } from '../../../../../assets/Logos/Icons'

function SpecialityButton({ icon, text, isViewAll }) {
    return (
        <div className={`home-page-speciality-button ${isViewAll ? "view-all-speciality-button" : ""}`}>
            <img src={icon} alt="" />

            <div className="home-page-speciality-button_text">
                {text}
            </div>

            {
                isViewAll && <div className="icon"> <ArrowRightWhite /></div>

            }
        </div>
    )
}

export default SpecialityButton
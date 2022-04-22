import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FETCH_FAMILY_MEMBERS, STORE_APPOINMENT_FORM_DATA } from '../../../actions/type';
import './recentactivitylistitem.css'

function RecentActivityListItem({ data }) {

    const userData = useSelector((state) => state.login);
    let dispatch=useDispatch()
    let history=useHistory()

    
    let bookappointment = (data) => {
        console.log("data",data);
        if (data) {
            // data.appointmentDetails.bookingFrom = "Request";
            data.appointmentDetails.bookingFrom = "Book";
            data.appointmentDetails.bookingType = "Book";

            //if (data.appointmentDetails.appointmentFor == "") {
            data.appointmentDetails.gender = userData.user.gender;
            data.appointmentDetails.dob = userData.user.dob;
            data.appointmentDetails.firstName = userData.user.profileName;
            data.appointmentDetails.doctorfees = data.doctorDetails.doctorfees
            data.appointmentDetails.c2mdfees = data.doctorDetails.c2mdfees
            data.appointmentDetails.gstamount = data.doctorDetails.gstfees
            data.appointmentDetails.hospitalname = data.doctorDetails.clinicname
            data.appointmentDetails.clinicLogo = data.doctorDetails.cliniclogo

            // dispatch(FETCH_FAMILY_MEMBERS({ userid: userData }));
            //}

            console.log(userData);


            // dispatch({
            //     type: FETCH_FAMILY_MEMBERS,
            //     payload: userData,
            // });


            dispatch({
                type: STORE_APPOINMENT_FORM_DATA,
                payload: data.appointmentDetails,
            });

            // history.push();

            history.push({
                pathname: "/bookAppointment/" + data.doctorId,
                isRequestMode: true,
                isFromDashboard:true
            })
        }

    }


    return (
        <div className="recent-list-item">
            <div className="recent-list-item-left">

                <span className="recent-list-item-name">{data.doctorName}</span>
                <span className="recent-list-item-date">{`${data.appointmentDate} `}</span>
                <span className="recent-list-item-date">{`${data.appointmentTime}`}</span>

            </div>

            <div className="recent-list-item-right">

                {/* <button className="recent-list-item-button-expired">Expired</button> */}
                <button
                    className={data.appointmentStatus === "Accepted by doctor" || data.appointmentStatus === "Accepted by Doctor"  ?
                        "recent-list-item-button-active" :
                        "recent-list-item-button-expired"
                    }
                    onClick={() => { bookappointment(data.appointmentStatus === "Accepted by doctor" || data.appointmentStatus === "Accepted by Doctor" ? data : false) }}

                >{data.appointmentStatus === "Accepted by doctor" || data.appointmentStatus === "Accepted by Doctor" ? "Book Now": data.appointmentStatus}</button>
            </div>
        </div>
    )
}

export default RecentActivityListItem

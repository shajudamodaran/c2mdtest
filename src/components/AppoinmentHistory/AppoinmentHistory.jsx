// import { Pagination } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAppointmentHistory, fetchSelectedAppointmentDetails } from '../../actions/AppointmentActions'
import CustomeModal from '../CustomeModal/CustomeModal'
import './appointmenthistory.css'
import AppointmentHistoryModalContent from './AppointmentHistoryModalContent/AppointmentHistoryModalContent'

function AppoinmentHistory() {

    let [modal, setModal] = useState(false)
    let dispatch = useDispatch()

    let appointmentHistoryRedux = useSelector(state => state.appointmentHistory.appointmentHistory)
    let selectedAppointmentHistoryRedux = useSelector(state => state.appointmentHistory.appointmentHistory)

    const userData = useSelector(
        (state) => state.login.user
    );

    const patientData = useSelector(
        (state) => state.login.patientDashboard
    );

    console.log(selectedAppointmentHistoryRedux);


    let handleTableClick = (appointmentId) => {

        // dispatch(setModalRedux({
        //     name: "ApointmentHistoryModal",
        //     value: true
        // }))
        dispatch(fetchSelectedAppointmentDetails({
            appointmentId: appointmentId ? appointmentId : null,
            userData

        }));

        setModal(true)

    }


    useEffect(() => {

        console.log("Calling appointment history...........");
        dispatch(fetchAppointmentHistory(patientData));

    }, [])

    let getDateFull = () => {

        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let today = new Date()

        let date = today.getDate()
        let month = today.getMonth()
        let year = today.getFullYear()
        let week = today.getDay()

        return (`${date}, ${months[month]}, ${year} - ${days[week]}`)

    }



    return (
        <div className='appontment-history-container'>

            <div className="header">
                {getDateFull()}

                {/* <div className="filter-button">
                    <div className="icon">&nbsp;</div>
                    Filter Appointments
                </div> */}

            </div>

            {
                appointmentHistoryRedux ?

                    <table className='appoinment-table'>
                        <tr>
                            <th>Appointment ID</th>
                            <th>Time</th>
                            <th>Doctor Name</th>
                            <th>Consultation Status</th>
                            <th>Next Steps</th>
                            <th></th>
                        </tr>



                        <tbody>

                            {
                                appointmentHistoryRedux ?


                                    appointmentHistoryRedux.map((element, key) => {

                                        return (
                                            <tr>
                                                <td >{element.appointmentId}</td>
                                                <td >{element.appointmentDate}</td>
                                                <td >{element.consultantName}</td>
                                                <td >{element.status}</td>
                                                <td >
                                                    Not Available
                                                    {/* See again in In 5 weeks */}
                                                </td>
                                                <td  ><button onClick={() => { handleTableClick(element.appointmentId) }} className='more-btn' >More</button></td>

                                            </tr>
                                        )

                                    })



                                    : null
                            }



                        </tbody>
                    </table> : <div className="no-appointments">Oops!! There is no appointments available for you.</div>
            }

            <div className="pagination-container">
                {/* <Pagination defaultCurrent={6} total={500} /> */}
            </div>

            <CustomeModal
                state={modal}
                setModal={setModal}
                component={<AppointmentHistoryModalContent />}
                isRight
            />

        </div>
    )
}

export default AppoinmentHistory

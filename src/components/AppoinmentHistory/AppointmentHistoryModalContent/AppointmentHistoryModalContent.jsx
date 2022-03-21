import React from 'react'
import { useSelector } from 'react-redux'
import './index.css'

function AppointmentHistoryModalContent() {

    let appointmentHistoryRedux = useSelector(state => state.appointmentHistory.selectedAppointment)


    let downloadFile = (file) => {

        window.open(
            file, "_blank");
    }

    console.log(appointmentHistoryRedux?.[0].appointmentDate);

    return (
        <div className='ahmc-container'>
            <span className="header">Appointment ID - {appointmentHistoryRedux?.[0].appointmentId}</span>

            <div className="appointment-timeline">
                <div className="step">
                    <div className="step-graph">

                        <div className="round">&nbsp;</div>
                        <div className="length">&nbsp;</div>

                    </div>

                    <div className="step-text">

                        <div className="date">{appointmentHistoryRedux?.[0].appointmentDate}</div>

                        <div className="c-row">Patient Name - <div className="date">{appointmentHistoryRedux?.[0].patientName}</div></div>

                        <div className="c-row"> <i class='fas fa-phone-alt icon'></i> <div className="date">---</div></div>

                        <div className="c-row"> <i class="fa fa-envelope icon"></i> <div className="date">---</div></div>


                       
                        <div className="c-row">No further input from your provider</div>

                        <div className="step-end">&nbsp;</div>

                    </div>
                </div>
              
                <div className="step">
                    <div className="step-graph">

                        <div className="round yellow">&nbsp;</div>
                        <div className="length">&nbsp;</div>

                    </div>

                    <div className="step-text">

                        <div className="date">{appointmentHistoryRedux?.[0].appointmentDate}</div>

                        <div className="c-row">For - <div className="date">{appointmentHistoryRedux?.[0].doctorName}</div></div>

                        <div className="c-row">Patient Name - <div className="date">{appointmentHistoryRedux?.[0].patientName}</div></div>

                        <div className="c-row">Reports from patient</div>

                        <ul>
                            {
                                appointmentHistoryRedux?.[0].reportDetails.length > 0 ?

                                    appointmentHistoryRedux?.[0].reportDetails.map((element,key) => {


                                        return (
                                            <li style={{
                                               whiteSpace:"nowrap",
                                               textOverflow:"ellipsis",
                                               maxWidth:"100px"


                                            }} onClick={() => { downloadFile(element.filecontent) }}>{`Report ${key+1}`}</li>
                                        )

                                    })

                                    : null
                            }


                        </ul>

                        <div className="row">Other documents</div>

                        <ul>
                            <li>Patient Consent Form</li>
                            <li>Consultation Invoice</li>
                        </ul>


                        <div className="consultation-end">End of Consultation</div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default AppointmentHistoryModalContent

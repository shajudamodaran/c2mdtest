import React from 'react'
import { useSelector } from 'react-redux'
import './index.css'

function TodaysReportModalContent() {


    let appointmentDetails=useSelector(state=>state.interbranchAdmin.dashboardSelected)

    console.log(appointmentDetails);


    return (
        <div className='today-report-modal-content'>
            <div className="header">Appointment ID - {appointmentDetails?.appointmentId}</div>

            <div className="todays-report-timeline">

                <table className='todays_report_table'>

                    <tbody>

                        <tr>
                            <td className='title' colSpan={2}>Appointment Details</td>

                        </tr>

                        <tr>

                            <td className='cell1 odd'>Appointment ID</td>

                            <td className='cell3 odd'>{appointmentDetails?.appointmentId}</td>
                        </tr>

                        <tr>
                            <td className='cell1 even'>Appointment Date</td>

                            <td className='cell3 even'>{appointmentDetails?.appointmentdate}</td>
                        </tr>

                        <tr>
                            <td className='cell1 odd'>Appointment Time*</td>

                            <td className='cell3 odd'>{appointmentDetails?.appointmenttime}</td>
                        </tr>

                        <tr>
                            <td className='cell1 even'>Booked from*</td>

                            <td className='cell3 even'>{appointmentDetails?.booked_from}</td>
                        </tr>



                    </tbody>


                    <tbody>

                        <tr>
                            <td className='title' colSpan={2}>Consultation Status</td>

                        </tr>

                        <tr>

                            <td className='cell1 odd'>Status*</td>

                            <td className='cell3 odd'>{appointmentDetails?.consultationstatus}</td>
                        </tr>

                        <tr>
                            <td className='cell1 even'>Session ID (TokBox)*</td>

                            <td className='cell3 even'>{appointmentDetails?.sessionId}</td>
                        </tr>

                        <tr>
                            <td className='cell1 odd'>Patient Availability and On Screen Status</td>

                            <td className='cell3 odd'>{appointmentDetails?.PatientScreenStatus}</td>
                        </tr>

                        <tr>
                            <td className='cell1 even'>Doctor Availability and On Screen Status</td>

                            <td className='cell3 even'>{appointmentDetails?.DoctorScreenStatus}</td>
                        </tr>

                        <tr>
                            <td className='cell1 odd'>Appointment Duration</td>

                            <td className='cell3 odd'>{appointmentDetails?.duration}</td>
                        </tr>
                    </tbody>

                    <tbody>

                        <tr>
                            <td className='title' colSpan={2}>Notifications Details</td>

                        </tr>


                        <tr>

                            <td className='cell1 odd'>Patient</td>

                            <td className='cell3 odd'>

                                Email sent date: {appointmentDetails?.emailPatientDate}<br />
                                Email sent time: {appointmentDetails?.emailPatientTime} <br />
                            </td>
                        </tr>

                        <tr>
                            <td className='cell1 even'>Doctor</td>

                            <td className='cell3 even'>
                                Email sent date: {appointmentDetails?.emailDoctorDate} <br />
                                Email sent time: {appointmentDetails?.emailDoctorTime} <br />
                            </td>
                        </tr>


                    </tbody>


                    <tbody>

                        <tr>
                            <td className='title' colSpan={2}>Patient Details</td>

                        </tr>

                        <tr>

                            <td className='cell1 odd'>Name</td>
                            <td className='cell3 odd'>{appointmentDetails?.patientname}</td>
                        </tr>

                        <tr>
                            <td className='cell1 even'>New/Existing</td>
                            <td className='cell3 even'>{appointmentDetails?.NewOrExisting}</td>
                        </tr>

                        <tr>
                            <td className='cell1 odd'>MRN Number*</td>
                            <td className='cell3 odd'>{appointmentDetails?.MRNnumber}</td>
                        </tr>

                        <tr>
                            <td className='cell1 even'>Location</td>
                            <td className='cell3 even'>{appointmentDetails?.PatientLocation}</td>
                        </tr>

                        <tr>
                            <td className='cell1 odd'>Email ID</td>
                            <td className='cell3 odd'>{appointmentDetails?.PatientEmail}</td>
                        </tr>

                        <tr>
                            <td className='cell1 even'>Phone Number</td>
                            <td className='cell3 even'>{appointmentDetails?.PatientMobile}</td>
                        </tr>

                        <tr>
                            <td className='cell1 odd'>Timezone</td>
                            <td className='cell3 odd'>{appointmentDetails?.PatientTimeZone}</td>
                        </tr>

                        <tr>
                            <td className='cell1 even'>Booked By (For Loved One)*</td>
                            <td className='cell3 even'>{appointmentDetails?.bookedby}</td>
                        </tr>


                    </tbody>

                    <tbody>

                        <tr>
                            <td className='title' colSpan={6}>Doctor Details</td>

                        </tr>

                        <tr>

                            <td className='cell1 odd'>Doctor ID</td>
                            <td className='cell3 odd'>{appointmentDetails?.doctorId}</td>
                        </tr>

                        <tr>
                            <td className='cell1 even'>Name</td>
                            <td className='cell3 even'>{appointmentDetails?.doctorname}</td>
                        </tr>

                        <tr>
                            <td className='cell1 odd'>Specialty*</td>
                            <td className='cell3 odd'>{appointmentDetails?.doctor_speciality}</td>
                        </tr>

                        <tr>
                            <td className='cell1 even'>Hospital Name*</td>
                            <td className='cell3 even'>{appointmentDetails?.Hospital}</td>
                        </tr>

                        <tr>
                            <td className='cell1 odd'>Email ID</td>
                            <td className='cell3 odd'>{appointmentDetails?.DoctorEmail}</td>
                        </tr>

                        <tr>
                            <td className='cell1 even'>Phone Number</td>
                            <td className='cell3 even'>{appointmentDetails?.DoctorMobile}</td>
                        </tr>




                    </tbody>

                    <tbody>

                        <tr>
                            <td className='title' colSpan={2}>Fees Calculation</td>
                           
                        </tr>

                        <tr>
                         
                            <td className='cell1 odd'>Status*</td>
                            <td className='cell3 odd'>{appointmentDetails?.Fees_status}</td>
                        </tr>

                        <tr>
                            <td className='cell1 even'>Payment ID</td>
                            <td className='cell3 even'>{appointmentDetails?.paymentId}</td>
                        </tr>

                        <tr>
                            <td className='cell1 odd'>Refund ID*</td>
                            <td className='cell3 odd'>{appointmentDetails?.refundid}</td>
                        </tr>

                        <tr>
                            <td className='cell1 even'>Fees Paid*</td>
                            <td className='cell3 even'>{appointmentDetails?.patient_fee_received}</td>
                        </tr>

                        <tr>
                            <td className='cell1 odd'>Payment Mode</td>
                            <td className='cell3 odd'>{appointmentDetails?.paymentMode}</td>
                        </tr>

                    </tbody>

                </table>


            </div>
        </div>
    )
}

export default TodaysReportModalContent

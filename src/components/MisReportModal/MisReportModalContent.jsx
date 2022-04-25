import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function MisReportModalContent() {

  

    let appointmentDetails=useSelector(state=>state.interbranchAdmin.detaiedSelected)

    let openFile = () => {
        window.open("https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "_blank")
    }

    return (
        <div className='today-report-modal-content'>
            <div className="header">Appointment ID - {appointmentDetails?.appointmentid}</div>

            <div className="todays-report-timeline">

                <table className='todays_report_table'>

                    <tbody>

                        <tr>
                            <td className='title' colSpan={2}>Appointment Details</td>

                        </tr>

                        <tr>

                            <td className='cell1 odd'>Appointment ID</td>

                            <td className='cell3 odd'>{appointmentDetails?.appointmentid}</td>
                        </tr>

                        <tr>
                            <td className='cell1 even'>Appointment Date</td>

                            <td className='cell3 even'>{appointmentDetails?.appointmentdate}</td>
                        </tr>

                        <tr>
                            <td className='cell1 odd'>Appointment Time</td>

                            <td className='cell3 odd'>{appointmentDetails?.appointmenttime}</td>
                        </tr>

                        <tr>
                            <td className='cell1 even'>Booked from</td>

                            <td className='cell3 even'>{appointmentDetails?.bookedfrom}</td>
                        </tr>


                        <tr>
                            <td className='cell1 odd'>Status</td>

                            <td className='cell3 odd'>{appointmentDetails?.consultationstatus}</td>
                        </tr>



                    </tbody>

   


                    <tbody>

                        <tr>
                            <td className='title' colSpan={2}>Patient Details</td>

                        </tr>

                        <tr>

                            <td className='cell1 even'>Name</td>
                            <td className='cell3 even'>{appointmentDetails?.patientname}</td>
                        </tr>

                        <tr>
                            <td className='cell1 odd'>New/Existing</td>
                            <td className='cell3 odd'>{appointmentDetails?.NewOrExisting}</td>
                        </tr>

                        <tr>
                            <td className='cell1 even'>Visit Count</td>
                            <td className='cell3 even'>{appointmentDetails?.Visit_Count}</td>
                        </tr>

                        <tr>
                            <td className='cell1 odd'>MRN Number</td>
                            <td className='cell3 odd'>{appointmentDetails?.MRNnumber}</td>
                        </tr>

                        <tr>
                            <td className='cell1 even'>Location</td>
                            <td className='cell3 even'>{appointmentDetails?.Location}</td>
                        </tr>

                        <tr>
                            <td className='cell1 odd'>Email ID</td>
                            <td className='cell3 odd'>*</td>
                        </tr>

                        <tr>
                            <td className='cell1 even'>Phone Number</td>
                            <td className='cell3 even'>*</td>
                        </tr>

                    </tbody>

                    <tbody>

                        <tr>
                            <td className='title' colSpan={2}>Doctor Details</td>

                        </tr>

                        <tr>
                            <td className='cell1 odd'>Doctor ID</td>
                            <td className='cell3 odd'>{appointmentDetails?.doctor_id}</td>
                        </tr>

                        <tr>
                            <td className='cell1 even'>Name</td>
                            <td className='cell3 even'>{appointmentDetails?.doctor_name}</td>
                        </tr>

                        <tr>
                            <td className='cell1 odd'>Specialty</td>
                            <td className='cell3 odd'>{appointmentDetails?.doctor_speciality}</td>
                        </tr>

                        <tr>
                            <td className='cell1 even'>Hospital Name</td>
                            <td className='cell3 even'>{appointmentDetails?.hospital_name}</td>
                        </tr>





                    </tbody>
                    <tbody>

                        <tr>
                            <td className='title' colSpan={2}>Fees Calculation</td>
                        </tr>

                        <tr>
                           
                            <td className='cell1 odd'>Status</td>
                            <td className='cell3 odd'>{appointmentDetails?.Fees_status}</td>
                        </tr>

                        <tr>
                            <td className='cell1 even'>Payment ID</td>
                            <td className='cell3 even'>{appointmentDetails?.payment_id}</td>
                        </tr>

                        <tr>
                            <td className='cell1 odd'>Refund ID</td>
                            <td className='cell3 odd'>{appointmentDetails?.refund_id}</td>
                        </tr>


                        <tr>
                            <td className='cell1 even'>Received from Patient</td>
                            <td className='cell3 even'>{appointmentDetails?.patient_fee_received}</td>
                        </tr>

                        <tr>
                            <td className='cell1 odd'>Payment Mode</td>
                            <td className='cell3 odd'>{appointmentDetails?.payment_mode}</td>
                        </tr>

                        <tr>
                            <td className='cell1 even'>Payment Channel</td>
                            <td className='cell3 even'>{appointmentDetails?.Payment_Channel}</td>
                        </tr>

                        <tr>
                            <td className='cell1 odd'>Invoice file</td>
                            <td className='cell3 odd'><span className='file_open_link' onClick={() => { openFile() }}> {appointmentDetails?.Invoice_File}</span></td>
                        </tr>

                        <tr>
                            <td className='cell1 even'>Doctor Fees</td>
                            <td className='cell3 even'>{appointmentDetails?.doctor_fees}</td>
                        </tr>

                        <tr>
                            <td className='cell1 odd'>Discounts</td>
                            <td className='cell3 odd'>{appointmentDetails?.Discounts}</td>
                        </tr>

                        <tr>
                            <td className='cell1 even'>C2MD Fees</td>
                            <td className='cell3 even'>{appointmentDetails?.c2md_fees}</td>
                        </tr>

                        <tr>
                            <td className='cell1 odd'>GST on C2MD Fees</td>
                            <td className='cell3 odd'>{appointmentDetails?.GST_on_C2MD_Fees}</td>
                        </tr>

                        <tr>
                            <td className='cell1 even'>PG Fees</td>
                            <td className='cell3 even'>{appointmentDetails?.PG_Fees}</td>
                        </tr>

                        <tr>
                            <td className='cell1 odd'>Refund Amount</td>
                            <td className='cell3 odd'>{appointmentDetails?.Refund_Amount}</td>
                        </tr>


                        <tr>
                            <td className='cell1 even'>PG Refund Fees</td>
                            <td className='cell3 even'>{appointmentDetails?.PG_Refund_Fees}</td>
                        </tr>


                        <tr>
                            <td className='cell1 odd'>GST on Refund Fees</td>
                            <td className='cell3 odd'>{appointmentDetails?.PG_Refund_GST}</td>
                        </tr>



                    </tbody>



                    <tbody>

                    <tr>
                            <td className='title' colSpan={2}>Pay Out</td>
                           
                        </tr>

                        <tr>
                           
                            <td className='cell1 even'>Gross Amount</td>
                            <td className='cell3 even'>{appointmentDetails?.Gross_Amount}</td>
                        </tr>

                        <tr>
                            <td className='cell1 odd'>Tax</td>
                            <td className='cell3 odd'>{appointmentDetails?.TAX}</td>
                        </tr>

                        <tr>
                            <td className='cell1 even'>Net Amount Payable</td>
                            <td className='cell3 even'>{appointmentDetails?.nett_amount_payable}</td>
                        </tr>


                    </tbody>


                </table>


            </div>
        </div>
    )
}

export default MisReportModalContent



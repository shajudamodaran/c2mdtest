import { DatePicker, Modal, Pagination, Tooltip } from 'antd';
import React, { useRef, useState } from 'react'
import moment from "moment"
import './misreport.css'
import { useDispatch, useSelector } from 'react-redux';
import StatusBadge from '../Badges/StatusBadge/StatusBadge';
import { FETCH_ADMIN_DASHBOARD_REPORT, FETCH_ADMIN_DETAILED_REPORT, FETCH_DASHBOARD_MORE, FETCH_DETAILED_MORE, updateMisReportComment } from '../../actions/InterbranchAdminActions';
import { INTERBRANCH_MODAL } from '../../actions/type';
import { convertDateToString } from '../../Helpers/dateFunctions';


const { RangePicker } = DatePicker;

function Misreport() {

    const dateRef = useRef(null)

    let [isOpen, setOpen] = useState(false)

    const dispatch = useDispatch()


    let misReports =useSelector(state => state.interbranchAdmin.detailedReportTable)
    let misReportsPageLength =useSelector(state => state.interbranchAdmin.detailedReportTableTotalPages)


    let handleTableClick = (_id) => {

        dispatch(FETCH_DETAILED_MORE(_id))
       
        dispatch({
            type: INTERBRANCH_MODAL,
            payload: {
                name: "misReportModal",
                value: true
            }
        });

      

    }

    let filterOnClick = () => {

        setOpen(!isOpen)

    }

    let handledateChange = (e) => {


        if (e) {
            let [startDate, endDate] = e

            let prevDate = moment().subtract(3, 'months')

            console.log(convertDateToString(prevDate));

            console.log();

            if (startDate < prevDate) {

                Modal.confirm({
                    title: 'Confirm',
                    // icon: <ExclamationCircleOutlined />,
                    content: 'You can only view report within a 3 month span. Do you want to download the report before 3 months?',
                    okText: 'Download Report',
                    cancelText: 'cancel',
                    onOk() {
                        downloadReport(startDate, endDate)
                    },
                });
            }
            else {

                dispatch(FETCH_ADMIN_DETAILED_REPORT({fromDate:startDate,toDate:endDate}))
                //downloadReport(startDate, endDate)
            }



        }


    }

    let downloadReport = (startDate, endDate) => {

        console.log("Ready to download report................");

    }


    let handleCommentChange = (para_appointment_id,e) =>{

        dispatch(updateMisReportComment(para_appointment_id,e.target.value)).then((res)=>{

            if(res)
            {
                dispatch(FETCH_ADMIN_DETAILED_REPORT())
            }

        })
       

    }

    let handlePaginationChange =(e) =>{

        // console.log(e-1);
        dispatch(FETCH_ADMIN_DETAILED_REPORT({offset:e-1}))
    }




    return (
        <div className='mis_report_container'>

            <div className="header">

                <button>

                    <div className="icon"><i class="far fa-download"></i></div> Download Report</button>

                <div className="filter-button" >

                    <div className="icon" onClick={filterOnClick}><i class="far fa-calendar-alt"></i></div>


                    <RangePicker
                        // open={isOpen}
                        ref={dateRef}
                        bordered={false}
                        className="date-picker"
                        suffixIcon={null}
                        // disabledDate={(current) => {
                        //     return moment().add(-3, 'month') >= current
                        //     // ||
                        //     //  moment().add(1, 'month')  <= current;
                        // }}
                        onChange={handledateChange} />
                </div>


            </div>


            <div className='mis_report_table_container'>


                <table className='appoinment-table'>
                    <tr>
                        <th>Appoinment ID</th>
                        <th>Appoinment Date</th>
                        <th>Appointment Time</th>
                        <th>Patient Name</th>
                        <th>Doctor Name</th>
                        <th>Hospital Name</th>
                        <th>Fees Paid</th>
                        <th>C2MD Fees</th>
                        <th>Nett Fees</th>
                        <th>Consultation Status</th>
                        <th>Payment Status</th>
                        <th>Notes</th>
                        <th></th>
                    </tr>

                    <tbody>

                        {
                            misReports ?
                                misReports.length > 0 ?

                                    misReports.map((element, key) => {

                                      

                                        if (key <= 8) {

                                            return (

                                                <tr>
                                                    <td>{element.appointmentId}</td>
                                                    <td>{element.appointmentDate}</td>
                                                    <td>{element.appointmentTime}</td>
                                                    <td>{element.patientName}</td>
                                                    <td>{element.doctorName}</td>
                                                    <td>Bethany Hospital</td>
                                                    <td>{element.feesPaid}</td>
                                                    <td>{element.c2mdFees}</td>
                                                    <td>{element.nettFees}</td>
                                                    <td><StatusBadge text="Completed" varient="completed" /></td>
                                                    <td>{element.paymentStatus}</td>
                                                    <td><textArea onBlur={(e)=>{handleCommentChange(element.appointmentId,e)}} rows={1} >{element.Comments}</textArea></td>

                                                    <td  ><button onClick={() => { handleTableClick(element.appointmentId) }} className='more-btn' >More</button></td>

                                                </tr>
                                            )
                                        }
                                    })

                                    : console.log("length ", misReports.length)
                                : console.log("no mis report")
                        }






                    </tbody>
                </table>

            </div>


            <div className="pagination-container-mis-report">

                &nbsp;
                <Pagination  onChange={handlePaginationChange} defaultCurrent={1} total={ misReportsPageLength?misReportsPageLength*8:0} />
            </div>



        </div>
    )
}

export default Misreport
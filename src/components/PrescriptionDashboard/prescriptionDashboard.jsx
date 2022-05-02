import { DatePicker, Modal, Pagination, Tooltip } from 'antd';
import React, { useRef, useState } from 'react'
import moment from "moment"
import './prescriptiondashboard.css'
import { useDispatch, useSelector } from 'react-redux';
import StatusBadge from '../Badges/StatusBadge/StatusBadge';
import { FETCH_ADMIN_DASHBOARD_REPORT, FETCH_ADMIN_DETAILED_REPORT, FETCH_DASHBOARD_MORE, FETCH_DETAILED_MORE, updateMisReportComment } from '../../actions/InterbranchAdminActions';
import { INTERBRANCH_MODAL } from '../../actions/type';
import { convertDateToString } from '../../Helpers/dateFunctions';


const { RangePicker } = DatePicker;

function PrescriptionDashboard() {

    const dateRef = useRef(null)

    let [isOpen, setOpen] = useState(false)

    const dispatch = useDispatch()


    let misReports = useSelector(state => state.interbranchAdmin.detailedReportTable)
    let misReportsPageLength = useSelector(state => state.interbranchAdmin.detailedReportTableTotalPages)


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

                dispatch(FETCH_ADMIN_DETAILED_REPORT({ fromDate: startDate, toDate: endDate }))
                //downloadReport(startDate, endDate)
            }



        }


    }

    let downloadReport = (startDate, endDate) => {

        console.log("Ready to download report................");

    }


    let handleCommentChange = (para_appointment_id, e) => {

        dispatch(updateMisReportComment(para_appointment_id, e.target.value)).then((res) => {

            if (res) {
                dispatch(FETCH_ADMIN_DETAILED_REPORT())
            }

        })


    }

    let handlePaginationChange = (e) => {

        // console.log(e-1);
        dispatch(FETCH_ADMIN_DETAILED_REPORT({ offset: e - 1 }))
    }




    return (
        <div className='mis_report_container'>

            <div className="header">

                <button>

                    <div className="icon"><i class="far fa-sync"></i></div>Sync Lab Test & Medicine</button>

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

                <div className="search-container">
                    <input type="text" name="" id="" placeholder='Search' />
                </div>


                <table className='appoinment-table'>
                    <tr>
                        <th>App Id</th>
                        <th>Patient</th>
                        <th>Doctor</th>
                        <th>App Date & Time</th>
                        {/* <th>Appointment Time</th> */}
                        <th>Prescription</th>
                        {/* <th>Send Time</th>
                        <th>Received Time</th> */}
                        <th>Sync Status</th>
                        {/* <th>Consultation Status</th>
                        <th>Payment Status</th>
                        <th>Notes</th> */}

                    </tr>

                    <tbody>

                        <tr>
                            <td>{"1"}</td>
                            <td>{"Data 1"}</td>
                            <td>{"Data 2"}</td>
                            <td>{"Data 3"}</td>
                            <td>{"Data 4"}</td>
                            <td>{"Data 5"}</td>
                        </tr>

                        <tr>
                            <td>{"1"}</td>
                            <td>{"Data 1"}</td>
                            <td>{"Data 2"}</td>
                            <td>{"Data 3"}</td>
                            <td>{"Data 4"}</td>
                            <td>{"Data 5"}</td>
                        </tr>

                        <tr>
                            <td>{"1"}</td>
                            <td>{"Data 1"}</td>
                            <td>{"Data 2"}</td>
                            <td>{"Data 3"}</td>
                            <td>{"Data 4"}</td>
                            <td>{"Data 5"}</td>
                        </tr>




                    </tbody>
                </table>

            </div>


            <div className="pagination-container-mis-report">

                &nbsp;
                <Pagination onChange={handlePaginationChange} defaultCurrent={1} total={misReportsPageLength ? misReportsPageLength * 8 : 0} />
            </div>



        </div>
    )
}

export default PrescriptionDashboard
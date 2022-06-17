import { Pagination, Tooltip } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DatePicker, Space } from 'antd';
import './todaysreport.css'
// import { FETCH_MIS_REPORT, GET_DASHBOARD_MORE } from '../../Redux/Slice/DetailedReportSlice';
import { INTERBRANCH_ADMIN_DASHBOARD_SELECTED, INTERBRANCH_MODAL } from '../../actions/type';
import { FETCH_ADMIN_DASHBOARD_REPORT, FETCH_DASHBOARD_MORE } from '../../actions/InterbranchAdminActions';
import { separaetdateAndTime } from '../../Helpers/dateFunctions';
import { getFromLocalStorage } from '../../Helpers/localStorageHelper';
import { CLINIC_ADMIN_USER, USER_DATA, USER_TYPE } from '../../constants/const';
import EmptyTableData from '../Common/EmptyTableData/EmptyTableData';


const { RangePicker } = DatePicker;

function TodaysReport() {

    const dispatch = useDispatch()
    const dateRef = useRef(null)

    let dashboardData = useSelector(state => state.interbranchAdmin.dashboardTable)


    let [isOpen, setOpen] = useState(false)
    let [pagination, setPagination] = useState(1)
    let [userType, setUserType] = useState(JSON.parse(localStorage.getItem(USER_DATA))?.userType)


    useEffect(() => {

        setPagination(10)

    }, [dashboardData])



    let handleTableClick = (eachRow) => {



        dispatch({
            type: INTERBRANCH_ADMIN_DASHBOARD_SELECTED,
            payload: eachRow
        });

        dispatch(FETCH_DASHBOARD_MORE(eachRow.appointmentId))

        dispatch({
            type: INTERBRANCH_MODAL,
            payload: {
                name: "todaysReportModal",
                value: true
            }
        });

        // dispatch(setModalRedux({
        //     name: "todaysReportModal",
        //     value: true
        // }))

    }


    let filterOnClick = () => {

        // dateRef.current.focus();

        setOpen(!isOpen)
    }



    let handledateChange = () => {

        setOpen(!isOpen)

    }

    let handlePaginationChange = (e, s) => {

        // console.log(e,s);
        // dispatch(FETCH_ADMIN_DASHBOARD_REPORT({offset:e-1}))

        // if (pagination < dashboardData.length) {
        //     setPagination(pagination + 10)
        // }

    }

  


    return (
        <div className='appontment-history-container'>

            <div className="header">


                {/* &nbsp; */}

                {/* <Tooltip placement="topLeft" title={"For more than past 3 months report please use Download Report button."}>
                    <div className="filter-button" >
                        <div className="icon" onClick={filterOnClick}><i class="far fa-calendar-alt"></i></div>
                        <RangePicker open={isOpen}
                            ref={dateRef}
                            bordered={false}
                            className="date-picker"
                            suffixIcon={null}
                            onChange={handledateChange}

                        />
                    </div>
                </Tooltip> */}


                <div>&nbsp;</div>

                <button >

                    {/* <div className="icon">
                        <i class="far fa-download"></i>
                    </div> */}

                    Today's Report
                </button>



            </div>

            <div className="todays_report_table_container">

                <table className='appoinment-table'>


                    {
                        userType == CLINIC_ADMIN_USER ?

                            // CLINIC ADMIN TABLE........................................................
                            <>
                                <thead>
                                    <tr>
                                        <th>Appointment ID</th>
                                        <th>Doctor Name</th>
                                        <th>Patient Name</th>
                                        <th>Appointment Date & Time</th>
                                        <th>Appointment Duration</th>
                                        <th>Appointment fees</th>
                                        <th>Payment Id</th>
                                        <th>Hospital Id</th>
                                        <th>Appointment Status</th>
                                        <th className=''>{`Doctor Consultation \n Screen status`}</th>
                                        <th>{`Patient Consultation \n Screen status`}</th>
                                        <th>Follow up Details</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        dashboardData ?
                                            dashboardData.length > 0 ?

                                                dashboardData.map((eachRow, key) => {

                                                    if (eachRow.appointmentId) {
                                                        return (

                                                            <tr>
                                                                <td>{eachRow.appointmentId}</td>
                                                                <td>{eachRow.doctorname}</td>
                                                                <td>
                                                                    <div className='dashboard-appointment-date-time-2'>
                                                                        <span>{eachRow.patientname}</span>
                                                                        <span>{eachRow.timezone}</span>
                                                                    </div>

                                                                </td>
                                                                <td>
                                                                    <div className='dashboard-appointment-date-time'>
                                                                        <span>{eachRow.appointmentdate} (P)</span>
                                                                        <span>{eachRow.doctorappointmentdate} (D)</span>
                                                                    </div>
                                                                </td>
                                                                <td>{eachRow.duration} Minutes</td>
                                                                <td>
                                                                    <div className='dashboard-appointment-date-time'>
                                                                        <span>{eachRow.fees}</span>
                                                                        <span>{eachRow.paymentgatway}</span>
                                                                    </div>
                                                                </td>
                                                                <td>{eachRow.paymentId}</td>
                                                                <td>{eachRow.Hospitalid}</td>
                                                                <td>{eachRow.appointmentStatus}</td>
                                                                <td>{eachRow.doctorstatus}</td>
                                                                <td>{eachRow.patientstatus}</td>
                                                                <td>{eachRow.followupdetails}</td>
                                                                <td ><button onClick={() => { handleTableClick(eachRow) }} className='more-btn' >More</button></td>

                                                            </tr>

                                                        )

                                                    }





                                                })

                                                : <tr>
                                                    <td colSpan={13}>
                                                        <EmptyTableData />
                                                    </td>
                                                </tr>
                                            : null
                                    }


                                </tbody>
                            </>
                            :
                            // SUPER ADMIN TABLE........................................................
                            <>
                                <thead>
                                    <tr>
                                        <th>Appointment ID</th>
                                        <th>Appoinment Date & Time</th>
                                        <th>Patient Name</th>
                                        <th>Doctor Name</th>
                                        <th>Fees Paid</th>
                                        <th>Consultation Status</th>
                                        <th>Next Steps</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        dashboardData ?
                                            dashboardData.length > 0 ?

                                                dashboardData.map((eachRow, key) => {

                                                    if (key <= 10 && eachRow.appointmentId) {
                                                        return (

                                                            <tr>
                                                                <td>{eachRow.appointmentId}</td>
                                                                <td>
                                                                    <div className='dashboard-appointment-date-time'>
                                                                        <span>{eachRow.appointmentdate} (P)</span>
                                                                        <span>{eachRow.doctorappointmentdate} (D)</span>
                                                                    </div>
                                                                </td>
                                                                {/* <td>{separaetdateAndTime(eachRow.appointmentdate)?.date}</td> */}
                                                                {/* <td>{separaetdateAndTime(eachRow.appointmentdate)?.time} (GMT+05:30)</td> */}
                                                                <td>
                                                                    <div className='dashboard-appointment-date-time-2'>
                                                                        <span>{eachRow.patientname}</span>
                                                                        <span>{eachRow.timezone}</span>
                                                                    </div>
                                                                </td>
                                                                <td>{eachRow.doctorname}</td>
                                                                <td>

                                                                    <div className='dashboard-appointment-date-time'>
                                                                        <span>{eachRow.fees}</span>
                                                                        <span>{eachRow.paymentgatway}</span>
                                                                    </div>
                                                                </td>
                                                                <td>{eachRow.appointmentStatus}</td>
                                                                <td>{eachRow.followupdetails}</td>
                                                                <td ><button onClick={() => { handleTableClick(eachRow) }} className='more-btn' >More</button></td>

                                                            </tr>

                                                        )

                                                    }





                                                })

                                                : <tr>
                                                    <td colSpan={9}>
                                                        <EmptyTableData />
                                                    </td>
                                                </tr>
                                            : null
                                    }


                                </tbody>
                            </>

                    }






                </table>



            </div>
            <div className="pagination-container-mis-report">

                &nbsp;
                {/* <Pagination onChange={handlePaginationChange} defaultCurrent={1} total={ dashboardData?dashboardData*8:0}/> */}
            </div>

        </div>
    )
}

export default TodaysReport

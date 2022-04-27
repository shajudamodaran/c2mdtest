import { Pagination, Tooltip } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DatePicker, Space } from 'antd';
import './todaysreport.css'
// import { FETCH_MIS_REPORT, GET_DASHBOARD_MORE } from '../../Redux/Slice/DetailedReportSlice';
import { INTERBRANCH_MODAL } from '../../actions/type';
import { FETCH_ADMIN_DASHBOARD_REPORT, FETCH_DASHBOARD_MORE } from '../../actions/InterbranchAdminActions';
import { separaetdateAndTime } from '../../Helpers/dateFunctions';


const { RangePicker } = DatePicker;

function TodaysReport() {

    const dispatch = useDispatch()
    const dateRef = useRef(null)

    let dashboardData = useSelector(state => state.interbranchAdmin.dashboardTable)
    
  
    let [isOpen, setOpen] = useState(false)
    let [pagination, setPagination] = useState(1)


    useEffect(() => {

        setPagination(10)

    }, [dashboardData])



    let handleTableClick = (_id) => {

         dispatch(FETCH_DASHBOARD_MORE(_id))
       
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
        dispatch(FETCH_ADMIN_DASHBOARD_REPORT({offset:e-1}))

        if (pagination < dashboardData.length) {
            setPagination(pagination + 10)
        }

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

            </div>

            <div className="todays_report_table_container">

                <table className='appoinment-table'>
                    <thead>
                    <tr>
                        <th>Appointment ID</th>
                        <th>Appoinment Date</th>
                        <th>Appointment Time</th>
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

                                        if (key <= 10) {
                                            return (

                                                <tr>
                                                    <td>{eachRow.appointmentId}</td>
                                                    <td>{separaetdateAndTime(eachRow.appointmentdate)?.date}</td>
                                                    <td>{separaetdateAndTime(eachRow.appointmentdate)?.time} GMT+05:30</td>
                                                    <td>{eachRow.patientname}</td>
                                                    <td>{eachRow.doctorname}</td>
                                                    <td>{eachRow.fees}</td>
                                                    <td>{eachRow.appointmentStatus}</td>
                                                    <td>{eachRow.followupdetails}</td>
                                                    <td ><button onClick={() => { handleTableClick(eachRow.appointmentId) }} className='more-btn' >More</button></td>

                                                </tr>

                                            )

                                        }





                                    })

                                    : null
                                : null
                        }


                    </tbody>
                </table>

            </div>
            <div className="pagination-container-mis-report">

                &nbsp;
                <Pagination onChange={handlePaginationChange} defaultCurrent={1} total={ dashboardData?dashboardData*8:0}/>
            </div>

        </div>
    )
}

export default TodaysReport
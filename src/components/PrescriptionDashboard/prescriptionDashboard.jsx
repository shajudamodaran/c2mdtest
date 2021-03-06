import { DatePicker, Modal, Pagination, Popover, Tooltip } from 'antd';
import React, { useRef, useState, useEffect } from 'react'
import moment from "moment"
import './prescriptiondashboard.css'
import { useDispatch, useSelector } from 'react-redux';
import StatusBadge from '../Badges/StatusBadge/StatusBadge';
import { FETCH_ADMIN_DASHBOARD_REPORT, FETCH_ADMIN_DETAILED_REPORT, FETCH_DASHBOARD_MORE, FETCH_DETAILED_MORE, updateMisReportComment } from '../../actions/InterbranchAdminActions';
import { INTERBRANCH_MODAL } from '../../actions/type';
import { convertDateToString } from '../../Helpers/dateFunctions';
import { FETCH_PR_ADMIN_DASHBOARD_REPORT, pushToHisCall, syncLabAndMedicine } from '../../actions/PrescriptionFormActions';
import CustomeModal from '../CustomeModal/CustomeModal';
import SyncSuccessModal from '../PrescriptionForm/Components/SyncSuccessModal/SyncSuccessModal';
import EmptyTableData from '../Common/EmptyTableData/EmptyTableData';


const { RangePicker } = DatePicker;

function PrescriptionDashboard() {

    const dateRef = useRef(null)
    const { crDashboard, crDashboardTotal, isLoading, isFresh } = useSelector((state) => state.presctiptionFormReducer)

    let [isOpen, setOpen] = useState(false)
    let [searchKey, setSearchKey] = useState(null)
    let [filterData, setFilterData] = useState([])
    let [isSyncing, setSyncing] = useState(false)
    let [syncSuccess, setSyncSuccess] = useState(false)

    let [_isSyncing, _setSyncing] = useState(false)
    let [_syncSuccess, _setSyncSuccess] = useState(false)
    let [individualSync, setIndividualSync] = useState(null)

    let [pagination, setPagination] = useState(0)
    let [dateRange, setDaterange] = useState({ fromDate: "", toDate: "" })
    let [selectedRange, setSelectedrange] = useState(null)

    let [isInitialLoading, setInitialLoading] = useState(true)


    useEffect(() => {

        if (isFresh) {
            setSelectedrange(null)
        }

    }, [isFresh])




    const dispatch = useDispatch()

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


        setSelectedrange(e)

        if (e) {
            let [startDate, endDate] = e

            let prevDate = moment().subtract(3, 'months')

            console.log(convertDateToString(prevDate));

            console.log({ fromDate: startDate, toDate: endDate });

            setDaterange({ fromDate: startDate, toDate: endDate })

            dispatch(FETCH_PR_ADMIN_DASHBOARD_REPORT({ fromDate: startDate, toDate: endDate }))

            // if (startDate < prevDate) {

            //     Modal.confirm({
            //         title: 'Confirm',
            //         // icon: <ExclamationCircleOutlined />,
            //         content: 'You can only view report within a 3 month span. Do you want to download the report before 3 months?',
            //         okText: 'Download Report',
            //         cancelText: 'cancel',
            //         onOk() {
            //             downloadReport(startDate, endDate)
            //         },
            //     });
            // }
            // else {

            //     // dispatch(FETCH_PR_ADMIN_DASHBOARD_REPORT({ fromDate: startDate, toDate: endDate }))

            //     // dispatch(FETCH_ADMIN_DETAILED_REPORT({ fromDate: startDate, toDate: endDate }))
            //     //downloadReport(startDate, endDate)
            // }

        }
        else {
            dispatch(FETCH_PR_ADMIN_DASHBOARD_REPORT())

        }

        // pp dashboards
    }

    let downloadReport = (startDate, endDate) => {

        console.log("Ready to download report................");

    }


    //dashboard
    useEffect(() => {
        setFilterData(crDashboard?.prescriptionlist ? crDashboard?.prescriptionlist : [])
    }, [crDashboard])


    useEffect(() => {

        if (crDashboard?.prescriptionlist) {
            handleSearch(searchKey ? searchKey : null)
        }


    }, [searchKey])


    let handleSearch = (value) => {

        let oldData = crDashboard?.prescriptionlist

        if (value && value != "") {
            console.log("Have search key...", value.length);

            let filteredData = oldData.filter((element) => {

                if (element.appointmentID.includes(value.toString())) {
                    return true
                }

                if (element.patientName.toLowerCase().includes(value.toString().toLowerCase())) {
                    return true
                }
                if (element.doctorname.toLowerCase().includes(value.toString().toLowerCase())) {
                    return true
                }
            })

            setFilterData(filteredData)
        }
        else {
            console.log("No search key...");
            setFilterData(crDashboard.prescriptionlist ? crDashboard.prescriptionlist : [])
        }

    }

    let handleDownloadClick = (link) => {

        if (link) {
            window.open(link, "_blank")
        }

    }

    let syncTM = () => {

        if (!isSyncing) {

            console.log("Start sync");
            setSyncing(true)

            dispatch(syncLabAndMedicine()).then((res) => {

                setSyncing(false)
                console.log(res);
                setSyncSuccess(true)

            })


        }

    }


    let pushToHis = (_id) => {

        if (!_isSyncing) {

            setIndividualSync(_id)
            console.log("Start sync individual");
            _setSyncing(true)

            dispatch(pushToHisCall(_id)).then((res) => {

                _setSyncing(false)
                console.log(res);
                setSyncSuccess(true)

            })


        }

    }

    let reloadData = () => {

        dispatch(FETCH_PR_ADMIN_DASHBOARD_REPORT({ ...dateRange, offset: pagination }))

    }

    let handlePaginationChange = (e, s) => {

        dispatch(FETCH_PR_ADMIN_DASHBOARD_REPORT({ ...dateRange, offset: e - 1 })).then((res) => {

            setPagination(e - 1)

        })

        // dispatch(FETCH_ADMIN_DASHBOARD_REPORT({ offset: e - 1 }))

        // if (pagination < dashboardData.length) {
        //     setPagination(pagination + 10)
        // }

    }


    useEffect(() => {

        // console.log("dashboard loading..........................");
        dispatch(FETCH_PR_ADMIN_DASHBOARD_REPORT())

    }, [])


    let HisPushPopup = ({ sendTime, receiveTime }) => {

        return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                <span><b>Sent Time :</b> {sendTime ? sendTime : "-"}</span>
                <span><b>Received Time :</b> {receiveTime != " " ? receiveTime : "HIS has not received this file"}</span>
            </div>
        )

    }



    return (
        <div className='mis_report_container'>

            <div className="header">

                <button className='header_button' onClick={syncTM}>

                    <div className={`icon ${isSyncing ? "rotate" : ""}`}><i class="far fa-sync"></i></div>{isSyncing ? "Syncing..." : "Sync Lab Test & Medicine"}</button>

                <div className="filter-button" >

                    <div className="icon" onClick={filterOnClick}><i class="far fa-calendar-alt"></i></div>


                    <RangePicker
                        value={selectedRange}
                        style={{ width: "250px" }}
                        // open={isOpen}
                        getPopupContainer={trigger => trigger.parentElement}
                        inputReadOnly
                        format="DD-MMM-YYYY"
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

                {/* <div className="search-container">
                    <input value={searchKey} onChange={(e) => { setSearchKey(e.target.value) }} type="text" name="" id="" placeholder='Search' />
                </div> */}


                <table className='appoinment-table clinic-dashboard-table'>
                    <tr>
                        <th>App Id</th>
                        <th className='patient-name-head'>Patient</th>
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

                        {




                            filterData.length > 0 ? filterData.map((element, key) => {

                                return (

                                    <tr>
                                        <td>
                                            {element.appointmentID}

                                        </td>
                                        <td >{element.patientName}</td>
                                        <td>{element.doctorname}</td>
                                        <td>{`${element.appointmentDate}, ${element.appointmentTime}`}</td>
                                        <td>
                                            <div onClick={() => { handleDownloadClick(element.prescriptionFile) }} className="link-style">Download</div>
                                        </td>
                                        <td >
                                            <Popover content={<HisPushPopup sendTime={element.createdat} receiveTime={element.Responsetime} />}>
                                                <div style={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    alignItems: "center"
                                                }}>
                                                    <div className="prescription_sync_status_indicator ">
                                                        <div className={`${element.pushstatus === "true" ? "completed" : "pending"}`}></div>
                                                    </div>

                                                    &nbsp; &nbsp;

                                                    {
                                                        element.pushstatus == "true" ? "" :

                                                            individualSync == element.id && _isSyncing ?
                                                                <div className={`icon rotate`}><i class="far fa-sync"></i></div> :
                                                                <span onClick={() => { pushToHis(element.id) }} className="link-style">Push to HIS</span>
                                                    }
                                                </div>
                                            </Popover>
                                        </td>
                                    </tr>

                                )

                            })


                                : <tr>
                                    <td colSpan={6}>
                                        <EmptyTableData marginTop={200} isLoading={isLoading} />
                                    </td>
                                </tr>
                        }



                    </tbody>
                </table>

            </div>


            <div className="pagination-container-mis-report">

                &nbsp;
                <Pagination showSizeChanger={false} onChange={handlePaginationChange} defaultCurrent={1} total={crDashboardTotal ? crDashboardTotal * 10 : 0} />
            </div>



            <SyncSuccessModal onOk={reloadData} state={syncSuccess} setState={setSyncSuccess} />

        </div>
    )
}

export default PrescriptionDashboard
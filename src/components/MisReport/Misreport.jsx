import { DatePicker, Modal, Pagination, Tooltip } from 'antd';
import React, { useEffect, useRef, useState } from 'react'
import moment from "moment"
import './misreport.css'
import { useDispatch, useSelector } from 'react-redux';
import StatusBadge from '../Badges/StatusBadge/StatusBadge';
import { downloadSummaryReport, FETCH_ADMIN_DASHBOARD_REPORT, FETCH_ADMIN_DETAILED_REPORT, FETCH_DASHBOARD_MORE, FETCH_DETAILED_MORE, updateMisReportComment } from '../../actions/InterbranchAdminActions';
import { INTERBRANCH_MODAL } from '../../actions/type';
import { convertDateToString } from '../../Helpers/dateFunctions';
import { Input } from 'antd';
import AdminTextArea from '../Common/AdminTextArea/AdminTextArea';
import { getFromLocalStorage } from '../../Helpers/localStorageHelper';
import { ADMIN_USER, USER_DATA } from '../../constants/const';
import { FolderEmpty } from '../../assets/Logos/Icons';
import EmptyTableData from '../Common/EmptyTableData/EmptyTableData';
import { getConsultationStatusFlag } from '../../Helpers/ClinicAdminHelper';

const { TextArea } = Input;


const { RangePicker } = DatePicker;

function Misreport() {

    const dateRef = useRef(null)

    let [isOpen, setOpen] = useState(false)
    let [pagination, setPagination] = useState(null)
    let [selectedDate, setSelectedDate] = useState({ from: null, to: null })

    const dispatch = useDispatch()

    let misReports = useSelector(state => state.interbranchAdmin.detailedReportTable)
    let misReportsPageLength = useSelector(state => state.interbranchAdmin.detailedReportTableTotalPages)

    let userData = localStorage.getItem(USER_DATA)
    userData = JSON.parse(userData)
    let { userType } = userData

    let [isLoading,setLoading]=useState(true)


    useEffect(() => {
     
        dispatch(FETCH_ADMIN_DETAILED_REPORT({ context: "Admin Home useEffect" })).then((res)=>{

            if(res)setLoading(false)

        })

    }, [])
    




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


            if (startDate < prevDate) {

                Modal.confirm({
                    title: 'Confirm',
                    // icon: <ExclamationCircleOutlined />,
                    content: 'You can only view report within a 3 month span. Do you want to download the report before 3 months?',
                    okText: 'Download Report',
                    cancelText: 'cancel',
                    onOk() {
                        downloadReport()
                    },
                });
            }
            else {

                setSelectedDate({ from: startDate, to: endDate })
                dispatch(FETCH_ADMIN_DETAILED_REPORT({ fromDate: startDate, toDate: endDate, offset: pagination, context: "Date Change" }))
                //downloadReport(startDate, endDate)
            }



        }


    }



    let downloadReport = () => {

        console.log("Downloading report..............");

        dispatch(downloadSummaryReport({ fromDate: selectedDate.from, toDate: selectedDate.to })).then((resp) => {

            if (resp) {
                window.open(resp, '_blank');
            }
        })
    }


    let handleCommentChange = (para_appointment_id, e) => {

        dispatch(updateMisReportComment(para_appointment_id, e.target.value)).then((res) => {

            if (res) {
                dispatch(FETCH_ADMIN_DETAILED_REPORT({ offset: pagination, context: "Comment Change", fromDate: selectedDate.from, toDate: selectedDate.to }))
            }

        })


    }

    let handlePaginationChange = (e) => {


        dispatch(FETCH_ADMIN_DETAILED_REPORT({ offset: e - 1, context: "Pagination Change", fromDate: selectedDate.from, toDate: selectedDate.to }))
        setPagination(e - 1)
        // console.log(e-1);
    }



console.log(misReports)




    return (
        <div className='mis_report_container'>

            <div className="header">

                <button onClick={() => { downloadReport() }}>

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
                        <th>Appoinment Date & Time</th>
                        <th>Patient Name</th>
                        <th>Doctor Name</th>
                        {
                            userType === ADMIN_USER ? <th>Hospital Name</th> : null
                        }

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

                                        if (key == 7) {
                                            console.log(element.Comments);
                                        }

                                        if (key <= 8) {

                                            return (

                                                <tr>
                                                    <td>{element.appointmentId}</td>
                                                    <td>{element.appointmentDate} {element.appointmentTime}</td>
                                                    <td>{element.patientName}</td>
                                                    <td>{element.doctorName}</td>
                                                    {
                                                        userType === ADMIN_USER ? <td>{element.hospital}</td> : null
                                                    }

                                                    <td>{element.feesPaid}</td>
                                                    <td>{element.c2mdFees}</td>
                                                    <td>{element.nettFees}</td>
                                                    <td><StatusBadge text={element.consultationStatus} varient={getConsultationStatusFlag(element.consultationStatus)} /></td>
                                                    <td>{element.paymentStatus}</td>
                                                    <td><AdminTextArea
                                                        value={element.Comments}
                                                        element={element}
                                                        onBlur={handleCommentChange}
                                                    /></td>
                                                    {/* <td><TextArea  onBlur={(e) => { handleCommentChange(element.appointmentId, e) }} rows={1}></TextArea></td> */}

                                                    <td  ><button onClick={() => { handleTableClick(element.appointmentId) }} className='more-btn' >More</button></td>

                                                </tr>
                                            )
                                        }
                                    })

                                    : <tr>
                                        <td colSpan={12}>
                                            <EmptyTableData isLoading={isLoading} />
                                        </td>
                                    </tr>
                                : console.log("no mis report")
                        }









                    </tbody>





                </table>



            </div>


            <div className="pagination-container-mis-report">

                &nbsp;
                <Pagination
                    showSizeChanger={false}
                    pageSize={8}
                    onChange={handlePaginationChange}
                    defaultCurrent={1}
                    total={misReportsPageLength ? misReportsPageLength * 8 : 0} />
            </div>



        </div>
    )
}

export default Misreport
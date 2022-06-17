import { DatePicker, Pagination, Tooltip } from 'antd'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FETCH_CONSOLIDATED_REPORTS, getHospitalsList, updateConsolodatedReportComment, updateMisReportAttachments } from '../../actions/InterbranchAdminActions'
import { AddIconV2, ClearFilterIcon } from '../../assets/Logos/Icons'
import { CLINIC_ADMIN_USER, USER_DATA } from '../../constants/const'
import EmptyTableData from '../Common/EmptyTableData/EmptyTableData'
import './consolidatedreport.css'
import { Select } from 'antd';

const { Option } = Select;


function ConsolidatedReport() {

    let [selectedDate, setSelectedDate] = useState({ from: null, to: null })
    let [pagination, setPagination] = useState(null)
    let [userType, setUserType] = useState(JSON.parse(localStorage.getItem(USER_DATA))?.userType)
    let [filterData, setFilterData] = useState({
        date: null,
        hospital: null
    })
    let [isLoading, setLoading] = useState(true)

    const monthFormat = 'MMM-YYYY';

    useEffect(() => {

        dispatch(getHospitalsList())
        dispatch(FETCH_CONSOLIDATED_REPORTS()).then((res) => {

            if (res) setLoading(false)

        })


    }, [])



    let appointmentDetails = useSelector(state => state.interbranchAdmin.consolidatedreport)
    let consolidatedreportTotalPages = useSelector(state => state.interbranchAdmin.consolidatedreportTotalPages)
    let hospitalsList = useSelector(state => state.interbranchAdmin.hospitalsList)

    let dispatch = useDispatch()


    let handleCommentChange = (para_appointment_id, e) => {

        dispatch(updateConsolodatedReportComment(para_appointment_id, e.target.value)).then((res) => {

            if (res) {
                dispatch(FETCH_CONSOLIDATED_REPORTS())
            }

        })


    }


    let handleFileOnChnage = (para_appointment_id, e) => {


        let Files = e.target.files
        let dummy_file = Files[0].name



        dispatch(updateMisReportAttachments(para_appointment_id, dummy_file)).then((res) => {

            if (res) {
                dispatch(FETCH_CONSOLIDATED_REPORTS())
            }

        })

    }

    let handlePaginationChange = (e) => {

        // console.log(e-1);
        setPagination(e - 1)
        dispatch(FETCH_CONSOLIDATED_REPORTS({ offset: e - 1, fromDate: selectedDate.from, toDate: selectedDate.to, filterData }))
    }

    let handleMonthFilter = (e, f) => {

        //"f" is the date in string.
        setFilterData({ ...filterData, date: f })
    }


    let handleHospitalFilter = (value) => {

        setFilterData({ ...filterData, hospital: value })
    }


    useEffect(() => {

        dispatch(FETCH_CONSOLIDATED_REPORTS({ filterData }))

    }, [filterData])


    let clearDatePicker = () => {
        if (filterData.date) {
            setFilterData({ ...filterData, date: null })
        }
    }

    let clearHcoPicker = () => {
        if (filterData.hospital) {
            setFilterData({ ...filterData, hospital: null })
        }
    }




    return (
        <div className='appontment-history-container'>

            <div className="header consolidated-report-header">


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

                {
                    userType !== "ClinicAdmin" ?
                        <div className="filter-button" >

                            {/* <Tooltip placement="topLeft" title={filterData.hospital && "Clear hospital filter"}> */}

                                <div className="icon" onClick={clearHcoPicker}>

                                    {
                                        filterData.hospital ?


                                            <ClearFilterIcon />


                                            : <i class="far fa-filter"></i>
                                    }



                                </div>
                            {/* </Tooltip> */}
                            <Select
                                allowClear
                                value={filterData.hospital ? filterData.hospital : []}
                                onChange={handleHospitalFilter}
                                showSearch
                                style={{
                                    width: 200,
                                }}
                                placeholder="Filter by hospital name"
                                optionFilterProp="children"
                                filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                                filterSort={(optionA, optionB) =>
                                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                }
                            >

                                {
                                    hospitalsList && hospitalsList.length > 0 ?

                                        hospitalsList.map((each_hospitals) => {

                                            return (
                                                <Option value={each_hospitals.clinicname}>{each_hospitals.clinicname}</Option>
                                            )

                                        })
                                        : null
                                }

                            </Select>
                        </div> : null
                }



                <div className="filter-button" >

                    {/* <Tooltip placement="topLeft" title={filterData.date && "Clear date range filter"}> */}

                        <div className="icon" onClick={clearDatePicker}>

                            {
                                filterData.date ?

                                    <ClearFilterIcon />

                                    : <i class="far fa-filter"></i>
                            }


                        </div>
                    {/* </Tooltip> */}

                    <DatePicker value={filterData.date && moment(filterData?.date, "MMM-YYYY")} onChange={handleMonthFilter} className="date-picker" placeholder='Filter by month and year' format={monthFormat} picker="month" />


                </div>

            </div>



            <div className="todays_report_table_container">

                <table className='appoinment-table consolidated-table'>
                    <tr>
                        <th>Month - Year</th>
                        {
                            userType == CLINIC_ADMIN_USER ? null : <th>Hospital Name</th>
                        }
                        <th>Number of Appointments</th>
                        <th>International</th>
                        <th>Domestic</th>
                        <th>Number of Doctors</th>
                        <th>Hospital Gross Fees</th>
                        <th>Tax</th>
                        <th>Hospital Nett Fees</th>
                        <th>Testing Appointments</th>
                        <th>Refunds</th>
                        <th>Comments</th>
                        <th>Attachments</th>


                    </tr>

                    <tbody>

                        {
                            appointmentDetails ?
                                appointmentDetails.length > 0 ?

                                    appointmentDetails.map((element, key) => {





                                        return (

                                            <tr key={key}>
                                                <td>{element["Month-Year"]}</td>
                                                {
                                                    userType == CLINIC_ADMIN_USER ? null : <td>{element.Hospital}</td>
                                                }
                                                <td>{element.Number_Of_appointments}</td>
                                                <td>{element.International}</td>
                                                <td>{element.Domestic}</td>
                                                <td>{element.Number_Of_doctors}</td>
                                                <td>{element.Hospital_Gross_Fees}</td>
                                                <td>{element.TDS}</td>
                                                <td>{element.Hospital_Net_Fees}</td>
                                                <td>{element.TestingAppointments}</td>
                                                <td>{element.Refunds}</td>
                                                <td><textArea onBlur={(e) => { handleCommentChange(element.recordId, e) }} rows={1} >{element.Adjustments}</textArea></td>
                                                <td>
                                                    <ul className='consolidated-table-report'>

                                                        {
                                                            element.uploadedFile.split(',').length > 0 ?

                                                                element.uploadedFile.split(',').map((file, key) => {

                                                                    if (file && file !== "null") {
                                                                        return (

                                                                            <>
                                                                                <li>Rpt{key + 1}</li>
                                                                                {key + 1 == element.uploadedFile.split(',').lenhth ? "" : <li>|</li>}
                                                                            </>

                                                                        )

                                                                    }

                                                                })


                                                                : null
                                                        }




                                                        <label className="add-report" htmlFor={element.recordId}>
                                                            <AddIconV2 />
                                                            &nbsp;Add new
                                                            <input onChange={(e) => { handleFileOnChnage(element.recordId, e) }} id={element.recordId} style={{ display: "none" }} type="file" name="" />
                                                        </label>
                                                    </ul>
                                                </td>


                                            </tr>

                                        )





                                    })

                                    : <tr>
                                        <td colSpan={12}>
                                            <EmptyTableData isLoading={isLoading} />
                                        </td>
                                    </tr>
                                : null
                        }





                    </tbody>
                </table>

            </div>
            {
                consolidatedreportTotalPages && consolidatedreportTotalPages > 0 ?
                    <div className="pagination-container-mis-report">

                        &nbsp;
                        <Pagination onChange={handlePaginationChange} defaultCurrent={1} total={consolidatedreportTotalPages ? consolidatedreportTotalPages * 8 : 0} />

                    </div> : null
            }


        </div>
    )
}

export default ConsolidatedReport
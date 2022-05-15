import { Pagination } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FETCH_CONSOLIDATED_REPORTS, updateConsolodatedReportComment, updateMisReportAttachments } from '../../actions/InterbranchAdminActions'
import { AddIconV2 } from '../../assets/Logos/Icons'
import EmptyTableData from '../Common/EmptyTableData/EmptyTableData'
import './consolidatedreport.css'

function ConsolidatedReport() {


    let appointmentDetails = useSelector(state => state.interbranchAdmin.consolidatedreport)
    let consolidatedreportTotalPages = useSelector(state => state.interbranchAdmin.consolidatedreportTotalPages)

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
        dispatch(FETCH_CONSOLIDATED_REPORTS({ offset: e - 1 }))
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

                <table className='appoinment-table consolidated-table'>
                    <tr>
                        <th>Month - Year</th>
                        <th>Number of Appointments</th>
                        <th>International</th>
                        <th>Domestic</th>
                        <th>Number of Doctors</th>
                        <th>Hospital Gross Fees</th>
                        <th>Tax</th>
                        <th>Hospital Nett Fees</th>

                        <th>Comments</th>
                        <th>Attachments</th>


                    </tr>

                    <tbody>

                        {
                            appointmentDetails ?
                                appointmentDetails.length > 0 ?

                                    appointmentDetails.map((element, key) => {



                                        if (key <= 8) {

                                            return (

                                                <tr key={key}>
                                                    <td>{element["Month-Year"]}</td>
                                                    <td>{element.Number_Of_appointments}</td>
                                                    <td>{element.International}</td>
                                                    <td>{element.Domestic}</td>
                                                    <td>{element.Number_Of_doctors}</td>
                                                    <td>{element.Hospital_Gross_Fees}</td>
                                                    <td>{element.TDS}</td>
                                                    <td>{element.Hospital_Net_Fees}</td>
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

                                        }



                                    })

                                    : <tr>
                                        <td colSpan={12}>
                                            <EmptyTableData />
                                        </td>
                                    </tr>
                                : null
                        }





                    </tbody>
                </table>

            </div>
            <div className="pagination-container-mis-report">

                &nbsp;
                <Pagination onChange={handlePaginationChange} defaultCurrent={1} total={consolidatedreportTotalPages ? consolidatedreportTotalPages * 8 : 0} />

            </div>

        </div>
    )
}

export default ConsolidatedReport
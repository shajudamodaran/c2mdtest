import { Pagination } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FETCH_CONSOLIDATED_REPORTS, updateConsolodatedReportComment } from '../../actions/InterbranchAdminActions'
import { AddIconV2 } from '../../assets/Logos/Icons'
import './consolidatedreport.css'

function ConsolidatedReport() {


    let appointmentDetails = useSelector(state => state.interbranchAdmin.consolidatedreport)

    let dispatch=useDispatch()


    let handleCommentChange = (para_appointment_id,e) =>{

        dispatch(updateConsolodatedReportComment(para_appointment_id,e.target.value)).then((res)=>{

            if(res)
            {
                dispatch(FETCH_CONSOLIDATED_REPORTS())
            }

        })
       

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

                                   

                                        if (key<=8) {
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
                                                    <td><textArea onBlur={(e)=>{handleCommentChange(element.recordId,e)}} rows={1} /></td>
                                                    <td>
                                                        <ul className='consolidated-table-report'>
                                                            <li>Report 1 </li>
                                                            <li>|</li>
                                                            <li>Report 2</li>


                                                            <label className="add-report" htmlFor="consolidated1">
                                                                <AddIconV2 />
                                                                &nbsp;Add new
                                                                <input id='consolidated1' style={{ display: "none" }} type="file" name="" />
                                                            </label>
                                                        </ul>
                                                    </td>


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
                <Pagination defaultCurrent={10} total={appointmentDetails.length} />
            </div>

        </div>
    )
}

export default ConsolidatedReport
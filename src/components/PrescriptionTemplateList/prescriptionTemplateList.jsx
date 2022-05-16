import { Pagination, Popover, Tooltip } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DatePicker, Space } from 'antd';
import './prescriptiontemplatelist.css'
// import { FETCH_MIS_REPORT, GET_DASHBOARD_MORE } from '../../Redux/Slice/DetailedReportSlice';
import { INTERBRANCH_MODAL } from '../../actions/type';
import { FETCH_ADMIN_DASHBOARD_REPORT, FETCH_DASHBOARD_MORE } from '../../actions/InterbranchAdminActions';
import { separaetdateAndTime } from '../../Helpers/dateFunctions';
import { BackArrow, EditIcon, ViewIcon } from '../../assets/Logos/Icons';
import { getDepartments, getTemplateList } from '../../actions/PrescriptionFormActions';
import PrescriptionForm from '../PrescriptionForm/PriscriptionForm'
import { useHistory, useLocation } from 'react-router-dom';
import EmptyTableData from '../Common/EmptyTableData/EmptyTableData';


const { RangePicker } = DatePicker;

function TemplateList() {

    const dispatch = useDispatch()
    const dateRef = useRef(null)

    let dashboardData = useSelector(state => state.interbranchAdmin.dashboardTable)


    let [isOpen, setOpen] = useState(false)
    let [pagination, setPagination] = useState(0)








    //Version 2 ...................................................................................

    let [templateList, setTemplateList] = useState([])
    let [templateTotalPage, setTemplateTotalPage] = useState(0)
    let [isEditMode, setEditMode] = useState(false)

    let [searchKey, setSearchKey] = useState(null)
    let [filterData, setFilterData] = useState([])

    let history = useHistory()
    const location = useLocation();


    useEffect(() => {

        dispatch(getTemplateList({ offset: 0 })).then((res) => {

            setTemplateList(res.data)
            setTemplateTotalPage(res.total)
        })

    }, [])


    useEffect(() => {

        dispatch(getTemplateList({ offset: pagination })).then((res) => {

            setTemplateList(res.data)
            setTemplateTotalPage(res.total)
        })

    }, [isEditMode])


    let handlePaginationChange = (e, s) => {

        dispatch(getTemplateList({ offset: e - 1 })).then((res) => {

            setTemplateList(res.data)
            setTemplateTotalPage(res.total)
            setPagination(e - 1)

        })

        // dispatch(FETCH_ADMIN_DASHBOARD_REPORT({ offset: e - 1 }))

        // if (pagination < dashboardData.length) {
        //     setPagination(pagination + 10)
        // }

    }


    let handleEditOnClick = (rowData, element) => {

        setEditMode({ ...rowData, tempId: element.tempId, departmentName: element.assignedDepartments, doctors: element.Doctors, department: element.Departments[0] })
        //console.log(rowData);

    }

    let handleViewOnClick = (rowData, tempId) => {


        let url = `viewprescription/${rowData.basicinfo.templateId}`

        console.log(url);
        console.log(rowData);

        window.open(url, "_blank")
        // history.push({
        //     pathname:`viewprescription/:${rowData.basicinfo.templateName}`,
        //     state:{rowData,tempId}
        // })
    }

    let convertToArray = (data) => {

        if (data) {
            return data.split(",")
        }

    }

    let convertStringWithSpace = (data) => {

        let array = data.split(",")
        let newArray = []


        array.map((element) => {
            newArray.push(`${element}  `)
        })

        return newArray.toString()
    }

    useEffect(() => {
        setFilterData(templateList)
    }, [templateList])

    useEffect(() => {

        handleSearch(searchKey ? searchKey : null)

    }, [searchKey])

    let handleSearch = (value) => {

        let oldData = templateList

        if (value && value != "") {
            

            let filteredData = oldData.filter((element) => {

                if (element.tempId.includes(value.toString())) {
                    return true
                }

                // if (element.patientName.toLowerCase().includes(value.toString().toLowerCase())) {
                //     return true
                // }
                // if (element.doctorname.toLowerCase().includes(value.toString().toLowerCase())) {
                //     return true
                // }
            })

            setFilterData(filteredData)
        }
        else {
            console.log("No search key...");
            setFilterData(templateList ? templateList: [])
        }

    }



    const Content = ({ data }) => {


        return (
            <div>
                {
                    data.split(",")?.length > 0 ?

                        data.split(",").map((element, key) => {
                            return (
                                <>
                                    <span>{element}{key > data.split(",").length - 2 ? "" : ""} </span><br />
                                </>

                            )
                        })

                        : null
                }
            </div>
        )
    }


    console.log(templateList);

    return (
        <div className='appontment-history-container'>


            <div className="search-container">
                <input value={searchKey} onChange={(e) => { setSearchKey(e.target.value) }} type="text" name="" id="" placeholder='Search' />
            </div>

            {
                isEditMode ?

                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        width: "100%"
                    }}>
                        <div style={{ marginBottom: ".8rem", marginTop: ".8rem", cursor: "pointer" }} onClick={() => { setEditMode(null) }}>
                            <BackArrow size={14} />
                            <b style={{ marginLeft: ".5rem" }}>Back</b>
                        </div>

                        <PrescriptionForm
                            setEditMode={setEditMode}
                            preloadData={isEditMode} />
                    </div>


                    :
                    <div className="todays_report_table_container">

                        <table className='appoinment-table' >
                            <thead>
                                <tr>
                                    <th>Template ID</th>
                                    <th>Template Name</th>
                                    <th>Speciality</th>
                                    <th>Created On</th>
                                    <th>Last Updated On</th>
                                    {/* <th>Template Files</th> */}
                                    <th>Assigned To</th>
                                    {/* 
                        <th>Fees Paid</th>
                        <th>Consultation Status</th>
                        <th>Next Steps</th> */}
                                    <th><div className='center'>Edit</div></th>
                                    <th><div className='center'>View</div></th>

                                </tr>
                            </thead>
                            <tbody>

                                {
                                    templateList.length > 0 ?
                                        filterData.map((element, key) => {

                                            return (

                                                <tr>
                                                    <td>{element.tempId}</td>
                                                    <td>{element.tempName}</td>
                                                    <td>{element.Departments[0]?.Name}</td>
                                                    <td>{element.createdDate}</td>
                                                    <td>{element.updatedDate ? element.updatedDate : "No Data Available"}</td>
                                                    <td>{element.assignedDoctors ?
                                                        convertToArray(element.assignedDoctors).length > 1 ?

                                                            <Popover content={<Content data={element?.assignedDoctors} />} title={`Doctors list (${element?.assignedDoctors.split(",").length})`}>
                                                                {convertToArray(element.assignedDoctors)[0]}, +{convertToArray(element.assignedDoctors).length - 1}
                                                            </Popover>
                                                            : convertStringWithSpace(element.assignedDoctors)
                                                        : "No Data Available"}</td>
                                                    <td><div className="edit-btn center" onClick={(() => { handleEditOnClick(element.tempData, element) })}><EditIcon /></div></td>
                                                    {/* <td><div className="edit-btn" onClick={() => { handleViewOnClick(element.tempData, element.tempId) }}><ViewIcon /></div></td> */}
                                                    <td><a className='center' href={"viewprescription/" + element.tempId} target="_blank"><ViewIcon /></a></td>
                                                </tr>

                                            )

                                        })
                                        : <tr>
                                            <td colSpan={7}>
                                                <EmptyTableData />
                                            </td>
                                        </tr>
                                }




                                {/* {
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
                                : null */}
                                {/* } */}


                            </tbody>
                        </table>

                    </div>
            }


            <div className="pagination-container-mis-report">
                &nbsp;
                <Pagination onChange={handlePaginationChange} defaultCurrent={1} total={templateTotalPage ? templateTotalPage * 10 : 0} />
            </div>

        </div>
    )
}

export default TemplateList

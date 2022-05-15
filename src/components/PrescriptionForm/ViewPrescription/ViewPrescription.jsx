import { Popover } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { viewTemplate } from '../../../actions/PrescriptionFormActions'
import '../prescriptionform.css'

function ViewPrescription({ location }) {


    let [finalInvestigations, setFinalInvestigationData] = useState([])
    let [finalMedicinesdata, setFinalMedicinesdata] = useState([])

    let [template, setTemplate] = useState(null)

    const { prname } = useParams();
    let dispatch = useDispatch()

    useEffect(() => {

        loadTemplateDetails()

    }, [])


    let loadTemplateDetails = () => {

        dispatch(viewTemplate(prname)).then((res) => {

            if (res) {
                setFinalInvestigationData(res[0]?.tempData?.consultationDetails?.labTest)
                setFinalMedicinesdata(res[0]?.tempData?.consultationDetails?.medicine)
                setTemplate(res[0])
            }

        })



    }



    console.log(template);

    const Content = ({data}) => {

       
        return (
            <div>
               {
                   data.split(",")?.length>0?

                   data.split(",").map((element,key)=>{
                       return(
                           <span>{element}{key>data.split(",").length-2?"":","} </span>
                       )
                   })

                   :null
               }
            </div>
        )
    }


    return (
        <div className="prescription-form-main-container-view full-height">

            <div className='prescription-form-container-view full-height '>


                <div className="prescription-form-content-container" style={{ height: "100vh" }}>
                    <div
                        // onScroll={(e) => { setScrollAmount(e.target.scrollTop) }}
                        className="prescription-form-content">

                        <div className='form-heading'>
                            Prescription

                            <div style={{ display: "flex", flexDirection: "row" }}>
                                {/* <button className={`${preloadPrescription ? "add-investigation-btn" : "add-investigation-btn-disabled-v2"}`} style={{ marginRight: "1rem" }} onClick={() => { populatePreloadData() }}>LOAD LAST PRESCRIPTION</button> */}

                                {/* <MuiDropdown
                                    style={{ width: "150px" }}
                                    value={null}
                                    placeholder="Select template"
                                    id={0}
                                    data={["Temp1", "Temp2"]}
                                    name="unit"
                                    // onChange={updateMedicineTable}
                                    isMedTable
                                /> */}

                            </div>

                        </div>




                        <div className="container">

                        </div>

                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            width: "100%",
                            padding: "1rem",

                            position: "relative",
                            minWidth: "100%",
                            flexWrap: "wrap"
                        }}>



                            <div></div>



                            <ul className='report-list shadow-underline'>
                                <li>
                                    <div>
                                        <span className='form-small-tittle' >Choose Speciality <span style={{ color: "red" }}>*</span> </span>
                                        <span className='form-caption'></span>
                                    </div>

                                    <div className='form-light-background-big'>
                                        <input id="releventPoint"
                                            style={{ width: "290px" }}
                                            value={template?.assignedDepartments}
                                            className='form-input-text'
                                          
                                            readOnly
                                        />
                                    </div>


                                </li>

                                <li>
                                    <div>
                                        <span className='form-small-tittle' >Choose Doctor <span style={{ color: "red" }}>*</span></span>
                                        <span className='form-caption' ></span>
                                    </div>

                                    <Popover content={<Content data={template?.assignedDoctors}/>} title={`Doctors list (${template?.assignedDoctors.split(",").length})`}>
                                        <div className='form-light-background-big'>
                                            <input id="releventPoint"
                                                style={{ maxWidth: "290px", minWidth: "290px" }}
                                                value={template?.assignedDoctors.toString()}
                                                className='form-input-text'
                                              
                                                readOnly
                                            />
                                        </div>
                                    </Popover>


                                    {/* 
                                    <b>
                                        {
                                            template?.tempData?.basicinfo?.doctorIds?.map((element) => {

                                                return `${element}, `

                                            })
                                        }
                                    </b> */}




                                </li>

                                <li>
                                    <div>
                                        <span className='form-small-tittle' >Template Name <span style={{ color: "red" }}>*</span></span>
                                        <span className='form-caption' ></span>
                                    </div>

                                    <div className='form-light-background-big'>
                                        <input id="releventPoint"
                                            style={{ width: "290px" }}
                                            value={template?.tempData?.basicinfo?.templateName}
                                            className='form-input-text'
                                            
                                            readOnly
                                        />
                                    </div>





                                </li>





                            </ul>



                            <span className='form-heading-2' style={{ marginTop: "1rem" }}>Patient Reports</span>


                            <div className='report-list-container'>





                                <div style={{ padding: "0rem", display: "flex", flexDirection: "row", flexWrap: "wrap", marginTop: "1rem", width: "100%", justifyContent: "space-between" }}>

                                    <div style={{ display: "fex", flexDirection: "column" }}>
                                        <span className='form-small-tittle' >Chief Complaints</span>

                                        <div className='form-light-background-big'>
                                            <textarea
                                                id="chiefComplaints"
                                                value={template?.tempData?.consultationDetails?.chiefcomplaints}
                                                className='form-input-text-area'
                                                name="chiefcomplaints"
                                              
                                                rows={4}
                                                readOnly={true}
                                            />
                                        </div>
                                    </div>

                                    <div style={{ display: "fex", flexDirection: "column", marginLeft: "1rem" }}>
                                        <span className='form-small-tittle' >Relevant points from history</span>

                                        <div className='form-light-background-big'>
                                            <textarea id="releventPoint"
                                                value={template?.tempData?.consultationDetails?.notes}
                                                className='form-input-text-area'
                                                rows={4} 
                                                readOnly
                                            />
                                        </div>
                                    </div>

                                </div>


                                <div style={{ padding: ".0rem", display: "flex", flexDirection: "row", flexWrap: "wrap", marginTop: "1rem", width: "100%", justifyContent: "space-between" }}>

                                    <div style={{ display: "fex", flexDirection: "column" }}>
                                        <span className='form-small-tittle' >Diagnosis or Provisional Diagnosis</span>

                                        <div className='form-light-background-big'>
                                            <textarea
                                                value={template?.tempData?.consultationDetails?.diagnosis}
                                                id="diagnosis" className='form-input-text-area' rows={4} onChange={(e) => {
                                                    // setPrescriptioninfo({ ...presciptioninfor, diagnosis: e.target.value })

                                                }} readOnly />
                                        </div>
                                    </div>

                                    <div style={{ display: "fex", flexDirection: "column", marginLeft: "1rem" }}>
                                        <span className='form-small-tittle' >Examination/Lab Findings</span>

                                        <div className='form-light-background-big'>
                                            <textarea id="examination"
                                                value={template?.tempData?.consultationDetails?.investigation}
                                                className='form-input-text-area' rows={4} onChange={(e) => {
                                                    // setPrescriptioninfo({ ...presciptioninfor, examinationlabfindings: e.target.value })


                                                }} readOnly />
                                        </div>
                                    </div>

                                </div>

                            </div>


                            <div className="separator"></div>

                            {/* <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "99%", }}>
                                <span className='form-heading-2' style={{ marginTop: "1rem" }}>Investigations</span>

                                {
                                    isReadyToAddInvestigation ?


                                        <button className={isReadyToAddInvestigation ? "add-investigation-btn" : "add-investigation-btn-disabled"} onClick={() => { addInvestigation() }}>
                                            <AddIcon_Prescription /> {getAddInvestigationButtonText(investigationData.length)}
                                        </button>


                                        :

                                        <Popover trigger="click" content={isReadyToAddInvestigation ? null : noInvestigationPopOver}>

                                            <button className={isReadyToAddInvestigation ? "add-investigation-btn" : "add-investigation-btn-disabled"} onClick={() => { addInvestigation() }}>
                                                <AddIcon_Prescription /> {getAddInvestigationButtonText(investigationData.length)}
                                            </button>

                                        </Popover>

                                }

                            </div> */}




                            {finalInvestigations.length > 0 ?


                                <table className='investigations-table'>

                                    <tr>
                                        <th><div>#</div></th>
                                        <th><div>Investigation Name(s)</div></th>
                                        <th colSpan="2"><div>Comments/Instructions</div></th>

                                    </tr>


                                    {


                                        finalInvestigations.map((obj, key) => {




                                            return (

                                                <tr>
                                                    <td>{key + 1}</td>
                                                    <td>{obj.testType}</td>
                                                    <td>{obj.testComment ? obj.testComment : ""}</td>


                                                </tr>

                                            )
                                        })


                                    }

                                </table>

                                :

                                <div className="no-table-data">
                                    ( No Investigations found )
                                </div>

                            }

                            <div className="separator"></div>


                            {
                                finalMedicinesdata.length > 0 ?

                                    <div className='medicine-table-container'>



                                        <table
                                            className='medicine-table'>

                                            <tr>
                                                <th><div>#</div></th>
                                                {/* <th><div>Medicine Type</div></th> */}
                                                <th><div>Name of Medicine</div></th>
                                                <th><div>When to have</div></th>
                                                <th><div>Frequency</div></th>
                                                <th><div>Quantity</div></th>
                                                <th><div>Unit</div></th>
                                                <th><div>Starting Date</div></th>
                                                <th><div>No.of Days</div></th>
                                                <th colspan="2"><div>Instructions</div></th>

                                            </tr>



                                            {


                                                finalMedicinesdata.map((obj, key) => {

                                                    return (

                                                        <tr>
                                                            <td>{key + 1}</td>
                                                            {/* <td>

                                                                DRUGS

                                                            </td> */}
                                                            <td>{obj.name}</td>
                                                            <td>{obj.medtakeMethod}</td>
                                                            <td>{obj.displayTablet}</td>
                                                            <td>{obj.quandity} </td>
                                                            <td>{obj.measurement}</td>
                                                            <td>{obj.StartVal}</td>
                                                            <td>{obj.totalDays}</td>
                                                            <td>{obj.mediComment}</td>
                                                        </tr>

                                                    )
                                                })




                                            }





                                        </table>

                                    </div>

                                    : <div className="no-table-data">
                                        ( No Medicines found )
                                    </div>
                            }









                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "99%", }}>

                                <span className='form-heading-2' style={{ marginTop: "1rem" }}>Additional Instructions</span>

                            </div>

                            <div className='form-light-background' style={{ width: "45%" }}>
                                <textarea
                                    value={template?.tempData?.consultationDetails?.instruction}
                                    className='form-input-text-area' rows={3}  style={{ width: "100%" }} readOnly />
                            </div>



                            {/* <input className='focusPoint' ref={AddInstructionElement} type="text" name="" id="" /> */}






                        </div>
                    </div>


                </div>


            </div>

        </div >
    )
}

export default ViewPrescription
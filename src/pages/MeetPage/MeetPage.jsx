import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { AddIcon, ArrowLeft, BodyChartIcon, CallOptions, ChatIcon2, DscIcon, EndCallIcon, InviteIcon, InviteIcon2, MuteIcon, NoDataIcon, NotesIcon, NoVedioIcon, PatientInfoIcon, RecordIcon, RightArrowIcon, ScreenCastIcon, SnapIcon, TestIcon, UploadIcon, VolumeIcon } from '../../assets/Logos/Icons';
import './meetpage.css'
import Draggable from 'react-draggable'; // The default
import { Select } from 'antd';
import { Popover, Button,Upload } from 'antd';
const { OTSession, OTPublisher, OTStreams, OTSubscriber } = require('opentok-react');





var apiKey = '47372891';
var sessionId = '2_MX40NzM3Mjg5MX5-MTYzNjM2MDg5NzE3N35BTGQ3bFJEMlM0ckk4YU92OVVqUTN5Njd-fg';
var token = 'T1==cGFydG5lcl9pZD00NzM3Mjg5MSZzaWc9ODk2YzlmN2YyMDU4NGMxN2MzNzcyOWQ0OGZjZDFiNjFlMjczNDEyYTpzZXNzaW9uX2lkPTJfTVg0ME56TTNNamc1TVg1LU1UWXpOak0yTURnNU56RTNOMzVCVEdRM2JGSkVNbE0wY2trNFlVOTJPVlZxVVRONU5qZC1mZyZjcmVhdGVfdGltZT0xNjM2MzYxMzIzJm5vbmNlPTAuODYwNDE4MDMzNjAzMTIyJnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE2MzYzNjQ5MjEmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=';



let AppintmentDetails = ({ setSuperSubMenu }) => {

    return (
        <div className="super-sub-menu-container">
            <div className="d-flex flex-row justify-content-start align-items-center back-button-supersubmenu">

                <div style={{ cursor: "pointer" }} onClick={() => { setSuperSubMenu(null) }}>
                    <ArrowLeft /> Appoinment Details
                </div>

            </div>

            <div className="white-container mt-3">

                <div className="d-flex flex-row align-items-center">
                    <span style={{
                        fontWeight: 500
                    }}> Hospital ID - </span>
                    <span></span>

                </div>

                <div className="d-flex flex-row align-items-center mt-1">
                    <span style={{
                        fontWeight: 500
                    }}>Type of consultation - </span>
                    <span> First time consultation</span>

                </div>

            </div>

            <div className="white-container">
                <div className="white-container-heading">
                    Notes to Doctor
                </div>
            </div>


            <div className="white-container">
                <div className="white-container-heading">
                    Reports Uploaded
                </div>

                <Upload {...props} className="white-container-button p-0" showUploadList={false}>
                <button className="white-container-button"> <UploadIcon /> Upload a new file</button>
                </Upload>
            </div>
        </div>
    )
}

let AppintmentHistory = ({ setSuperSubMenu }) => {

    return (
        <div className="super-sub-menu-container">
            <div className="d-flex flex-row justify-content-start align-items-center back-button-supersubmenu">

                <div style={{ cursor: "pointer" }} onClick={() => { setSuperSubMenu(null) }}>
                    <ArrowLeft /> Appoinment History
                </div>

            </div>

            <div className="white-container mt-3">

                <div className="d-flex flex-row align-items-center" style={{ fontWeight: 500 }}>
                    <VolumeIcon />
                    29 Nov 2021 12:00PM
                </div>


            </div>

            <div className="white-container ">

                <div className="d-flex flex-row align-items-center" style={{ fontWeight: 500 }}>
                    <VolumeIcon />
                    29 Nov 2021 12:00PM
                </div>


            </div>

            <div className="white-container ">

                <div className="d-flex flex-row align-items-center" style={{ fontWeight: 500 }}>
                    <VolumeIcon />
                    29 Nov 2021 12:00PM
                </div>


            </div>

            <div className="white-container ">

                <div className="d-flex flex-row align-items-center" style={{ fontWeight: 500 }}>
                    <VolumeIcon />
                    29 Nov 2021 12:00PM
                </div>


            </div>


        </div>
    )
}

let LifeStyle = ({ setSuperSubMenu }) => {

    const { Option } = Select;

    return (
        <div className="super-sub-menu-container">
            <div className="d-flex flex-row justify-content-start align-items-center back-button-supersubmenu">

                <div style={{ cursor: "pointer" }} onClick={() => { setSuperSubMenu(null) }}>
                    <ArrowLeft /> Lifestyle
                </div>

            </div>

            <div className="white-container mt-3">

                <div className="lifestyle-item">
                    <span>High Blood Pressure</span>
                    <div>
                        <Select style={{width:  90, fontSize: "13px" }}>
                            <Option value={true}>Yes</Option>
                            <Option value={false}>No</Option>

                        </Select>

                    </div>
                </div>

                <div className="lifestyle-item">
                    <span>Consume Alcohol</span>
                    <div>
                        <Select style={{width:  90, fontSize: "13px" }}>
                            <Option value={true}>Yes</Option>
                            <Option value={false}>No</Option>

                        </Select>

                    </div>
                </div>

                <div className="lifestyle-item">
                    <span>Smoke/Use Tobacco</span>
                    <div>
                        <Select style={{width:  90, fontSize: "13px" }}>
                            <Option value={true}>Yes</Option>
                            <Option value={false}>No</Option>

                        </Select>

                    </div>
                </div>

                <div className="lifestyle-item">
                    <span>Exercise</span>
                    <div>
                        <Select style={{width:  90, fontSize: "13px" }}>
                            <Option value={true}>Yes</Option>
                            <Option value={false}>No</Option>

                        </Select>

                    </div>
                </div>

                <div className="lifestyle-item">
                    <span>Take Medication</span>
                    <div>
                        <Select style={{width:  90, fontSize: "13px" }}>
                            <Option value={true}>Yes</Option>
                            <Option value={false}>No</Option>

                        </Select>

                    </div>
                </div>

                <div className="lifestyle-item">
                    <span>Get 8 hours of sleep</span>
                    <div>
                        <Select style={{width:  90, fontSize: "13px" }}>
                            <Option value={true}>Yes</Option>
                            <Option value={false}>No</Option>

                        </Select>

                    </div>
                </div>

                <div className="lifestyle-item">
                    <span>Have Chronic condition</span>
                    <div>
                        <Select style={{width:  90, fontSize: "13px" }}>
                            <Option value={true}>Yes</Option>
                            <Option value={false}>No</Option>

                        </Select>

                    </div>
                </div>

                <div className="lifestyle-item">
                    <span>Overseas travel last 2 months</span>
                    <div>
                        <Select style={{width:  90, fontSize: "13px" }}>
                            <Option value={true}>Yes</Option>
                            <Option value={false}>No</Option>

                        </Select>

                    </div>
                </div>

            </div>


        </div>
    )
}

let CurrentMedication = ({ setSuperSubMenu }) => {

    const { Option } = Select;

    return (
        <div className="super-sub-menu-container">
            <div className="d-flex flex-row justify-content-start align-items-center back-button-supersubmenu">

                <div style={{ cursor: "pointer" }} onClick={() => { setSuperSubMenu(null) }}>
                    <ArrowLeft /> Current Medication
                </div>

            </div>

            <div className="white-container mt-3">

                <div className="d-flex flex-column align-items-center mt-0 ">

                    <div className="medicines-list">
                        <NoDataIcon />
                        <span className="title">No Medication added</span>
                        <span className="caption">Click button to add Medication</span>
                    </div>

                    <Upload {...props} className="p-0 d-flex flex-row align-items-center" showUploadList={false}>
                    <button className="medicines-list-add-btn"><AddIcon /> Add Medication</button>
                    </Upload>

                </div>

            </div>


        </div>
    )
}


let Alergies = ({ setSuperSubMenu }) => {

    const { Option } = Select;

    return (
        <div className="super-sub-menu-container">
            <div className="d-flex flex-row justify-content-start align-items-center back-button-supersubmenu">

                <div style={{ cursor: "pointer" }} onClick={() => { setSuperSubMenu(null) }}>
                    <ArrowLeft /> Allergies
                </div>

            </div>

            <div className="white-container mt-3">

                <div className="d-flex flex-column align-items-center mt-0 ">

                    <div className="medicines-list">
                        <NoDataIcon />
                        <span className="title">No items added</span>
                        <span className="caption">Click button to add Allergies</span>
                    </div>

                    <Upload {...props} className="p-0 d-flex flex-row align-items-center" showUploadList={false}>
                    <button className="medicines-list-add-btn"><AddIcon /> Add Allergies</button>
                    </Upload>

                </div>

            </div>


        </div>
    )
}

let PreExistingCondition = ({ setSuperSubMenu }) => {

    const { Option } = Select;

    return (
        <div className="super-sub-menu-container">
            <div className="d-flex flex-row justify-content-start align-items-center back-button-supersubmenu">

                <div style={{ cursor: "pointer" }} onClick={() => { setSuperSubMenu(null) }}>
                    <ArrowLeft /> Pre Existing Condition
                </div>

            </div>

            <div className="white-container mt-3">

                <table className="pre-existing-table">
                    <tr>
                        <th>Condition</th>
                        <th>Status</th>
                        <th>In family</th>
                    </tr>

                    <tr>
                       <td>Anemia</td>
                       <td>
                       <Select style={{width:  90, fontSize: "13px" }} placeholder="Status">
                            <Option value={true}>Yes</Option>
                            <Option value={false}>No</Option>

                        </Select>
                       </td>

                       <td>
                       <Select style={{width:  90, fontSize: "13px" }} placeholder="In Family">
                            <Option value={true}>Yes</Option>
                            <Option value={false}>No</Option>

                        </Select>
                       </td>
                    </tr>

                    <tr>
                       <td>Asthma</td>
                       <td>
                       <Select style={{width:  90, fontSize: "13px" }} placeholder="Status">
                            <Option value={true}>Yes</Option>
                            <Option value={false}>No</Option>

                        </Select>
                       </td>

                       <td>
                       <Select style={{width:  90, fontSize: "13px" }} placeholder="In Family">
                            <Option value={true}>Yes</Option>
                            <Option value={false}>No</Option>

                        </Select>
                       </td>
                    </tr>

                    <tr>
                       <td>Diabetes</td>
                       <td>
                       <Select style={{width:  90, fontSize: "13px" }} placeholder="Status">
                            <Option value={true}>Yes</Option>
                            <Option value={false}>No</Option>

                        </Select>
                       </td>

                       <td>
                       <Select style={{width:  90, fontSize: "13px" }} placeholder="In Family">
                            <Option value={true}>Yes</Option>
                            <Option value={false}>No</Option>

                        </Select>
                       </td>
                    </tr>

                    <tr>
                       <td>Cholestrol</td>
                       <td>
                       <Select style={{width:  90, fontSize: "13px" }} placeholder="Status">
                            <Option value={true}>Yes</Option>
                            <Option value={false}>No</Option>

                        </Select>
                       </td>

                       <td>
                       <Select style={{width:  90, fontSize: "13px" }} placeholder="In Family">
                            <Option value={true}>Yes</Option>
                            <Option value={false}>No</Option>

                        </Select>
                       </td>
                    </tr>


                    <tr>
                       <td>Thyroid Diseas</td>
                       <td>
                       <Select style={{width:  90, fontSize: "13px" }} placeholder="Status">
                            <Option value={true}>Yes</Option>
                            <Option value={false}>No</Option>

                        </Select>
                       </td>

                       <td>
                       <Select style={{width:  90, fontSize: "13px" }} placeholder="In Family">
                            <Option value={true}>Yes</Option>
                            <Option value={false}>No</Option>

                        </Select>
                       </td>
                    </tr>

                    <tr>
                       <td>Heart Diseas</td>
                       <td>
                       <Select style={{width:  90, fontSize: "13px" }} placeholder="Status">
                            <Option value={true}>Yes</Option>
                            <Option value={false}>No</Option>

                        </Select>
                       </td>

                       <td>
                       <Select style={{width:  90, fontSize: "13px" }} placeholder="In Family">
                            <Option value={true}>Yes</Option>
                            <Option value={false}>No</Option>

                        </Select>
                       </td>
                    </tr>

                    <tr>
                       <td>Stroke</td>
                       <td>
                       <Select style={{width:  90, fontSize: "13px" }} placeholder="Status">
                            <Option value={true}>Yes</Option>
                            <Option value={false}>No</Option>

                        </Select>
                       </td>

                       <td>
                       <Select style={{width:  90, fontSize: "13px" }} placeholder="In Family">
                            <Option value={true}>Yes</Option>
                            <Option value={false}>No</Option>

                        </Select>
                       </td>
                    </tr>

                    <tr>
                       <td>Galucoma</td>
                       <td>
                       <Select style={{width:  90, fontSize: "13px" }} placeholder="Status">
                            <Option value={true}>Yes</Option>
                            <Option value={false}>No</Option>

                        </Select>
                       </td>

                       <td>
                       <Select style={{width:  90, fontSize: "13px" }} placeholder="In Family">
                            <Option value={true}>Yes</Option>
                            <Option value={false}>No</Option>

                        </Select>
                       </td>
                    </tr>
                </table>

            </div>


        </div>
    )
}



let Symptomes = ({ setSuperSubMenu }) => {

    const { Option } = Select;

    return (
        <div className="super-sub-menu-container">
            <div className="d-flex flex-row justify-content-start align-items-center back-button-supersubmenu">

                <div style={{ cursor: "pointer" }} onClick={() => { setSuperSubMenu(null) }}>
                    <ArrowLeft /> Symptome
                </div>

            </div>


            <Upload {...props} className="p-0 d-flex flex-row align-items-center" showUploadList={false}>
            <button className="medicines-list-add-btn"><AddIcon /> Add Symptom</button>
            </Upload>


        </div>
    )
}


let MedicalCondition = ({ setSuperSubMenu }) => {

    const { Option } = Select;

    return (
        <div className="super-sub-menu-container">
            <div className="d-flex flex-row justify-content-start align-items-center back-button-supersubmenu">

                <div style={{ cursor: "pointer" }} onClick={() => { setSuperSubMenu(null) }}>
                    <ArrowLeft /> Medical Condition
                </div>

            </div>

            <Select style={{width: "100%", fontSize: "13px",marginTop:"1rem" }} placeholder="Select Condition to add">
                            <Option value={true}>Yes</Option>
                            <Option value={false}>No</Option>

                        </Select>

            <div className="white-container mt-3">

                <div className="d-flex flex-column align-items-center mt-0 ">

                    <div className="medicines-list">
                        <NoDataIcon />
                        <span className="title">No Items added</span>
                        <span className="caption">Select a condition to add</span>
                    </div>



                </div>

            </div>


        </div>
    )
}

let Surgery = ({ setSuperSubMenu }) => {

    const { Option } = Select;

    return (
        <div className="super-sub-menu-container">
            <div className="d-flex flex-row justify-content-start align-items-center back-button-supersubmenu">

                <div style={{ cursor: "pointer" }} onClick={() => { setSuperSubMenu(null) }}>
                    <ArrowLeft /> Surgery Details
                </div>

            </div>

            <Upload {...props} className="p-0 d-flex flex-row align-items-center" showUploadList={false}>
            <button className="medicines-list-add-btn"><AddIcon /> Add Surgery</button>
            </Upload>


        </div>
    )
}


//popover content
const content = (
    <div>
      <p>Screen Share</p>
      <p>Record Vedio</p>
      <p>Invite</p>
    </div>
  );

// file on changae, we neer to write separate function for separate uploader
  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info)
    {
    //   if (info.file.status !== 'uploading')
    //   {
    //     console.log(info.file, info.fileList);
    //   }
    //   if (info.file.status === 'done')
    //   {
    //     message.success(`${info.file.name} file uploaded successfully`);
    //   } else if (info.file.status === 'error') {
    //     message.error(`${info.file.name} file upload failed.`);
    //   }

    console.log(info);
    },
  };





function MeetPage() {

    let leftMenus = ["patientInfo", "Prescription", "Tests", "Notes"]

    let history = useHistory()
    let [activeLeft, setActiveLeft] = useState({ status: false, page: null })

    let [superSubMenu, setSuperSubMenu] = useState(null)

    let [activeButton, setActiveButton] = useState(0)


    let leftOptions = {
        patientInfo: [
            {
                name: "Appoinment Details",
                page: <AppintmentDetails setSuperSubMenu={setSuperSubMenu} />
            },
            {
                name: "Appoinment History",
                page: <AppintmentHistory setSuperSubMenu={setSuperSubMenu} />
            },
            {
                name: "Lifestyle",
                page: <LifeStyle setSuperSubMenu={setSuperSubMenu} />
            },
            {
                name: "Current Medication",
                page: <CurrentMedication setSuperSubMenu={setSuperSubMenu} />
            },
            {
                name: "Allergies",
                page: <Alergies setSuperSubMenu={setSuperSubMenu} />
            },
            {
                name: "Pre-Existing Conditions",
                page: <PreExistingCondition setSuperSubMenu={setSuperSubMenu} />
            },
            {
                name: "Symptoms",
                page: <Symptomes setSuperSubMenu={setSuperSubMenu} />
            },
            {
                name: "Medical Conditions",
                page: <MedicalCondition setSuperSubMenu={setSuperSubMenu} />
            },
            {
                name: "Surgery Details",
                page: <Surgery setSuperSubMenu={setSuperSubMenu} />
            },

        ]
    }


    let handleSetLeft = (para_id) => {


        setSuperSubMenu(null)

        setActiveLeft({
            status: activeLeft.page === para_id ? false : true,
            page: para_id
        })

    }


    console.log(activeLeft);


    return (


        <div className="meet-container" >


            <div className="vedio-container">


                <div className="vedio-container-left">

                    <div className="streamer">
                        <OTSession apiKey={apiKey} sessionId={sessionId} token={token}>
                            <OTPublisher />
                            <OTStreams>
                                <OTSubscriber />
                            </OTStreams>
                        </OTSession>
                    </div>


                    <div className="top-menu-container">
                        <div className="top-menu">

                            <ul>
                                <li>
                                    <span className="top-menu-headding">Patient</span>
                                    <span className="top-menu-caption">John David CJ</span>
                                </li>
                                <li>
                                    <span className="top-menu-headding">Reason for visit</span>
                                    <span className="top-menu-caption">General Consultation</span>
                                </li>

                                <li>
                                    <span className="top-menu-headding">Phone: </span>
                                    <span className="top-menu-caption">+91 9876543210</span>
                                </li>

                                <li>
                                    <span className="top-menu-headding">Emergency contact number: </span>
                                    <span className="top-menu-caption">Not Available</span>
                                </li>
                            </ul>

                        </div>
                    </div>

                    <div className="buttons-container">

                        <button><EndCallIcon /></button>
                        <button><NoVedioIcon /></button>
                        <button><MuteIcon /></button>
                        <Popover content={content}  trigger="click"><button><CallOptions /></button></Popover>

                    </div>

                    <div className="user-card">

                        <OTSession apiKey={apiKey} sessionId={sessionId} token={token}>
                            <OTPublisher />
                            <OTStreams>
                                <OTSubscriber />
                            </OTStreams>
                        </OTSession>

                    </div>


                    <div className="left-menu-container">
                        <div className="left-menu">

                            <ul>
                                <li className={`${activeLeft.page === leftMenus[0] && activeLeft.status ? "left-menu-active" : null}`} onClick={() => { handleSetLeft(leftMenus[0]) }}>
                                    <PatientInfoIcon />
                                    PATIENT INFO
                                </li>
                                <li className={`${activeLeft.page === leftMenus[1] && activeLeft.status ? "left-menu-active" : null}`} onClick={() => { handleSetLeft(leftMenus[1]) }}>
                                    <DscIcon />
                                    PRESCRIPTION
                                </li>
                                <li className={`${activeLeft.page === leftMenus[2] && activeLeft.status ? "left-menu-active" : null} `} onClick={() => { handleSetLeft(leftMenus[2]) }}>
                                    <TestIcon />
                                    TESTS
                                </li>
                                <li className={`${activeLeft.page === leftMenus[3] && activeLeft.status ? "left-menu-active" : null}`} onClick={() => { handleSetLeft(leftMenus[3]) }}>
                                    <NotesIcon />
                                    NOTES
                                </li>

                            </ul>




                        </div>
                    </div>




                </div>

                <div className="vedio-container-right">
                    <div className="left-options-container">

                        <ul className={leftOptions[activeLeft.page] || activeLeft.status ? "left-sub-menu" : "left-sub-menu-hidden"}>

                            {
                                activeLeft.page === leftMenus[0] && activeLeft.status && superSubMenu == null ?

                                    leftOptions[activeLeft.page] ?

                                        leftOptions[activeLeft.page].map((obj, key) => {
                                            return (
                                                <li onClick={() => { setSuperSubMenu(obj.page) }}><RightArrowIcon /> {obj.name} </li>
                                            )
                                        })



                                        : null

                                    : activeLeft.page === leftMenus[1] && activeLeft.status && superSubMenu == null ?


                                        <div className="d-flex flex-column align-items-center pe-2">

                                            <div className="medicines-list">
                                                <NoDataIcon />
                                                <span className="title">No Medicines added</span>
                                                <span className="caption">Click button to add medicine</span>
                                            </div>

                                            <Upload {...props} className="p-0 d-flex flex-row align-items-center" showUploadList={false}>
                                            <button className="medicines-list-add-btn"><AddIcon /> Add Prescrition</button>
                                            </Upload>

                                        </div>
                                        : activeLeft.page === leftMenus[2] && activeLeft.status && superSubMenu == null ?


                                            <div className="d-flex flex-column align-items-center me-2 ">

                                                <div className="medicines-list">
                                                    <NoDataIcon />
                                                    <span className="title">No Medicines added</span>
                                                    <span className="caption">Click button to add medicine</span>
                                                </div>

                                                <Upload {...props} className="p-0 d-flex flex-row align-items-center" showUploadList={false}>
                                                <button className="medicines-list-add-btn"><AddIcon /> Add Test</button>
                                                </Upload>

                                            </div>

                                            : activeLeft.page === leftMenus[3] && activeLeft.status && superSubMenu == null ?


                                                <div className="d-flex flex-column align-items-center me-2 ">

                                                    <div className="medicines-list">
                                                        <div className="button-group-container">

                                                            <button className={activeButton === 0 ? "active-btn" : "inactive-btn"} onClick={() => { setActiveButton(0) }}>Type</button>
                                                            <button className={activeButton === 1 ? "active-btn2" : "inactive-btn"} onClick={() => { setActiveButton(1) }}>Select Tag</button>
                                                        </div>

                                                        <textarea rows="5" className="complaints-box" />
                                                    </div>



                                                </div>

                                                : superSubMenu
                            }

                        </ul>

                    </div>
                </div>


            </div>

        </div>

    )
}



export default MeetPage



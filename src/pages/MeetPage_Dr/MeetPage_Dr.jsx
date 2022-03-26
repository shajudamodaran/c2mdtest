import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { AddIcon, ArrowLeft, BodyChartIcon, CallOptions, ChatIcon2, CloseIcon, CloseIconRound, DescriptionIcon_V2, DscIcon, EndCallIcon, IframeIcon, InviteIcon, InviteIcon2, MuteIcon, NoDataIcon, NotesIcon, NotesIcon_V2, NoVedioIcon, PatientInfoIcon, PatientInfoIcon_V2, QuestIcon, RecordIcon, RightArrowIcon, RightArrowIconOriginal, ScreenCastIcon, SnapIcon, TestIcon, TestIcon_V2, UploadIcon, VolumeIcon } from '../../assets/Logos/Icons';
import './meetpage.css'
import Draggable from 'react-draggable'; // The default
import { Select, Tooltip } from 'antd';
import { Popover, Button, Upload } from 'antd';
import MedicationCard from '../../components/MedicationCard/MedicationCard';
import AllergiesCard from '../../components/AllergiesCard/AllergiesCard';
import PrescribeMedicine from '../../components/PrescribeMedicine/PrescribeMedicine';
import './meetfooter.css'
import { fetch_clientDetails } from '../../actions/MicrositeAction';
import { ClipLoader, PuffLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import ConsultationModal from '../../components/Modals/ConsultationModal';
import loginedApi from '../../apis';
const { OTSession, OTPublisher, OTStreams, OTSubscriber } = require('opentok-react');


var apiKey_dummy = '47372891';
var sessionId_dummy = '2_MX40NzM3Mjg5MX5-MTYzNjM2MDg5NzE3N35BTGQ3bFJEMlM0ckk4YU92OVVqUTN5Njd-fg';
var token_dummy = 'T1==cGFydG5lcl9pZD00NzM3Mjg5MSZzaWc9ODk2YzlmN2YyMDU4NGMxN2MzNzcyOWQ0OGZjZDFiNjFlMjczNDEyYTpzZXNzaW9uX2lkPTJfTVg0ME56TTNNamc1TVg1LU1UWXpOak0yTURnNU56RTNOMzVCVEdRM2JGSkVNbE0wY2trNFlVOTJPVlZxVVRONU5qZC1mZyZjcmVhdGVfdGltZT0xNjM2MzYxMzIzJm5vbmNlPTAuODYwNDE4MDMzNjAzMTIyJnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE2MzYzNjQ5MjEmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=';

let leftMenus = ["patientInfo", "Prescription", "Tests", "Notes", "TestList"]


let AppintmentDetails = ({ setSuperSubMenu }) => {

    return (
        <div className="super-sub-menu-container">
            <div className="d-flex flex-row justify-content-start align-items-center back-button-supersubmenu">

                <div style={{ cursor: "pointer", fontWeight: "bold" }} onClick={() => { setSuperSubMenu(null) }}>
                    <ArrowLeft /> Appointment Details
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

                <div style={{ cursor: "pointer", fontWeight: "bold" }} onClick={() => { setSuperSubMenu(null) }}>
                    <ArrowLeft /> Appointment History
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

                <div style={{ cursor: "pointer", fontWeight: "bold" }} onClick={() => { setSuperSubMenu(null) }}>
                    <ArrowLeft /> Lifestyle
                </div>

            </div>

            <div className="white-container mt-3">

                <div className="lifestyle-item">
                    <span>High Blood Pressure</span>
                    <div>
                        <Select style={{ width: 90, fontSize: "13px" }}>
                            <Option value={true}>Yes</Option>
                            <Option value={false}>No</Option>

                        </Select>

                    </div>
                </div>

                <div className="lifestyle-item">
                    <span>Consume Alcohol</span>
                    <div>
                        <Select style={{ width: 90, fontSize: "13px" }}>
                            <Option value={true}>Yes</Option>
                            <Option value={false}>No</Option>

                        </Select>

                    </div>
                </div>

                <div className="lifestyle-item">
                    <span>Smoke/Use Tobacco</span>
                    <div>
                        <Select style={{ width: 90, fontSize: "13px" }}>
                            <Option value={true}>Yes</Option>
                            <Option value={false}>No</Option>

                        </Select>

                    </div>
                </div>

                <div className="lifestyle-item">
                    <span>Exercise</span>
                    <div>
                        <Select style={{ width: 90, fontSize: "13px" }}>
                            <Option value={true}>Yes</Option>
                            <Option value={false}>No</Option>

                        </Select>

                    </div>
                </div>

                <div className="lifestyle-item">
                    <span>Take Medication</span>
                    <div>
                        <Select style={{ width: 90, fontSize: "13px" }}>
                            <Option value={true}>Yes</Option>
                            <Option value={false}>No</Option>

                        </Select>

                    </div>
                </div>

                <div className="lifestyle-item">
                    <span>Get 8 hours of sleep</span>
                    <div>
                        <Select style={{ width: 90, fontSize: "13px" }}>
                            <Option value={true}>Yes</Option>
                            <Option value={false}>No</Option>

                        </Select>

                    </div>
                </div>

                <div className="lifestyle-item">
                    <span>Have Chronic condition</span>
                    <div>
                        <Select style={{ width: 90, fontSize: "13px" }}>
                            <Option value={true}>Yes</Option>
                            <Option value={false}>No</Option>

                        </Select>

                    </div>
                </div>

                <div className="lifestyle-item">
                    <span>Overseas travel last 2 months</span>
                    <div>
                        <Select style={{ width: 90, fontSize: "13px" }}>
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

                <div style={{ cursor: "pointer", fontWeight: "bold" }} onClick={() => { setSuperSubMenu(null) }}>
                    <ArrowLeft /> Current Medication
                </div>

            </div>

            {/* <div className="white-container mt-3">

                <div className="d-flex flex-column align-items-center mt-0 w-100 p-0">

                    <div className="medicines-list">
                        <NoDataIcon />
                        <span className="title">No Medication added</span>
                        <span className="caption">Click button to add Medication</span>
                    </div>

                </div>

            </div>

            <button className="medicines-list-add-btn w-100">
                <Upload {...props} className="p-0 d-flex flex-row align-items-center justify-content-center w-100" showUploadList={false}>
                    <div className="d-flex text-white flex-row align-items-center justify-content-center">
                        <AddIcon /> Add Medication
                    </div>
                </Upload>
            </button> */}

            <MedicationCard />

            <MedicationCard />





        </div>
    )
}


let Alergies = ({ setSuperSubMenu }) => {

    const { Option } = Select;

    return (
        <div className="super-sub-menu-container">
            <div className="d-flex flex-row justify-content-start align-items-center back-button-supersubmenu">

                <div style={{ cursor: "pointer", fontWeight: "bold" }} onClick={() => { setSuperSubMenu(null) }}>
                    <ArrowLeft /> Allergies
                </div>

            </div>

            {/* <div className="white-container mt-3">

                <div className="d-flex flex-column align-items-center w-100 mt-0 ">

                    <div className="medicines-list">
                        <NoDataIcon />
                        <span className="title">No items added</span>
                        <span className="caption">Click button to add Allergies</span>
                    </div>

                </div>

            </div>

            <button className="medicines-list-add-btn w-100">
                <Upload {...props} className="p-0 d-flex flex-row align-items-center justify-content-center w-100" showUploadList={false}>
                    <div className="d-flex text-white flex-row align-items-center justify-content-center">
                        <AddIcon /> Add Allergies
                    </div>
                </Upload>
            </button> */}

            <AllergiesCard />
            <AllergiesCard />




        </div>
    )
}

let PreExistingCondition = ({ setSuperSubMenu }) => {

    const { Option } = Select;

    return (
        <div className="super-sub-menu-container">
            <div className="d-flex flex-row justify-content-start align-items-center back-button-supersubmenu">

                <div style={{ cursor: "pointer", fontWeight: "bold" }} onClick={() => { setSuperSubMenu(null) }}>
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
                            <Select style={{ width: 90, fontSize: "13px" }} placeholder="Status">
                                <Option value={true}>Yes</Option>
                                <Option value={false}>No</Option>

                            </Select>
                        </td>

                        <td>
                            <Select style={{ width: 90, fontSize: "13px" }} placeholder="In Family">
                                <Option value={true}>Yes</Option>
                                <Option value={false}>No</Option>

                            </Select>
                        </td>
                    </tr>

                    <tr>
                        <td>Asthma</td>
                        <td>
                            <Select style={{ width: 90, fontSize: "13px" }} placeholder="Status">
                                <Option value={true}>Yes</Option>
                                <Option value={false}>No</Option>

                            </Select>
                        </td>

                        <td>
                            <Select style={{ width: 90, fontSize: "13px" }} placeholder="In Family">
                                <Option value={true}>Yes</Option>
                                <Option value={false}>No</Option>

                            </Select>
                        </td>
                    </tr>

                    <tr>
                        <td>Diabetes</td>
                        <td>
                            <Select style={{ width: 90, fontSize: "13px" }} placeholder="Status">
                                <Option value={true}>Yes</Option>
                                <Option value={false}>No</Option>

                            </Select>
                        </td>

                        <td>
                            <Select style={{ width: 90, fontSize: "13px" }} placeholder="In Family">
                                <Option value={true}>Yes</Option>
                                <Option value={false}>No</Option>

                            </Select>
                        </td>
                    </tr>

                    <tr>
                        <td>Cholestrol</td>
                        <td>
                            <Select style={{ width: 90, fontSize: "13px" }} placeholder="Status">
                                <Option value={true}>Yes</Option>
                                <Option value={false}>No</Option>

                            </Select>
                        </td>

                        <td>
                            <Select style={{ width: 90, fontSize: "13px" }} placeholder="In Family">
                                <Option value={true}>Yes</Option>
                                <Option value={false}>No</Option>

                            </Select>
                        </td>
                    </tr>


                    <tr>
                        <td>Thyroid Diseas</td>
                        <td>
                            <Select style={{ width: 90, fontSize: "13px" }} placeholder="Status">
                                <Option value={true}>Yes</Option>
                                <Option value={false}>No</Option>

                            </Select>
                        </td>

                        <td>
                            <Select style={{ width: 90, fontSize: "13px" }} placeholder="In Family">
                                <Option value={true}>Yes</Option>
                                <Option value={false}>No</Option>

                            </Select>
                        </td>
                    </tr>

                    <tr>
                        <td>Heart Diseas</td>
                        <td>
                            <Select style={{ width: 90, fontSize: "13px" }} placeholder="Status">
                                <Option value={true}>Yes</Option>
                                <Option value={false}>No</Option>

                            </Select>
                        </td>

                        <td>
                            <Select style={{ width: 90, fontSize: "13px" }} placeholder="In Family">
                                <Option value={true}>Yes</Option>
                                <Option value={false}>No</Option>

                            </Select>
                        </td>
                    </tr>

                    <tr>
                        <td>Stroke</td>
                        <td>
                            <Select style={{ width: 90, fontSize: "13px" }} placeholder="Status">
                                <Option value={true}>Yes</Option>
                                <Option value={false}>No</Option>

                            </Select>
                        </td>

                        <td>
                            <Select style={{ width: 90, fontSize: "13px" }} placeholder="In Family">
                                <Option value={true}>Yes</Option>
                                <Option value={false}>No</Option>

                            </Select>
                        </td>
                    </tr>

                    <tr>
                        <td>Galucoma</td>
                        <td>
                            <Select style={{ width: 90, fontSize: "13px" }} placeholder="Status">
                                <Option value={true}>Yes</Option>
                                <Option value={false}>No</Option>

                            </Select>
                        </td>

                        <td>
                            <Select style={{ width: 90, fontSize: "13px" }} placeholder="In Family">
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

                <div style={{ cursor: "pointer", fontWeight: "bold" }} onClick={() => { setSuperSubMenu(null) }}>
                    <ArrowLeft /> Symptoms
                </div>

            </div>

            <button className="medicines-list-add-btn">
                <Upload {...props} className="p-0 d-flex flex-row align-items-center justify-content-center w-100" showUploadList={false}>
                    <div className="d-flex text-white flex-row align-items-center justify-content-center">
                        <AddIcon /> Add Symptoms
                    </div>
                </Upload>
            </button>





        </div>
    )
}


let MedicalCondition = ({ setSuperSubMenu }) => {

    const { Option } = Select;

    return (
        <div className="super-sub-menu-container">
            <div className="d-flex flex-row justify-content-start align-items-center back-button-supersubmenu">

                <div style={{ cursor: "pointer", fontWeight: "bold" }} onClick={() => { setSuperSubMenu(null) }}>
                    <ArrowLeft /> Medical Condition
                </div>

            </div>

            <Select style={{ width: "100%", fontSize: "13px", marginTop: "1rem" }} placeholder="Select Condition to add">
                <Option value={true}>Yes</Option>
                <Option value={false}>No</Option>

            </Select>

            <div className="white-container mt-3">

                <div className="d-flex flex-column align-items-center w-100 mt-0 ">

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

                <div style={{ cursor: "pointer", fontWeight: "bold" }} onClick={() => { setSuperSubMenu(null) }}>
                    <ArrowLeft /> Surgery Details
                </div>

            </div>

            <button className="medicines-list-add-btn">
                <Upload {...props} className="p-0 d-flex flex-row align-items-center justify-content-center w-100" showUploadList={false}>
                    <div className="d-flex text-white flex-row align-items-center justify-content-center">
                        <AddIcon /> Add Surgery
                    </div>
                </Upload>
            </button>


        </div>
    )
}

let AddPrescription = ({ setSuperSubMenu }) => {

    const { Option } = Select;

    return (
        <div className="super-sub-menu-container">
            <div className="d-flex flex-row justify-content-start align-items-center back-button-supersubmenu">

                <div style={{ cursor: "pointer", fontWeight: "bold" }} onClick={() => { setSuperSubMenu(null) }}>
                    <ArrowLeft /> Prescribe Medicine
                </div>

            </div>

            <PrescribeMedicine />





        </div>
    )
}

let AddInvestigation = ({ setSuperSubMenu, setActiveLeft }) => {

    const { Option } = Select;

    return (
        <div className="super-sub-menu-container">
            <div className="d-flex flex-row justify-content-start align-items-center back-button-supersubmenu">

                <div style={{ cursor: "pointer", fontWeight: "bold" }} onClick={() => { setSuperSubMenu(null) }}>
                    <ArrowLeft /> Add Investigation
                </div>

            </div>

            <div className='medicines-list'>
                <span className='add-investigation-small-caption'>TEST DETAILS</span>

                <Select defaultValue="Hemetology" style={{ width: "90%", fontSize: "14px", fontWeight: 500, marginTop: ".8rem" }}>
                    <Option value='Hemetology'>Hemetology</Option>


                </Select>

                <textarea className="test-textare-input" placeholder='Comments' rows={5} style={{ marginTop: ".8rem" }} />

                <div className="d-flex flex-row justify-content-between" style={{ marginTop: ".8rem", width: "90%" }}>


                    <div className="d-flex flex-row justify-content-start align-items-center" style={{ marginTop: ".8rem" }}>
                        <CloseIcon />
                        <span className="remove-text">Remove</span>
                    </div>

                    <button className="test-add-btn">

                        <div className="d-flex text-white flex-row align-items-center justify-content-center" onClick={() => { setActiveLeft(leftMenus[5]) }}>
                            Create Test
                        </div>

                    </button>

                </div>
            </div>





        </div>
    )
}


let ViewNotes = ({ setSuperSubMenu, context }) => {

    const { Option } = Select;

    return (
        <div className="super-sub-menu-container">
            <div className="d-flex flex-row justify-content-start align-items-center  back-button-supersubmenu " style={{ width: "100%" }}>

                <div style={{ cursor: "pointer", fontWeight: "bold" }} onClick={() => { setSuperSubMenu(null) }}>
                    <ArrowLeft /> {context}
                </div>

            </div>

            <div className='medicines-list' style={{ marginTop: "1rem" }}>



                <textarea className="test-textare-input" placeholder='Notes' rows={5} />


            </div>





        </div>
    )
}



//popover content
const content = (
    <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, consectetur.</p>

    </div>
);



// file on changae, we neer to write separate function for separate uploader
const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
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




export const MeetPage_Dr = () => {



    let history = useHistory()
    let dispatch = useDispatch()

    let reduxData = useSelector(state => state)
    let userdata = reduxData.login ? reduxData.login.user : null;

    let [activeLeft, setActiveLeft] = useState({ status: false, page: null })

    let [superSubMenu, setSuperSubMenu] = useState(null)

    let [activeButton, setActiveButton] = useState(0)

    let [patientInfoActive, setPatientInfoActive] = useState(null)

    let [isTopMenu, setTopMenu] = useState(true)

    let [isIframe, setIframe] = useState(false)

    let [consultation, setConsultation] = useState(null)

    let [publisherProperties, setpublisherProperties] = useState({
        // error: null,
        audio: true,
        video: true,
        resolution: '640x480',
        frameRate: 30,
        //videoSource: 'camera',

    })
    let [subscriberProperties, setsubscriberProperties] = useState({
        // error: null,
        audio: true,
        vedio: true,
        resolution: '640x480',
        frameRate: 30,
        //videoSource: 'camera',

    })

    let [meetCred, setMeetCred] = useState({

        apiKey: apiKey_dummy,
        sessionId: sessionId_dummy,
        token: token_dummy
    })


    let [doctor, setDoctor] = useState(null)
    let [patient, setPatient] = useState(null)
    let [message, setMessage] = useState(false)

    const sessionRef = useRef();
    const subsessionRef = useRef();


    let setAudio = (audio) => {
        setpublisherProperties({ ...publisherProperties, audio: !publisherProperties.audio });

        if (publisherProperties.audio) {

            setMessage("Audio has been disabled.\nClick again to enable.")
        }
        else {
            setMessage("Audio has been enabled.\nClick again to disable.")
        }
    }

    let setVideo = (video) => {
        setpublisherProperties({ ...publisherProperties, video: !publisherProperties.video });

        if (publisherProperties.video) {
            setMessage("Video has been disabled.\nClick again to enable.")
        }
        else {
            setMessage("Video has been enabled.\nClick again to disable.")
        }

    }


    let setVideoSource = (videoSource) => {
        setpublisherProperties({ ...publisherProperties, vedio: !publisherProperties ? null : "camera" });
    }


    let leftOptions = {
        patientInfo: [
            {
                name: "Appointment Details",
                page: <AppintmentDetails setSuperSubMenu={setSuperSubMenu} />
            },
            {
                name: "Appointment History",
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
        setIframe(false)

        setActiveLeft({
            status: activeLeft.page === para_id && activeLeft.status ? false : true,
            page: para_id
        })

    }


    let handlePageChange = (page) => {

        history.push({
            pathname: `${page}`,
        });
    }

    const fetch_consultation = () => {

        var consultationID = localStorage.getItem("consultationId");


        dispatch(fetch_clientDetails(consultationID, userdata.userType)).then((res) => {

        
            let apiKey_ = res.apiKey
            let sessionId_ = res.sessionId
            let token_ = res.tokenId

            setMeetCred({

                apiKey: apiKey_.toString(),
                sessionId: sessionId_,
                token: token_,
                doctorName: res.doctorDetails.doctorName,
                doctorimg: res.doctorDetails.doctorImage,

            })


            // token = res.tokenId
            // console.log(reduxData)
            // setConnectionDetails({
            //     apiKey: apiKey.toString(),
            //     sessionId: sessionId,
            //     token: token,
            //     doctorName:res.doctorDetails.doctorName,
            //     doctorimg:res.doctorDetails.doctorImage,
            // })
        });
    };

    let getConsultationDetails = async () => {

        let paramAppoint =
        {
            "requestType": "400",
            "token": "C2MDVerificationToken",
            "data": {
                "currency": "INR",
                "userType": "Patient",
                "browserTimeZone": "GMT+05:30",
                "Ipaddress": "192.168.1.34",
                "useragent": "RMX1992",
                "Os": "Android Version 11",
                "todayRate": "1",
                "consultationId": "38618873"
            }
        }


        const response = await loginedApi.post("consultation", paramAppoint);
        //localStorage.setItem("ClinicDetails",response.data.data);

        console.log(response);

        if (response.data.data) {

            setConsultation(response.data.data);
        }

    }




    useEffect(() => {


        fetch_consultation()

        getConsultationDetails()

    }, [])


    const sendSignal = () => {
        sessionRef.current.sessionHelper.session.signal(
            {
                type: 'TheSignalType',
                data: 'TheData',
            },
            function (error) {
                if (error) {
                    console.log('signal error: ' + error.message);
                } else {
                    console.log('signal sent');
                }
            }
        );
    };



    const subscriberPropertiess = {
        preferredFrameRate: 15,
        showControls: false
    };
    const subscriberEventHandlers = {
        videoDisabled: event => {
            console.log('Subscriber video disabled!');

            setsubscriberProperties({ ...subscriberProperties, vedio: false });

            setMessage("Video has been disabled. You will not be able to see the Doctor now")
        },
        videoEnabled: event => {
            console.log('Subscriber video enabled!');
            setMessage("Video has been enabled.You will be able to see Doctor now.")
            setsubscriberProperties({ ...subscriberProperties, vedio: true });
        },
        streamPropertyChanged: (event) => {

            // console.log(`streamPropertyChanged -- ${event}`);

            setDoctor(true)
        }
    };

    const publisherEventHandlers = {

        videoDisabled: event => {
            console.log('publisher video disabled!');

        },
        videoEnabled: event => {
            console.log('Subscriber video enabled!');

        },
        streamPropertyChanged: (event) => {

        }
    };

    const sessionEventspublisher = {
        sessionConnected: (event) => {
            console.log(event)
            setPatient("true")
        },
        sessionDisconnected: () => {

        },
        streamPropertyChanged: (event) => {
            console.log(event)
        }
    };

    const sessionEventssubscriber = {
        sessionConnected: (event) => {
            console.log("sessionEventssubscriber : ")
            console.log(event)
            setDoctor(true)
        },
        sessionDisconnected: () => {

        },
        streamPropertyChanged: (event) => {
            if (event.stream.connection.id != event.stream.id && event.changedProperty == "hasAudio" && event.stream.name == "Doctor") {
                if (event.newValue) {
                    setMessage(`Audio has been enabled.You will  be able to hear the Doctor now.`)
                    sendSignal();
                } else {
                    setMessage(`Audio has been disabled.You will not be able to hear the Doctor now.`)
                }
            }
            else if (event.stream.connection.id != event.stream.id && event.changedProperty == "hasAudio" && event.stream.name == "Guest") {
                if (event.newValue) {
                    setMessage(`Audio has been enabled.<br>You will  be able to hear the Guest now.`)
                } else {
                    setMessage(`Audio has been disabled.<br>You will not be able to hear the Guest now.`)
                }
            }
        }
    };



    let handleIframeButtonClick = () => {


        setSuperSubMenu(null)

        setActiveLeft({
            status: false,
            page: null
        })

        setTopMenu(false)

        setIframe(!isIframe)

    }


    return (


        <div className="meet_container_v2" >

            <div className="meet_body_v2">


                <div className={`iframe-container ${isIframe ? "active" : "null"}`}>
                    <iframe src="https://www.connect2mydoctor.com/" className='iframe-content' />
                </div>

                {
                    !isIframe ?

                        <div className="vedio-container-left" >

                            <div className="top-menu-container" >
                                <div className={isTopMenu ? "top-menu" : "top-menu-hidden"} onClick={() => { setTopMenu(false) }}>

                                    <ul>
                                        <li>
                                            <div className="d-flex flex-column align-items-start">
                                                <span className="top-menu-headding">Doctor</span>
                                                <span className="top-menu-caption">{consultation?.doctorDetails.doctorName}</span>
                                            </div>

                                        </li>
                                        <li>

                                            <div className="d-flex flex-column align-items-start">
                                                <span className="top-menu-headding">{consultation?.reasonforvisit}</span>
                                                <span className="top-menu-caption">General Consultation</span>

                                            </div>
                                        </li>

                                        <li>

                                            <div className="d-flex flex-column align-items-start">
                                                <span className="top-menu-headding">Phone: </span>
                                                <span className="top-menu-caption">+91 9876543210</span>
                                            </div>

                                        </li>

                                        <li>

                                            <div className="d-flex flex-column align-items-start">
                                                <span className="top-menu-headding">Emergency contact: </span>
                                                <span className="top-menu-caption">Not Available</span>
                                            </div>

                                        </li>
                                    </ul>

                                </div>
                            </div>

                            <div className="streamer" onClick={() => {
                                setActiveLeft({ ...activeLeft, status: false })
                                setTopMenu(true)
                            }}>
                                {
                                    !subscriberProperties.vedio ?

                                        <div className="user-profile2">

                                            <div className="user-profile2-container">
                                                <img src={userdata.profileImage} className="user2-avatar" />

                                                <div className="user-profile2-footer">
                                                    {userdata.profileName}
                                                    {/* <ThreeDotVerticalWhiteIcon /> */}
                                                </div>

                                            </div>
                                        </div>

                                        : null
                                }


                                {
                                    meetCred.apiKey ?

                                        <OTSession ref={subsessionRef} apiKey={meetCred.apiKey} sessionId={meetCred.sessionId} token={meetCred.token} eventHandlers={sessionEventssubscriber}>


                                            <OTStreams>
                                                <OTSubscriber
                                                    properties={subscriberPropertiess}
                                                    eventHandlers={subscriberEventHandlers}
                                                />
                                            </OTStreams>

                                        </OTSession>

                                        // <div className="user-profile2">
                                        //     <div className="user-profile2-container">
                                        //         <img src={consultation?.doctorDetails.doctorImage} className="user2-avatar" />

                                        //         <div className="user-profile2-footer">
                                        //         {consultation?.doctorDetails.doctorName}
                                        //             {/* <ThreeDotVerticalWhiteIcon /> */}
                                        //         </div>

                                        //     </div>
                                        // </div>
                                        :
                                        <div className="user-profile2">
                                            <div className="user-profile2-container">
                                                <img src={userdata.profileImage} className="user2-avatar" />

                                                <div className="user-profile2-footer">
                                                    {userdata.profileName}
                                                    {/* <ThreeDotVerticalWhiteIcon /> */}
                                                </div>

                                            </div>
                                        </div>
                                }
                            </div>



                            <div className="user-card">

                                {
                                    !publisherProperties.video ?

                                        <div className="user-profile">
                                            <div className="user-profile-container">
                                                {
                                                    userdata.profileImage != null ? <img alt="img" src={userdata.profileImage} className="user-avatar" /> : ""
                                                }


                                                <div className="user-profile-footer">
                                                    {userdata.profileName}
                                                    {/* <ThreeDotVerticalWhiteIcon /> */}
                                                </div>

                                            </div>
                                        </div>

                                        : null
                                }
                                {
                                    meetCred.apiKey ?

                                        <OTSession ref={sessionRef} apiKey={meetCred.apiKey} sessionId={meetCred.sessionId} token={meetCred.token} eventHandlers={sessionEventspublisher}>

                                            <OTPublisher properties={{
                                                publishAudio: publisherProperties.audio,
                                                publishVideo: publisherProperties.vedio,
                                                // videoSource: true ? 'screen' : undefined
                                            }}
                                                eventHandlers={publisherEventHandlers}
                                            />

                                        </OTSession>
                                        : null

                                }

                            </div>







                        </div>

                        :

                        <div className="vedio-container-mobile" >

                            <div className="vedio-mobile">
                                {
                                    !subscriberProperties.vedio ?

                                        <div className="user-profile2">

                                            <div className="user-profile2-container">
                                                <img src={userdata.profileImage} className="user2-avatar" />

                                                <div className="user-profile2-footer">
                                                    {userdata.profileName}
                                                    {/* <ThreeDotVerticalWhiteIcon /> */}
                                                </div>

                                            </div>
                                        </div>

                                        : null
                                }

                                {
                                    meetCred.apiKey ?

                                        <OTSession ref={subsessionRef} apiKey={meetCred.apiKey} sessionId={meetCred.sessionId} token={meetCred.token} eventHandlers={sessionEventssubscriber}>


                                            <OTStreams>
                                                <OTSubscriber
                                                    properties={subscriberPropertiess}
                                                    eventHandlers={subscriberEventHandlers}
                                                />
                                            </OTStreams>

                                        </OTSession>

                                        // <div className="user-profile2">
                                        //     <div className="user-profile2-container">
                                        //         <img src={consultation?.doctorDetails.doctorImage} className="user2-avatar" />

                                        //         <div className="user-profile2-footer">
                                        //         {consultation?.doctorDetails.doctorName}
                                        //             {/* <ThreeDotVerticalWhiteIcon /> */}
                                        //         </div>

                                        //     </div>
                                        // </div>
                                        :
                                        <div className="user-profile2">
                                            <div className="user-profile2-container">
                                                <img src={userdata.profileImage} className="user2-avatar" />

                                                <div className="user-profile2-footer">
                                                    {userdata.profileName}
                                                    {/* <ThreeDotVerticalWhiteIcon /> */}
                                                </div>

                                            </div>
                                        </div>
                                }


                            </div>

                            <div className="vedio-mobile">
                                {
                                    !publisherProperties.video ?

                                        <div className="user-profile-small">
                                            <div className="user-profile-container-small">
                                                {
                                                    userdata.profileImage != null ? <img alt="img" src={userdata.profileImage ? userdata.profileImage : "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"} className="user-avatar" /> : ""
                                                }


                                                <div className="user-profile-footer-smal">
                                                    {userdata.profileName}
                                                    {/* <ThreeDotVerticalWhiteIcon /> */}
                                                </div>

                                            </div>
                                        </div>
                                        :

                                        meetCred.apiKey ?

                                            <OTSession ref={sessionRef} apiKey={meetCred.apiKey} sessionId={meetCred.sessionId} token={meetCred.token} eventHandlers={sessionEventspublisher}>

                                                <OTPublisher properties={{
                                                    publishAudio: publisherProperties.audio,
                                                    publishVideo: publisherProperties.vedio,
                                                    // videoSource: true ? 'screen' : undefined
                                                }}
                                                    eventHandlers={publisherEventHandlers}
                                                />

                                            </OTSession>
                                            :
                                            <div>No Vedio</div>



                                }
                            </div>

                        </div>


                    
                }


                <div className="vedio-container-right">
                    <div className="left-options-container">

                        <ul className={activeLeft.status ? "left-sub-menu" : "left-sub-menu-hidden"}>
                            <div className="close-btn-containr" onClick={() => { setActiveLeft({ ...activeLeft, status: false }) }}>
                                <span className='page-name'>{activeLeft.page?.replace(/([A-Z])/g, ' $1').trim()}</span>
                                <CloseIconRound /></div>

                            {
                                activeLeft.page === leftMenus[0] && activeLeft.status && superSubMenu == null ?

                                    leftOptions[activeLeft.page] ?

                                        leftOptions[activeLeft.page].map((obj, key) => {
                                            return (
                                                <li
                                                    onClick={() => { setSuperSubMenu(obj.page); setPatientInfoActive(leftOptions.patientInfo[key].name) }}
                                                    className={patientInfoActive === leftOptions.patientInfo[key].name ? "active-patient-info" : null}
                                                >
                                                    <RightArrowIcon />
                                                    {obj.name}
                                                </li>
                                            )
                                        })



                                        : null

                                    : activeLeft.page === leftMenus[1] && activeLeft.status && superSubMenu == null ?


                                        <div className="d-flex flex-column align-items-center w-100 p-2">

                                            <div className="medicines-list">
                                                <NoDataIcon />
                                                <span className="title">No items added</span>
                                                <span className="caption">Click button to create a new prescription</span>
                                            </div>

                                            <button className="medicines-list-add-btn" onClick={() => { setSuperSubMenu(<AddPrescription setSuperSubMenu={setSuperSubMenu} />) }}>

                                                <div className="d-flex text-white flex-row align-items-center justify-content-center">
                                                    <AddIcon /> Add Prescrition
                                                </div>

                                            </button>



                                        </div>
                                        : activeLeft.page === leftMenus[2] && activeLeft.status && superSubMenu == null ?


                                            <div className="d-flex flex-column align-items-center p-2 w-100  ">

                                                <div className="medicines-list">
                                                    <NoDataIcon />
                                                    <span className="title">No Tests Found</span>
                                                    <span className="caption">Click add button to create<br></br>a new investigation</span>
                                                </div>



                                                <button className="medicines-list-add-btn" onClick={() => { setSuperSubMenu(<AddInvestigation setSuperSubMenu={setSuperSubMenu} setActiveLeft={handleSetLeft} />) }}>

                                                    <div className="d-flex text-white flex-row align-items-center justify-content-center">
                                                        <AddIcon /> Add investigation
                                                    </div>
                                                </button>

                                            </div>

                                            : activeLeft.page === leftMenus[3] && activeLeft.status && superSubMenu == null ?


                                                <div className="d-flex flex-column align-items-center ">

                                                    <ul className='test-sub-menu'>

                                                        <li onClick={() => { setSuperSubMenu(<ViewNotes setSuperSubMenu={setSuperSubMenu} context="Notes for Patient" />) }}>
                                                            <div className='d-flex flex-column'>
                                                                <span className='small-tittle'>Notes for Patient</span>
                                                            </div>
                                                            <RightArrowIconOriginal />
                                                        </li>


                                                        <li onClick={() => { setSuperSubMenu(<ViewNotes setSuperSubMenu={setSuperSubMenu} context="Doctor's Private Note" />) }}>
                                                            <div className='d-flex flex-column'>
                                                                <span className='small-tittle'>Doctor's Private Note</span>

                                                            </div>
                                                            <RightArrowIconOriginal />
                                                        </li>

                                                        <li >
                                                            <div className='d-flex flex-column'>
                                                                <span className='small-tittle'>Attachments</span>

                                                            </div>
                                                            <RightArrowIconOriginal />
                                                        </li>

                                                        {/* <button className="medicines-list-add-btn" onClick={() => { setSuperSubMenu(<AddInvestigation setSuperSubMenu={setSuperSubMenu} setActiveLeft={handleSetLeft} />) }}>

                                                        <div className="d-flex text-white flex-row align-items-center justify-content-center">
                                                            <AddIcon /> Add investigation
                                                        </div>
                                                    </button> */}


                                                    </ul>



                                                </div>

                                                : activeLeft.page === leftMenus[5] && activeLeft.status && superSubMenu == null ?


                                                    <div className="d-flex flex-column align-items-center p-2  ">

                                                        <ul className='test-sub-menu'>


                                                            <li>
                                                                <div className='d-flex flex-column'>
                                                                    <span className='small-tittle'>Hematology</span>
                                                                    <span className='small-caption'>TC</span>
                                                                </div>
                                                                <RightArrowIconOriginal />
                                                            </li>


                                                            <li>
                                                                <div className='d-flex flex-column'>
                                                                    <span className='small-tittle'>Urine</span>
                                                                    <span className='small-caption'>CBC</span>
                                                                </div>
                                                                <RightArrowIconOriginal />
                                                            </li>

                                                            <button className="medicines-list-add-btn" onClick={() => { setSuperSubMenu(<AddInvestigation setSuperSubMenu={setSuperSubMenu} setActiveLeft={handleSetLeft} />) }}>

                                                                <div className="d-flex text-white flex-row align-items-center justify-content-center">
                                                                    <AddIcon /> Add investigation
                                                                </div>
                                                            </button>


                                                        </ul>





                                                    </div>

                                                    : superSubMenu
                            }

                        </ul>

                    </div>
                </div>




            </div>

            <div className="meet-footer">

                <div className="footer-item left">
                    <Popover content={content} placement="topLeft">

                        <div style={{ cursor: "pointer" }}> <QuestIcon /></div>

                    </Popover>
                </div>

                <div className="footer-item center">


                    <div className="buttons-container">


                        <button onClick={setVideo} className={publisherProperties.video ? null : "active"}><NoVedioIcon /></button>
                        <button onClick={setAudio} className={publisherProperties.audio ? null : "active"}><MuteIcon /></button>
                        <button className='end_call_btn' onClick={() => { handlePageChange("/dashboard") }}><EndCallIcon /></button>


                    </div>

                </div>

                <div className="footer-item right">

                    <div className="left-menu-container">
                        <div className="left-menu">

                            <ul>

                                <Tooltip placement="topLeft" title="Patient Info">
                                    <li className={`${activeLeft.page === leftMenus[0] && activeLeft.status ? "left-menu-active" : null}`} onClick={() => { handleSetLeft(leftMenus[0]) }}>
                                        <PatientInfoIcon_V2 status={activeLeft.page === leftMenus[0] && activeLeft.status ? true : false} />
                                        {/* <span>PATIENT INFO </span> */}
                                    </li>
                                </Tooltip>


                                <Tooltip placement="topLeft" title="Prescription">
                                    <li className={`${activeLeft.page === leftMenus[1] && activeLeft.status ? "left-menu-active" : null}`} onClick={() => { handleSetLeft(leftMenus[1]) }}>
                                        <DescriptionIcon_V2 status={activeLeft.page === leftMenus[1] && activeLeft.status ? true : false} />
                                        {/* <span>PRESCRIPTION</span> */}
                                    </li>
                                </Tooltip>

                                <Tooltip placement="topLeft" title="Tests">
                                    <li className={`${activeLeft.page === leftMenus[2] && activeLeft.status ? "left-menu-active" : null} `} onClick={() => { handleSetLeft(leftMenus[2]) }}>
                                        <TestIcon_V2 status={activeLeft.page === leftMenus[2] && activeLeft.status ? true : false} />
                                        {/* <span>TESTS</span> */}
                                    </li>
                                </Tooltip>

                                <Tooltip placement="topLeft" title="Notes">
                                    <li className={`${activeLeft.page === leftMenus[3] && activeLeft.status ? "left-menu-active" : null}`} onClick={() => { handleSetLeft(leftMenus[3]) }}>
                                        <NotesIcon_V2 status={activeLeft.page === leftMenus[3] && activeLeft.status ? true : false} />
                                        {/* <span>NOTES</span> */}
                                    </li>
                                </Tooltip>

                                <Tooltip placement="topLeft" title="Iframe">
                                    <li className={`${activeLeft.page === leftMenus[4] && activeLeft.status ? "left-menu-active" : null}`} onClick={() => { handleIframeButtonClick() }}>
                                        <IframeIcon status={isIframe ? true : false} />
                                        {/* <span>NOTES</span> */}
                                    </li>
                                </Tooltip>




                            </ul>




                        </div>
                    </div>


                </div>




            </div>

            {/* {
                !doctor || !patient ?
                    <div className="waiting-toast">
                        <div className='waiting-toast-body'>
                            waiting for {!doctor ? "doctor" : !patient ? "patient" : null}...
                            <br></br>

                            <PuffLoader color={"white"} loading={true} size={40} />

                        </div>
                    </div> : null
            } */}

            <ConsultationModal state={message} setState={setMessage} />


        </div>

    )
}







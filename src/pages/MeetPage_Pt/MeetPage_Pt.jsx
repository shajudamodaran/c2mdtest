import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router';
import { AddIcon, ArrowLeft, BodyChartIcon, CallOptions, ChatIcon2, CloseIcon, CloseIconRound, DescriptionIcon_V2, DscIcon, EndCallIcon, IframeIcon, InviteIcon, InviteIcon2, InviteIcon_V2, MuteIcon, NoDataIcon, NotesIcon, NotesIcon_V2, NoVedioIcon, PatientInfoIcon, PatientInfoIcon_V2, QuestIcon, RecordIcon, RightArrowIcon, RightArrowIconOriginal, ScreenCastIcon, SnapIcon, TestIcon, TestIcon_V2, UploadIcon, VolumeIcon } from '../../assets/Logos/Icons';
import './meetpage.css'
import Draggable from 'react-draggable'; // The default
import { Select, Tooltip } from 'antd';
import { Popover, Button, Upload } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import PrescribeMedicine from '../../components/PrescribeMedicine/PrescribeMedicine';
import ConsultationModal from '../../components/Modals/ConsultationModal';
import loginedApi from '../../apis';
import { fetch_clientDetails } from '../../actions/ConsultationAction';
import { ClipLoader, PuffLoader } from 'react-spinners';
import { Radio, Input } from 'antd';
import { getFileTypeFromFileName } from '../../Helpers/FileHelper';
import { useParams } from "react-router-dom";
import './meetpatient.css'
const { OTSession, OTPublisher, OTStreams, OTSubscriber, createSession } = require('opentok-react');


let leftMenus = ["patientInfo", "Notes", "Invite"]


var apiKey_dummy = '47372891';
var sessionId_dummy = '2_MX40NzM3Mjg5MX5-MTYzNjM2MDg5NzE3N35BTGQ3bFJEMlM0ckk4YU92OVVqUTN5Njd-fg';
var token_dummy = 'T1==cGFydG5lcl9pZD00NzM3Mjg5MSZzaWc9ODk2YzlmN2YyMDU4NGMxN2MzNzcyOWQ0OGZjZDFiNjFlMjczNDEyYTpzZXNzaW9uX2lkPTJfTVg0ME56TTNNamc1TVg1LU1UWXpOak0yTURnNU56RTNOMzVCVEdRM2JGSkVNbE0wY2trNFlVOTJPVlZxVVRONU5qZC1mZyZjcmVhdGVfdGltZT0xNjM2MzYxMzIzJm5vbmNlPTAuODYwNDE4MDMzNjAzMTIyJnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE2MzYzNjQ5MjEmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=';



let AppintmentDetails = ({ setSuperSubMenu, reports, setReports }) => {

    let [localFiles, setLocalFiles] = useState([])
    let hiddenFileInput = useRef()

    let hanleFileChange = (e) => {

        console.log("setting file == >", e.target.files['0']);
        setLocalFiles([...localFiles, e.target.files['0']])
    }




    return (
        <div className="super-sub-menu-container">
            <div className="d-flex flex-row justify-content-start align-items-center back-button-supersubmenu">

                {/* <div style={{ cursor: "pointer" }} onClick={() => { setSuperSubMenu(null) }}>
                    <ArrowLeft /> Appoinment Details
                </div> */}

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
                    }}>Type of consultation -&nbsp;</span>
                    <span> First time consultation</span>

                </div>

            </div>

            {/* <div className="white-container">
                <div className="white-container-heading">
                    Notes to Doctor
                </div>
            </div> */}


            <div className="white-container appointment-details-reports-list">
                <div className="white-container-heading">
                    Reports Uploaded
                </div>

                <div className="appointment-details-reports-list">

                    {
                        localFiles.length > 0 ?

                            localFiles.map((each_file) => {
                                return (
                                    <div className="report-card">

                                        <div className="report-header d-flex flex-row align-items-center justify-content-start">


                                            <img className="icon me-2" src={getFileTypeFromFileName(each_file.name)} />
                                            <div className="name" >{each_file.name}</div>
                                        </div>

                                        <div className="report-body d-flex flex-row align-items-center justify-content-start">
                                            &nbsp;
                                        </div>
                                    </div>
                                )
                            })

                            : "No reports"
                    }



                </div>
                
                <div>&nbsp;</div>

                <input ref={hiddenFileInput} style={{ display: "none" }} type='file' onChange={hanleFileChange} className="white-container-button p-0" />
                <button for="file-upload" className="white-container-button" onClick={() => { hiddenFileInput.current.click() }} style={{marginTop:"10px !important"}}> <UploadIcon /> Upload a new file</button>

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
                    <ArrowLeft /> {context} <span style={{
                        fontSize: "13px",
                        fontWeight: "normal",
                        marginLeft: "2px"
                    }}>(read only)</span>
                </div>

            </div>

            <div className='medicines-list' style={{ marginTop: "1rem" }}>



                <textarea readOnly className="test-textare-input" placeholder={context} rows={5} />


            </div>





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


export const PopupFaq = () => {

    return (
        <div className='popup_faq_container'>

            <h3 className="title_faq"> 1. What is Connect2MyDoctor?</h3>
            <p className='content_faq'>Connect2MyDoctor, an online platform serving patients and doctors by eliminating the boundaries
                of quality healthcare via online video consultations, managing patientâ€™s self and family
                medical records in a HIPAA secure server, syncing data from multiple sources - all stitched
                together with intuitive user experience across computers, tablet and mobile devices.</p>


            <h3 className={"title_faq"}>
                {" "}
                2. How can I access Connect2MyDoctor?
            </h3>
            <p>Connect2MyDoctor will be available across computers, smart phones and tablets. Our iPhone, iPad and Android apps are coming soon.</p>

            <h3 className={"title_faq"}> 3. Can I contact a doctor Connect2MyDoctor during emergencies?</h3>
            <p>NO. Patients should NOT use Connect2MyDoctor incase of any medical emergency. If you are having
                a medical emergency, please contact your local emergency service.</p>



        </div>
    )

}



//popover content
const content = (
    <div style={{ maxWidth: "500px" }}>
        <PopupFaq />
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





export const MeetPage_Pt = () => {



    let history = useHistory()
    let dispatch = useDispatch()


    let [activeLeft, setActiveLeft] = useState({ status: false, page: null })
    let [superSubMenu, setSuperSubMenu] = useState(null)
    let [activeButton, setActiveButton] = useState(0)
    let [sessionHelper, setSessionHelper] = useState(null)
    let [isIframe, setIframe] = useState(false)

    let [reportFiles, setReports] = useState([])

    let { appointmentId } = useParams()


    console.log(appointmentId);



    let [publisherProperties, setpublisherProperties] = useState({
        error: null,
        audio: true,
        video: true,
        videoSource: 'camera'
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

    var apiKey = '';
    var sessionId = '';
    var token = ''
    let [connectionDetails, setConnectionDetails] = useState({
        apiKey: apiKey,
        sessionId: sessionId,
        token: token,
        doctorName: "",
        doctorimg: ""

    })


    let [doctor, setDoctor] = useState(null)
    let [patient, setPatient] = useState(null)
    let [message, setMessage] = useState(false)
    let [patientInfoActive, setPatientInfoActive] = useState(null)

    let [consultation, setConsultation] = useState(null)

    let reduxData = useSelector(state => state)
    let userdata = reduxData.login ? reduxData.login.user : null;

    const sessionRef = useRef();
    const subsessionRef = useRef();

    const subscriberPropertiess = {
        preferredFrameRate: 15,
        showControls: false
    };

    useEffect(() => {

        // getConsultationDetails()
        fetch_consultation()

    }, [])


    useEffect(() => {

        if (consultation) {
            setMeetCred({
                apiKey: consultation.apiKey,
                sessionId: consultation.sessionId,
                token: consultation.tokenId
            })
        }

    }, [consultation])


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

        console.log("$$$$$$$$$$")
        console.log(publisherProperties.video)
        setpublisherProperties({ ...publisherProperties, video: !publisherProperties.video });
        console.log(publisherProperties.video)
        console.log(publisherProperties)
        if (publisherProperties.video) {
            setMessage("Video has been disabled.\nClick again to enable.")
        }
        else {
            setMessage("Video has been enabled.\nClick again to disable.")
        }


    }


    const subscriberEventHandlers = {
        videoDisabled: event => {
            console.log('Subscriber video disabled!');

            setsubscriberProperties({ ...subscriberProperties, vedio: false });

            setMessage("Video has been disabled.\n You will not be able to see the Doctor now")
        },
        videoEnabled: event => {
            console.log('Subscriber video enabled!');
            setMessage("Video has been enabled.\nYou will be able to see Doctor now.")
            setsubscriberProperties({ ...subscriberProperties, vedio: true });
        },
        streamPropertyChanged: (event) => {
            console.log("****streamPropertyChanged*****")
            console.log(event)
            //  setDoctor(true)
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
            sendSignal();
        },
        sessionDisconnected: () => {

        },
        streamPropertyChanged: (event) => {
            console.log(event)
        }
    };

    const sessionEventssubscriber = {
        sessionConnected: (event) => {


        },
        streamCreated: (event) => {
            console.log("streamCreated : ")
            console.log(event)
            setDoctor(true)
        },
        sessionDisconnected: (event) => {
            console.log(event)
        },
        streamPropertyChanged: (event) => {

            if (event.stream.connection.id != event.stream.id && event.changedProperty == "hasAudio" && event.stream.name == "Doctor") {
                if (event.newValue) {
                    setMessage(`Audio has been enabled.\nYou will  be able to hear the Doctor now.`)
                    sendSignal();
                } else {
                    setMessage(`Audio has been disabled.\nYou will not be able to hear the Doctor now.`)
                }
            }
            else if (event.stream.connection.id != event.stream.id && event.changedProperty == "hasAudio" && event.stream.name == "Guest") {
                if (event.newValue) {
                    setMessage(`Audio has been enabled.\nYou will  be able to hear the Guest now.`)
                } else {
                    setMessage(`Audio has been disabled.\nYou will not be able to hear the Guest now.`)
                }
            }
        },
        streamDestroyed: (event) => {
            setDoctor(null)
            setMessage(`The Doctor has either logged out or closed the window.\nPlease wait until the Doctor comes back.`)
            setTimeout(function () {
                setDoctor(null)
            }.bind(this), 8000);
            if (subsessionRef.current != undefined) {

                //  // When the session is disconnected
                subsessionRef.current.sessionHelper.session.on('signal:closeAppointment', function (event) {
                    console.log("Session disconnected...")
                    console.log(event)
                    setMessage(`Your session has been disconnected.`)
    
                    setTimeout(function () {
                        history.push("/mobiledashboard");
                    }.bind(this), 0);
                    //  history.push("/mobiledashboard");
                })
            }
            if (event.reason == "clientDisconnected") {
                setMessage(`The Doctor has either logged out or closed the window.\nPlease wait until the Doctor comes back.`)
                setTimeout(function () {
                    setDoctor(null)
                }.bind(this), 8000);
            }

            setMessage(`Your session has been disconnected.`)
            setTimeout(function () {
                history.push("/dashboard");
            }.bind(this), 15000);
            console.log(event)
        }
    };


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


    let [isTopMenu, setTopMenu] = useState(true)


    let leftOptions = {
        // patientInfo: [
        //     {
        //         name: "Appointment Details",
        //         page: <AppintmentDetails setSuperSubMenu={setSuperSubMenu} reports={reportFiles} setReports={setReports} />
        //     },


        // ]
    }


    let handleSetLeft = (para_id) => {

        setSuperSubMenu(null)

        setActiveLeft({
            status: activeLeft.page === para_id && activeLeft.status ? false : true,
            page: para_id
        })

    }


    useEffect(() => {


        // let sessionHelper = createSession({
        //     apiKey: 'your-api-key',
        //     sessionId: 'your-session-id',
        //     token: 'your-session-token',
        //     onStreamsUpdated: streams => { console.log({ streams }); }
        // });

        // setSessionHelper(sessionHelper)

    }, [])



    const fetch_consultation = () => {

        var consultationID = localStorage.getItem("consultationId");

        dispatch(fetch_clientDetails(appointmentId, userdata.userType)).then((res) => {

            console.log("apiCalled", res);

            apiKey = res?.apiKey
            sessionId = res?.sessionId
            token = res?.tokenId

            setConnectionDetails({
                apiKey: apiKey?.toString(),
                sessionId: res?.sessionId,
                token: res?.tokenId,
                doctorName: res?.doctorDetails.doctorName,
                doctorimg: res?.doctorDetails.doctorImage,
                type: res?.reasonforvisit,
            })
        });
    };


    let handleInviteOnClick = async () => {

        let countrycoderes = await loginedApi.post("getcountrycode",
            {
                "token": "token",
                "version": "2.0",
                "data": {},
                "requestType": 1058
            });


    }


    console.log(userdata);



    return (


        <div className="meet_container_v2" >

            <div className="meet_body_v2">


                <div className={`iframe-container ${isIframe ? "active" : "null"}`}>
                    <iframe src="https://www.connect2mydoctor.com/" className='iframe-content' />
                </div>


                {



                    <div className="vedio-container-left" >

                        {
                            !doctor || !patient ?
                                <div className="waiting-toast">
                                    <div className='waiting-toast-body'>
                                        waiting for {!doctor ? "doctor" : !patient ? "patient" : null}...
                                        <br></br>

                                        <PuffLoader color={"white"} loading={true} size={40} />

                                    </div>
                                </div> : null
                        }

                        <div className="top-menu-container" >
                            <div className={isTopMenu ? "top-menu" : "top-menu-hidden"} onClick={() => { setTopMenu(false) }}>

                                <ul>
                                    <li>
                                        <div className="d-flex flex-column align-items-start">
                                            <span className="top-menu-headding">Doctor</span>
                                            <Tooltip placement="right" title={connectionDetails ? connectionDetails.doctorName : ""}>
                                                <span className="top-menu-caption">{connectionDetails ? connectionDetails.doctorName : ""}</span>
                                            </Tooltip>
                                        </div>

                                    </li>
                                    <li>

                                        <div className="d-flex flex-column align-items-start">
                                            <span className="top-menu-headding">Reason For Visit</span>
                                            <Tooltip placement="right" title={connectionDetails ? connectionDetails.type : ""}>
                                                <span className="top-menu-caption">{connectionDetails ? connectionDetails.type : ""}</span>
                                            </Tooltip>
                                        </div>
                                    </li>

                                    <li>

                                        <div className="d-flex flex-column align-items-start">
                                            <span className="top-menu-headding">Phone: </span>
                                            <Tooltip placement="right" title={connectionDetails ? connectionDetails.mobileNumber : ""}>
                                                <span className="top-menu-caption">{consultation ? consultation.mobileNumber : ""}</span>
                                            </Tooltip>
                                        </div>

                                    </li>

                                    <li>

                                        <div className="d-flex flex-column align-items-start">
                                            <span className="top-menu-headding">Emergency contact: </span>
                                            <Tooltip placement="right" title={"Not Available"}>
                                                <span className="top-menu-caption">Not Available</span>
                                            </Tooltip>
                                        </div>

                                    </li>
                                </ul>

                            </div>
                        </div>

                        <div className="streamer streamer_patient" onClick={() => {
                            setActiveLeft({ ...activeLeft, status: false })
                            setTopMenu(true)
                        }}>
                            {
                                !subscriberProperties.vedio ?

                                    <div className="user-profile2">

                                        <div className="user-profile2-container">
                                            <img src={userdata.profileImage ? userdata.profileImage : "http://localhost:3000/c2mydrnew/microsites/static/media/doctor_avatar.c9aa1c0d.png"} className="user2-avatar" />

                                            <div className="user-profile2-footer">
                                                {connectionDetails ? connectionDetails.doctorName : ""}
                                                {/* <ThreeDotVerticalWhiteIcon /> */}
                                            </div>

                                        </div>
                                    </div>

                                    : null
                            }


                            {
                                connectionDetails.apiKey ?

                                    <OTSession ref={subsessionRef} apiKey={connectionDetails.apiKey} sessionId={connectionDetails.sessionId} token={connectionDetails.token} eventHandlers={sessionEventssubscriber}>


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
                                            <img src={userdata.profileImage ? userdata.profileImage : "http://localhost:3000/c2mydrnew/microsites/static/media/doctor_avatar.c9aa1c0d.png"} className="user2-avatar" />


                                            <div className="user-profile2-footer">
                                                {connectionDetails ? connectionDetails.doctorName : ""}
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
                                                userdata.profileImage != null ? <img alt="img" src={userdata.profileImage ? userdata.profileImage : "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png"} className="user-avatar" /> : ""
                                            }


                                            <div className="user-profile-footer">
                                                {userdata.profileName}
                                                {/* <ThreeDotVerticalWhiteIcon /> */}
                                            </div>

                                        </div>
                                    </div>

                                    :

                                    connectionDetails.apiKey ?

                                        <OTSession ref={sessionRef} apiKey={connectionDetails.apiKey} sessionId={connectionDetails.sessionId} token={connectionDetails.token} eventHandlers={sessionEventspublisher}>

                                            <OTPublisher properties={{
                                                publishAudio: publisherProperties.audio,
                                                publishVideo: publisherProperties.vedio,
                                                // videoSource: true ? 'screen' : undefined
                                            }}
                                                eventHandlers={publisherEventHandlers}
                                            />

                                        </OTSession>
                                        :
                                        <div className="user-profile">
                                            <div className="user-profile-container">
                                                {
                                                    userdata.profileImage != null ? <img alt="img" src={userdata.profileImage ? userdata.profileImage : "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png"} className="user-avatar" /> : ""
                                                }


                                                <div className="user-profile-footer">
                                                    {userdata.profileName}
                                                    {/* <ThreeDotVerticalWhiteIcon /> */}
                                                </div>

                                            </div>
                                        </div>

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

                            {console.log(activeLeft)}

                            {
                                activeLeft.page === leftMenus[0] && activeLeft.status && superSubMenu == null ?

                                    // leftOptions[activeLeft.page] ?

                                    //     leftOptions[activeLeft.page].map((obj, key) => {
                                    //         return (
                                    //             <li
                                    //                 onClick={() => { setSuperSubMenu(obj.page); setPatientInfoActive(leftOptions.patientInfo[key].name) }}
                                    //                 className={patientInfoActive === leftOptions.patientInfo[key].name ? "active-patient-info" : null}
                                    //             >
                                    //                 <RightArrowIcon />
                                    //                 {obj.name}
                                    //             </li>
                                    //         )
                                    //     })



                                    //     : null

                                    <AppintmentDetails />



                                    : activeLeft.page === leftMenus[1] && activeLeft.status && superSubMenu == null ?


                                        <div className="d-flex flex-column align-items-center ">



                                            <ul className='test-sub-menu'>

                                                <li onClick={() => { setSuperSubMenu(<ViewNotes setSuperSubMenu={setSuperSubMenu} context="Chief Complaints" />) }}>
                                                    <div className='d-flex flex-column'>
                                                        <span className='small-tittle'>Chief Complaints</span>
                                                    </div>
                                                    <RightArrowIconOriginal />
                                                </li>


                                                <li onClick={() => { setSuperSubMenu(<ViewNotes setSuperSubMenu={setSuperSubMenu} context="Relevant Points From History" />) }}>
                                                    <div className='d-flex flex-column'>
                                                        <span className='small-tittle'>Relevant Points from History</span>

                                                    </div>
                                                    <RightArrowIconOriginal />
                                                </li>

                                                <li onClick={() => { setSuperSubMenu(<ViewNotes setSuperSubMenu={setSuperSubMenu} context="Diagnosis or Provisional Diagnosic" />) }} >
                                                    <div className='d-flex flex-column'>
                                                        <span className='small-tittle'>Diagnosis or Provisional Diagnosic</span>

                                                    </div>
                                                    <RightArrowIconOriginal />
                                                </li>

                                                <li onClick={() => { setSuperSubMenu(<ViewNotes setSuperSubMenu={setSuperSubMenu} context="Examination and Lab findings" />) }} >
                                                    <div className='d-flex flex-column'>
                                                        <span className='small-tittle'>Examination and Lab findings</span>

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



                                        : activeLeft.page === leftMenus[2] && activeLeft.status && superSubMenu == null ?


                                            <div className="d-flex flex-column align-items-center p-2  ">

                                                <ul className='test-sub-menu'>


                                                    <div className="white-container mt-0 invite-container">
                                                        <div className="title">Invite with :</div>

                                                        <div className="body">
                                                            <Radio.Group>
                                                                <Radio value={1}>eMail id</Radio>
                                                                <Radio value={2}>Mobile Number</Radio>

                                                            </Radio.Group>

                                                            <Input placeholder="eMail id" />

                                                            <button className="medicines-list-add-btn" onClick={() => { handleInviteOnClick() }}>

                                                                <div className="d-flex text-white flex-row align-items-center justify-content-center">
                                                                    Invite
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>




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
                    <Popover content={content} placement="topLeft" style={{ zIndex: "1000000" }}>

                        <div style={{ cursor: "pointer" }}> <QuestIcon /></div>

                    </Popover>
                </div>

                <div className="footer-item center">


                    <div className="buttons-container">


                        <button onClick={setVideo} className={publisherProperties.video ? null : "active"}><NoVedioIcon /></button>
                        <button onClick={setAudio} className={publisherProperties.audio ? null : "active"}><MuteIcon /></button>
                        {/* <button onClick={handleIframeButtonClick} className={!isIframe ? null : "active"} ><IframeIcon/></button> */}


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

                                <Tooltip placement="topLeft" title="Notes">
                                    <li className={`${activeLeft.page === leftMenus[1] && activeLeft.status ? "left-menu-active" : null}`} onClick={() => { handleSetLeft(leftMenus[1]) }}>
                                        <NotesIcon_V2 status={activeLeft.page === leftMenus[1] && activeLeft.status ? true : false} />
                                        {/* <span>NOTES</span> */}
                                    </li>
                                </Tooltip>


                                <Tooltip placement="topLeft" title="Invite">
                                    <li className={`${activeLeft.page === leftMenus[2] && activeLeft.status ? "left-menu-active" : null}`} onClick={() => { handleSetLeft(leftMenus[2]) }}>
                                        <InviteIcon_V2 status={activeLeft.page === leftMenus[2] && activeLeft.status ? true : false} />
                                        {/* <span>PRESCRIPTION</span> */}
                                    </li>
                                </Tooltip>




                            </ul>




                        </div>
                    </div>


                </div>




            </div>



            <ConsultationModal state={message} setState={setMessage} />




        </div>

    )
}






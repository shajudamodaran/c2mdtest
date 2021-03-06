import React, { useEffect, useState } from "react";
import { TittleCard } from '../../components/Styled/TittleCard'
import DashButton from '../../components/Normal/DashButton/DashButton';
import './mobiledashboard.css'
import './customstyle.css'
import { fetch_dashboardData, uploadReports, fetch_recentactivities } from "../../actions/DashboardActions";
import { useDispatch, useSelector } from "react-redux";
import RecentActivityListItem from "../Normal/RecentActivityListCard/RecentActivityListItem";
import Footer from '../../components/Footer'
import { useHistory } from "react-router";
import { DASHBOARD_LEFT_OPTIONS } from "../../Helpers/Constants";

import audio from '../../assets/audio/wind_chimes.mp3';
import find_dr_icon from '../../assets/doctor_avatar.png'
import moment from "moment";
import { AddFileIcon } from "../../assets/Logos/Icons";

import { Tooltip, Button } from 'antd';
import { check_consultation, fetch_clientDetails } from "../../actions/MicrositeAction";
import { isWithinMinutes } from "../../Helpers/dateFunctions";
import { logoutAction } from "../../actions/LoginAction";
import loginedApi from "../../apis";
import ConsultationCarousel from "./Components/ConsultationCarousel/ConsultationCarousel";



function MobileDashboard() {




    const [value, setValue] = React.useState(1);
    let [selectedNav, setNav] = useState(0)
    let [activeLeft, setActiveleft] = useState({ menu: null, option: null })
    let [isDash, setDash] = React.useState(true);
    let [isPlayed, setPlayed] = useState(false)
    let [reports, setReports] = useState([])
    let [localReports, setLocalReports] = useState([])
    let [activeTitle, setActiveTitle] = useState("Dashboard")



    // let [consultationToday, setConsultationToday] = useState(null)

    useEffect(() => {

        if (activeLeft.menu !== null) {
            setActiveTitle(DASHBOARD_LEFT_OPTIONS[activeLeft.menu]?.options[activeLeft.option].name)
        }



    }, [activeLeft])



    let dispatch = useDispatch()
    let history = useHistory()

    const userData = useSelector(
        (state) => state.login.user
    );

    const dashboardData = useSelector(
        (state) => state.login.patientDashboard
    );

    const doctorDetail = useSelector(
        (state) => state.doctorDetail.doctor_Details
    );

    const logoutDetails = useSelector(
        (state) => state.login.logout
    );

    let clientDetails = useSelector(
        state => state.clientDetails
    );

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };



    useEffect(() => {

        loadInitialData()
        loadrecentactivitest();

        try {

            dispatch(
                check_consultation(userData, dashboardData)
            );


        } catch (error) {

            console.log(error);

        }

        // hit201()

    }, [])

    useEffect(() => {

        goToDoctorListing()

        // if (activeLeft.menu === 0 && activeLeft.option === 0) {
        //     history.push(`./${_clinicUrl}`)
        // }

    }, [activeLeft])

    let goToDoctorListing = async () => {

        let clinicDetailsLocal = await JSON.parse(localStorage.getItem("ClinicDetails"))

        let _clinicUrl = null

        console.log();

        if (clientDetails?.clinicurl) {
            _clinicUrl = clientDetails?.clinicurl
        }
        else if (clinicDetailsLocal) {
            _clinicUrl = clinicDetailsLocal.clinicurl
        }


        // console.log(_clinicUrl);

        if (activeLeft.menu === 0 && activeLeft.option === 0) {
            history.push(`./${_clinicUrl}`)
        }



    }




    let loadInitialData = () => {
        dispatch(fetch_dashboardData(
            userData?.profileId,
            userData?.userName,
            userData?.mobileNumber
        ))
    }
    let loadrecentactivitest = () => {
        dispatch(fetch_recentactivities(
            userData?.profileId,
            userData?.userName,
            userData?.mobileNumber
        ))
    }

    let reduxData = useSelector(state => state)



    let consultations = reduxData.consultationDetails.appointmentDetail ? reduxData.consultationDetails.appointmentDetail : []


    let consultationToday = consultations.length > 0 ? consultations[consultations.length - 1] : null

    let consultationDetails = reduxData.consultationDetails




    let sideNavList = [
        {
            tittle: "MY APPOINTMENTS",
            list: [
                {
                    name: "Book a consultation",
                    id: 1,
                    icon: null
                },
                {
                    name: "Appoinment History",
                    id: 2,
                    icon: null
                }]
        },
        {
            tittle: "SETTINGS",
            list: [
                {
                    name: "Terms and Conditions",
                    id: 3,
                    icon: null
                },
                {
                    name: "Privacy Policy",
                    id: 4,
                    icon: null
                },
                {
                    name: "SIGN OUT",
                    id: 5,
                    icon: null
                }]
        }
    ]

    let handlePageChange = (page) => {
        history.push({
            pathname: `${page}`,
        });
    }


    const playAudio = () => {

        if (!isPlayed) {
            new Audio(audio).play();
            setPlayed(true)
        }


        // var birdSound = new Audio('http://www.noiseaddicts.com/samples_1w72b820/4929.mp3');
        // birdSound.loop = false;
        // birdSound.play();

    }


    let fileChangeHandler = (e) => {

        console.log(e.target.files);

        setLocalReports([...localReports, { filename: e.target.files[0].name, filecontent: e.target.files[0] }])

        uploadReportsHandler(e)

    }


    let downloadFile = (file) => {

        window.open(
            file, "_blank");

    }





    let logoutFunction = () => {

        dispatch(
            logoutAction(userData, dashboardData)
        );



        if (clientDetails) {

            history.push("/signin")
            window.open(clientDetails.homeurl, "_blank")

        }

    }


    let uploadReportsHandler = (e) => {



        let formData = new FormData();
        formData.append("appintmentId", consultationToday?.appointmentId)


        if (e.target.files[0]) {
            formData.append(`file`, e.target.files)
        }

        dispatch(
            uploadReports({ formData, userData, dashboardData })
        );

    }

    let openPrescription = () => {

        window.open(consultationToday.prescription, "_blank")
    }





    // ***V2 Consultation flow..........................................................................................

    //201 result is stored here
    let [activeConsultation, setActiveConsultation] = useState(null)

    //65 result is stored here
    let [activeConsultationDetails, setActiveConsultationDetails] = useState(null)

    useEffect(() => {


        call201().then((res) => {



            setActiveConsultation(res.data)



        })

        hit201()

    }, [])


    // useEffect(() => {

    //     if (activeConsultation) {
    //         if (activeConsultation.reports) {


    //             activeConsultation.reports.length > 0 ?
    //                 setReports([...activeConsultation.reports]) : console.log("No reports")


    //         }


    //     }


    // }, [activeConsultation])

    let call201 = async () => {

        let paramAppoint =
        {
            "requestType": "201",
            "token": "C2MDVerificationToken",
            "data": {
                "userId": userData?.userId,
                "userType": userData?.userType,
                "browserTimeZone": "GMT+05:30",
                "Ipaddress": "192.168.1.34",
                "useragent": "RMX1992",
                "Os": "Android Version 11"
            }
        }

        // console.log("Calling................", paramAppoint);

        const response = await loginedApi.post("consultation", paramAppoint);

        // console.log("Res................", response);

        return response.data

    }

    let hit201 = () => {

        setInterval(function () {


            call201().then((res) => {

                console.log(typeof (res.data));
                setActiveConsultation(res.data)

            })



        }, 15000);

    }

    let call65 = async () => {

        let today = moment(new Date()).format("DD-MMM-YYYY")

        let paramAppoint =
        {
            "requestType": "65",
            "token": "C2MDVerificationToken",
            "data":
            {
                "patientId": userData?.userId,
                "patientEmail": userData?.userName,
                "patientMobile": userData?.mobileNumber,
                "browserTimeZone": "GMT%2B05:30",
                "dayOfAppointment": today,
                "appointmentNavigation": "start",
                "currency": "INR",
                "accessCountry": "IN",
                "todayRate": "74.45000",
                "Ipaddress": {},
                "useragent": "Mozilla/5.0 (Linux; Android 8.0.0; Nexus 6P Build/OPP3.170518.006) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.81 Mobile Safari/537.36", "Browser": "Chrome-95.0.4638.69", "Os": "Win32"
            }
        }

        const response = await loginedApi.post("appointments", paramAppoint);

        return response.data

    }

    useEffect(() => {


        if (activeConsultation?.appointmentId) {
            call65().then((respo) => {

                console.log("65 responce--->", respo.data?.appointmentDetail, "appointmentDetail");

                if (respo.data) {

                    console.log("*** There is consultation available in 65 ???? ***");
                    setActiveConsultationDetails(respo.data)

                }
                else {
                    console.log("***There is no consultation available in 65 ???? ***");
                }
            })

        }
        else {
            console.log("***There is no consultation available in 201***");
        }


    }, [activeConsultation?.appointmentId])



    useEffect(() => {

        if (!activeConsultation?.appointmentId) {

            call65().then((respo) => {

                console.log("65 responce--->", respo.data?.appointmentDetail, "appointmentDetail");

                if (respo.data) {

                    console.log("*** There is consultation available in 65 ???? ***");
                    setActiveConsultationDetails(respo.data)

                }
                else {
                    console.log("***There is no consultation available in 65 ???? ***");
                }
            })

        }
        else {
            console.log("***There is no consultation available in 201***");
        }

    }, [activeConsultation])



    let filterUpcomingAppointments = (appointmentsArray) => {



        if (appointmentsArray?.appointmentDetail.length > 0) {
            let tempArray = appointmentsArray?.appointmentDetail.filter(element => element.status == "Upcoming" || element.status == "On-going" || element.status == "Completed")


            return tempArray
        }

    }




    return (

        <>
            <div className="container-fluid m-0 home-container">
                <div className="row p-3 m-0" style={{ overflow: "hidden", }}>

                    <div className="col-md-2 col-sm-12 col-12 side-nav-container" style={{ overflowY: "auto", minWidth: "280px" }} >



                        <div style={{ width: "100%" }}>

                            <TittleCard
                                className="d-flex flex-column justify-content-start align-items-center mt-2" style={{ width: "100%", height: "79.14px" }}>

                                <div className="dr-name-home text-start w-100" >{userData ? userData.profileName : "---"}</div>
                                <div className="dr-id-home text-start w-100" >ID: {userData ? userData.profileId : "---"}</div>
                            </TittleCard>

                            <div className={`list-tittle ${isDash ? "active" : null}`} onClick={() => { setDash(true); setActiveTitle("Dashboard") }}>
                                <div className="icon" ><i class="fas fa-tachometer-alt"></i></div>
                                Dashboard</div>

                            {
                                DASHBOARD_LEFT_OPTIONS.map((object, menuKey) => {

                                    return (

                                        <>

                                            <div className="list-tittle">{object.tittle}</div>

                                            <ul className='side-nav'>

                                                {
                                                    object.options.map((element, optionKey) => {
                                                        return (
                                                            <li className={activeLeft.menu === menuKey && activeLeft.option === optionKey && !isDash ? "active" : null} onClick={() => { setActiveleft({ menu: menuKey, option: optionKey }); setDash(false) }}>
                                                                <div className="icon" >
                                                                    {
                                                                        element.ico
                                                                    }
                                                                </div>

                                                                <div className="text">{element.name}</div>
                                                            </li>
                                                        )
                                                    })
                                                }


                                            </ul>


                                        </>

                                    )

                                })
                            }

                            <div className="list-tittle">
                                <div className="header-card logout" onClick={logoutFunction}>
                                    <div className="icon"><i class="fal fa-sign-out-alt"></i></div>
                                    SIGN OUT
                                </div>
                            </div>

                            <ul className='side-nav'></ul>

                        </div>



                        {/* <div className="header-card logout" onClick={logoutFunction}>
                            <div className="icon"><i class="fal fa-sign-out-alt"></i></div>
                            SIGN OUT
                        </div> */}





                        {/* <div className="home-side-nav" style={{ marginRight: "5%" }}>
                        <ul>
                            <span> SETTINGS</span>
                            <li><NavRoundIconContainer>
                                <PersonIcon />
                            </NavRoundIconContainer> Terms and Conditions</li>

                            <li><NavRoundIconContainer>
                                <PersonIcon />
                            </NavRoundIconContainer> Privacy Policy</li>

                            <li><NavRoundIconContainer>
                                <PersonIcon />
                            </NavRoundIconContainer> FAQ</li>

                            <li><NavRoundIconContainer>
                                <PersonIcon />
                            </NavRoundIconContainer> SIGN OUT</li>

                        </ul>
                    </div> */}


                    </div>

                    <div className="col-md-9 col-sm-12 col-12 p-2 home-content-scroll-container"
                    >

                        <TittleCard style={{ width: "100%" }} >



                            <div className="page-name-home">{activeTitle}</div>

                        </TittleCard>

                        <TittleCard className="mt-3 p-0" style={{ minHeight: "85vh", overflow: "auto" }} >

                            {
                                isDash ?

                                    <div className="row p-0 m-2">
                                        <div className="col-md-6 col-sm-12 col-12 p-2">
                                            <div className="dash-card">

                                                <div className="dash-card-tittle">
                                                    CONSULTATION TODAY ({moment().format('DD-MMM-YYYY')})
                                                </div>
                                                <div className="dash-card-body">
                                                    {
                                                        filterUpcomingAppointments(activeConsultationDetails)?.length > 0 ?

                                                            <ConsultationCarousel 
                                                            activeConsultation={activeConsultation}
                                                            data={filterUpcomingAppointments(activeConsultationDetails)}  />
                                                            :
                                                            <div>THERE ARE NO CONSULTATIONS AVAILABLE FOR YOU NOW</div>

                                                    }

                                                </div>




                                                {/* <div className="dash-card-body">

                                                    {
                                                        filterUpcomingAppointments(activeConsultationDetails)?.length > 0 ?


                                                            filterUpcomingAppointments(activeConsultationDetails).map((element, key) => {



                                                                if (key == 0) {



                                                                    return (
                                                                        <div className="today_consultation_card">

                                                                            <div className="body">

                                                                                <img src={element.doctorImage ? element.doctorImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0kigo369AKCLUVSYPBs4K54t0WQbsfL9Lmw&usqp=CAU"} alt="" className="dr_image" />

                                                                                <div className="dr_details">

                                                                                    <span className="dr_name">{element.doctorName}</span>
                                                                                    <span className="dr-caption">Appointment Time : {element.appointmentTimes}</span>
                                                                                    <span className="dr-caption">Appointment Reason : {element.reasonForVisit}</span>
                                                                                  

                                                                                    <div class="dr-line">&nbsp;</div>



                                                                                </div>

                                                                            </div>

                                                                            <div className="footer">

                                                                                <div className="dr-caption">

                                                                                    <div style={{
                                                                                        width: "100%", textAlign: "start", marginTop: "10px", fontSize: 13, fontWeight: 500,
                                                                                        display: "flex",
                                                                                        flexDirection: "row",
                                                                                        justifyContent: "space-between",
                                                                                        alignItems: "center"

                                                                                    }}>

                                                                                        <span>Reports :</span>
                                                                                      


                                                                                    </div>

                                                                                    <div className="reports-container">

                                                                                        {
                                                                                            reports.length > 0 ?

                                                                                                reports.map((each_report, key) => {

                                                                                                    return (
                                                                                                        <div onClick={() => { downloadFile(reports[key].filecontent) }} className="report-name">{each_report.filename}</div>
                                                                                                    )

                                                                                                })


                                                                                                : <div className="no-reports-text">( No reports uploaded. Click the + button to add report )</div>
                                                                                        }





                                                                                        <Tooltip placement="topLeft" title="Add new report">
                                                                                            <div className="report-name-transparent">
                                                                                                <label style={{ cursor: "pointer" }} htmlFor="contained-button-file">
                                                                                                    <AddFileIcon />
                                                                                                </label>

                                                                                                <input
                                                                                                    type="file"
                                                                                                    multiple
                                                                                                    onChange={fileChangeHandler}
                                                                                                    style={{ display: 'none' }}
                                                                                                    id="contained-button-file"
                                                                                                />

                                                                                            </div>
                                                                                        </Tooltip>


                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                        </div>

                                                                    )
                                                                }
                                                                else {
                                                                    console.log("No appointments in 0th position***");
                                                                }


                                                            })



                                                            :

                                                            <div>THERE ARE NO CONSULTATIONS AVAILABLE FOR YOU NOW</div>

                                                    }


                                                </div> */}


                                                {/* <div className="dash-card-footer">

                                                

                                                    {
                                                        filterUpcomingAppointments(activeConsultationDetails)?.map((element, key) => {


                                                            if (key == 0) {

                                                        

                                                                return (

                                                                    element.status === "Completed"?

                                                                        <div className="row p-0 m-0 w-100">

                                                                            <div className="col-md-12 col-sm-12 col-12 p-0 m-0 text-center">
                                                                                {
                                                                                    consultationToday?.prescription ?
                                                                                        <DashButton action={consultationToday.prescription} onClick={openPrescription} text="Download Prescription" active />
                                                                                        :
                                                                                        <DashButton text="Download Prescription" inactive />
                                                                                }

                                                                            </div>

                                                                        </div>


                                                                        :
                                                                        <div className="row p-0 m-0 w-100">

                                                                       

                                                                            <div className="col-md-12 col-sm-12 col-12 p-0 m-0 text-center" onClick={() => { isWithinMinutes(element.appointmentDate, element.appointmentTimes) ? handlePageChange(`/meet_pt/${element.appointmentId}`) : console.log(""); }}>
                                                                                <DashButton text="Join Now" 
                                                                                active={true}
                                                                                // active={isWithinMinutes(element.appointmentDate, element.appointmentTimes)}
                                                                                 />
                                                                            </div>

                                                                        </div>

                                                                )

                                                            }



                                                        })

                                                    }




                                                </div> */}


                                            </div>
                                        </div>

                                        <div className="col-md-6 col-sm-12 col-12 p-2">
                                            <div className="dash-card">

                                                <div className="dash-card-tittle">
                                                    FIND YOUR DOCTOR NOW
                                                </div>


                                                <div className="dash-card-body d-flex flex-column justify-content-center align-items-center">
                                                    <img className="find-dr-icon" src={find_dr_icon} alt="" />

                                                    Find your doctor by speciality.
                                                </div>


                                                <div className="dash-card-footer">
                                                    <div className="row p-0 m-0 w-100">
                                                        <div className="col-md-12 col-sm-12 col-12 p-0 m-0 text-center">
                                                            <DashButton onClick={() => { handlePageChange(`./${clientDetails ? clientDetails.clinicurl : "speciality"}`) }} action='./speciality' text="BOOK NOW" active />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        {/* <div className="col-md-6 col-sm-12 col-12 p-2">
                                            <div className="dash-card">

                                                <div className="dash-card-tittle">
                                                    TODAY'S APPOINTMENTS
                                                </div>


                                                <div className="dash-card-body d-flex flex-column justify-content-start">


                                                    {
                                                        reduxData.login.patientDashboard ?

                                                            reduxData.login.patientDashboard.appointmentRequestDetails.length !== 0 ?

                                                                reduxData.login.patientDashboard.appointmentRequestDetails.map((obj, key) => {
                                                                    return (

                                                                        <RecentActivityListItem data={obj} key={key} />

                                                                    )
                                                                })


                                                                : "NO RECENT ACTIVITIES AVAILABLE"

                                                            : null
                                                    }

                                                </div>


                                                <div className="dash-card-footer">
                                                    <div className="row p-0 m-0 w-100">
                                                        <div className="col-md-12 col-sm-12 col-12 p-0 m-0 text-center">
                                                            <DashButton text="View More" disabled />
                                                        </div>

                                                    </div>
                                                </div>


                                            </div>
                                        </div> */}



                                        <div className="col-md-6 col-sm-12 col-12 p-2">
                                            <div className="dash-card ">

                                                <div className="dash-card-tittle">
                                                    APPOINTMENT REQUESTS {reduxData.login.patientDashboard ? `(${reduxData.login.patientDashboard.appointmentRequestDetails.length})` : null}
                                                </div>


                                                <div className="dash-card-body d-flex flex-column justify-content-start">
                                                    {/* NO RECENT ACTIVITIES AVAILABLE */}

                                                    {
                                                        reduxData.login.patientDashboard ?

                                                            reduxData.login.patientDashboard.appointmentRequestDetails.length !== 0 ?

                                                                reduxData.login.patientDashboard.appointmentRequestDetails.map((obj, key) => {
                                                                    return (

                                                                        <RecentActivityListItem data={obj} key={key} />

                                                                    )
                                                                })


                                                                : <div style={{ marginTop: "20%" }}>NO REQUESTED APPOINTMENTS AVAILABLE</div>

                                                            : null
                                                    }

                                                </div>




                                                <div className="dash-card-footer">
                                                    <div className="row p-0 m-0 w-100">
                                                        <div className="col-md-12 col-sm-12 col-12 p-0 m-0 text-center">
                                                            {/* <DashButton text="View More" inactive /> */}
                                                            &nbsp;
                                                        </div>

                                                    </div>
                                                </div>


                                            </div>
                                        </div>


                                        {/* <div className="col-md-6 col-sm-12 col-12 p-2">
                                            <div className="dash-card">

                                                <div className="dash-card-tittle">
                                                    INVITATIONS
                                                </div>


                                                <div className="dash-card-body">
                                                    NO INVITATION AVAILABLE
                                                </div>


                                                <div className="dash-card-footer">
                                                    <div className="row p-0 m-0 w-100">
                                                        <div className="col-md-12 col-sm-12 col-12 p-0 m-0 text-center">

                                                        </div>

                                                    </div>
                                                </div>


                                            </div>
                                        </div> */}


                                        {/* <div className="col-md-6 col-sm-12 col-12 p-2">
                                            <div className="dash-card">

                                                <div className="dash-card-tittle">
                                                    RECENT ACTIVITY
                                                </div>


                                                <div className="dash-card-body d-flex flex-column justify-content-start">


                                                    {
                                                        reduxData.login.patientDashboard ?

                                                            reduxData.login.patientDashboard.recentBook.length !== 0 ?

                                                                reduxData.login.patientDashboard.recentBook.map((obj, key) => {
                                                                    return (

                                                                        <RecentActivityListItem data={obj} key={key} />

                                                                    )
                                                                })


                                                                : "NO RECENT ACTIVITIES AVAILABLE"

                                                            : null
                                                    }

                                                </div>


                                                <div className="dash-card-footer">
                                                    <div className="row p-0 m-0 w-100">
                                                        <div className="col-md-12 col-sm-12 col-12 p-0 m-0 text-center">

                                                        </div>

                                                    </div>
                                                </div>


                                            </div>
                                        </div> */}
                                    </div>

                                    :
                                    DASHBOARD_LEFT_OPTIONS[activeLeft.menu].options[activeLeft.option].component ?
                                        DASHBOARD_LEFT_OPTIONS[activeLeft.menu].options[activeLeft.option].component : null
                            }


                        </TittleCard>

                    </div>

                </div>



            </div>

            <Footer />

        </>
    );
}

export default MobileDashboard;

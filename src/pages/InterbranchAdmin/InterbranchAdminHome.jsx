import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FETCH_ADMIN_DASHBOARD_REPORT, FETCH_ADMIN_DETAILED_REPORT, FETCH_CONSOLIDATED_REPORTS } from '../../actions/InterbranchAdminActions'
import { logoutAction } from '../../actions/LoginAction'
import { FETCH_PR_ADMIN_DASHBOARD_REPORT } from '../../actions/PrescriptionFormActions'
import CustomeModal from '../../components/CustomeModal/CustomeModal'
import MisReportModalContent from '../../components/MisReportModal/MisReportModalContent'
import TodaysReport from '../../components/TodaysReport/TodaysReport'
import TodaysReportModalContent from '../../components/TodaysReportModalContent/TodaysReportModalContent'
import { interbranchAdminSideMenu } from './constants'
import { useHistory } from "react-router-dom";
import './interbranchadminhome.css'

function InterbranchAdminHome() {

    //Declerations..............................................................................
    let dispatch = useDispatch()
    let history = useHistory()

    //States....................................................................................
    let [activeLeft, setActiveleft] = useState({ menu: "dashboard", option: 0 })

    const { ApointmentHistoryModal, ViewFileModal, deleteFileModel, commonDeleteModal, PatientDetailsModal, todaysReportModal, misReportModal } = useSelector((state) => state.interbranchModal)

    const userData = useSelector(
        (state) => state.login.user
    );

    //Refs......................................................................................
    const ref = useRef(null)


    //Functions................................................................................

    useEffect(() => {

        dispatch(FETCH_ADMIN_DASHBOARD_REPORT())
        dispatch(FETCH_ADMIN_DETAILED_REPORT({ context: "Admin Home useEffect" }))
        dispatch(FETCH_CONSOLIDATED_REPORTS())

    }, [])

    let logoutFunction = () => {

        dispatch(
            logoutAction(userData)
        );

        history.push("/signin")

    }

    let onChangeLeftOptions = ({ menu, option }) => {

        if (menu == 1 && option == 0) {
            dispatch(FETCH_ADMIN_DETAILED_REPORT({ context: "Dashboard click" }))
        }
        else if (menu == 1 && option == 1) {
            dispatch(FETCH_CONSOLIDATED_REPORTS())
        }

    }



    return (
        <div className='interbranch-container'>
            <div className="left-container" >

                <div className="letf-top">
                    <div className="header-card" style={{
                        marginBottom: "2.5rem",
                        width: "100%",
                        height: "79.14px",
                        color: "rgba(0, 0, 0, 0.85)",
                        display:"flex",
                        flexDirection:"column",
                        alignItems:"center"
                    }}>
                        <div className="dr-name-home text-center w-100" style={{ fontWeight: "500" }} >{userData ? userData.profileName : "---"}</div>
                        <div className="dr-id-home text-center w-100" style={{ fontWeight: "500" }}>ID: {userData ? userData.profileId : "---"}</div>
                    </div>

                    <div className="tittle" onClick={() => {

                        dispatch(FETCH_ADMIN_DASHBOARD_REPORT())
                        setActiveleft({ menu: "dashboard", option: 0 })
                    }} style={{ fontWeight: activeLeft.menu == "dashboard" ? "bold" : "normal", cursor: "pointer" }} >Dashboard</div>


                    {
                        interbranchAdminSideMenu.map((object, menuKey) => {

                            if (object.tittle !== "Dashboard") {
                                return (

                                    <React.Fragment key={menuKey}>

                                        <div className="list-tittle">{object.tittle}</div>

                                        <ul className='side-nav'>

                                            {
                                                object.options.map((element, optionKey) => {
                                                    return (
                                                        <li key={optionKey} className={activeLeft.menu === menuKey && activeLeft.option === optionKey ? "active" : null} onClick={() => {


                                                            onChangeLeftOptions({ menu: menuKey, option: optionKey })
                                                            setActiveleft({ menu: menuKey, option: optionKey })
                                                            // dispatch(setSelectedAppointmentRedux(null))

                                                        }}>
                                                            <div className="icon">
                                                                {element.ico}
                                                            </div>
                                                            <div className="text">{element.name}</div>
                                                        </li>
                                                    )
                                                })
                                            }


                                        </ul>


                                    </React.Fragment>

                                )
                            }

                        })
                    }

                    {/* <div className="tittle list-tittle" onClick={() => { setActiveleft({ menu: "consolidated", option: 0 }) }} style={{ fontWeight: activeLeft.menu == "consolidated" ? "500" : "normal", cursor: "pointer" }} >Consolidate Report</div> */}
                </div>


                <div className="header-card logout" onClick={logoutFunction}>
                    <div className="icon">&nbsp;</div>
                    SIGN OUT
                </div>



            </div>

            <div className="right-container" ref={ref}>
                <div className="header-card">
                    <span>
                        {
                            activeLeft.menu == "dashboard" ? "Dashboard" : activeLeft.menu == "consolidated" ? "Consolidated"
                                : interbranchAdminSideMenu[activeLeft.menu].options[activeLeft.option].name
                        }
                    </span>

                    <span className='caption'>
                        {/* {getTodayDateStringForHeader()} */}
                        &nbsp;
                    </span>
                </div>



                <div className="right-menu-container">

                    <CustomeModal
                        width={700}
                        state={todaysReportModal}
                        modalName="todaysReportModal"
                        component={<TodaysReportModalContent />}
                        isRight
                    />



                    <CustomeModal
                        width={700}
                        state={misReportModal}
                        modalName="misReportModal"
                        component={<MisReportModalContent />}
                        isRight
                    />

                    {/* <CustomeModal
                        state={ApointmentHistoryModal}
                        modalName="ApointmentHistoryModal"
                        component={<AppointmentHistoryModalContent />}
                        isRight
                    />

                   

                    <CustomeModal
                        width={700}
                        state={misReportModal}
                        modalName="misReportModal"
                        component={<MisReportModalContent />}
                        isRight
                    />


                    <CustomeModal
                        state={PatientDetailsModal}
                        modalName={PATIENT_DETAILS_MODAL_NAME}
                        component={<PatientDetailsModalContent />}
                        isRight
                    />

                    <CustomeModal

                        state={ViewFileModal}
                        modalName="ViewFileModal"
                        component={<ViewFileModalComponent name="ViewFileModal" />}


                    />

                    <CustomeModal
                        state={deleteFileModel}
                        modalName="deleteFileModel"
                        component={<DeleteFileModelComponent name="ViewFileModal" />}
                    />

                    <CustomeModal
                        state={commonDeleteModal}
                        modalName="commonDeleteModal"
                        component={<CommonDeleteModalBody />}
                    /> */}

                    <div className="container_interbranch">

                        {

                            activeLeft.menu == "dashboard" ? <TodaysReport /> :
                                //  activeLeft.menu == "consolidated" ? <ConsolidatedReport /> :

                                interbranchAdminSideMenu[activeLeft.menu].options[activeLeft.option].component ?
                                    interbranchAdminSideMenu[activeLeft.menu].options[activeLeft.option].component : null



                        }



                    </div>
                </div>


            </div>
        </div>
    )
}

export default InterbranchAdminHome
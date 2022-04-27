import { Tooltip } from 'antd';
import React from 'react'
import { useHistory } from 'react-router-dom';
import Slider from "react-slick";
import { AddFileIcon } from '../../../../assets/Logos/Icons';
import { isWithinMinutes } from '../../../../Helpers/dateFunctions';
import DashButton from '../../../Normal/DashButton/DashButton';
import './index.css'


function ConsultationCarousel({ data,activeConsultation }) {

    let history = useHistory()

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
    };


    let downloadFile = (file) => {

        window.open(
            file, "_blank");

    }

    let fileChangeHandler = (e) => {

        console.log(e.target.files);

        // setLocalReports([...localReports, { filename: e.target.files[0].name, filecontent: e.target.files[0] }])

        // uploadReportsHandler(e)

    }

    let handlePageChange = (page) => {
        history.push({
            pathname: `${page}`,
        });
    }


    console.log(activeConsultation);

    return (
        <div style={{ width: "97%", height: "230px" }}>
            <Slider arrows={false} {...settings}>
                {
                    data && data.length > 0 &&

                    data.map((element, key) => {
                        console.log(element);
                        return (
                            <div key={key} style={{ width: "100%", height: "100%" }}>
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
                                                    element.reports?.length > 0 ?

                                                        element.reports.map((each_report, key) => {

                                                            return (
                                                                <Tooltip placement="topLeft" title={each_report.filename}>
                                                                    <div onClick={() => { downloadFile(element.reports[key].filecontent) }} className="report-name">{"Rpt "+(key+1)}</div>
                                                                </Tooltip>
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

                                <div className="dash-card-footer" style={{paddingBottom:"0px"}}>



                                    {



                                        element.status === "Completed" ?

                                            <div className="row p-0 m-0 w-100">

                                                <div className="col-md-12 col-sm-12 col-12 p-0 m-0 text-center">
                                                    {
                                                        element?.prescription ?
                                                        <DashButton 
                                                        //action={consultationToday.prescription} 
                                                        //onClick={openPrescription} text="Download Prescription" 
                                                        active />
                                                        :
                                                        <DashButton text="Download Prescription" inactive />
                                                    }

                                                </div>

                                            </div>


                                            :
                                            <div className="row p-0 m-0 w-100">



                                                <div className="col-md-12 col-sm-12 col-12 p-0 m-0 text-center"
                                                onClick={() => { activeConsultation?.upcomingAppointmentId==element.appointmentId? handlePageChange(`/meet_pt/${element.appointmentId}`) : console.log(""); }}
                                                >
                                                    <DashButton width="100%" text="Join Now"
                                                        active={activeConsultation?.upcomingAppointmentId==element.appointmentId}
                                                    // active={isWithinMinutes(element.appointmentDate, element.appointmentTimes)}
                                                    />
                                                </div>

                                            </div>

                                    }




                                </div>
                            </div>

                        )
                    })

                }


            </Slider>
        </div>
    )
}

export default ConsultationCarousel
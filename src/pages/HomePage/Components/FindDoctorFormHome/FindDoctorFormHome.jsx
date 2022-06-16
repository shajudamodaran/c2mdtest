import React from 'react'
import './finddoctorhome.scss'
import { Select, Input } from 'antd';


import doctor from '../../../../assets/HomepageAssets/Find Doctor/doctor.png'
import health from '../../../../assets/HomepageAssets/Find Doctor/health.svg'
import search from '../../../../assets/HomepageAssets/Find Doctor/search.svg'
import patient from '../../../../assets/HomepageAssets/Find Doctor/patient.png'
import grid from '../../../../assets/HomepageAssets/Find Doctor/grid.svg'


const { Option } = Select;
function FindDoctorFormHome() {
    return (
        <div className='find-doctor-home'>



            <div className="grid-icon for-web">
                <img src={grid} alt="" />
            </div>



            <div className="find-doctor-home_form">

                <div className="dr-online-icon for-web">
                    <img src={doctor} alt="" />
                </div>

                <div className="health-icon for-web">
                    <img src={health} alt="" />
                </div>

                <div className="search-icon for-web">
                    <img src={search} alt="" />
                </div>

                <div className="patient-icon for-web">
                    <img src={patient} alt="" />
                </div>




                <div className="header">
                    <span className='title'>Find Doctor</span>
                    <span className='caption'>Neque aorro quisquam est qui dolorem</span>
                </div>

                <div className="body">
                    <div className="form-item">
                        <Input placeholder="Name" />
                    </div>

                    <div className="form-item">
                        <Select
                            placeholder='Speciality'
                            style={{
                                width: "100%",
                            }}
                        >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </div>

                    <div className="form-item">
                        <Input placeholder="City" />
                    </div>

                    <div className="form-item">
                        <Select
                            placeholder='Partner Hospital'
                            style={{ width: "100%" }}
                        >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </div>

                    <div className="form-item">
                        <button className='submit-btn'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FindDoctorFormHome
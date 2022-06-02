import React from 'react'
import PartnerHospitalButton from './Components/PartnerHospitalButton'
import './partnerhospitals.css'

import nsh from '../../../../assets/HomepageAssets/PartnerHospitals/nsh.png'
import h2 from '../../../../assets/HomepageAssets/PartnerHospitals/h2.png'
import h3 from '../../../../assets/HomepageAssets/PartnerHospitals/h3.png'
import h4 from '../../../../assets/HomepageAssets/PartnerHospitals/h4.png'
import h5 from '../../../../assets/HomepageAssets/PartnerHospitals/h5.png'
import h6 from '../../../../assets/HomepageAssets/PartnerHospitals/h6.png'
import h7 from '../../../../assets/HomepageAssets/PartnerHospitals/h7.png'
import h8 from '../../../../assets/HomepageAssets/PartnerHospitals/h8.png'
import h9 from '../../../../assets/HomepageAssets/PartnerHospitals/h9.png'
import h10 from '../../../../assets/HomepageAssets/PartnerHospitals/h10.png'
import h11 from '../../../../assets/HomepageAssets/PartnerHospitals/h11.png'
import h12 from '../../../../assets/HomepageAssets/PartnerHospitals/h12.png'

import grid from '../../../../assets/HomepageAssets/Speciality/grid.svg'
import health from '../../../../assets/HomepageAssets/Speciality/health.svg'
import heart2 from '../../../../assets/HomepageAssets/Speciality/heart2.svg'

function PartnerHospitals() {



    return (
        <div className='partner-hospitals-container'>

            <div className="plus-vector-back1">
                <img src={grid} alt="" />
            </div>


            <div className="partner-hospitals-row">
                <PartnerHospitalButton icon={nsh} />
                <PartnerHospitalButton icon={h2} />
                <PartnerHospitalButton icon={h3} />
            </div>

            <div className="partner-hospitals-row">
                <PartnerHospitalButton icon={h4} />
                <PartnerHospitalButton icon={h5} />

                <div className="vector-container">
                    <img src={health} alt="" />
                </div>

            </div>

            <div className="partner-hospitals-row">
                <PartnerHospitalButton icon={h6} />
                <PartnerHospitalButton icon={h7} />
                <PartnerHospitalButton icon={h8} />
            </div>

            <div className="partner-hospitals-row">

                <div className="vector-container2">
                    <img src={heart2} alt="" />
                </div>
                <PartnerHospitalButton icon={h9} />
                <PartnerHospitalButton icon={h10} />
            </div>

            <div className="partner-hospitals-row">
                <PartnerHospitalButton icon={h11} />
                <PartnerHospitalButton icon={h12} />
                <PartnerHospitalButton isViewAll />
            </div>
        </div>
    )
}

export default PartnerHospitals
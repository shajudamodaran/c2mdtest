import React from 'react'
import SpecialityButton from './Components/SpecialityButton'
import './homepagespecialitylist.css'

import liver from '../../../../assets/HomepageAssets/Speciality/liver.svg'
import liver2 from '../../../../assets/HomepageAssets/Speciality/liver2.svg'
import heart from '../../../../assets/HomepageAssets/Speciality/heart.svg'
import ent from '../../../../assets/HomepageAssets/Speciality/ent.svg'
import dental from '../../../../assets/HomepageAssets/Speciality/dental.svg'
import metabolic from '../../../../assets/HomepageAssets/Speciality/metabolic.svg'

import health from '../../../../assets/HomepageAssets/Speciality/health.svg'
import heart2 from '../../../../assets/HomepageAssets/Speciality/heart2.svg'
import grid from '../../../../assets/HomepageAssets/Speciality/grid.svg'
import grid2 from '../../../../assets/HomepageAssets/Speciality/grid2.svg'



function HomePageSpecialityList() {


    return (
        <div className='home-speciality-list-container'>

            <div className="plus-vector-back1">
                <img src={grid} alt="" />
            </div>

            <div className="plus-vector-back2">
                <img src={grid2} alt="" />
            </div>

            <div className="home-speciality-column">
                <SpecialityButton
                    icon={liver}
                    text="Andrology- Male Infertility"
                />
                <SpecialityButton
                    icon={liver2}
                    text="Endocrine Surgery"
                />
                <SpecialityButton
                    icon={liver}
                    text="Andrology- Male Infertility"
                />
            </div>
            <div className="home-speciality-column">

                <div className="vector-container">
                    <img src={heart2} alt="" />
                </div>

                <SpecialityButton
                    icon={heart}
                    text="Cardiac Anaesthesiology"
                />
                <SpecialityButton
                    icon={liver}
                    text="Andrology- Male Infertility"
                />

                <div className="vector-container">
                    <img src={health} alt="" />
                </div>

            </div>
            <div className="home-speciality-column">
                <SpecialityButton
                    icon={liver}
                    text="Andrology- Male Infertility" />
                <SpecialityButton
                    icon={ent}
                    text="Ear Nose and Throat (ENT)" />
                <SpecialityButton
                    icon={dental}
                    text="Dental Sciences" />
            </div>

            <div className="home-speciality-column">
                <SpecialityButton
                    icon={metabolic}
                    text="Bariatric & Metabolic Surgery"
                />
                <SpecialityButton text="View all specialities" isViewAll={true} />
            </div>

        </div>
    )
}

export default HomePageSpecialityList
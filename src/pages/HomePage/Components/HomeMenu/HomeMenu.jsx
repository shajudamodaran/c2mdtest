import React, { useEffect, useState } from 'react'
import { ArrowRightGreen } from '../../../../assets/Logos/Icons'
import FindDoctorFormHome from '../FindDoctorFormHome/FindDoctorFormHome'
import PartnerHospitals from '../Partner Hospitals/PartnerHospitals'
import HomePageSpecialityList from '../Specialities/HomePageSpecialityList'

import './homemenu.css'

function HomeMenu() {

    let [activeMenu, setActiveMenu] = useState(0)

    let [count, setCounter] = useState(0)
    let [activeNumber, setActiveNumber] = useState(0)

    useEffect(() => {

        // manageCount()

    }, [])


    let manageCount = async () => {

        let res = await startCount()
        console.log(res);

    }



    let startCount = async () => {

        var seconds = 10;
        var timer = setInterval(function () {
            seconds--;
            if (seconds == 0) {
                clearInterval(timer);

            } else {
                setCounter((10 - seconds) * 10)
            }
        }, 1000);


        return setTimeout(function () {
            return true
        }, 10000);





    }


    let options = [

        {
            id: 0,
            name: "Our Specialties",
            caption: "virtual primary care and mental health treatment when"
        },

        {
            id: 1,
            name: "Partner Hospitals",
            caption: "virtual primary care and mental health treatment when"
        },

        {
            id: 2,
            name: "Search Doctor",
            caption: "virtual primary care and mental health treatment when"
        },

    ]


    console.log(count);

    return (
        <div className='c2md-home-menu-container'>

            <div className='c2md-home-menu-container_left'>

                <ul className='c2md-home-menu-list'>
                    <div className="c2md-home-menu-list_main_title">Lorem ipsum doler</div>

                    {
                        options.map((element, key) => {

                            return (
                                <li 
                                // style={{ width: `${count}%` }} 
                                className={activeMenu === key ? "c2md-home-menu-list-active" : null} onClick={() => { setActiveMenu(key) }}>
                                    <div className="flex-row">
                                        <div>
                                            <h2 className="c2md-home-menu-list_title">{element.name}</h2>
                                            <div className="c2md-home-menu-list_caption">
                                                {element.caption}
                                            </div>
                                        </div>
                                        {
                                            activeMenu === key && <ArrowRightGreen />
                                        }
                                    </div>
                                </li>
                            )

                        })
                    }

                </ul>

            </div>

            <div className='c2md-home-menu-container_right'>

                <div className='c2md-home-menu-container_right_image'>
                    {
                        activeMenu == 0 ? <HomePageSpecialityList /> :
                            activeMenu == 1 ? <PartnerHospitals /> :
                                activeMenu == 2 ? <FindDoctorFormHome /> : null
                    }

                </div>

            </div>

        </div>
    )
}

export default HomeMenu
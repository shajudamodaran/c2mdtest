import React, { useEffect, useState } from 'react'
import { ArrowRightGreen } from '../../../../assets/Logos/Icons'
import FindDoctorFormHome from '../FindDoctorFormHome/FindDoctorFormHome'
import PartnerHospitals from '../Partner Hospitals/PartnerHospitals'
import HomePageSpecialityList from '../Specialities/HomePageSpecialityList'

import './homemenu.css'

function HomeMenu() {

    let [activeMenu, setActiveMenu] = useState(0)
    let [isPausedHover, setPauseHover] = useState(false)
    let [isPausedClick, setPauseClick] = useState(false)

    useEffect(() => {

        const myTimeout = setTimeout(incrementIndex, 10000);

    }, [])

    useEffect(() => {

        if(!isPausedClick)
        {
            const myTimeout = setTimeout(incrementIndex, 10000);
        }
       

    }, [activeMenu])

    let incrementIndex = () => {

        if(!isPausedClick)
        {
            if (activeMenu >= 2) {
                setActiveMenu(0)
            }
            else {
                setActiveMenu(activeMenu + 1)
            }
        }

        

    }

    console.log(isPausedClick);


    // useEffect(() => {

    //     // manageCount()
    //     count()
    //     setInterval(count, 30000)
       

    
    // }, [])


    // let count = async () => {

    //     if (!activeMenu) {
    //         changeMenu(0)
    //     }

    //     var time = activeMenu ? 0 : 1;

    //     var interval = setInterval(function () {

    //         if (time <= 2) {

    //             changeMenu(time)
    //             time++;
    //         }
    //         else {

    //             clearInterval(interval);
    //         }


    //     }, 10000);

    // }


    // let changeMenu = (index) => {

    //     if(!isPaused)
    //     {
    //         setActiveMenu(index)
    //     }

    // }


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

                                    <div className="loader-container">
                                        <div className="loader">&nbsp;</div>
                                    </div>

                                </li>
                            )

                        })
                    }

                </ul>

            </div>

            <div className='c2md-home-menu-container_right'>

                <div className='c2md-home-menu-container_right_image'
                    // onMouseEnter={() => { setPause(true) }}
                    // onMouseLeave={() => { setPause(false) }}
                    // onClick={() => { setPauseClick(!isPausedClick) }}
                >
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
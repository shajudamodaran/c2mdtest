import React, { createRef, useEffect, useRef, useState } from 'react'
import { ArrowRightGreen } from '../../../../assets/Logos/Icons'
import FindDoctorFormHome from '../FindDoctorFormHome/FindDoctorFormHome'
import PartnerHospitals from '../Partner Hospitals/PartnerHospitals'
import HomePageSpecialityList from '../Specialities/HomePageSpecialityList'
import useDynamicRefs from 'use-dynamic-refs';

import './homemenu.css'

function HomeMenu() {

    let [activeMenu, setActiveMenu] = useState(0)
    let [isPausedHover, setPauseHover] = useState(false)
    let [isPausedClick, setPauseClick] = useState(false)



    let incrementIndex = () => {

        if (!isPausedClick) {
            if (activeMenu >= 2) {
                setActiveMenu(0)
            }
            else {
                setActiveMenu(activeMenu + 1)
            }
        }



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



    //V2 Counter....................................................................

    let [counter, setCounter] = useState(0)

    let _refsArray = ["0", "1", "2"]
    const [getRef, setRef] = useDynamicRefs();

    let maxCount = 9


    useEffect(() => {

        increaseCounter()

    }, [])

    useEffect(() => {

        const loaderRef = getRef(activeMenu.toString());


        if (isPausedHover && loaderRef) {

            loaderRef.current.style.webkitAnimationPlayState = "paused"
            //loaderRef.current.style.backgroundColor="red"
        }
        else {
            loaderRef.current.style.webkitAnimationPlayState = "running"
            //loaderRef.current.style.backgroundColor="green"
        }

    }, [isPausedHover])



    let increaseCounter = () => {

        const timer = setTimeout(() => {

            if (counter >= maxCount) {
                setCounter(0)
            }
            else {

                setCounter(counter + 1)
            }


        }, 1000);

    }


    useEffect(() => {

        if (!isPausedHover) {

            increaseCounter()

            if (counter >= maxCount) {
                changeActivemenu()
            }

        }




    }, [counter])


    let changeActivemenu = () => {

        if (activeMenu >= 2) {
            setActiveMenu(0)
        }
        else {

            setActiveMenu(activeMenu + 1)
        }
    }


    let handlePause = () => {

        setPauseClick(true)

    }



    return (
        <div className='c2md-home-menu-container'>

            <div className='c2md-home-menu-container_left'>

                <ul className='c2md-home-menu-list'>
                    <div className="c2md-home-menu-list_main_title">Lorem ipsum doler</div>

                    {
                        options.map((element, key) => {

                            return (
                                <>
                                    <li
                                        // style={{ width: `${count}%` }} 
                                        className={activeMenu === key ? "c2md-home-menu-list-active" : null} onClick={() => {
                                            setActiveMenu(key)
                                            setPauseClick(false)
                                            setCounter(0)
                                        }}>
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
                                            <div ref={setRef(key.toString())} className={`loader ${isPausedHover ? "pause" : null}`} >&nbsp;</div>
                                        </div>

                                    </li>

                                    <div className='mobile-menu-container for-mobile'>
                                        <div className='c2md-home-menu-container_right_image'
                                            onMouseEnter={() => { setPauseHover(true) }}
                                            onMouseLeave={() => {
                                                setPauseHover(false)
                                                increaseCounter()
                                            }}
                                            onClick={handlePause}
                                        >
                                            {
                                                activeMenu == 0 &&  activeMenu == key? <HomePageSpecialityList /> :
                                                    activeMenu == 1 &&  activeMenu == key ? <PartnerHospitals /> :
                                                        activeMenu == 2  &&  activeMenu == key? <FindDoctorFormHome /> : null
                                            }

                                        </div>
                                    </div>
                                </>



                            )

                        })
                    }

                </ul>

            </div>

            <div className='c2md-home-menu-container_right for-web'>

                <div className='c2md-home-menu-container_right_image'
                    onMouseEnter={() => { setPauseHover(true) }}
                    onMouseLeave={() => {
                        setPauseHover(false)
                        increaseCounter()
                    }}
                    onClick={handlePause}
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
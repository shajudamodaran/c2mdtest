import React,{useState} from 'react'
import { ArrowRightGreen } from '../../../../assets/Logos/Icons'

import './homemenu.css'

function HomeMenu() {

    let [activeMenu, setActiveMenu] = useState(0)


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
                                <li className={activeMenu===key?"c2md-home-menu-list-active":null} onClick={()=>{setActiveMenu(key)}}>
                                    <div className="flex-row">
                                        <div>
                                            <h2 className="c2md-home-menu-list_title">{element.name}</h2>
                                            <div className="c2md-home-menu-list_caption">
                                                {element.caption}
                                            </div>
                                        </div>
                                        {
                                            activeMenu===key&&<ArrowRightGreen />
                                        }
                                    </div>
                                </li>
                            )

                        })
                    }

                </ul>

            </div>

            <div className='c2md-home-menu-container_right'>

                <div className='c2md-home-menu-container_right_image'>&nbsp;</div>

            </div>

        </div>
    )
}

export default HomeMenu
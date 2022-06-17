import React from 'react'
import './downloadapphome.css'
import Image from '../../../../assets/HomepageAssets/KnowMore/c2md-dr-l.png'
import Image2 from '../../../../assets/HomepageAssets/KnowMore/Group 43124.png'
import { GreenCheckSmall, OnlineIndicatorWithBorder } from '../../../../assets/Logos/Icons'
import DownloadQrCode from './DownloadQrCode/DownloadQrCode'

function KnowMore() {
    return (
        <div className='c2md-download-app-home'>

            <div className='c2md-download-app-home_left know-more-left'>

                {/* <div className="top-count">
                    <div className="top-count_left">

                        <OnlineIndicatorWithBorder />

                    </div>

                    <div className="top-count_right">
                        <div className="head">100+</div>
                        <div className="caption">Lorem Ipsumdoler</div>
                    </div>
                </div> */}

                <img className='know-more-image' src={Image2} alt="" />

                {/* <div className="bottom-count">

                    <div className="bottom-count_left">

                        <div className="title-container">
                            <span className="title">Lorem Ipsum doler</span>
                            <span className="caption">Lorem Isddyeea</span>
                        </div>

                        <div className="avatar-container">
                            <div className="avatar v1"><img src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></div>
                            <div className="avatar v2"><img src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></div>
                            <div className="avatar v3"><img src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></div>
                            <div className="avatar v4"><img src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></div>
                            <div className="avatar v5"><div className="others">+100</div></div>



                        </div>


                    </div>



                </div> */}


            </div>
            <div className='c2md-download-app-home_right'>

                <div className='c2md-download-app-home_right_title'>Serving your health needs is our priority with great service & good care</div>

                <div className='c2md-download-app-home_right_caption'>Virtual primary care and mental health treatment onalized personalized desktop or smartphone Virtual primary care desktop or smartphone primary care.</div>

                <div className='c2md-download-app-home_right_options'>
                    <ul>
                        <li>
                            <div className="icon"><GreenCheckSmall /></div>
                            Video consult with the top specialists</li>
                        <li>
                            <div className="icon"><GreenCheckSmall /></div>
                            Verified specialist profiles</li>

                        <li>
                            <button className='know-more-button'>Know More</button>
                        </li>


                    </ul>
                </div>

            </div>

        </div>
    )
}

export default KnowMore
import React from 'react'
import { CorporateVideoPlayIcon } from '../../../../assets/Logos/Icons'

import './corporatevideo.css'

import c2mdVevtorLogo from '../../../../assets/HomepageAssets/Corporate Video/c2mdVectorIcon.svg'

function CorporateVideo() {
    return (
        <div className='c2md-corporate-video-container'>

            <div className="c2md-corporate-video-container_left">

                <div className="c2md-corporate-video-container_left_head">
                    <h1>#connectedcare</h1>
                    <h1>made easy lorem our</h1>
                    <h1>neevlabs website</h1>
                </div>

                <div className="c2md-corporate-video-container_left_caption">
                    Virtual primary care and mental health treatment onalized desktop
                </div>

                <div className="c2md-corporate-video-container_left_caption">
                    or smartphone.Virtual primary care Virtual primary care and health
                </div>
                <div className="c2md-corporate-video-container_left_caption">
                    treatment onalized Virtual primary care
                </div>


                <div className="c2md-corporate-video-container_left_footer">

                    <button className='c2md-corporate-video-about-us-btn'>About Us</button>

                    <div className="c2md-corporate-video-play-container">

                        <div className="icon"><CorporateVideoPlayIcon/></div>
                        <span>CORPORATE VIDEO</span>
                    </div>

                </div>
            </div>

            <div className="c2md-corporate-video-container_right">

                <div className="image">
                    <img src={c2mdVevtorLogo} alt="" />
                </div>

            </div>

        </div>
    )
}

export default CorporateVideo
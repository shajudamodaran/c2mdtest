import React from 'react'
import './downloadapphome.css'
import Image from '../../../../assets/HomepageAssets/DownloadAppHome/Group43125.png'
import { GreenCheckSmall } from '../../../../assets/Logos/Icons'
import DownloadQrCode from './DownloadQrCode/DownloadQrCode'

function DownloadAppHome() {
  return (
    <div className='c2md-download-app-home'>

      <div className='c2md-download-app-home_left'>
        <img className='image' src={Image} alt="" />
      </div>
      <div className='c2md-download-app-home_right'>

        <div className='c2md-download-app-home_right_title'>Download the Connect2MyDoctor app</div>

        <div className='c2md-download-app-home_right_caption'>Virtual primary care and mental health treatment onalized  personalized desktop or smartphone.</div>

        <div className='c2md-download-app-home_right_options'>
          <ul>
            <li>
              <div className="icon"><GreenCheckSmall /></div>
              Video consult with the top specialists</li>
            <li>
              <div className="icon"><GreenCheckSmall /></div>
              Verified specialist profiles</li>

              <li>
                <DownloadQrCode variant="android"/>
              </li>

              <li>
                <DownloadQrCode variant="apple"/>
              </li>
          </ul>
        </div>

      </div>

    </div>
  )
}

export default DownloadAppHome
import React from 'react'
import './header.css'

import c2mLogo from '../../../../assets/Logos/c2mdBlue.svg'
import { AndroidIcon, IphoneIcon } from '../../../../assets/Logos/Icons'


function Header() {
  return (
    <div className='c2md-header-container'>

      <div className='c2md-header-image-container'>

        <div className="c2md-header-image-container_left">
          <img src={c2mLogo} alt="" />

          <ul className='c2md-header-image-container_nav'>
            <li>SPECIALITIES</li>
            <li>ABOUT US</li>
            <li>FOR PATIENTS</li>
            <li>FOR DOCTORS</li>
            <li>CONTACT US</li>
          </ul>

        </div>


      </div>


      <div className="c2md-header-buttons-container">
        
        <button className='c2md-header-signin-button'>Sign in / Sign up</button>


        <div className="download_app_container">

          <span className='download-app-text'>Download Our App :</span>

          <div className='download_app_container_icon_container'>

            <div className="download_app_icon">
            <IphoneIcon/>
            </div>

            <div className="download_app_icon">
            <AndroidIcon/>
            </div>
           
           
          </div>

        </div>

      </div>


    </div>
  )
}

export default Header
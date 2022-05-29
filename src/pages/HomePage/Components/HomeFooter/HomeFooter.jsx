import React from 'react'
import { FbFooterLogo, LinkedinFooterLogo, TwitterFooterLogo } from '../../../../assets/Logos/Icons'
import './homefooter.css'
import isoImage from '../../../../assets/HomepageAssets/Footer/iso.png'
import hippaImage from '../../../../assets/HomepageAssets/Footer/hippa.png'
import c2mdMain from '../../../../assets/HomepageAssets/Footer/c2mdMain.png'

function HomeFooter() {
  return (
    <div className='c2md-home-footer'>

      <div className="c2md-home-footer_body">
        

        <ul>
          <li className='title'>Company</li>
          <li >About Us</li>
          <li >Partners</li>
          <li >Contact</li>

        </ul>

        <ul>
          <li className='title'>&nbsp;</li>
          <li >For Hospitals</li>
          <li >For Patients</li>
          <li >For Doctor</li>

        </ul>

        <ul>
          <li className='title'>News & info</li>
          <li >Blog</li>
          <li >FAQs</li>
        </ul>

        <ul>
          <li className='title'>Legal</li>
          <li >Privacy Policy</li>
          <li >Terms of Use</li>
          <li >HIPPA Compliance</li>

        </ul>

        <ul>
          <li className='title'>Are you a leading doctor ?</li>
          <li >Join Connect2MyDoctor Today</li>
          <li className='title title-social'>Follow Us On</li>
          <li >
            <div className="footer-social-container">

              <div className="logo"><FbFooterLogo/></div>
              <div className="logo"><TwitterFooterLogo/></div>
              <div className="logo"><LinkedinFooterLogo/></div>

            </div>
          </li>

        </ul>

        <ul>
          <li className='title'>Accreditation</li>
          <li >
            
            <div className="accred-container">

                <img className='image1' src={isoImage} alt="" />
                <img src={hippaImage} alt="" />

            </div>

          </li>
         

        </ul>

      </div>

      <div className="c2md-home-footer_footer">
        {/* Footer */}
        
        <div className="c2md-home-footer_footer_left">
          <img className='main-logo' src={c2mdMain} alt="" />
          <span className='copyright'>Copyright © Neev Tech Labs Pty Ltd</span>
        </div>

        <div className="c2md-home-footer_footer_right">
          
          <div className="title">Connect2MyDoctor cannot be used in case of emergency</div>
          <div className="caption">Connect2MyDoctor does not provide medical advice, diagnosis, or treatment</div>

        </div>

      </div>

    </div>
  )
}

export default HomeFooter
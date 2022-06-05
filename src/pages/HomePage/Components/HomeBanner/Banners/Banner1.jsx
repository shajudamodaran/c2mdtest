import React from 'react'

import h1 from '../../../../../assets/HomepageAssets/Banner Footer/h1.png'
import h2 from '../../../../../assets/HomepageAssets/Banner Footer/h2.png'
import h3 from '../../../../../assets/HomepageAssets/Banner Footer/h3.png'
import h4 from '../../../../../assets/HomepageAssets/Banner Footer/h4.png'
import h5 from '../../../../../assets/HomepageAssets/Banner Footer/h5.png'

function Banner1({image,index}) {

    

    return (
        <div className='c2md-home-banner-element'>

            <div className="c2md-home-banner-element_body">

                <div className="c2md-home-banner-element_body_text-container">

                    <span className="hash-tag">#Beclosertocare</span>

                    <div className="home-banner-title-container">
                        <div>Convenient, secure,</div>
                        <div>private online video</div>
                        <div>consultation</div>
                    </div>

                    <div className="home-banner-caption-container">
                        <div>Virtual primary care and mental health treatment when you</div>
                        <div>lorem ipsum doler set ament smartphone.</div>
                    </div>


                    <buttton className="home-banner-more-button">More Partners</buttton>


                    <ul className='banner-slider-dot'>
                        <li className={index==0?"active":null}></li>
                        <li className={index==1?"active":null}></li>
                        <li className={index==2?"active":null}></li>
                    </ul>




                </div>

                <div className="c2md-home-banner-element_body_image-container">

                    <div className="banner-image-home">
                        <img src={image} alt="" />
                    </div>

                </div>

            </div>

            <div className="c2md-home-banner-element_footer">

                <div className="c2md-home-banner-element_footer_caption">Trusted by &nbsp;<b> 200+ </b> &nbsp;hospitals</div>


                <div className="c2md-home-banner-element_footer_hospital-logos">

                    <img src={h1}alt="" />
                    <img src={h2}alt="" />
                    <img src={h3}alt="" />
                    <img src={h4}alt="" />
                    <img src={h5}alt="" />

                </div>

            </div>

        </div>
    )
}

export default Banner1
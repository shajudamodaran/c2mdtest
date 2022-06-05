import React from 'react'
import Banner1 from './Banners/Banner1'
import './homebanner.css'
import Slider from "react-slick";

import image1 from '../../../../assets/HomepageAssets/HomeBanner/banner1.png'
import image2 from '../../../../assets/HomepageAssets/HomeBanner/banner2.png'
import image3 from '../../../../assets/HomepageAssets/HomeBanner/banner3.png'


function HomeBanner() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 1500
    };


    return (
        // <div className='c2md-home-banner'>

        //     <Slider {...settings}>
        //         <div style={{ backgroundColor: "red", height: "50vh", width: "100vw" }}>
        //             shaju
        //         </div>
        //         <div style={{ backgroundColor: "red", height: "50vh", width: "100vw" }}>
        //             shaju
        //         </div>


        //     </Slider>

        // </div>

        <div className='c2md-home-banner'>
            <Slider arrows={false} {...settings}>

                <div style={{ width: "100%", height: "90vh", backgroundColor:"red !important" }}>
                    <Banner1 image={image1} index={0} />
                </div>

                <div style={{ width: "100%", height: "90vh", backgroundColor:"red !important" }}>
                    <Banner1 image={image2} index={1}/>
                </div>

                <div style={{ width: "100%", height: "90vh", backgroundColor:"red !important" }}>
                    <Banner1 image={image3} index={2}/>
                </div>
               


            </Slider>
        </div>
    )
}

export default HomeBanner
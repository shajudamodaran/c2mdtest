import React from 'react'
import Slider from "react-slick";
import CustomerSays from '../CustomerSays';

function CustomerSaysBanner() {


    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000
    };


    return (
        <div className='c2md-home-banner'>
            <Slider arrows={false} {...settings}>

                <div style={{ width: "100%", height: "90vh", backgroundColor: "red !important" }}>
                    <CustomerSays index={0} />
                </div>

                <div style={{ width: "100%", height: "90vh", backgroundColor: "red !important" }}>
                    <CustomerSays index={1} />
                </div>

                <div style={{ width: "100%", height: "90vh", backgroundColor: "red !important" }}>
                    <CustomerSays index={2} />
                </div>



            </Slider>
        </div>
    )
}

export default CustomerSaysBanner
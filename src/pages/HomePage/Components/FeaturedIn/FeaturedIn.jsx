import React from 'react'
import './featuredin.css'

import image1 from '../../../../assets/HomepageAssets/Featured In/fin1.png'
import image2 from '../../../../assets/HomepageAssets/Featured In/fin2.png'
import image3 from '../../../../assets/HomepageAssets/Featured In/fin3.png'
import image4 from '../../../../assets/HomepageAssets/Featured In/fin4.png'

function FeaturedIn() {
    return (
        <div className='featured-in-container'>

            <div className="featured-in-title">
                <h2>Featured In</h2>
                <div className="featured-in-underline">&nbsp;</div>
            </div>

            <div className="featured-in-image-container">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>

        </div>
    )
}

export default FeaturedIn
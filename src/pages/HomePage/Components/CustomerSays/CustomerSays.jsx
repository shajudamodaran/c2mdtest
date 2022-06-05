import React from 'react'
import { HeartVectorUserComment, LikeVectorUserComment, PlusGrid, QuotesEnd, QuotesStart, StarVectorUserComment } from '../../../../assets/Logos/Icons'
import './customersays.css'
import image from '../../../../assets/HomepageAssets/Customer Comments/customer-lady.png'
import RatingComponent from '../../../../components/RatingComponent/RatingComponent'

function CustomerSays({index}) {
    return (
        <div className='c2md-customer-says-container'>

            <div className="customer-says-title">
                <h2>What our customers says</h2>
                <div className="customer-says-underline">&nbsp;</div>
            </div>


            <div className="customer-says-content">

                <div className="customer-says-content_left">

                    <div className="comment-container">

                        <div className="logo-top">
                            <QuotesEnd />
                        </div>
                        <div className="comment">
                            “Virtual primary care and mental health treatment
                            onalized desk top or smartpohone. Virtual are primary
                            care and treatment personalized smartphone”
                        </div>
                        <div className="logo-bottom">

                            <QuotesStart />
                        </div>

                    </div>


                    <div className="comment-footer">
                        <div className="name">Marya Smith</div>
                        <div className="location">South Australia, Canria</div>

                        <div className="rating-container">
                            <RatingComponent />
                        </div>

                        <ul className='customer-says-slider-dot'>
                            <li className={index==0&&"active"}></li>
                            <li className={index==1&&"active"}></li>
                            <li className={index==2&&"active"}></li>
                        </ul>
                        
                    </div>

                </div>

                <div className="customer-says-content_right">

                    <div className="customer-says-content_right_image_container">

                        <div className="image-layer-under image-layer">
                            <PlusGrid />
                        </div>

                        <div className="image-layer-middle image-layer">
                            <img src={image} alt="" />

                            <div className="customer-says-content_right_note">
                                *Identity modified for privacy reasons
                            </div>
                        </div>

                        <div className="image-layer-top image-layer">

                            <div className="star-vector">
                                <StarVectorUserComment />
                            </div>

                            <div className="like-vector">
                                <LikeVectorUserComment />
                            </div>

                            <div className="heart-vector">
                                <HeartVectorUserComment />
                            </div>

                        </div>



                    </div>




                </div>

            </div>



        </div>
    )
}

export default CustomerSays
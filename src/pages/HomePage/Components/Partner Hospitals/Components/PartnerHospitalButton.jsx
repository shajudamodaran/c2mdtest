import React from 'react'
import { ArrowRightWhite } from '../../../../../assets/Logos/Icons'

function PartnerHospitalButton({icon, isViewAll}) {
  return (
    <div className={`partner-hospital-button ${isViewAll&&'view-all-hospitals'}`}>
        
        {
            isViewAll?<div className='text'>View all hospitals <div className="icon"><ArrowRightWhite/></div></div>:<img src={icon} alt="" />
        }
    </div>
  )
}

export default PartnerHospitalButton
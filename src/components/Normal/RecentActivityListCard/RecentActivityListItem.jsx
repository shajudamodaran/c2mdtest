import React from 'react'
import './recentactivitylistitem.css'

function RecentActivityListItem({data}) {

  
    return (
        <div className="recent-list-item">
            <div className="recent-list-item-left">

                <span className="recent-list-item-name">{data.doctorName}</span>
                <span className="recent-list-item-date">{`${data.appointmentDate} `}</span>
                <span className="recent-list-item-date">{`${data.appointmentTime}`}</span>

            </div>

            <div className="recent-list-item-right">

                {/* <button className="recent-list-item-button-expired">Expired</button> */}
                <button className={data.appointmentStatus==="Expired"?
                "recent-list-item-button-expired":
                "recent-list-item-button-active"
                }>{
                    data.appointmentStatus==="Expired"?"Expired":"Book Now"}</button>
            </div>
        </div>
    )
}

export default RecentActivityListItem

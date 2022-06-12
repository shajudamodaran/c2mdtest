import React, { useState, useEffect } from 'react'
import '../badges.css'

function StatusBadge({ text, varient }) {

  let [style, setStyle] = useState(null)



  useEffect(() => {

    if (varient == "Completed") {
      setStyle('completed-badge')
    }
    else if (varient == "Pending") {
      setStyle('pending-badge')
    }
    else if (varient == "Upcoming") {
      setStyle('upcoming-badge')
    }
    else {
      setStyle('error-badge')
    }

  }, [varient])



  return (
    <div className={`badge-container ${style}`}>
      {text}
    </div>
  )
}

export default StatusBadge
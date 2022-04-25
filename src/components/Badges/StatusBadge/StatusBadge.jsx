import React, { useState, useEffect } from 'react'
import '../badges.css'

function StatusBadge({ text, varient }) {

  let [style, setStyle] = useState(null)



  useEffect(() => {

    if (varient == "completed") {
      setStyle('completed-badge')
    }
    else if (varient == "ongoing") {
      setStyle('ongoing-badge')
    }
    else {
      setStyle('normal-badge')
    }

  }, [varient])



  return (
    <div className={`badge-container ${style}`}>
      {text}
    </div>
  )
}

export default StatusBadge
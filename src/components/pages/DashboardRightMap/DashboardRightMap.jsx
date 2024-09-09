import React from 'react'
import "./DashboardRightMap.css"

const DashboardRightMap = ({e, index, backgroundColor}) => {
  return (
    <div className='dashboardRightMapHolder' style={{backgroundColor}}> 
        <div className="dBoardRightTop">
            <h6 className='theNames'> {e.theName} </h6>
        </div>

        <div className="dBoardRightBottom">
            <p className='noAct'> {e.activity} </p>
        </div>
    </div>
  )
}

export default DashboardRightMap
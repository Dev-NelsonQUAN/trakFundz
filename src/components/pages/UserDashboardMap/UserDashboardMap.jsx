import React from 'react'
import "./UserDashboardMap.css"

const UserDashboardMap = ({e, backgroundColor}) => {
  return (
    <div className="userDashMapHolder" style={{backgroundColor}}> 
    <div className="userDashMapIt">
    <p className='avail'> {e.balanceName} </p>
    <h4 className='digits'> {e.amount} </h4>
    </div>

    <div className="dBoardTopDown">
      <div className="dBoardTopArrow"> 
        <div className="greenRadius"></div>
        <div className="redRadius"></div>
      </div>
      <p className='nameOfIntended'> {e.trackerName} </p>
    </div>
  </div>
  )
}

export default UserDashboardMap
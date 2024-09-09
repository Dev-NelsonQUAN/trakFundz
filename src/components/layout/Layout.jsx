import React from 'react'
import "./Layout.css"
import { Outlet } from 'react-router-dom'
import SideBar from '../pages/SideBar/SideBar'
import DashboardHeader from '../pages/DashboardHeader/DashboardHeader'

const Layout = () => {
  return (
    <div className='layoutInner'>
        <div className="layoutLeft">
        <SideBar/>
        </div>

        <div className='layoutRight'>
        <DashboardHeader/>
        <Outlet/>

        </div>
    </div>  
  )
}

export default Layout
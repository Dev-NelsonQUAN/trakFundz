import React from 'react'
import './AboutPage.css'
import Rectangle from '../Rectangle/Rectangle'
import TeamPage from '../TeamPage/TeamPage'
import Footer from '../pages/Footer/Footer'

const AboutPage = () => {
  return (
    <div className='AboutPageHolder'>
        <Rectangle/>
        <TeamPage/>
        <Footer/>
    </div>
  )
}

export default AboutPage
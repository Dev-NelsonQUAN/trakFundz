import React from 'react'
import "./HeroPageBottom.css"

const HeroPageBottom = () => {
  return (
    <div className='HeroBottomHolder'>
        <div className="HeroBottonmInner">
            <div className="HeroBottomTop">
                <h2 className='heroH2'> Take Charge of </h2>
                <h2 className='heroH2'> your <span className='expense'> expenses </span> </h2>
                <p className='managing'> Managing your finances doesn't have to be overwhelming. </p>
            </div>

            <div className="HeroBottomDown">
                <div className="HeroBottomLeft">  </div>
                <div className="HeroBottomRight">  </div>
            </div>
        </div>
    </div>
  )
}

export default HeroPageBottom
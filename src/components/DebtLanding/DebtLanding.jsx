import React from 'react'
import "./DebtLanding.css"

const DebtLanding = () => {
  return (
    <div className='DebtLandingContainer'>
        <div className='debtImageBg'>
            <div></div>
        </div>
        <div className='DebtLandingText'>
            <div className='debtLandEasy'>
                <h1><span className='dept'>Debt</span> Management.</h1>
                <h1>Made Easy</h1>
                <p>Stay organized and pay off debt with ease while staying on track with your goals.</p>
            </div>
            <div className='deptLandingTrack'>
                <p>Track your loans, debt balances, and repayment schedules with Trakfundz so as to help you pay down debt more effectively and plan for a debt-free future.</p>
            </div>
            <div className='deptLandingCreate'>
                <p>Create an account now to take the first step toward a debt-free future.</p>
                <button>Create Account</button>
            </div>
        </div>
    </div>
  )
}

export default DebtLanding
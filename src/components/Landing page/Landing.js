import React from 'react'
import Header from '../header/Header'
import './landing.css'
import ill1 from '../../assets/ill1.png'

const Landing = () => {
  return (
    <div>
        <Header />
        <div className='landing_container'> 
        <div className='L-landing' >
        <p className='q1'>Resources</p>
        <p className='q1'>are hired</p>
        <p className='q1'>to give results,</p>
        <p className='q1'>not reasons.</p>
        <submit className="btn2">Sign UP</submit>
        </div>
        <div className='R-landing' >
        <img src={ill1} height= {500} width={550}></img>
    </div>
    </div>
    </div>
  )
}

export default Landing
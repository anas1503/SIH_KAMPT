import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className="header">
        <p className="logo">KAMPT</p>
        <div className="login">
            <p>Login</p>
            <submit className="btn1">Sign UP</submit>
        </div>
    </div>
  )
}

export default Header
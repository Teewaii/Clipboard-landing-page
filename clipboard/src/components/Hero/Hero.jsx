import React from 'react'
import "./Hero.css"
import logo from "../../images/logo.svg"
export default function Hero() {
  return (
    <div className="hero-wrapper pad" >
      {/* Logo Area */}
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      {/* Hearder Area */}

      <h1 className="heading">A history of everything you copy</h1>

      <p className="body">Clipboard allows you to track and organize everything you
        copy. Instantly access your clipboard on all your devices.</p>

      {/* Buttons Area */}

      <div className="btns">
        <button className="btn green ">Download for iOS</button>
        <button className="btn blue">Download for Mac</button>
      </div>
    </div>
  )
}

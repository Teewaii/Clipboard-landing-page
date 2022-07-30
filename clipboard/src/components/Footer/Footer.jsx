import React from 'react'
import './Footer.css'
import logo from "../../images/logo.svg"
import fb from '../../images/icon-facebook.svg'
import twitter from '../../images/icon-twitter.svg'
import instagram from '../../images/icon-instagram.svg'
export default function Footer() {
    return (
        <div className='Footer-wrapper'>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>

            <div className="nav-container">
                <ul className="nav">
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Press Kit</a></li>
                    <li><a href="#">Install Guide</a></li>
                </ul>
            </div>

            <div className="social-container">
                <ul className="socials">
                    <li><a href="#"><img src={fb} alt="facebook-logo" /></a></li>
                    <li><a href="#"><img src={twitter} alt="twitter-log" /> </a></li>
                    <li><a href="#"><img src={instagram} alt="instagram" /> </a></li>
                </ul>
            </div>
        </div>

    )
}

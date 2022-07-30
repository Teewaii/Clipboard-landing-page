import React from 'react'

import logo from "../../images/logo.svg"
export const Hero = () => {
  return (
    <div className="flex flex-col items-center bg-hero-mobile-img 
    border border-20-DarkGrayishBlue sm:w-screen overflow-hidden
    lg:bg-hero-img px-5 lg:h-[65vh]  py-20 no-repeat bg-cover bg-center " >

      {/* Logo Area */}
        <div className="logo mt-20 mb-[60px]
        md:mt-4 ">
            <img src={logo} className=" w-[150px]" alt="" />
        </div>

        {/* Hearder Area */}

        <h1 className="title px-4 text-[1.6rem] sm: text-center md:text-[2rem]
        
        
        ">
          
          A history of everything you copy</h1>
        
        <p className="body">Clipboard allows you to track and organize everything you 
  copy. Instantly access your clipboard on all your devices.</p>
   
        {/* Buttons Area */}
        
    <div className="btns flex flex-col md:flex-row gap-6 ">
        <button className="green  bg-StrongCyan btn">Download for iOS</button>
        <button className="blue  bg-LightBlue btn">Download for Mac</button>
    </div>
    </div>
  )
}

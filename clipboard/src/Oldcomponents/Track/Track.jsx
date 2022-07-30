import React from 'react'
import monitor from "../../images/image-computer.png"
export default function Track() {
  return (
    <div className="min-h-screen py-20 
    sm:w-screen flex flex-col items-center text-center
    xl:py-8 
    ">
      {/* Title Area */}
      <h1 className="title px-6 text-[1.6rem] sm: text-center 
      lg:text-[2rem] "

      >Keep track of your snippets</h1>

      {/* Body Area */}
      <p className="body
      md:px-[12rem] 
      
      lg:px-[18rem] 2xl:px-[36rem] lg:mb-[5rem]

      "> Clipboard instantly stores any item you copy in the cloud,
        meaning you can access your snippets immediately on all your
        devices. Our Mac and iOS apps will help you organize everything.</p>


      <div className="
          lg:grid grid-cols-2

        ">
        {/* Screen Image Area */}
        <div className="mb-12 px-8">
          <img className="min-w-[250px] 
          
          lg:min-w-[580px] md:w-[680px] xl:min-w-[680px]  
          2xl:min-w-[800px] 2xl:mr-12          
          lg:ml-[-80px]" src={monitor}

            alt="" />
        </div>

        {/* Specs Area */}
        <div className="md:border border-20-gray 
        lg:flex lg:flex-col lg:justify-center 
        lg:items-start 2xl:mt-[-100px] 
        
        ">

          {/* Quick search Area */}
          <h1 className="title text-[1.5rem] 
          lg:text-[1.4rem] 2xl:text-[1.5rem] lg:pl-[3rem]
          ">Quick Search</h1>
          <p className="body mb-8 text-md 
             lg:pl-[3rem] lg:text-left lg:w-[600px] 2xl:w-[1000px] items-start
             lg:mb-4 lg:text-[1rem] 2xl:text-[1.1rem] xl:w-[50rem] 
          ">
            Easily search your snippets by content, category, web address, application, and more.</p>

          {/*  iCloud Sync */}
          <h1 className="title text-[1.5rem] 
          lg:text-[1.4rem] 2xl:text-[1.5rem] lg:pl-[3rem]
          ">iCloud Sync</h1>
          <p className="body mb-8 text-md
              lg:pl-[3rem] lg:text-left lg:w-[600px] 2xl:w-[1000px] items-start
              lg:mb-4 text-[1.2rem] 2xl:text-[1.1rem]  xl:w-[50rem]
          ">
            Instantly saves and syncs snippets across all your devices.</p>

          {/*  Complete History */}
          <h1 className="title text-[1.5rem] 
          lg:text-[1.4rem] 2xl:text-[1.5rem] lg:pl-[3rem]
          ">Complete History</h1>
          <p className="body mb-8 text-md
              lg:pl-[3rem] lg:text-left lg:w-[37.5rem] 
              xl:w-[50rem]  2xl:w-[65rem]  items-start
              lg:mb-4 text-[1.2rem] 2xl:text-[1.1rem]
          ">

            Retrieve any snippets from the first moment you started using the app.</p>
        </div>
      </div>

    </div>
  )
}


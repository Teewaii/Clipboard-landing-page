import React from 'react'
import tablet from "../../images/image-devices.png"
export default function Access() {
  return (
    <div className="mt-[40px] flex flex-col items-center w-screen">
      {/* Heading Area */}
      <h1 className="title px-5 text-[1.6rem] sm: text-center md:text-[2rem]
      
      ">        
        Access Clipboard anywhere</h1>
        <p className="body 
        
        ">
           Whether you’re on the go, or at your computer, you can access all your Clipboard 
  snippets in a few simple clicks.</p>
    
    {/* Tablet Screen Area */}
      <div className="tablet mb-12 px-8 mt-6">
      <img className="min-w-[250px] 
          
          lg:min-w-[580px] md:w-[680px] xl:min-w-[680px]  
          2xl:min-w-[800px]     
          " src={tablet} 
      
      
      alt="tablet" />
      </div>
    </div>
  )
}

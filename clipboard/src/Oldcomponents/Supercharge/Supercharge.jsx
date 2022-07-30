import React from 'react'
import Blacklist from "../../images/icon-blacklist.svg"
import Snippets from "../../images/icon-text.svg"
import Preview from "../../images/icon-preview.svg"
import IBMLogo from "../../images/logo-ibm.png"
import GoogleLogo from "../../images/logo-google.png"
import MsLogo from "../../images/logo-microsoft.png"
import HewlettLogo from "../../images/logo-hp.png"
import VectorLogo from "../../images/logo-vector-graphics.png"

export default function Supercharge() {
  return (
    <div flex flex-col >
        
        <h1 className="title px-5 text-[1.6rem] sm: text-center md:text-[2rem]
        
        ">

        Supercharge your workflow
        </h1>
        <p className="body        
        
        ">We’ve got the tools to boost your productivity.</p>

        {/* Work Flow Lists */}

            <div className="workFlows text-center 
            lg:flex lg:flex-row lg:border border-200-gray
            w-screen lg:px-8
            
            ">
        {/* Blacklists Area */}
                    <div className="blacklists text-center flex flex-col items-center mb-6
                    lg:border border-200-gray lg:w-[300px]
                    ">
                      <img className="w-[50px]" src={Blacklist} alt="" />  
                      <h1 className="title title px-5 text-[1.6rem] sm: text-center md:text-[2rem]
                      lg:text-[1.2rem]
                      ">Create blacklists</h1>
                      <p className="body
                      lg:px-[10px] lg:text-[1rem] leading-[20px]
                      "> 
                      Ensure sensitive information never makes its way to your clipboard by excluding certain sources.
                    </p>
                    </div>

                    {/* Snippets Area */}

                    <div className="snippets text-center flex flex-col items-center mb-6
                      lg:border border-200-gray lg:w-[300px]
                    ">
                      <img className="w-[50px]" src={Snippets} alt="" />  
                      <h1 className="title title px-5 text-[1.6rem] sm: text-center md:text-[2rem]
                      lg:text-[1.2rem]
                      ">Plain text snippets</h1>
                      <p className="body
                      lg:px-[10px] lg:text-[1rem] leading-[20px]
                      "> 
                       Remove unwanted formatting from copied text for a consistent look.

                    </p>
                    </div>

                     {/* preview Area */}
                    <div className="preview text-center flex flex-col items-center mb-6
                    lg:border border-200-gray lg:w-[300px]
                    lg:text-[1.2rem]
                    ">
                      <img className="w-[50px]" src={Preview} alt="" />  
                      <h1 className="title title px-5 text-[1.6rem] sm: text-center md:text-[2rem]
                      lg:text-[1.2rem]
                      ">Sneak preview</h1>
                      <p className="body
                      lg:px-[10px] lg:text-[1rem] leading-[20px]
                      "> Quick preview of all snippets on your Clipboard for easy access.
                    </p>
                    </div>

            </div>

            {/* Brands Logo */}
            <div className="Brands             
            
            ">      

                    <div className="Google flex flex-col items-center mb-20
                    ">
                      <img className="w-[120px]" src={GoogleLogo} alt="" />  
                    </div>

                  
                    <div className="IBM flex flex-col items-center mb-20
                    ">
                      <img className="w-[120px]" src={IBMLogo} alt="" />  
                    </div>

                    
                    <div className="Microsoft flex flex-col items-center mb-20
                    ">
                      <img className="w-[120px]" src={MsLogo} alt="" />  
                    </div>
                    
                    <div className="Hewlett flex flex-col items-center mb-20
                    ">
                      <img className="w-[120px]" src={HewlettLogo} alt="" />  
                    </div>
                    
                    <div className="Vector flex flex-col items-center mb-20
                    ">
                      <img className="w-[120px]" src={VectorLogo} alt="" />  
                    </div>

            </div>            

    </div>
  )
}

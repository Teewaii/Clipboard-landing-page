import React from 'react'
import "./Supercharge.css"
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
    <div className="Supercharge-wrapper pad" >
        
        <h1 className="heading">

        Supercharge your workflow
        </h1>
        <p className="body">We’ve got the tools to boost your productivity.</p>

        {/* Work Flow Lists */}

            <div className="workFlows">
        {/* Blacklists Area */}
                    <div className="blacklists card">
                      <img className="icon" src={Blacklist} alt="blacklists icon" />  
                      <h1 className="heading">Create blacklists</h1>
                      <p className="body"> 
                      Ensure sensitive information never makes its way to your clipboard by excluding certain sources.
                    </p>
                    </div>

                    {/* Snippets Area */}

                    <div className="snippets card">
                      <img className="icon" src={Snippets} alt="snippets icon" />  
                      <h1 className="heading ">Plain text snippets</h1>
                      <p className="body"> 
                       Remove unwanted formatting from copied text for a consistent look.

                    </p>
                    </div>

                     {/* preview Area */}
                    <div className="preview card">
                      <img className="icon" src={Preview} alt="preview icon" />  
                      <h1 className="heading">Sneak preview</h1>
                      <p className="body"> Quick preview of all snippets on your Clipboard for easy access.
                    </p>
                    </div>

            </div>

            {/* Brands Logo */}
            <div className="Brands">      

                    <div className="logo Google">
                      <img src={GoogleLogo} alt="Google icon" />  
                    </div>

                  
                    <div className="logo IBM">
                      <img src={IBMLogo} alt="IBM icon" />  
                    </div>

                    
                    <div className="logo Microsoft">
                      <img src={MsLogo} alt="Microsoft icon" />  
                    </div>
                    
                    <div className="logo Hewlett">
                      <img src={HewlettLogo} alt="Hewlett icon" />  
                    </div>
                    
                    <div className="logo Vector">
                      <img src={VectorLogo} alt="Vector icon" />  
                    </div>

            </div>            

    </div>
  )
}

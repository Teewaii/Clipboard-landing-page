import React from 'react'
import "./Access.css"
import tablet from "../../images/image-devices.png"
export default function Access() {
  return (
    <div className="Access-wrapper pad">
      {/* Heading Area */}
      <h1 className="heading">Access Clipboard anywhere</h1>
        <p className="body">Whether you’re on the go, or at your computer, you can access all your Clipboard 
  snippets in a few simple clicks.</p>
    
    {/* Tablet Screen Area */}
      <div className="Tablet">
      <img  src={tablet} alt="tablet" />
      </div>
    </div>
  )
}

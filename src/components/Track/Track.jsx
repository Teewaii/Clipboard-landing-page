import React from 'react'
import "./Track.css"
import CompScreen from "../../images/image-computer.png"
export default function Track() {
  return (
    <div className="Track-wrapper pad">
      {/* Title Area */}
      <div className="des">
        <h1 className="heading">Keep track of your snippets</h1>
      {/* Body Area */}
      <p className="body"> Clipboard instantly stores any item you copy in the cloud,
        meaning you can access your snippets immediately on all your
        devices. Our Mac and iOS apps will help you organize everything.</p>
      
        </div>

      <div className="Track-spec">
        {/* Screen Image Area */}
        <div className="comp-screen">
          <img src={CompScreen} alt="" />
        </div>

        {/* Specs Area */}
        <div className="Spec-list">

          {/* Quick search Area */}
          <h1 className="heading title">Quick Search</h1>
          <p className="body">Easily search your snippets by content, category, web address, application, and more.</p>

          {/*  iCloud Sync */}
          <h1 className="heading title">iCloud Sync</h1>
          <p className="body">
            Instantly saves and syncs snippets across all your devices.</p>

          {/*  Complete History */}
          <h1 className="heading title">Complete History</h1>
          <p className="body">Retrieve any snippets from the first moment you started using the app.</p>
        </div>
      </div>

    </div>
  )
}


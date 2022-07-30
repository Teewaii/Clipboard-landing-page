import React from 'react'
import "./Ads.css"
export default function Ads() {
  return (
    <div className='Ads-wrapper pad'>
      <h1 className="heading">Clipboard for iOS and Mac OS</h1>
      <p className="body"> Available for free on the App Store. Download for Mac or iOS, sync with iCloud
        and you’re ready to start adding to your clipboard.</p>

      <div className="btns">
        <button className="btn green ">Download for iOS</button>
        <button className="btn blue">Download for Mac</button>
      </div>
    </div>
  )
}

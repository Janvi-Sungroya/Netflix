import React from 'react'
import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

export default function Watch() {
  return (
    <div className='watch'>
    <div className="back">
    <a href="/" className='anchor'>
        <ArrowBackOutlined />
        Home</a>
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
      />
      
    </div>
  )
}

import React from 'react'
import './Video.css'
import {Link} from 'react-router-dom'

import spaceVideo from '../assets/video.mp4'




const Video = () => {
  return (
    <div className= 'hero'>
        <video autoPlay loop muted id='video'>
            <source src={spaceVideo} type='video/mp4'>
            </source>
        </video>
        <div className= 'content'>
            <h1>Welcome to Space</h1>
            <p>Travel Around the Galaxy</p>
        
        <div>
            <Link to='/training' className='btn'>Training</Link>
            <Link to='/contact' className='btn btn-lighting'>Launch</Link>
        </div>
        </div>
    </div>
  )
}

export default Video
import React from 'react'
import './style.css'
import iphone from "../../../assets/iphone.png"
import gradient from "../../../assets/gradient.png"
import Button from '../../Button'
import {motion} from 'framer-motion';

const MainComponent = () => {
  return (
    <div className="flex-info">
      <div className="left-comp">
        <motion.h1 className="heading"
        initial={{opacity:0, scale:0.5}}
        animate={{opacity:1,scale:1}}
        transition={{duration: 1}}
        > Track Crypto</motion.h1>
        <h1 className='real-time'> Real Time.</h1>
        <p className='info-text'>Track crypto through a public api in real time. Visit the dashboard to
        do so !{" "}</p>
        <div className="btn-flex">
            <Button text={"Dashboard"} />
            <Button text={"Share"} outlined={true}/>
        </div>
      </div>
      <div className="phone-container">
        <motion.img 
        src={iphone} 
        className='iphone'
        initial={{ y:-10}}
        animate={{y:20}}
        transition={{
            type:"smooth",
            repeatType:"mirror",
            duration:2,
            repeat:Infinity,
        }}
        />
        <img src={gradient} className="gradient"/>
      </div>
    </div>
  )
}

export default MainComponent

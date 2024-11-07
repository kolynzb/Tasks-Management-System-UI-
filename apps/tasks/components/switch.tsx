import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getTheme } from '../model/data'
import { Theme } from '../types'
import {motion} from "framer-motion"

export interface Props{
    rows?: any[]
    row?: object
}

const Switch = (props: Props) => {

    const theme:Theme = useSelector(getTheme)
    
    const [isActive, setIsActive] = useState(false)
    const [positionX, setPositionX] = useState(0)

    useEffect(()=>{
        if(isActive){
            setPositionX(20)
        }else{
            setPositionX(0)
        }
    },[isActive])

  return (

    // track 
    <div 
    
    onClick={()=>setIsActive(!isActive)}

    style={{
        width: 40,
        height: 20,
        cursor: "pointer",
        background: !isActive ? "rgba(0,0,0,.1)" : "rgba(255,110, 0, .2)",
        borderRadius: "100px",
    }}>
      
      {/* thumb  */}
      <motion.div animate={{x: positionX}} style={{width: 20, height: 20, x: positionX, background: isActive ? theme?.primary : theme?.placeholder, borderRadius: "100%"}}/>

    </div>
  )
}

export default Switch

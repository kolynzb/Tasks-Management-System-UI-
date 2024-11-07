import React from 'react'
import { useSelector } from 'react-redux'
import { getTheme } from '../model/data'
import { Theme } from '../types'
import Text from "./text"

export interface Props{
  title: string,
  subtitle: string,
  icon: any,
  fullwidth?: boolean
}

const card = (props: Props) => {

  const theme: Theme = useSelector(getTheme)

  return (
    <div
    style={{
      background: theme?.paper,
      padding: 15,
      borderRadius: 10,
      boxShadow:"10px 10px 20px rgba(0,0,0,.05)",
      width: props?.fullwidth ? "100%": "auto",
      // borderLeft: "3px solid " + theme?.primary
    }}
    > 

      {/* icon  */}
      <div style={{
        background: theme?.pale,
        width: 50,
        height: 50,
        borderRadius: "100%",
        display: 'flex',
        alignItems: "center",
        justifyContent: "center"
      }}>
        {props?.icon}
      </div>
      
      <br />
      {/* title  */}
      <Text is_h1>{props?.title}</Text>
      <br />

      {/* subtitle   */}
      <Text>{props?.subtitle}</Text>

    </div>
  )
}

export default card

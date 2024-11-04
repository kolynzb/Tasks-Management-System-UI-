import React from 'react'
import { useSelector } from 'react-redux'
import { getTheme } from '../model/data'
import { Theme } from '../types'

const text = ({children, heading}) => {

  const theme: Theme = useSelector(getTheme)

  return (
    <span style={{
      color: theme?.text,
      fontFamily: "poppins",
      fontWeight: heading ? "bold" : "normal",
      fontSize: 13,

    }}>
      {children}
    </span>
  )
}

export default text

import React from 'react'
import { useSelector } from 'react-redux'
import { getTheme } from '../model/data'

const button = ({loading, title, onClick}) => {

  const theme = useSelector(getTheme)

  return (
    <button 

    onClick={onClick}
    style={{
      background: theme?.primary,
      color: theme?.paper,
      border: "none",
      outline: "none",
      width: "81%",
      boxShadow: "10px 10px 20px rgba(0,0,0,.1)",
      padding: 17,
      borderRadius: 5
    }}>
      {title}
    </button>
  )
}

export default button

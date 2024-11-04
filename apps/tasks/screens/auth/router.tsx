import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from "./login"

const router = () => {
  return (
    <>
    <Routes>
      <Route path='/' Component={LoginPage}/>
    </Routes>
    </>
  )
}

export default router

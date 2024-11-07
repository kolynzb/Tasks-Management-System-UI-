import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from "./login"
import ChangePassword from "./change_password"

const router = () => {
  return (
    <>
    <Routes>
      <Route path='/' Component={LoginPage}/>
      <Route path='/change_password' Component={ChangePassword}/>
    </Routes>
    </>
  )
}

export default router

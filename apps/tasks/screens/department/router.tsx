import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EmployeesPage from "./employees"

const router = () => {
  return (
    <>
    <Routes>
      <Route path='/' Component={EmployeesPage}/>
    </Routes>
    </>
  )
}

export default router

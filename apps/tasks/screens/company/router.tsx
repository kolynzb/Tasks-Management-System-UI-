import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DepartmentsPage from "./departments"

const router = () => {
  return (
    <>
    <Routes>
      <Route path='/' Component={DepartmentsPage}/>
    </Routes>
    </>
  )
}

export default router

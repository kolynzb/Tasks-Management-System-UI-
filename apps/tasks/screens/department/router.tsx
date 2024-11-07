import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EmployeesPage from "./employees"
import Layout from "../../components/layout"

const router = () => {
  return (
    <Layout>
    <Routes>
      <Route path='/:id' Component={EmployeesPage}/>
    </Routes>
    </Layout>
  )
}

export default router

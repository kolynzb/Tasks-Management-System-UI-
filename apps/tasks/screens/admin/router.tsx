import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from "./index"
import CompaniesPage from "./companies"
import CompanyPage from "./company"
import UsersPage from "./users"

const router = () => {
  return (
    <Routes>
      <Route path='/' Component={Dashboard}/>
      <Route path='/companies' Component={CompaniesPage}/>
      <Route path='/company/:id' Component={CompanyPage}/>
      <Route path='/users' Component={UsersPage}/>
    </Routes>
  )
}

export default router

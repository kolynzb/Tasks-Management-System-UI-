import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DepartmentsPage from "./departments"
import ProjectsPage from './projects'

const router = () => {
  return (
    <>
    <Routes>
      <Route path='/' Component={DepartmentsPage}/>
      <Route path="/projects" Component={ProjectsPage} />
    </Routes>
    </>
  )
}

export default router

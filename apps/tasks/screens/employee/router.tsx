import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TasksPage from "./tasks"

const router = () => {
  return (
    <>
    <Routes>
      <Route path='/' Component={TasksPage}/>
    </Routes>
    </>
  )
}

export default router

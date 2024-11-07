import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TasksPage from "./tasks"
import Layout from "../../components/layout"

const router = () => {
  return (
    <Layout>
    <Routes>
      <Route path='/:id' Component={TasksPage}/>
    </Routes>
    </Layout>
  )
}

export default router

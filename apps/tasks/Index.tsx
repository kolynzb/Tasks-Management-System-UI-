import React, { useEffect } from 'react'

// screens 
import {Routes, Route, Navigate} from "react-router-dom"
import AdminRouter from "./screens/admin/router"
import CompanyRouter from "./screens/company/router"
import DepartmentRouter from "./screens/department/router"
import EmployeeRouter from "./screens/employee/router"
import AuthRouter from "./screens/auth/router"
import "./app.css"
import AlertComponent from "./components/alert"
import { Alert } from './types'
import { useDispatch, useSelector } from 'react-redux'
import { alert_msg, loadingState, setAlert } from './model/data'
import Loader from "./components/loader"

const Index = () => {

  const alert: Alert = useSelector(alert_msg)
  const loading = useSelector(loadingState)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(alert?.title && !alert?.buttons){
      setTimeout(() => {
        dispatch(setAlert({title: "", mode: "", body: ""}))
      }, 1500);
    }
  },[alert?.title])

  return (
    <>

    <Routes>
      <Route path='/*' Component={AuthRouter}/>
      <Route path='/admin/*' Component={AdminRouter}/>
      <Route path='/company/*' Component={CompanyRouter}/>
      <Route path='/department/*' Component={DepartmentRouter}/>
      <Route path='/employee/*' Component={EmployeeRouter}/>
      <Route path='*' element={<Navigate to="/"/>}/>

      
    </Routes>
    {
      alert?.title
      &&
      <AlertComponent mode={alert?.mode} title={alert?.title} body={alert?.body} buttons={alert?.buttons} icon={alert?.icon}/>
    }
    {
      loading && <Loader/>
    }
    </>
  )
}

export default Index

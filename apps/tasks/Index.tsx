import React, { useEffect } from 'react'

// screens 
import {Routes, Route, Navigate, useNavigate, useLocation} from "react-router-dom"
import AdminRouter from "./screens/admin/router"
import CompanyRouter from "./screens/company/router"
import DepartmentRouter from "./screens/department/router"
import EmployeeRouter from "./screens/employee/router"
import AuthRouter from "./screens/auth/router"
import "./app.css"
import AlertComponent from "./components/alert"
import { Alert, Theme } from './types'
import { useDispatch, useSelector } from 'react-redux'
import { alert_msg, getTheme, loadingState, setAlert } from './model/data'
import Loader from "./components/loader"
import { FaBackspace } from 'react-icons/fa'
import Text from "./components/text"

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

  const theme: Theme = useSelector(getTheme)
  const {pathname} = useLocation()

  const navigate = useNavigate()

  const BackButton=()=>{
    return(
      <div 
      onClick={()=>navigate(-1)}
      style={{
        position: "fixed",
        background: theme?.paper,
        bottom: "5%",
        right: "5%",
        display:"flex",
        alignItems: "center",
        boxShadow: "10px 10px 20px rgba(0,0,0,.1)",
        padding: "15px 30px",
        borderRadius: 100,
        cursor: "pointer"
      }}>
        <FaBackspace style={{marginRight: 10}}/>
        <Text>Back</Text>
      </div>
    )
  }

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
    {
      pathname != "/"
      &&
      <BackButton />
    }
    </>
  )
}

export default Index

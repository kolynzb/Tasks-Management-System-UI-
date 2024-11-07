import React, { useEffect, useState } from 'react'
import Text from "../../components/text"
import { FaCirclePlus, FaEye, FaPen } from 'react-icons/fa6'
import { getTheme, SERVER_URL, setAlert, setLoadingState } from '../../model/data';
import { useDispatch, useSelector } from 'react-redux';
import { Theme, User } from '../../types';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { FaLessThanEqual, FaTrashAlt } from 'react-icons/fa';
import { AnimatePresence, motion } from "framer-motion";
import Input from "../../components/input";
import Button from "../../components/button";
import {getRelativeTime} from "../../utils/getRelativeTime"
import Modal from "../../components/modal"
import AddEmployee from "../../components/add_employee"
import Table from "../../components/table"
import Header from "../../components/header"
import { DELETE, GET } from '../../utils/HTTP';

const employees = () => {

  // company details 
  // departments in the company 
  // adding a new department 

  const theme: Theme = useSelector(getTheme);
  const [open, setOpen] = useState(false);
  const server = useSelector(SERVER_URL)
  const [employees, setEmployees] = useState<User[]>([])
  const [loading,setLoading] = useState(false)
  const {id} = useParams()
  const dispatch = useDispatch()


  const {state} = useLocation()

  const addEmployee=(new_employee: any)=>{
    setEmployees([...employees, new_employee])
  }

  useEffect(()=>{
    GET({path: `/employees/${id}`, setData: setEmployees, setLoading: setLoading, })
  },[])

  useEffect(()=>{
    dispatch(setLoadingState(loading))
  },[loading])

  const setActive=(active: boolean)=>{
    alert("done")
  }

  const setter=(id)=>{
    dispatch(setAlert({title: "", body: "", mode: "normal"}))
    DELETE({data: employees, setData: setEmployees, path: "/employee/" + id,id: id })
  }


  return (
    <div>
      
      {/* header  */}
      <Header setOpen={setOpen} title='an employee' count={employees?.length} heading='Employees' />
      
      {/* body  */}
      {
        employees?.length == 0
        ?
        <Text is_h1>No results found</Text>
        :
        <Table setter={setter} setActive={setActive} columns={["email", "date_joined"]} rows={employees} delete edit view redirect_path='/employee'/>
      }

      {open && <Modal title='Add employee' content={<AddEmployee add={addEmployee} setOpen={setOpen}/>} open={open} setOpen={setOpen} />}
    </div>
  )
}

export default employees

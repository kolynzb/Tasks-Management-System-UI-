import React, { useEffect, useState } from 'react'
import { Theme } from '../types';
import { useDispatch, useSelector } from 'react-redux';
import { getTheme, SERVER_URL, setAlert } from '../model/data';
import { AnimatePresence, motion } from 'framer-motion';
import Text from "./text"
import Input from './input';
import Button from "./button"

export interface Props {
    setOpen: (open: boolean) => void;
    add: (data: any)=>void
    values?: any
  }

const add_company = (props: Props) => {
    const theme: Theme = useSelector(getTheme);
    const dispatch = useDispatch()
    const [name, setName] = useState({
      value: "",
      error: null,
    });
    const [email, setEmail] = useState({
      value: "",
      error: null,
    });
    const [password, setPassword] = useState({
      value: "",
      error: null,
    });
    const [passwordConfirmation, setPasswordConfirmation] = useState({
      value: "",
      error: null,
    });
  
    const [loading, setLoading] = useState(false);
    const server = useSelector(SERVER_URL);
  
    const onSubmit = async (e) => {
      e.preventDefault()

      if(!email.value || !password?.value || !name?.value){
        dispatch(setAlert({title: "Empty form fields", body: "Ensure you fillout all form fields befor submitting", mode: "error"}))
        return
      }

      if(password?.value != passwordConfirmation?.value){
        dispatch(setAlert({title: "Unmatching password", body: "Please provide matching passwords", mode: "error"}))
        return
      }

      setLoading(true);
      const res = await fetch(`${server}/company_admins`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: email?.value,
          password: password?.value,
        }),
      });
  
      if (res.status == 201) {
        const data = await res.json();
        dispatch(setAlert({title: "Company admin uploaded successfully", body: "User has been created Successfully, now uploading company...", mode: "success"}))
        uploadCompany(data?.id);
      } else {
        dispatch(setAlert({title: "Failed to upload Company admin", body: "Please try again with a different email", mode: "error"}))
        setLoading(false);
      }
    };
  
    const uploadCompany = async (admin_id: number) => {
      const res = await fetch(`${server}/companies`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: name?.value,
          admin: admin_id,
        }),
      });
  
      if (res.status == 201) {
        setLoading(false);
        const data = await res.json();
        dispatch(setAlert({title: "Company uploaded successfully", body: "Company has been created Successfully", mode: "success"}))
        props?.setOpen(false);
        props?.add(data)
      } else {
        setLoading(false);
        dispatch(setAlert({title: "Company creation failed", body: "Company has not been uploaded, please try again and if this persists, contact the system admin", mode: "error"}))
      }
    };

    useEffect(()=>{
      // setEmail({...email, value: props?.values["email"]})
      console.log(props?.values)
      if(props?.values){
        setName({...name, value: props?.values["name"]})
        setEmail({...email, value: props?.values["admin_email"]})
      }
    },[props?.values])
  
    return (
      <form onSubmit={onSubmit}>
      <Input
                noBorder
                fullwidth
                placeholder={"Company name"}
                type={"text"}
                setter={setName}
                input={name}
              />
              <br />
              <Input
                noBorder
                fullwidth
                placeholder={"Company email"}
                type={"email"}
                setter={setEmail}
                input={email}
              />
              <br />
              <Input
                noBorder
                fullwidth
                placeholder={"password"}
                type={"password"}
                setter={setPassword}
                input={password}
              />
              <br />
              <Input
                noBorder
                fullwidth
                placeholder={"password confirmation"}
                type={"password"}
                setter={setPasswordConfirmation}
                input={passwordConfirmation}
              />
              <br />
              <Button
                loading={loading}
                fullwidth
                onClick={onSubmit}
                title={"Add company"}
              />
      </form>
    );
  };

export default add_company

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTheme, SERVER_URL, setAlert } from "../model/data";
import { Theme } from "../types";
import Input from "./input";
import Button from "./button";

export interface Props {
  setOpen: (open: boolean) => void;
  add: (data: any)=>void
}

const add_department = (props: Props) => {
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
  const { id } = useParams();

  const onSubmit = async (e) => {

    e.preventDefault()

      if(!email.value || !password?.value){
        dispatch(setAlert({title: "Empty form fields", body: "Ensure you fillout all form fields befor submitting", mode: "error"}))
        return
      }

      if(password?.value != passwordConfirmation?.value){
        dispatch(setAlert({title: "Unmatching password", body: "Please provide matching passwords", mode: "error"}))
        return
      }

    setLoading(true);
    const res = await fetch(`${server}/employees/${id}`, {
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
      dispatch(setAlert({title: "Employee uploaded successfully", body: "Employee has been created Successfully", mode: "success"}))
      setLoading(false);
      props?.setOpen(false);
      props?.add(data)
    } else {
      dispatch(setAlert({title: "Failed to upload employee", body: "Please try again with a different email", mode: "error"}))
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        noBorder
        fullwidth
        placeholder={"Employee's email"}
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
        title={"Add an employee"}
      />
    </form>
  );
};

export default add_department;

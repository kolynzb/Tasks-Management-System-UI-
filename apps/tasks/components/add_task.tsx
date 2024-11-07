import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTheme, SERVER_URL, setAlert } from "../model/data";
import { Theme } from "../types";
import Input from "./input";
import Button from "./button";
import { POST } from "../utils/HTTP";

export interface Props {
  setOpen: (open: boolean) => void;
  setData: (data: any) => void;
  data: any[];
}

const add_task = (props: Props) => {
  const theme: Theme = useSelector(getTheme);
  const dispatch = useDispatch()

  const [body, setBody] = useState({
    value: "",
    error: null,
  });
  const [duration, setDuration] = useState({
    value: "",
    error: null,
  });

  const [loading, setLoading] = useState(false);
  const server = useSelector(SERVER_URL);
  const { id } = useParams();


  const errorMessage=()=>{
    dispatch(setAlert({title: "Failed to add task", body: "Something went wrong, please try again", mode: "error"}))
  }

  const successMessage=()=>{
    dispatch(setAlert({title: "Task uploaded successfully", body: "New task has been added", mode: "success"}))
  }

  const onSubmit=(e)=>{
    e.preventDefault()
    POST({
      data: props?.data,
      path: "/tasks/" + id,
      payload: { body: body.value, duration: duration?.value },
      setData: props?.setData,
      setLoading: setLoading,
      setOpen: props?.setOpen,
      errorMessage: errorMessage,
      successMessage: successMessage
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <Input
        noBorder
        fullwidth
        placeholder={"Enter task"}
        type={"text"}
        setter={setBody}
        input={body}
      />
      <br />
      <Input
        noBorder
        fullwidth
        placeholder={"duration (in minutes)"}
        type={"number"}
        setter={setDuration}
        input={duration}
      />
      <br />
      <Button
        loading={loading}
        fullwidth
        onClick={onSubmit}
        title={"Add task"}
      />
    </form>
  );
};

export default add_task;

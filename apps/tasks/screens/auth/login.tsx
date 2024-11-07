// @ts-nocheck
import React, { useState } from "react";
import Background from "../../components/background";
import XStack from "../../components/x_stack";
import { Theme, User } from "../../types";
import { getTheme, SERVER_URL, setAlert, setCompany, setDepartment, setUser } from "../../model/data";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../assets/icons/logo.svg";
import Input from "../../components/input";
import Button from "../../components/button";
import Text from "../../components/text";
import { jwtDecode } from "jwt-decode";
import { motion } from "framer-motion";
import { Navigate, useNavigate } from "react-router-dom";
const login = () => {
  const theme: Theme = useSelector(getTheme);
  const server = useSelector(SERVER_URL);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState({
    value: "",
    error: "invalid email",
  });

  const [password, setPassword] = useState({
    value: "",
    error: "",
  });

  const fetchDepartment=async(user_id)=>{
    setLoading(true)
    const res = await fetch(`${server}/get_department/${user_id}`)
    if(res.status == 200){
      const data = await res.json()
      dispatch(setDepartment(data))
      navigate(`/department/1`)
      setLoading(false)
    }else{
      setLoading(false)
    }
  }

  const fetchCompany=async(user_id)=>{
    setLoading(true)
    const res = await fetch(`${server}/get_company/${user_id}`)
    if(res.status == 200){
      const data = await res.json()
      dispatch(setCompany(data))
      navigate(`/admin/company/${data?.id}`)
      setLoading(false)
    }else{
      setLoading(false)
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!email.value || !password.value) {
      dispatch(
        setAlert({
          title: "Empty fields",
          body: "Please fill out all form fields before proceeding",
          mode: "error",
        })
      );
      return;
    }

    setLoading(true);
    const res = await fetch(`${server}/token/`, {
      method: "POST",
      body: JSON.stringify({
        email: email.value,
        password: password?.value,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (res.status == 200) {
      const data = await res.json();
      const decrypted_data: User = jwtDecode(data?.access);

      if (decrypted_data) {
        const loggedin_user: User = {
          email: decrypted_data?.email,
          user_id: decrypted_data?.user_id,
          role: decrypted_data?.role,
          tokens: {
            access: data?.access,
            refresh: data?.refresh,
          },
        };

        if(loggedin_user?.role == "company_admin"){
          fetchCompany(loggedin_user?.user_id)
        }else if(loggedin_user?.role == "department_admin"){
          fetchDepartment(loggedin_user?.user_id)
        }else if(loggedin_user?.role == "admin"){
          navigate(`/admin/companies`)
        }
        else{
         navigate(`/employee/${loggedin_user?.user_id}`)
        }
        dispatch(setUser(loggedin_user));
        dispatch(
          setAlert({
            title: "Login success",
            body: "You have been logged in successfully",
            mode: "success",
          })
        );
      }

      setLoading(false);
    } else {
      setLoading(false);
      dispatch(
        setAlert({
          title: "Login Failed",
          body: "Please try again with the correct credentials",
          mode: "error",
        })
      );
    }
  };

  return (
    // JSON.parse(localStorage.getItem("TMS_USER"))?.email
    // ?
    // <Navigate to={"/admin"}/>
    // :
    <Background>
      <XStack>
        {/* empty container  */}
        <div style={{ width: "40vw" }} />
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={onSubmit}
          style={{
            width: "30vw",
            borderRadius: 30,
            boxShadow: "10px 10px 20px rgba(0,0,0,.05)",
            background: theme.paper,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 50,
          }}
        >
          <img src={Logo} alt="" height={70} />
          <br />
          <Text heading>Login</Text>
          <br />
          <br />
          {/* email  */}
          <Input
            fullwidth
            input={email}
            type={"email"}
            placeholder={"email"}
            setter={setEmail}
          />
          <br />
          {/* <br /> */}
          <Input
            fullwidth
            input={password}
            type={"password"}
            placeholder={"password"}
            setter={setPassword}
          />
          <br />
          <Button
            fullwidth
            title={"Continue"}
            onClick={onSubmit}
            loading={loading}
          />
        </motion.form>
      </XStack>
    </Background>
  );
};

export default login;

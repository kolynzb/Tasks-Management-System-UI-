import React, { useState } from 'react'
import Background from "../../components/background"
import XStack from "../../components/x_stack"
import { Theme } from '../../types'
import { getTheme } from '../../model/data'
import { useSelector } from 'react-redux'
import Logo from "../../assets/icons/logo.svg"
import Input from "../../components/input"
import Button from "../../components/button"
import Text from "../../components/text"
const login = () => {

  const theme:Theme = useSelector(getTheme)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState({
    value: "",
    error: "invalid email"
  })

  const  [password, setPassword] = useState({
    value: "",
    error: ""
  })

  const onSubmit=()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }

  return (
   <Background>
        <XStack>
          
          {/* empty container  */}
          <div style={{width: "40vw"}}/>
          <div style={{width: "34vw", height: "80vh", borderRadius: 30, boxShadow: "10px 10px 20px rgba(0,0,0,.05)", background: theme.paper, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 20}}>
            
            <img src={Logo} alt="" height={70}/>
            <br />
            <Text heading>Login</Text>
            <br />
            <br />
            {/* email  */}
            <Input input={email} type={"email"} placeholder={"email"} setter={setEmail}/>
            <br />
            {/* <br /> */}
            <Input input={password} type={"password"} placeholder={"password"} setter={setPassword}/>
            <br />
            <Button title={"Continue"} onclick={onSubmit} loading={loading}/>

          </div>
        </XStack>
   </Background>
  )
}

export default login

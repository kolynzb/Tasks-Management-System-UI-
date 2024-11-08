import React from 'react'
import { useSelector } from 'react-redux'
import { getTheme, getUser } from '../model/data'
import Logo from "../assets/icons/logo.svg";
import { FaUser } from 'react-icons/fa';
import Text from "./text"
import { User } from '../types';


const navbar = () => {

  const theme = useSelector(getTheme)
  const user:User = useSelector(getUser)

  return (
    <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: theme?.paper,
          boxShadow: "10px 10px 20px rgba(50,50,50,.05)",
          borderRadius: 5,
          padding: "10px 30px",
        }}
      >
        {/* logo  */}
        <img src={Logo} height={50} alt="" />

        {/* email  */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <Text>{user?.email ? user?.email : "Guest"}</Text>

          {/* user icon  */}
          <div
            style={{
              width: 50,
              height: 50,
              position: "relative",
              marginLeft: 10,
              background: theme?.pale,
              borderRadius: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaUser color={theme?.placeholder} />

            {/* activity badge  */}
            <div
              style={{
                height: 10,
                width: 10,
                borderRadius: "100%",
                background: theme?.success,
                position: "absolute",
                right: "5%",
                bottom: "5%",
              }}
            />
          </div>
        </div>
      </div>
  )
}

export default navbar

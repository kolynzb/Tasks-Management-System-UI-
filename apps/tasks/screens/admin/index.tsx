import React from "react";
import { useSelector } from "react-redux";
import { getTheme } from "../../model/data";
import { Theme } from "../../types";
import Logo from "../../assets/icons/logo.svg";
import Text from "../../components/text";
import { FaChartBar, FaHotel, FaLock, FaSignOutAlt, FaUser, FaUserAlt } from "react-icons/fa";

const index = () => {
  const theme: Theme = useSelector(getTheme);

  return (
    <div
      style={{
        backgroundColor: theme?.pale,
        height: "95vh",
        width: "95vw",
        padding: "2.5vh 2.5vw",
      }}
    >
      {/* navbar  */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: theme?.paper,
          boxShadow: "10px 10px 20px rgba(0,0,0,.01)",
          borderRadius: 5,
          padding: "10px 30px",
        }}
      >
        {/* logo  */}
        <img src={Logo} height={50} alt="" />

        {/* email  */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <Text>kigongovincent81@gmail.com</Text>

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

      {/* body  */}
      <div style={{
        display: 'flex',
        alignItems: "center",
        marginTop: 20,
        height: "80vh",
        boxShadow: "10px 10px 20px rgba(0,0,0,.01)",

      }}>

        {/* sidebar  */}
        <div style={{background: theme?.paper,
          padding: "5vh 2.5vw",
          width: "20%",
          height: "90%",
          borderRadius: 10
        }}>
         
         {/* list item  */}
         <div style={{display: "flex", alignItems: "center", padding: 15, borderRadius:10, background: theme?.pale}}>
          <FaChartBar style={{marginRight: 10}} color={theme?.text}/>
          <Text>Dashboard</Text>
         </div>

         <div style={{display: "flex", alignItems: "center", padding: 15, borderRadius:10}}>
          <FaHotel style={{marginRight: 10}} color={theme?.text}/>
          <Text>View all Companies</Text>
         </div>

         <div style={{display: "flex", alignItems: "center", padding: 15, borderRadius:10}}>
          <FaHotel style={{marginRight: 10}} color={theme?.text}/>
          <Text>Add a new company</Text>
         </div>

         <div style={{display: "flex", alignItems: "center", padding: 15, borderRadius:10}}>
          <FaUserAlt style={{marginRight: 10}} color={theme?.text}/>
          <Text>View all users</Text>
         </div>

         <div style={{display: "flex", alignItems: "center", padding: 15, borderRadius:10}}>
          <FaLock style={{marginRight: 10}} color={theme?.text}/>
          <Text>Change password</Text>
         </div>

         <div style={{display: "flex", alignItems: "center", padding: 15, borderRadius:10}}>
          <FaSignOutAlt style={{marginRight: 10}} color={theme?.text}/>
          <Text>Logout</Text>
         </div>

        </div>

      </div>

    </div>
  );
};

export default index;

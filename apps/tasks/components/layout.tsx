import React from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { useSelector } from "react-redux";
import { getTheme } from "../model/data";

const layout = ({ children, center }) => {
  const theme = useSelector(getTheme);

  return (
    <div
      style={{
        backgroundColor: theme?.pale,
        height: "96vh",
        width: "95vw",
        padding: "2vh 2.5vw",
      }}
    >
      {/* navbar  */}
      <Navbar />

      {/* body  */}
      <div
        style={{
          display: "flex",
          marginTop: 10,
          height: "82vh",
          // background: "red",
          boxShadow: "10px 10px 20px rgba(0,0,0,.01)",
        }}
      >
        {/* sidebar  */}
        <Sidebar />

        <div
          style={{
            width: "100%",
            paddingLeft: 10,
            overflowY: "scroll",
            display: center && "flex",
            alignItems: center && "center",
            justifyContent: center && "center",
            borderRadius: 10,
            height: "100%",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;

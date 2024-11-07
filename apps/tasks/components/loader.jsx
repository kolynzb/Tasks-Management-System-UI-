import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import Spinner from "../assets/icons/ripples.svg"

const loader = () => {

  const dispatch = useDispatch();

  return (
    <AnimatePresence mode="sync">
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(0,0,0,0.3)",
        //   backdropFilter: "blur(3px)",
        }}
      >
        <img src={Spinner} height={100} alt="" />
      </div>
    </AnimatePresence>
  );
};

export default loader;

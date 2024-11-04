import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useSelector } from "react-redux";
import { getTheme } from "../model/data";
import { Theme } from "../types";

const input = ({ input, type, placeholder, setter }) => {
  const theme: Theme = useSelector(getTheme);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: theme?.pale,
        width: "75%",
        marginBottom: 10,
        padding: 15,
        borderBottom: "1px solid " + theme?.primary,
      }}
    >
      {type == "email" ? (
        <FaEnvelope color={theme?.placeholder} size={20} />
      ) : type == "password" ? (
        <FaLock color={theme?.placeholder} />
      ) : (
        ""
      )}
      <input
        required
        style={{
          margin: "0 10px",
          // color: theme?.primary,
          background: "transparent",
          width: "100%",
          border: "none",
          outline: "none",
        }}
        value={input.value}
        type={type}
        placeholder={placeholder}
        onChange={(e) => setter({ ...input, value: e.target.value })}
      />
    </div>
  );
};

export default input;

import React from "react";
import { FaEnvelope, FaLock, FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { getTheme } from "../model/data";
import { Theme } from "../types";

const input = ({ input, type, placeholder, setter, fullwidth, noBorder,zeroMargin }) => {
  const theme: Theme = useSelector(getTheme);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: theme?.pale,
        width: fullwidth ? "90%": "max-content",
        marginBottom:zeroMargin ? 0 : 10,
        padding: 15,
        borderRadius: 2,
        borderBottom:noBorder ? "none": "1px solid " + theme?.primary,
      }}
    >
      {
      type == "search"
      ?
      <FaSearch color={theme?.placeholder} size={20} />
:
      type == "email" ? (
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
          color: theme?.text,
          background: "transparent",
          width: "100%",
          border: "none",
          outline: "none",
          fontFamily: "poppins",
          fontSize: 12.5
        }}
        value={input.value}
        type={type}
        minLength={4}
        placeholder={placeholder}
        onChange={(e) => setter({ ...input, value: e.target.value })}
      />
    </div>
  );
};

export default input;

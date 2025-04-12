import React from "react";

const Button = ({
  padding,
  borderColor,
  backgroundColor,
  backgroundOpacity,
  textColor,
  children,
  className
}) => {
  function hexToRgb(hex, typeOfResult) {
    const cleanHex = hex.replace("#", "");

    if (!/^[0-9A-Fa-f]{6}$/.test(cleanHex)) {
      throw new Error("Invalid HEX color");
    }

    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);

    if (typeOfResult === "object" || typeOfResult === "obj") {
      return { r, g, b };
    } else if (typeOfResult === "string" || typeOfResult === "str") {
      return `${r}, ${g}, ${b}`;
    }

    throw new Error("Invalid typeOfResult value");
  }

  return (
    <button className={`btn ${className}`}
      style={{
        padding: padding,
        border: borderColor ? "1px solid" + borderColor : "unset",
        background: backgroundColor ? `rgba(${hexToRgb(backgroundColor, "str")}, ${backgroundOpacity})` : "unset",
        color:textColor ? textColor : "unset"
      }}
    >
      {children}
    </button>
  );
};

export default Button;

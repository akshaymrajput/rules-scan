import React from "react";
import "./Button.css";

const Button = ({
  children,
  className,
  backgroundColor,
  width = "100%",
  color,
  ...rest
}) => {
  return (
    <button
      id="rulesHelperCustomButton"
      className={`custom-button ${className}`}
      style={{ backgroundColor, color, width }}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

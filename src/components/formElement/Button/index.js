import React from "react";
import "./btn.css";
const index = ({ children, type, id, handleClick, classes, ...otherProps }) => {
  return (
    <button
      onClick={handleClick}
      type={type}
      id={id}
      className={`btn ${classes}`}
      {...otherProps}>
      {children}
    </button>
  );
};

export default index;

import React from "react";
import "./btn.css";
const index = ({ children, id, link, ...otherProps }) => {
  return (
    <a href={link} id={id} target="_blank" className="btn" {...otherProps}>
      {children}
    </a>
  );
};

export default index;

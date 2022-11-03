import React from "react";
import "./textarea.css";

const index = ({
  id,
  value,
  label,
  name,
  classes,
  handleChange,
  ...otherProps
}) => {
  return (
    <div className="textarea-wrap">
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        className={`textarea ${classes}`}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        {...otherProps}
      ></textarea>
      <span className="danger message-required">Please enter message</span>
    </div>
  );
};

export default index;

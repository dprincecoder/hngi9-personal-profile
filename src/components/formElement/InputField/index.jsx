import React from "react";
import './input.css'
const index = ({
  handleChange,
  type,
  id,
  label,
  value,
  classes,
  required,
  name,
  ...otherProps
}) => {
  return (
    <div className={`input-box ${classes}`}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        id={id}
        value={value}
        name={name}
        required={required}
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  );
};

export default index;

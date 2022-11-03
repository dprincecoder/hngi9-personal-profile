import React from "react";
import './index.css'
const index = ({
  handleChange,
  type,
  id,
  label,
  value,
  name,
  ...otherProps
}) => {
  return (
    <div className="input-box">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        id={id}
        value={value}
        name={name}
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  );
};

export default index;

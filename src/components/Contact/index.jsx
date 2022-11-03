import React from "react";
import InputField from "../formElement/InputField";
import "./contact.css";

const index = () => {
  return (
    <div className="contact-wraper">
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <form className="contact-form">
        <div className="form-row">
          <InputField
            type="text"
            id="first_name"
            label="First Name"
            name="first_name"
            classes="space-right"
            placeholder="Enter your first name"
          />
          <InputField
            type="text"
            id="last_name"
            label="Last Name"
            name="last_name"
            placeholder="Enter your last name"
          />
        </div>
        <InputField
          type="email"
          id="email"
          label="Email"
          name="email"
          placeholder="yourname@email.com"
          classes="input-full"
        />
      </form>
    </div>
  );
};

export default index;

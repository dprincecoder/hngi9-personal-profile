import React from "react";
import InputField from "../formElement/InputField";
import Button from "../formElement/Button";
import Checkbox from "../formElement/Checkbox";
import Textarea from "../formElement/Textarea";
import "./contact.css";

const index = () => {
  const handleCheckboxChange = (e) => {
    console.log(e);
  };
  return (
    <div className="contact-wraper">
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <form className="contact-form">
        <div className="form-row flex-column">
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
          classes="width-full"
        />
        <Textarea
          id="message"
          label="Message"
          name="message"
          classes="width-full" required
          placeholder="Send me a message and I'll reply you as soon as possible..."
        />
        <Checkbox
          id="subscribe"
          label="You agree to providing your data to Prince Azubuike, who may contact you."
          name="subscribe"
          handleCheckboxChange={handleCheckboxChange}
        />
        <Button
          type="submit"
          classes="width-full bg-primary btn-hover"
          id="btn__submit"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default index;

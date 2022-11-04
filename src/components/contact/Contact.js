import React, { useState } from "react";
import InputField from "../formElement/inputField/Input";
import Button from "../formElement/button/Button";
import Checkbox from "../formElement/checkbox/Checkbox";
import Successfull from "../alertsMessages/successfull/Successfull";
import Textarea from "../formElement/Textarea";
import "./contact.css";

const Contact = () => {
  const [alertOpen, setAlertOpen] = useState(false);
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleCheckboxChange = (e) => {
    console.log(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFirst_name("");
    setLast_name("");
    setEmail("");
      setMessage("");
    setAlertOpen(true);
  };
  return (
    <div className="contact-wraper">
      <div className={`${alertOpen ? "" : "hide-alert"}`}>
        <Successfull close={() => setAlertOpen(false)} />
      </div>
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row flex-column">
          <InputField
            type="text"
            id="first_name"
            label="First Name"
            name="first_name"
            required
            classes="space-right"
            placeholder="Enter your first name"
            value={first_name}
            handleChange={(e) => setFirst_name(e.target.value)}
          />
          <InputField
            type="text"
            id="last_name"
            label="Last Name"
            required
            name="last_name"
            value={last_name}
            handleChange={(e) => setLast_name(e.target.value)}
            placeholder="Enter your last name"
          />
        </div>
        <InputField
          type="email"
          id="email"
          label="Email"
          required
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
          name="email"
          placeholder="yourname@email.com"
          classes="width-full"
        />
        <Textarea
          id="message"
          label="Message"
          name="message"
          value={message}
          handleChange={(e) => setMessage(e.target.value)}
          classes="width-full"
          required
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

export default Contact;

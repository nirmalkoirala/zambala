import React, { useState } from "react";
// import axios from "axios";
// import Background from '../../images/drukul1.jpg';
import "./index.css";
import emailjs from 'emailjs-com';
import { ContactContainer, ContactContent, Heading} from "./ContactElements";


const Form = () => {
    const [values, setValues] = useState({
        Name: "", 
        Email: "", 
        Phone: "", 
        Message: "",
    });

const [submitted, setSubmitted] = useState(false);
const [valid, setValid] = useState(false);

    const handleNameInputChange = (event) => {
        setValues({...values, Name: event.target.value})
    }
    const handleEmailInputChange = (event) => {
        setValues({...values, Email: event.target.value})
    }
    const handlePhoneInputChange = (event) => {
        setValues({...values, Phone: event.target.value})
    }
    const handleMessageInputChange = (event) => {
        setValues({...values, Message: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if(values.Name && values.Email && values.Phone && values.Message) {
            setValid(true);
            emailjs.sendForm('service_26ylxcg', 'template_3za3n03', event.target, 'user_X322tsOB9anuCFO6lX7ax').then(res=>{
              console.log(res);
            }).catch(err=> console.log(err));
        }
        setSubmitted(true);
    }


  return (
      <ContactContainer id="contactus">
          <ContactContent>
              <Heading>Contact Us</Heading>
        <div className="form-container">
        <form className='form' onSubmit={handleSubmit} >
            {submitted && valid ? <div className="success-message">Success! Thank you for submitting</div> : null}
        
        <label>Your Name</label>
        <input
          onChange={handleNameInputChange}
          value={values.Name}
          id="name"
          class="form-field"
          type="text"
          name="Name"/>
          {submitted && !values.Name ? <span id="name-error">Please enter a first name</span> : null}
        {/* Uncomment the next line to show the error message */}

        <label>Email</label>
        <input
        onChange={handleEmailInputChange}
        value={values.Email}
          id="email"
          class="form-field"
          type="email"
          name="Email"/>
        {submitted && !values.Email ? <span id="email-error">Please enter a valid email</span> : null}
        {/* Uncomment the next line to show the error message */}

        <label>Phone</label>
        <input
        onChange={handlePhoneInputChange}
        value={values.Phone}
          id="phone"
          class="form-field"
          type="tel"
          name="Phone"/>
          {submitted && !values.Phone ? <span id="phone-error">Please enter a phone number</span> : null}
        {/* Uncomment the next line to show the error message */}

        <label>Message</label>
        <textarea
        onChange={handleMessageInputChange}
        value={values.Message}
          id="message"
          // class="form-field"
          type="text"
          placeholder="Enter short message here"
          rows="4"
          name="Message"/>
          {submitted && !values.Message ? <span id="message-error">Please enter a message</span> : null}
        {/* Uncomment the next line to show the error message */}
        <button class="form-field" type="submit">
          Submit
        </button>
      </form>
      </div>
    </ContactContent>
</ContactContainer>
  );
  }

export default Form;

import React, { useState } from 'react'
import './ContactStyles.css'
import emailjs from 'emailjs-com'

const Contact = () => {
    const [values, setValues] = useState ({
        Name: "", Email: "", Phone: "", Message: "",
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
                emailjs.sendForm('service_dwhvbw5', 'template_cx9ve8e', event.target, 'user_bZYe7wtxHIQeQH9aU3Zwk').then(res=>{
                  console.log(res);
                }).catch(err=> console.log(err));
            }
            setSubmitted(true);
        }

    return (
        <div className='form'>
            <form onSubmit={handleSubmit} >
            {submitted && valid ? <div className="success-message">Success! Thank you for submitting</div> : null}
                <label>Your Name</label>
                <input
                onChange={handleNameInputChange}
                value={values.Name}
                id="name"
                class="form-field"
                name="Name"
                type="text">
                    {submitted && !values.Name ? <span id="name-error">Please enter a first name</span> : null}
                </input>

                <label>Email</label>
                <input
                onChange={handleEmailInputChange}
                value={values.Email}
                id="email"
                class="form-field"
                name="Email"
                 type="text">
                     {submitted && !values.Email ? <span id="email-error">Please enter a valid email</span> : null}
                 </input>

                <label>Phone</label>
                <input
                onChange={handlePhoneInputChange}
                value={values.Phone}
                id="phone"
                class="form-field"
                name="Phone"
                type="text">
                     {submitted && !values.Phone ? <span id="phone-error">Please enter a phone number</span> : null}
                 </input>

                <label>Your Message</label>
                <textarea
                onChange={handleMessageInputChange}
                value={values.Message}
                id="message"
                class="form-field"
                name="Message"
                 rows='6' placeholder='Type a short message here'/>
                 {submitted && !values.Message ? <span id="message-error">Please enter a message</span> : null}
                <button className='btn' type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact

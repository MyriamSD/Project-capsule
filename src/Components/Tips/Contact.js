import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w6t4c6j', 'template_zcy508c', form.current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='contained'>
    <div className='entrnme'>
      <label>Name</label>
      <input type="text" name="user_name" />
    
      <label>Email</label>
      <input type="email" name="user_email" />
    </div>

      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
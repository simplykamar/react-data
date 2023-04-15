import React from 'react'
import './Form.css';
import { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import {useSelector} from 'react-redux';
import {motion} from 'framer-motion';

const Form = () => {
  const transition = {duration : 2.5, type: 'spring'}
  const darkmode = useSelector((state)=>state);
	const [done,setDone] = useState(false);
	const form = useRef();
	const sendEmail = (e) => {
	    e.preventDefault();

	    emailjs.sendForm('service_krwelvp', 'template_tvmviv9', form.current, 'uur7xz3AlOZarrOE5')
	      .then((result) => {
	          console.log(result.text);
	          setDone(true);
	      }, (error) => {
	          console.log(error.text);
	      });
  };
	return (
		<div className="form-wrapper">
			<div className="form-l">
				<span
        		style={{ color: darkmode ? 'white' : ''}}
				>Get in touch</span>
				<span>Contact Me</span>
				<div className="form-blur1">
									
				</div>
			</div>
			<div className="form-r">
				<form
        initial={{left:'45%'}}
        whileInView={{left:'20%'}}
        transition={{duration:3.5, type:'spring'}}
				 ref={form} onSubmit={sendEmail}>
					<input type="text" name="user_name" placeholder="Name" className="user"/>
					<input type="email" name="user_email" placeholder="Email" className="user"/>
					<textarea name="message" placeholder="Message..."></textarea>
					<div className="form-btn-container"><input type="submit" value="Send" className="btn form-btn"/></div>
					<span>{done && "Thanks for contacting me!"}</span>
				</form>
				<div className="form-blur2">

				</div>
			</div>
		</div>
		);

}

export default Form;
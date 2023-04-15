import React from 'react'
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {useLocation} from 'react-router-dom'

// import { Navigate, useNavigate } from "react-router-dom";

const EditContact = (props)=>{
		const location = useLocation();
		const {id,name,contact} = location.state.contact
		const contactData={
			id,
			name,
			contact,
		};
	const [contacts,setContact] = useState(contactData)
	 const add = (e) => {
		e.preventDefault();
		props.editContact(contacts)

	}
	
		return(
			<div className="add-contact-section">
			<div className="form-container">
				<form className="w-50" onSubmit={add}>
				<div className="d-flex justify-content-between mb-3">
					<h4 className="">Edit Contact</h4>
					<Link to="/" className="btn btn-danger">Cancel</Link>
				</div>
					<div className="form-group">
						<label>Name:</label>
						<input type="text" value={contacts.name} onChange={e=>setContact({...contacts,name:e.target.value})} placeholder="Name" className="form-control" required="true"/>
					</div>

					<div className="form-group">
						<label>Email:</label>
						<input type="email" value={contacts.contact} onChange={e=>setContact({...contacts,contact:e.target.value})} placeholder="Email" className="form-control" required="true"/>
					</div>
					<button className="btn btn-success px-4 fw-bolder">Update</button>
				</form>
			</div>
			</div>
		);
}
export default EditContact;
import CardContact from './CardContact'
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

const ContactList = (props)=>{
	const inputElement = useRef("");
	function deleteContact(id){
		props.deleteContact(id);
	}
	
	return (
		<div className="my-4 container-fluid">
		<div className="d-flex justify-content-between mb-3">
			<h4 className="">Contact List</h4>
			<form className="">
				<input ref={inputElement} type="search" className="form-control"  placeholder="search here..." onChange={(e)=>props.searchHandler(inputElement.current.value)} value={props.searchTerm}/>
			</form> 
			<Link to="/add" className="btn btn-primary">Add Contact</Link>
		</div>
			<div className="">
				<ul className="list-group list-group-flush">
				{
					props.contacts.length > 0 ?
						props.contacts.map(contact => <CardContact contact={contact} getId={deleteContact}  key={contact.id}/>)
					: <div>No contact found</div>
				}


				</ul>
			</div>
		</div>

		)
}
export default ContactList;
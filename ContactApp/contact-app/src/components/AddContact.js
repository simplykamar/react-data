import React from 'react'
import {Link} from 'react-router-dom';

class AddContact extends (React.Component){
	constructor(props){
		super(props);
		this.state={
			name:"",
			contact:"",
		};
	}
	 add = (e) => {
		e.preventDefault();
		this.props.addContactHandler(this.state)
		this.setState({name:"",contact:""});
	}
	render(){
		return(
			<div className="add-contact-section">
			<div className="form-container">
				<form className="w-50" onSubmit={this.add}>
				<div className="d-flex justify-content-between mb-3">
					<h4 className="">Add Contact</h4>
					<Link to="/" className="btn btn-danger">Cancel</Link>
				</div>
					<div className="form-group">
						<label>Name:</label>
						<input type="text" value={this.state.name} onChange={e=>this.setState({name:e.target.value})} placeholder="Name" className="form-control" required="true"/>
					</div>

					<div className="form-group">
						<label>Email:</label>
						<input type="email" value={this.state.contact} onChange={e=>this.setState({contact:e.target.value})} placeholder="Email" className="form-control" required="true"/>
					</div>
					<button className="btn btn-primary px-4 fw-bolder">Add</button>
				</form>
			</div>
			</div>
		)};
}
export default AddContact;
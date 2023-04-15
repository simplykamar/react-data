import {Link} from 'react-router-dom';
const CardContact = (props)=>{
	return (
			<li className="list-group-item contact-list-group-item">
				<div>
					<div className="fw-bold text-capitalize"><i class="fa-solid fa-2x text-secondary fa-user"></i> {props.contact.name}</div>
					<div className="text-primary text-capitalize">{props.contact.contact}</div>
				</div>
				<div>
					<span className="text-danger fw-bold" style={{cursor:"pointer"}} onClick={()=>props.getId(props.contact.id)}><i class="fa-solid fa-2x fa-trash"></i></span>
					<Link to={`/edit/${props.contact.id}`} state={{contact:props.contact}}><span className="text-warning fw-bold ms-3" style={{cursor:"pointer"}}><i class="fa-solid fa-2x fa-pen-to-square"></i></span></Link>
				</div>
			</li>

		)
}
export default CardContact;
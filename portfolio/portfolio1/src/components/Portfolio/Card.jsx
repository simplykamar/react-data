const Card = (props) => {
	return(
		<div className="card">
			<img src={props.img} alt="" className="rounded shadow-sm"/>

		</div>
		);
}
export default Card;
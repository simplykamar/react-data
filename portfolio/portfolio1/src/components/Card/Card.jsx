import './Card.css';
import {useSelector} from 'react-redux';

const Card = ({emoji,heading,detail}) => {
  const darkmode = useSelector((state)=>state);

	return (
		<div className="card-wrapper">
			<div className="card-content">
				<img src={emoji} alt="" className="card-emoji"/>
				<div
        		style={{color: darkmode ? 'white' : ''}}
				>{heading}</div>
				<div>{detail}</div>
				<button className="card-btn">LEARN MORE</button>
			</div>
		</div>
		)
}
export default Card;
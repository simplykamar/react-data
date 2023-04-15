import './FloatingDiv.css';
import {useSelector} from 'react-redux';

const FloatingDiv = ({image, txt1, txt2}) => {
  const darkmode = useSelector((state)=>state);

  return (
    <div className="floatingdiv"
    style={{
        backgroundColor: darkmode ? 'white' : '',
        color: darkmode ? 'black' : '',
      }}
    >
      <img src={image} alt="" />
      <span>
        {txt1}<br/>
        {txt2}
      </span>
    </div>
  )
}

export default FloatingDiv 

import './Services.css';
import Heartemoji from '../../../public/img/heartemoji.png';
import Humble from '../../../public/img/humble.png';
import Glasses from '../../../public/img/glasses.png';
import Card from '../Card/Card';
import {useSelector} from 'react-redux';
import {motion} from 'framer-motion';

const Services = () => {
  const darkmode = useSelector((state)=>state);
  const transition = {duration:2.5,type:'spring'}
  return (
    <div className="services-wrapper" id="Services">
      <div className="services-left">
        <div className="service-content">
          <span
        style={{color: darkmode ? 'white' : ''}}
          >My Awesome</span>
          <span>services</span>
          <span>Fronted Developer with highe level of experience in web designing
          and development, producing the Quality work</span>
      <button className="btn service-btn">Download CV</button>
        
        </div>
      </div>

      <div className="services-right">
       <div className="cards">
          <motion.div
            initial={{left:'56%'}}
            whileInView={{left:'50%'}}
            transition={transition}
           style={{right:'14rem'}}>
            <Card 
            emoji={Heartemoji}
            heading={'Frontend'}
            detail={'Bootstrap, React, Redux, Redux-Toolkit'}
             />
          </motion.div>
          <motion.div
            initial={{left:'-8%'}}
            whileInView={{left:'0%'}}
            transition={transition}
            style={{top:'10rem'}}>
            <Card 
            emoji={Glasses}
            heading={'Backend'}
            detail={'Python, Django, DRF Rest Framework, API Development'}
             />
          </motion.div>
          <motion.div
            initial={{left:'55%'}}
            whileInView={{left:'50%'}}
            transition={transition}
            style={{right:'16rem',top:'20rem'}}>
            <Card 
            emoji={Humble}
            heading={'DataBase'}
            detail={'MySQL, MongoDB'}
             />
          </motion.div>
        </div>
        <div className="blur-r">
        </div>
        <div className="blur-l">
        </div>

      </div>
    </div>
  )
}

export default Services 

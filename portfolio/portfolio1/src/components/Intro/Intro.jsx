import './Intro.css';
import Github from '../../../public/img/github.png';
import LinkedIn from '../../../public/img/linkedin.png';
import Instagram from '../../../public/img/instagram.png';
import Vector1 from '../../../public/img/Vector1.png';
import Vector2 from '../../../public/img/Vector2.png';
import Boy from '../../../public/img/boy.png';
import Thumbup from '../../../public/img/thumbup.png';
import Crown from '../../../public/img/crown.png';
import Glassesimoji from '../../../public/img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import {useSelector} from 'react-redux';
import {motion} from 'framer-motion';

const Intro = () => {
  const transition = {duration : 2.5, type: 'spring'}
  const darkmode = useSelector((state)=>state);

  return (
    <div className="intro-wrapper">
      <div className="intro-left">
        <div className="intro-content">
        <span 
        style={{color: darkmode ? 'white' : ''}}
        >Hey! I Am</span>
        <span>Kamar Alam</span>
        {/* <span>Fronted Developer with highe level of experience in web designing */}
        {/* and development, producing the Quality work</span> */}
        <span>I am a Full Stack Fresher Software Engineer from Agra, INDIA. I have currently
         not any IT experience, But I have a Experience of 4 web Based live Django project.</span>
        </div>
      <button className="btn intro-btn">Hire me</button>
      <div className="intro-icons">
        <img src={Github} />
        <img src={LinkedIn} />
        <img src={Instagram} />
      </div>
      </div>

      <div className="intro-right">
        <img src={Vector1} alt=""/>
        <img src={Vector2} alt=""/>
        <img src={Boy} alt="" />
        <motion.img
        initial={{left:'-36%'}}
        whileInView={{left:'-26%'}}
        transition={transition}
         src={Glassesimoji} alt="" style={{transform:'scale(.5)',top:'-10%'}}/>
        <motion.div
         initial={{right:'1%'}}
         whileInView={{right:'8%'}}
         transition={transition}
          style={{right:'0'}}>
          <FloatingDiv image={Crown} txt1="Web" txt2="apple" />
        </motion.div>
        <motion.div
         initial={{left:'-10%'}}
         whileInView={{left:'-0%'}}
         transition={transition}
          style={{bottom:'20%'}}>
          <FloatingDiv image={Thumbup} txt1="Best Design" txt2="mango" />
        </motion.div>
        <div className="blur1">

        </div>
        <div className="blur2">

        </div>
      </div>
    </div>
  )
}

export default Intro 

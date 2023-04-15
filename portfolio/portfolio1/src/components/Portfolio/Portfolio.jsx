import './Portfolio.css';
import Sidebar from '../../../public/img/sidebar.png';
import Ecommerce from '../../../public/img/ecommerce.png';
import MusicApp from '../../../public/img/musicapp.png';
import HOC from '../../../public/img/hoc.png';
import {Swiper,SwiperSlide} from 'swiper/react';
import {FreeMode} from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import Card from './Card';
import {useSelector} from 'react-redux';

const Portfolio = () => {
  const darkmode = useSelector((state)=>state);

  return (
    <div className="portfolio" id="Portfolio">
    <div className=" portfolio-content">
    	<span
        style={{color: darkmode ? 'white' : ''}}
      >Recent Project</span>
    	<span>Portfolio</span>
    	</div>
      <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="mySwiper"
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            0:{
              slidesPerView:1,
              spaceBetween:10,
            },
            480:{
              slidesPerView:2,
              spaceBetween:10,
            },
            768:{
              slidesPerView:3,
              spaceBetween:10,
            },
            1024:{
              slidesPerView:4,
              spaceBetween:15,
            },
            1280:{
              slidesPerView:4,
              spaceBetween:30,
            },
          }}
          >
          <SwiperSlide>
            <Card img={Ecommerce}/>
          </SwiperSlide>
          <SwiperSlide>
            <Card img={MusicApp}/>
          </SwiperSlide>
          <SwiperSlide>
            <Card img={HOC}/>
          </SwiperSlide>
          <SwiperSlide>
            <Card img={Ecommerce}/>
          </SwiperSlide>
          <SwiperSlide>
            <Card img={MusicApp}/>
          </SwiperSlide>
          <SwiperSlide>
            <Card img={HOC}/>
          </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio 

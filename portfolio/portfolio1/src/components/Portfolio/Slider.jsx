import {Swiper,SwiperSlide} from 'swiper/react';
import {FreeMode} from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import Card from './Card';


import Ecommerce from '../../../public/img/ecommerce.png';
import MusicApp from '../../../public/img/musicapp.png';
import HOC from '../../../public/img/hoc.png';

const Slider = () => {
  return (
      <div className="  ">
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="mySwiper"
          slidesPerView={3}
          spaceBetween={30}
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
    );
}


export default Slider;
import React from 'react';
import useFetch from '../../hooks/useFetch';
import SkeletonLoder from '../Loader/SkeletonLoder'


const Slider = () => {
  const {data, loading, error} = useFetch("/slider-imgs?populate=*");
  console.log(data);
  if (data)
    {
      console.log(data[0].attributes.img.data.attributes.url)
	 }
  return <div>
		    	<div id="homeSlider" className="carousel slide carousel-fade" data-bs-ride="carousel">
          
  <div className="carousel-inner">
  { data?
         <div className="carousel-item active">
             <img src={process.env.REACT_APP_UPLOAD_URL+data[0]?.attributes?.img?.data?.attributes?.url} className="d-block w-100" height="550" alt="..."/>
           </div>
      :<SkeletonLoder/>
    }
    { data?      
      data.slice(1).map((item)=>{
        return (
        <div className="carousel-item" key={item.id}>
         <img src={process.env.REACT_APP_UPLOAD_URL+item?.attributes?.img?.data?.attributes?.url} className="d-block w-100" height="550" alt="..."/>
       </div>
          )
      })
    :<SkeletonLoder/>
    }

    

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#homeSlider" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#homeSlider" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
		</div>
}

export default Slider;
import React from 'react';
import './Category.css';
import useFetch from '../../hooks/useFetch';
import {Link} from 'react-router-dom';
import SkeletonLoder from '../Loader/SkeletonLoder'


const Category = () => {
	const {data:categories,error,loading} = useFetch("/categories?populate=*");
	console.log(categories)
	return <div className="container-fluid mt-5">
			{/* <div className="row"> */}
			{/* 	<div className="col-lg-3 col-md-3 col-sm-6 col-12"> */}
			{/* 		<div className="inner"> */}
			{/* 			<img src="../../img/home_slider_2.jpg" className="img-fluid" /> */}
			{/* 			<button className="btn btn-outline-light fw-bold px-4 category-btn">Men</button> */}
			{/* 		</div> */}
			{/* 	</div> */}
			{/* 	<div className="col-lg-3 col-md-3 col-sm-6 col-12"> */}
			{/* 		<div className="inner"> */}
			{/* 			<img src="../../img/home_slider_1.jpg" className="img-fluid" /> */}
			{/* 			<button className="btn btn-outline-light px-4 category-btn">Men</button> */}
			{/* 		</div> */}
			{/* 	</div> */}
			{/* 	<div className="col-lg-3 col-md-3 col-sm-6 col-12"> */}
			{/* 		<div className="inner"> */}
			{/* 			<img src="../../img/home_slider_3.jpg" className="img-fluid" /> */}
			{/* 			<button className="btn btn-outline-light px-4 category-btn">Men</button> */}
			{/* 		</div> */}
			{/* 	</div> */}
			{/* 	<div className="col-lg-3 col-md-3 col-sm-6 col-12"> */}
			{/* 		<div className="inner"> */}
			{/* 			<img src="../../img/home_slider_1.jpg" className="img-fluid" /> */}
			{/* 			<button className="btn btn-outline-light px-4 category-btn">Men</button> */}
			{/* 		</div> */}
			{/* 	</div> */}
			{/* </div> */}

			<div className="row mt-4">
				{ categories?
				categories.map((category)=>{
					return(
							<div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-5" key={category.id}>
						<Link to={`/products/${category.id}`}>
								<div className="inner shadow h-100">
									<img src={process.env.REACT_APP_UPLOAD_URL+category.attributes.img.data.attributes.url} className="img-fluid" />
										<button className="btn btn-outline-light px-4 category-btn fw-bolder text-capitalize">{category.attributes.title}</button>
								</div>
						</Link>
							 </div>
						)
				})
				
				:<SkeletonLoder/>
			}
			</div>

		</div>
}

export default Category;
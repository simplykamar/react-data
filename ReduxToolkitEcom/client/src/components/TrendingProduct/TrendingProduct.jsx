import React from 'react';
import Card from '../Card/Card';
const TrendingProduct = () => {
	const data = [
		{
		id:1,
		img1:"../../../img/home_slider_1.jpg",
		img2:"../../../img/featured_product_hover.jpg",
		title:"long sleeve tshirt",
		isNew:true,
		oldPrice:19,
		price:12,
		},
		{
		id:2,
		img1:"../../../img/home_slider_2.jpg",
		img2:"../../../img/featured_product_hover.jpg",
		title:"long sleeve tshirt",
		isNew:true,
		oldPrice:19,
		price:12,
		},
		{
		id:3,
		img1:"../../../img/home_slider_3.jpg",
		img2:"../../../img/featured_product_hover.jpg",
		title:"long sleeve tshirt",
		isNew:true,
		oldPrice:19,
		price:12,
		},
		{
		id:4,
		img1:"../../../img/featured_product.jpg",
		img2:"../../../img/featured_product_hover.jpg",
		title:"long sleeve tshirt",
		isNew:true,
		oldPrice:19,
		price:12,
		},
	]
	return <div className="container">
			<div className="row mt-5">
				<div className="col-lg-6 col-md-6 col-sm-12 col-12">
					<h2 className="">Trending Products</h2>
				</div>

			<div className="col-lg-6 col-md-6 col-sm-12 col-12">
					<p>kamar shopkamar shopkamar shopkamar shopkamar shopkamar shop
						kamar shopkamar shopkamar shopkamar shopkamar shopkamar shopkamar shop
						</p>
				</div>
			</div>
			<div className="row my-5">
				{
				data.map((product)=>{
					return <div className="col-lg-3 col-md-3 col-sm-12 col-12" key={product.id}>
							<Card item={product} />
						</div>
				})
				}
			</div>
		</div>
}

export default TrendingProduct;
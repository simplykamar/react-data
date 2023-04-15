import React from 'react';
import List from '../../components/List/List';
import {useState} from 'react';
import {useParams} from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import MyLoader from '../../components/Loader/Loader'
import SkeletonLoder from '../../components/Loader/SkeletonLoder'


const Products = () => {
	const catId = 	parseInt(useParams().id);
	const [sort,setSort] = useState("asc");
	const [maxPrice,setMaxPrice] = useState(4000);
	const [selectedSubCat,setSelectedSubCat] = useState([]);
	const {data,error,loading} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`);
	const {data:category} = useFetch(`/categories/${catId}?populate=*`);
	const handleChange = (e) => {
		const value = e.target.value;
		const isChecked = e.target.checked;
		setSelectedSubCat(
			isChecked ? [...selectedSubCat,value]: selectedSubCat.filter((item)=>item!==value)
			);
	}

	return <div className="container-fluid">
			<div className="row mt-4">
				<div className="col-lg-3 col-md-3 col-sm-12 col-12 h-100 sticky-top ">
					<div className="">
						<h4>Product Categories</h4>
						{data?
							data.map((item)=>{
								return(
								<div className="form-check" key={item.id}>
									<input type="checkbox" id={item.id} value={item.id} className="form-check-input" onChange={(e)=>handleChange(e)} />
									<label className="form-check-label">{item.attributes.title}</label>
								</div>
									)
							})
						:<MyLoader/>
							
						}
					</div>
					<div className="my-3">
						<h4>Filter by price</h4>
						<div className="form-check p-0">
							<span>0</span>
								<input type="range" className="form-range w-50 pt-2" min={0} max={4000} step="50" value={maxPrice} onChange={(e)=>{setMaxPrice(e.target.value)} } />
							<span>{maxPrice}</span>
						</div>
					</div>
					<div className="">
						<h4>Sort by</h4>
						<div className="form-check">
							<label className="form-check-label">Price(Lowest First)</label>
							<input type="radio" name="price" value="" onChange={()=>{setSort("asc")}} className="form-check-input"/>
						</div>
						<div className="form-check">
							<label className="form-check-label">Price(Highest First)</label>
							<input type="radio" name="price" value="" onChange={()=>{setSort("desc")}} className="form-check-input"/>
						</div>
					</div>
				</div>
				<div className="col-lg-9 col-md-9 col-sm-12 col-12">
					
					{category?
					// <img src={process.env.REACT_APP_UPLOAD_URL+category.attributes.img.data.attributes.url} alt="category-img" className="img-fluid h-50 rounded " />
						<div>
							<h2 className="text-capitalize">{category.attributes.title}</h2>
							<hr className="w-25"/>
						</div>

					:<SkeletonLoder/>
					}	
						<List catId={catId} maxPrice={maxPrice} sort={sort} subCat={selectedSubCat} />
				</div>
			</div>
		</div>
}

export default Products;
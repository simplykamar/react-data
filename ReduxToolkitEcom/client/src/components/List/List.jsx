import React from 'react';
import Card from '../Card/Card';
import './List.css';
import useFetch from '../../hooks/useFetch'
import {Link} from 'react-router-dom';
import MyLoader from '../../components/Loader/Loader'

const List = ({subCat, maxPrice, sort, catId}) => {
	const {data,loading,error} = useFetch(`/products?populate=*&[filters][categories][id]=${catId}${subCat.map(
			(item)=>`&[filters][sub_categories][id][$eq]=${item}`)}
			&[filters][price][$lte]=${parseInt(maxPrice)}
			&sort=price:${sort}
			`)
	console.log(data)
	return (
			<div className="row my-4">
				{ data?
					data.map((item)=>{
						return(
								<div className="col-lg-3 col-md-3 col-sm-6 col-12 mb-5" key={item.id}>
								<Link to={`/product/${item.id}`} className="text-dark text-decoration-none">
									<Card item={item}/>
								</Link>
								</div>
							)
					})
					:<MyLoader/>
				}
			</div>
			);
		
}

export default List;
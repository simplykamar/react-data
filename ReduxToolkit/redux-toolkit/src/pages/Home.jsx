import React from 'react';
import Products from '../components/Products'
const Home = () => {
	return (
		<div>
			<h1 className="display-4">Welcome to the Redux toolkit store</h1>
			<section>
				<h4 className="">Products</h4>
				<Products/>
			</section>
		</div>
		);
}

export default Home;
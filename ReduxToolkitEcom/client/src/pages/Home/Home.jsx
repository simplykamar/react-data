import React from 'react';
import Slider from '../../components/Slider/Slider';
import FeaturedProduct from '../../components/FeaturedProduct/FeaturedProduct'
import Contact from '../../components/Contact/Contact'
import Category from '../../components/Category/Category'
import TrendingProduct from '../../components/TrendingProduct/TrendingProduct'

const Home = () => {
	return <div>
			<Slider/>
			<FeaturedProduct typed="trending" />
			<FeaturedProduct typed="featured" />
			<Category/>
			<Contact/>
			
		</div>
}

export default Home;
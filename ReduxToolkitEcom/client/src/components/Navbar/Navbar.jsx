import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import Cart from '../Cart/Cart';
import {useSelector} from 'react-redux';

const Navbar = () => {
  const data = useSelector((state)=>state.cart.products);
  // const totalItems = data.reduce((item,sum)=>sum+item.quantity);
  // console.log(totalItems);
  const [ open, setOpen ] = useState(false);
	return <div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom">
  <div className="container-fluid">
    <span className="cursor-pointer">
      <img src="../../img/flag.png" className="" width="25" height="20" />
      <KeyboardArrowDownIcon/>
    </span>
    {/* <a className="navbar-brand ms-3" href="#">KAMARSTORE</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link fw-bold" to="/">IND <KeyboardArrowDownIcon/></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products/1">Men</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products/2">Women</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products/3">Accessories</Link>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/home">Homepage</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Store</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/"><SearchIcon/></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/"><PermIdentityIcon/></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/"><FavoriteBorderIcon/></Link>
        </li>
        <li className="nav-item cursor-pointer" onClick={()=>setOpen(!open)}>
            <div className="nav-link"><ShoppingCartOutlinedIcon/><span className="badge bg-violet rounded-pill">{data.length}</span></div>
        </li>
      </ul>


    </div>
  </div>
</nav>
      {
        open && <Cart/> 
     }
		</div>
}

export default Navbar;
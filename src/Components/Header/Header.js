import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav className='header'>
			<img src={logo} alt=""></img>
			<div>
				<NavLink to="./">Shop</NavLink>
				<NavLink to="./orders">Order</NavLink>
				<NavLink to="./about">About</NavLink>
				<NavLink to="./inventory">Inventory</NavLink>
				<NavLink to="./login">Login</NavLink>
			</div>
    </nav>
  );
};

export default Header;
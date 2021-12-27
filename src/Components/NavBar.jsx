import React, { useState } from 'react';
import {Link} from 'react-scroll';
import logo from '../image/logo1.png';
import './index.css';
const Navbar=()=>{

    const[nav,setnav]=useState(false);
    const changeBackground=()=>{
        if(window.scrollY>=50){
            setnav(true);
        }else{
            setnav(false);
        }
    }
    window.addEventListener('scroll',changeBackground);

    return(
        <nav className={ nav ? "nav active":"nav"}>
            <Link to="main" className="logo" smooth={true} duration={2000}>
                <img src={logo} alt='lpgo'/>
            </Link>
            <input className='menu-btn' type="checked" id="menu-btn" />
            <label className="menu-icon" for="menu-btn">
                <span className="nav-icon"/>
            </label>
            <ul className="menu">
                <li><Link t0="main" smooth={true} duration={2000} >Header</Link></li>
                <li><Link t0="products" smooth={true} duration={2000}>Menu</Link></li>
                <li><Link t0="about" smooth={true} duration={2000}>About</Link></li>
                <li><Link t0="contact" smooth={true} duration={2000}>Contact</Link></li>
            </ul>
        </nav>
    );
}
export default Navbar;
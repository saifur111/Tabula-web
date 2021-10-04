import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
import img from '../images/ia_100000001.png';


const Header = () => {
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <img className='ms-3 img-size' src={img} alt="" />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                <div className="collapse navbar-collapse mx-lg-5" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 me-2 mb-lg-0">
                        <NavLink to='/home' className="nav-item linkstyle-none"><span className='nav-link '>Home</span></NavLink >
                        <NavLink to='/about' className="nav-item linkstyle-none"><span className='nav-link'>Abouts</span></NavLink >
                        <NavLink to='/programs' className="nav-item linkstyle-none"><span className='nav-link '>Programs</span></NavLink >
                        <NavLink to='/blog' className="nav-item linkstyle-none"><span className='nav-link'>Blog</span></NavLink >
                        <NavLink to='/shop' className="nav-item linkstyle-none"><span className='nav-link'>Shop</span></NavLink >
                        <NavLink to='/elements' className="nav-item linkstyle-none"><span className='nav-link'>Elements</span></NavLink >
                    </ul>
                    <div className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="button">Search</button>
                    </div>
                </div>
                </div>
            </nav>
            
        </div>
    );
};

export default Header;
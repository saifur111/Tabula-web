import React from 'react';
import '../home/home.css';
import imgbg from '../../images/ia_100000015.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Blogsall from './Blogsall';
import { NavLink } from 'react-router-dom';

const Blog = () => {
    const [courses, setCourses] = useState([]);
    const [displayCourses, setDisplayCourse] = useState([]);

    useEffect(() => {
        fetch(`./data.json`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCourses(data);
                setDisplayCourse(data);
            });
    }, []);
    return (
        <div>
            <div style={{ backgroundImage: `url(${imgbg})` }} className="header-bg my-3">
                <div className="container py-lg-5">
                <h1 style={{fontFamily:'Arizonia'}} className="mx-lg-5 mt-5  pt-5">
                <span className="sizelets">
                    <span>Our Blogs</span>
                    </span>
                </h1>
                <h1 style={{fontFamily:'Arizonia'}} className="mx-lg-5">
                <span className="size">
                    <span>Welcome Blog Page</span>
                    </span>
                </h1>
                </div>
            </div>
            
            <div className="row">
                <div className="col-8 main_root justify-content-center">
                            {
                                displayCourses.map(cr => <Blogsall
                                    key={cr.key}
                                    course={cr}
                                >
                                </Blogsall>)
                            }
                </div>
                
                <div className="col-4">
                    <ul className="navbar-nav me-auto mb-2 me-2 mb-lg-0">
                        <NavLink to='/home' className="nav-item linkstyle-none"><span className='nav-link '>Home</span></NavLink >
                        <NavLink to='/about' className="nav-item linkstyle-none"><span className='nav-link'>Abouts</span></NavLink >
                        <NavLink to='/programs' className="nav-item linkstyle-none"><span className='nav-link '>Programs</span></NavLink >
                        <NavLink to='/blog' className="nav-item linkstyle-none"><span className='nav-link'>Blog</span></NavLink >
                        <NavLink to='/shop' className="nav-item linkstyle-none"><span className='nav-link'>Shop</span></NavLink >
                        <NavLink to='/elements' className="nav-item linkstyle-none"><span className='nav-link'>Elements</span></NavLink >
                    </ul>
                </div>
            </div>
            
        </div>
    );
};

export default Blog;
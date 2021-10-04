import React from 'react';
//import Sidebar from './Sidebar';
import Main from '../Main';
import './home.css';
import imgbg from '../../images/ia_100000062.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

const Home = () => {

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
        <>
            <div style={{ backgroundImage: `url(${imgbg})` }} className="header-bg">
                <div className="container py-lg-5">
                <h1 style={{fontFamily:'Arizonia'}} className="mx-lg-5 mt-5  pt-5">
                <span className="sizelets">
                    <span>Let's</span>
                    </span>
                </h1>
                <h1 style={{fontFamily:'Arizonia'}} className="mx-lg-5">
                <span className="size">
                    <span>Dance</span>
                    </span>
                </h1>
                <button type='button' className="btn  mx-lg-5 btnsize">APPLY TODAY</button>
                </div>
            </div>
            <div className="container text-center ">
                    <div className="search-container justify-content-center d-flex my-4">
                        <input variant="outline-success" className="text-center"
                        type="text"
                        placeholder="Search Courses" />   
                    </div>
                    <div className="main_root">
                        {
                            displayCourses.slice(0,4).map(cr => <Main
                                key={cr.key}
                                course={cr}
                            >
                            </Main>)
                        }
                    </div>
                    <div >
                      {/* <Sidebar cart={cart}></Sidebar> */}
                    </div>
            </div>
        </>
    );
};

export default Home;
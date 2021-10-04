import React from 'react';
import Main from '../Main';
import { useEffect, useState } from 'react';
import imgbg from '../../images/ia_100000002717.jpg';
import '../home/home.css';

const Programs = () => {
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
                    <span>Let's See Our</span>
                    </span>
                </h1>
                <h1 style={{fontFamily:'Arizonia'}} className="mx-lg-5">
                <span className="size">
                    <span>PROGRAMES</span>
                    </span>
                </h1>
                <button type='button' className="btn  mx-lg-5 btnsize bordered rounded">APPLY TODAY</button>
            </div>
        </div>
        <div className="container">
            <div className="d-flex">

            </div>
            <div className="row justify-content-center m-2">
            {
                displayCourses.map(cr => <Main
                    key={cr.key}
                    course={cr}
                >
                </Main>)
            }
            </div>
        </div>
        </>
    );
};

export default Programs;
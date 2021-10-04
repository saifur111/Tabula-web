import React from 'react';
//import Sidebar from './Sidebar';
import Main from './Main';
import imgbg from '../../images/ia_100000062.jpg';
import { Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {addToDb,getStoredCart} from '../chefdb';
import { useEffect, useState } from 'react';

const Home = () => {

    const [courses, setCourses] = useState([]);
        //const [cart, setCart] = useState([]);
        const [displayCourses, setDisplayCourse] = useState([]);
    
        useEffect(() => {
            fetch('../../data.JSON')
                .then(res => res.json())
                .then(data =>
                    {setCourses(data);
                    setDisplayCourse(data);
                }
            );
        }, []);
    
        // useEffect(() => {
        //     if (courses.length) {
        //         const savedCart = getStoredCart();
        //         const storedCart = [];
        //         for (const key in savedCart) {
        //             const addedPerson = courses.find(chef => course.key === key);
        //             if (addedPerson) {
        //                 const quantity = savedCart[key];
        //                 addedPerson.quantity = quantity;
        //                 storedCart.push(addedPerson);
        //             }
        //         }
        //         setCart(storedCart);
        //     }
        // }, [courses])
    
        // const handleAddToCart = chef => {
        //     const newCart = [...cart, chef];
        //     setCart(newCart);
        //     // save to local storage 
        //     addToDb(chef.key);

        // }
    
        // const handleSearch = event => {
        //     const searchText = event.target.value;
        //     const matchedCourse = courses.filter(cr => cr.name.toLowerCase().includes(searchText.toLowerCase()));
        //     setDisplayCourse(matchedCourse);
        // }
    
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
            <Row className="chef-container container text-center ">
                    <Col sm={8}>
                    <div className="chef_root">
                        {
                            displayCourses.map(cr => <Main
                                key={cr.key}
                                course={cr}
                                //handleAddToCart={handleAddToCart}
                            >
                            </Main>)
                        }
                    </div>
                    </Col>
                    <Col sm={4}>
                      {/* <Sidebar cart={cart}></Sidebar> */}
                    </Col>
            </Row>
        </>
    );
};

export default Home;
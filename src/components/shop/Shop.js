import React from 'react';
import '../home/home.css';
import imgbg from '../../images/ia_100001735.png';

const Shop = () => {
    return (
        <div style={{ backgroundImage: `url(${imgbg})` }} className="header-bg my-2">
            <div className="container py-lg-5">
                <h1 style={{fontFamily:'Arizonia'}} className="mx-lg-5 mt-5  pt-5">
                <span className="sizelets">
                    <span>Buy Now</span>
                </span>
                </h1>
                <h1 style={{fontFamily:'Arizonia'}} className="mx-lg-5">
                <span className="size">
                    <span>Shop Page</span>
                </span>
                </h1>
                <h5 className="mx-lg-5"><p>Please Buy Somethings.</p></h5>
                <button type='button' className="btn  mx-lg-5 btnsize">APPLY TODAY</button>
            </div>
        </div>
    );
};

export default Shop;
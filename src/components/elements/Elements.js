import React from 'react';
import '../home/home.css';
import imgbg from '../../images/ia_100000064.jpg';

const Elements = () => {
    return (
            <div style={{ backgroundImage: `url(${imgbg})` }} className="header-bg">
                <div className="container py-lg-5">
                <h1 style={{fontFamily:'Arizonia'}} className="mx-lg-5 mt-5  pt-5">
                <span className="sizelets">
                    <span>Hi.Please See Our</span>
                    </span>
                </h1>
                <h1 style={{fontFamily:'Arizonia'}} className="mx-lg-5">
                <span className="size">
                    <span>Elements Page</span>
                    </span>
                </h1>
                <button type='button' className="btn  mx-lg-5 btnsize">APPLY TODAY</button>
                </div>
            </div>
    );
};

export default Elements;
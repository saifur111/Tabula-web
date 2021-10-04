import React from 'react';
import './footer.css';
import imgbg from '../images/ia_100000002711.jpg';

const Footer = () => {
    return (
        <div style={{ backgroundImage: `url(${imgbg})` }} className="fot-img">


        <div className='container'>
            <div className='d-flex justify-content-between py-5'>
                <div>
                    <h4><span>Contact us</span></h4>
                    <h6>
                        <span><i className="fas fa-map-marker-alt hov"></i></span>
                        <span>PO BOX Collins Street West</span>
                    </h6>
                    <h6>
                        <span ><i className="fas fa-phone hov"></i></span>
                        <span>+2342 5446 67</span>
                    </h6>
                    <h6>
                        <span><i className="fas fa-clock hov"></i></span>
                        <span>Monday - Friday: 12pm - 8pm</span>
                    </h6>
                    <div className='d-felx justify-content-between me-3 py-2 '>
                        <span><i className="fab fa-facebook-square p-2 hov"></i></span>
                        <span><i className="fab fa-youtube p-2 hov"></i></span>
                        <span><i className="fab fa-instagram p-2 hov"></i></span>
                        <span><i className="fab fa-linkedin-in p-2 hov"></i></span>

                    </div>
                </div>
                <div>
                    <h4><span>Quick Links</span></h4>
                    <h6><span>Home</span></h6>
                    <h6><span>Blog</span></h6>
                    <h6><span>Contact</span></h6>
                    <h6><span>Shop</span></h6>
                </div>
                <div>
                    <h4><span>About Us</span></h4>
                    <h6><span>Abouts</span></h6>
                    <h6><span>History</span></h6>
                    <h6><span>Programs</span></h6>
                    <h6><span>Schedule</span></h6>
                </div>
                <div className="text-center" >
                    <h4><span>Newsletter</span></h4>
                    <div className="my-2 text-center">
                        <input className="text-center btnsi" type="text" placeholder='Email' />
                    </div>
                    <button className='btnsi'>SUSCRIBE</button>
                </div>
            </div>                       
        </div>
    </div>
    );
};

export default Footer;
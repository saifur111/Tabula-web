import React from 'react';
import '../home/home.css';
import '../../topbar/header.css';


const Blogsall = (props) => {
    const {course_title,discription,img,price,rating} = props.course;
    return (
        <div className="d-flex w-60">
            <div className=" containercard h-100 shadow-lg p-3 rounded">
                  <img className="img-fluid img-si" variant="top" src={img} alt="" />
                  <div className="container">
                        <div><h6 className="card-title main_name fw-bold text-center mt-3">{course_title}</h6></div>
                        <div className="list-group-flush font">
                            <p className='fonts'><small>Details : {discription}</small></p>
                            <p className='fonts'>Total Cost: <span>$</span> {price}</p>
                        </div>
                </div>
            </div>
        </div>
          
  );
};

export default Blogsall;
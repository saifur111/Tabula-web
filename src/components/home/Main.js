import React from 'react';
//import Rating from 'react-rating';

const Main = (props) => {
    const {course_title,discription,img,price,rating} = props.course;
    return (
          <div className="card h-100 shadow-lg p-3 rounded">
                  <img className="card_body card-img-top img-fluid m-0 p-0" variant="top" src={img} alt="" />
                  <div>
                        <div><h6 className="card-title fw-bold text-center mt-3">{course_title}</h6></div>
                        <div className="list-group-flush font">
                            <p><small>Details : {discription}</small></p>
                            {/* <p>Rating : <Rating initialRating={rating}
                          emptySymbol="far fa-star icon-color"
                          fullSymbol="fas fa-star icon-color"
                          readonly>
                            </Rating></p> */}
                          
                            <p>Total Cost: {price}</p>
                        </div>
                        <div className="card-footer d-grid">
                                <button  onClick={() => {props.handleAddToCart(props.course)
                          window.location.reload(false)}} className="btn btn-primary my-2  btn-fr">
                            <i className="fas fa-course"></i> {' '}ADD COURSE</button>
                    </div>
                </div>
          </div>
  );
};

export default Main;
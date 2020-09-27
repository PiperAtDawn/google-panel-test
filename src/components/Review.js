import React from 'react';
import './Review.scss';

function Review ({review}) {
    return (
      <div className="review">
          <span>{review.name}</span>
          <br/>
          <span>{review.totalReviews} reviews</span>
          <br/>
          <span>{review.rating} stars</span>
          <span>{review.time}</span>
          <br/>
          <p>{review.text}</p>
      </div>
    );
  }
  
  export default Review;
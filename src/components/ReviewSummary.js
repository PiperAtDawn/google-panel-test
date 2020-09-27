import React from 'react';
import './ReviewSummary.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

function ReviewSummary ({ratings}) {

    const ratingAmount = (i) => {
        const amount = ratings.filter(rating => rating === i);
        return amount.length;
    }

    const ratingAverage = () => {
        let sum = 0;
        ratings.forEach(rating => sum = sum+rating);
        let average = sum / ratings.length;
        average = Math.round(average * 10)/10;
        return average;
    }

    return (
      <div className="review-summary">
          <h2>Review summary</h2>
          <div className="ratings">
            <div className="ratings-chart">
                    <p>5: {ratingAmount(5)}</p>
                    <p>4: {ratingAmount(4)}</p>
                    <p>3: {ratingAmount(3)}</p>
                    <p>2: {ratingAmount(2)}</p>
                    <p>1: {ratingAmount(1)}</p>
            </div>
            <div className="ratings-average">
                <span>{ratingAverage()}</span>
                <br/>
                <span>{ratings.length} reviews</span>
            </div>
        </div>
        <button className="add-review-btn"><FontAwesomeIcon icon={faComment} style={{color: "blue"}}/>Add a review</button>
      </div>
    );
  }
  
  export default ReviewSummary;